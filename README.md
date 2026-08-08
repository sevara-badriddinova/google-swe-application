# Apply Button Watcher

A lightweight Google Apps Script that periodically checks a public job listing and emails you when the Apply button becomes available.

I built this after a job I wanted was posted before applications were actually open. Instead of manually refreshing the page, I automated the check.

## How It Works

1. A time-driven trigger runs `checkApplyButton()` periodically
2. The script fetches the public job listing HTML
3. It checks whether the Apply button is available
4. If detected, it sends one email notification
5. After notifying you, it stops sending additional alerts

## Setup

1. Go to [script.google.com](https://script.google.com) and create a new project
2. Paste in `apply_button_watcher.gs`
3. Update the configuration at the top of the file:

   * Job listing URL
   * Email address
   * Job title
4. Run `checkApplyButton()` once to trigger the Google Apps Script permission prompt and approve the required permissions
5. Open **Triggers** from the left sidebar
6. Add a new time-driven trigger for `checkApplyButton`
7. Choose how frequently you want the script to check the page
8. Save the trigger

The script then runs automatically through Google Apps Script and sends a single email when the application becomes available.

## Watching Another Job

To reuse the script for another listing:

1. Run `resetNotificationFlag()` once
2. Update `JOB_URL` and the other configuration values
3. Run `checkApplyButton()` once to verify the new configuration

## Responsible Use

This project is intended for low-frequency monitoring of publicly accessible pages.

It does not submit applications, authenticate on a user's behalf, bypass access controls, or attempt to circumvent rate limits or other protections.

When adapting it to another website, make sure your usage complies with that site's terms, automated-access policies, and machine-readable instructions.

## Why I Built It

This is intentionally a small project. The goal was simply to replace a repetitive manual task with a lightweight automation that required no dedicated server or paid infrastructure.
