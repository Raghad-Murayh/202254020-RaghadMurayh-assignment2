# AI Usage Report

## AI Tool Used

I used ChatGPT (GPT-5.6 Sol) while developing Assignment 2.

## Usage Log

| ID  | Tool (Model)          | Date       | Purpose                                                                                                                                                                 | Files Affected                          | What I Changed and How I Verified It                                                                                                                                                                                                                                                                                       |
| --- | --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C01 | ChatGPT (GPT-5.6 Sol) | 2026-10-19 | Help with understanding and implementing the interactive features required for Assignment 2, including theme persistence, project filtering, and contact form feedback. | `index.html`, `styles.css`, `script.js` | I reviewed and modified the AI suggestions to fit my existing portfolio. I changed the suggested project filter buttons into a dropdown menu, kept my existing HTML form validation instead of adding duplicate JavaScript validation, and modified the contact form implementation. I tested each feature in the browser. |

## How I Used AI

I used ChatGPT to help me understand the Assignment 2 requirements and implement interactive features in my existing portfolio.

### Theme Preference

My Assignment 1 portfolio already had a light and dark mode feature. ChatGPT suggested using `localStorage` so the browser could remember the user's selected theme.

I added the suggested functionality to save the selected theme as either `dark` or `light` and retrieve it when the page loads.

I tested this by selecting dark mode and refreshing the page to verify that it remained dark. I repeated the same test with light mode.

### Project Filtering

ChatGPT suggested adding project filtering as a dynamic-content feature. It explained how categories could be assigned to projects using HTML data attributes and how JavaScript could compare a selected filter with each project's category.

The original suggestion used separate buttons for the project filters. I changed this to a dropdown menu because I preferred having one simple control for selecting between All Projects, Web Projects, and Database Projects.

I adapted the JavaScript to read the selected dropdown value and compare it with each project's `data-category`.

I tested all three dropdown options to verify that the correct projects were displayed.

### Contact Form Feedback

ChatGPT initially suggested adding JavaScript validation and success/error feedback to my contact form.

Since I already used HTML validation with `required` and `type="email"`, I decided to keep the existing HTML validation rather than duplicate the same functionality using JavaScript.

I used the AI suggestion to add feedback after a valid form submission. I added a feedback element to the form and JavaScript that displays a success message.

I further modified the suggested implementation by giving the contact form its own `contact-form` ID and selecting it directly using `getElementById()`. I also changed the feedback message and chose not to automatically reset the form after submission.

## Changes I Made to AI Suggestions

I reviewed the AI-generated suggestions before implementing them. The main changes I made were:

* Changed the suggested project filter buttons into a dropdown menu.
* Adapted the project filtering JavaScript to work with the dropdown selection.
* Kept my existing HTML form validation instead of adding duplicate JavaScript validation.
* Added a specific `contact-form` ID to the contact form and selected it using `getElementById()`.
* Changed the contact form feedback message.
* Chose to keep the entered form values visible instead of automatically resetting the form.

## Testing and Verification

I tested the implemented features by:

* Switching between light and dark mode and refreshing the page to verify that the selected theme was remembered.
* Selecting All Projects, Web Projects, and Database Projects to verify that the correct projects were displayed.
* Leaving required form fields empty and entering an invalid email address to verify that the existing HTML validation still worked.
* Completing the contact form with valid information and verifying that the custom success feedback appeared.
* Resizing the browser window to verify that the responsive layout continued to work correctly.

## What I Learned

Through this assignment, I learned how `localStorage` can be used to save a user's preferences between page refreshes.

I also learned how HTML data attributes can be used to categorize content and how JavaScript can compare those categories with user input to dynamically filter projects.

For the contact form, I learned the difference between HTML's built-in validation and JavaScript-based user feedback.


## AI Usage Declaration

**Name:** Raghad Murayh
**Student ID:** 202254020
**Date:** 2026-10-25

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.
