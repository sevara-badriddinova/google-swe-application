// config
const JOB_URL = "https://www.google.com/about/careers/applications/jobs/results/78703249065943750-software-engineer-early-career-campus";
const NOTIFY_EMAIL = "ENTER YOUR EMAIL";
const JOB_TITLE = "Software Engineer, Early Career (Google Careers)";

function checkApplyButton() {
  const props = PropertiesService.getScriptProperties();
  const alreadyNotified = props.getProperty('notified') === 'true';

  // don't bother checking again once we've already sent the email
  if (alreadyNotified) {
    return;
  }

  let html;
  try {
    const response = UrlFetchApp.fetch(JOB_URL, {
      muteHttpExceptions: true,
      followRedirects: true
    });
    html = response.getContentText();
  } catch (e) {
    Logger.log("Fetch failed: " + e);
    return;
  }

  // the id is what actually shows up when the button goes live, aria-label is a backup check
  const hasApplyButton =
    html.includes('id="apply-action-button"') ||
    html.includes('aria-label="Apply"');

  if (hasApplyButton) {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "Apply button is live: " + JOB_TITLE,
      body: "The Apply button just appeared on this job listing:\n\n" + JOB_URL + "\n\nGo apply now."
    });
    props.setProperty('notified', 'true');
    Logger.log("Apply button found, email sent.");
  } else {
    Logger.log("Apply button not found yet.");
  }
}

// run this manually if you want to start watching again after a reset
function resetNotificationFlag() {
  PropertiesService.getScriptProperties().deleteProperty('notified');
}