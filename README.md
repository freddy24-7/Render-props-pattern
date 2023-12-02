# Toggle Example

This React application provides a simple example of using the "Render Props" pattern to toggle content visibility. It consists of two main components, `App` and `Toggle`.

## Purpose

The purpose of this application is to demonstrate how to use the "Render Props" pattern to create a reusable toggle component. The `Toggle` component manages the state of a toggle button and exposes that state to its parent component (`App`). The parent component then decides what content to render based on the toggle state.

## Main Functionalities

### `App` Component

The `App` component serves as the main application container. It renders a title and the `Toggle` component.

### `Toggle` Component

The `Toggle` component encapsulates the toggle button and state management logic. It accepts a `render` prop, which is a function that determines what content to render based on the toggle state.

#### State Management

- It maintains an `isOpen` state that represents whether the content is visible or not.
- The `toggle` function toggles the `isOpen` state when the button is clicked.

#### Rendering Content

- The `Toggle` component renders a button labeled "Toggle."
- The content to be displayed or hidden is determined by the `render` prop function.
- When the button is clicked, the `isOpen` state is passed to the `render` function, allowing the parent component (`App`) to decide whether to render content based on the toggle state.

### Styling

The application includes a simple CSS file (`Toggle.css`) to style the `Toggle` component. It changes the background color of the component based on whether it is open or closed.

## Usage

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to view the application.

Feel free to explore and modify the code to understand how the "Render Props" pattern works in React.
