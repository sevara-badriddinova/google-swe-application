# google-swe-application
# Apply Button Watcher

A tiny Google Apps Script that watches a job listing page and emails you the moment the Apply button goes live.

Built this because a job I wanted got posted before the Apply button was actually clickable, and refreshing the page every 20 minutes felt like a bad use of my time.

## How it works

1. A time-driven trigger runs `checkApplyButton()` every 5 minutes
2. It fetches the job page's HTML
3. It checks for the Apply button by its element id
4. If found, it emails you once and stops checking

## Setup

1. Go to [script.google.com](https://script.google.com) and create a new project
2. Paste in `apply_button_watcher.gs`
3. Update the config at the top of the file: your job URL, your email, and the job title
4. Click Run once on `checkApplyButton` to trigger Google's permission prompt, then approve it
5. In the left sidebar, click the clock icon (Triggers), then Add Trigger
6. Set function to `checkApplyButton`, event source to Time-driven, type to Minutes timer, interval to every 5 minutes
7. Save

That's it. It runs in the background on Google's servers and emails you once the button appears.

To watch a different job later, run `resetNotificationFlag()` once to clear the flag, then update `JOB_URL` and rerun the setup.
