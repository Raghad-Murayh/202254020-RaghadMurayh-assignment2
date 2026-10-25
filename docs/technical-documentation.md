# Technical Documentation

## Project Structure

* `index.html`: Contains the structure and content of the portfolio website.

* `styles.css`: Contains the website design, responsive layout, light/dark mode styles, project filter styling, and transitions.

* `script.js`: Contains the JavaScript for theme persistence, project filtering, and contact form feedback.

* `assets/image/`: Contains the images used for the projects.

* `docs/`: Contains the AI usage report and technical documentation.

## Technologies Used

The portfolio website was developed using HTML, CSS, and JavaScript.

The browser's `localStorage` is also used to save the user's light/dark theme preference.

## Main Features

* About Me, Projects, and Contact sections.

* Navigation links with smooth scrolling between sections.

* Two project cards with images and descriptions.

* Project filtering using a dropdown menu with All Projects, Web Projects, and Database Projects options.

* Light and dark mode with the selected theme saved using `localStorage`.

* Contact form with HTML validation and JavaScript success feedback.

* Responsive layout for desktop and mobile screen sizes.

## Theme Preference

The light and dark mode feature uses JavaScript and `localStorage`.

When the user changes the theme, the selected value is saved as either `dark` or `light`. When the website is opened or refreshed, JavaScript reads the saved value and applies the correct theme.

## Project Filtering

Each project card has a `data-category` attribute that identifies its category.

The Hospital Appointment System is categorized as `database`, while the Student Assignment Planner is categorized as `web`.

The project filter is implemented using a dropdown menu. When the selected option changes, JavaScript compares the selected value with each project's category and displays only the matching projects.

Selecting All Projects displays both projects.

## Contact Form Feedback

The contact form uses HTML validation through `required` fields and the `email` input type.

JavaScript listens for a valid form submission and prevents the default form submission behavior because the website does not use a backend.

After a valid submission, a feedback message is displayed to confirm that the form was completed successfully.

## Responsive Design

The website uses a CSS media query for screen widths of 700 pixels or less.

On smaller screens:

* The navigation changes to a vertical layout.
* Navigation links can wrap to fit the available space.
* Project cards change from a side-by-side layout to a vertical layout.
* Section spacing is reduced.

## Animations and Transitions

The website includes smooth scrolling when navigating between sections.

A CSS transition is also used to make the background and text color changes smoother when switching between light and dark mode.

Hover effects are used on navigation links and the contact form button.

## Testing

The website was tested by:

* Switching between light and dark mode and refreshing the page to verify that the selected theme was saved.
* Testing All Projects, Web Projects, and Database Projects to verify that project filtering worked correctly.
* Testing empty fields and invalid email input in the contact form.
* Submitting valid form information and verifying that the success feedback appeared.
* Resizing the browser window to verify the responsive layout.
* Testing the navigation links and smooth scrolling.
