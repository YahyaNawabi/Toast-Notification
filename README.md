# Toast-Notification
# Toast Notification with Progress Bar

This project is a simple implementation of toast notifications with a progress bar. The notifications can show different types of messages, such as success, error, and invalid messages, each with a progress bar that decreases as time passes.

## Features
- **Toast Notifications**: Shows different types of messages such as "Success", "Error", and "Invalid".
- **Progress Bar**: A progress bar that decreases as the message is displayed, visually showing the countdown of the message disappearing.
- **CSS Animations**: Uses CSS keyframe animations to create smooth transitions for the toast appearance and disappearance.

## How to Use

### 1. View the Live Demo
You can see a live demo of this project here: [View Live Demo](#)

### 2. Files Structure
- **index.html**: The main HTML file where the toast notifications and buttons are defined.
- **style.css**: The CSS file containing styles for the toast notifications, buttons, and progress bar animations.
- **main.js (optional)**: A JavaScript file used to control the appearance of the toast messages and trigger the progress bar animation. *(Note: For the full functionality with automatic disappearance of messages, JavaScript is required.)*

### 3. Running the Project
- **Using HTML & CSS**: If you are just using the HTML and CSS, you can open the `index.html` file directly in any web browser. The buttons will trigger the toast notifications.
- **Using JavaScript (Optional)**: If you want to have JavaScript-based dynamic removal or further interactive features, make sure to include the `main.js` file and edit the HTML to link the JavaScript.

### 4. How It Works
- **Toast Buttons**: The buttons at the top allow you to trigger different toast messages. Clicking the buttons will display a toast notification with a message and progress bar.
- **Progress Bar**: The progress bar animates from 100% to 0% as the toast message is displayed, visually indicating when the message will disappear.

## Technologies Used
- **HTML**: Structure of the toast notifications and buttons.
- **CSS**: Styling of the toast notifications and progress bar, including animations.
- **JavaScript (optional)**: For adding dynamic behavior to the toast notifications, such as automatic disappearance.

## Customization
You can easily modify the colors, text, and timing of the progress bar to suit your needs by editing the CSS and JavaScript (if used). For example:
- **Change the Colors**: Modify the background color of `.toast.success`, `.toast.error`, and `.toast.invalid` in the `style.css` file.
- **Change the Duration of the Toast**: Adjust the animation duration in the `@keyframes` rule for `progress` and `fadeOut` in the CSS file.


