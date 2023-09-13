# Frontend Project: Face Recognition Brain

This is the documentation for the **Face Recognition Brain** frontend project. Below, you'll find information about the project structure, dependencies, and available scripts.

## Project Structure

The project is structured as follows:

- `src/` - This directory contains the source code for the React application.
  - `components/` - Contains React components used in the application.
  - `App.js` - The main React application component.
- `public/` - Contains the static assets and the HTML template.
- `package.json` - Configuration file for project dependencies and scripts.

## Dependencies

The project uses the following dependencies:

- [clarifai](https://www.npmjs.com/package/clarifai) - Version 2.9.1
- [react](https://reactjs.org/) - Version 18.2.0
- [react-dom](https://reactjs.org/docs/react-dom.html) - Version 18.2.0
- [react-particles](https://www.npmjs.com/package/react-particles) - Version 2.12.2
- [react-scripts](https://www.npmjs.com/package/react-scripts) - Version 5.0.1
- [react-tilt](https://www.npmjs.com/package/react-tilt) - Version 1.0.2
- [tachyons](https://www.npmjs.com/package/tachyons) - Version 4.12.0
- [tsparticles-slim](https://www.npmjs.com/package/tsparticles-slim) - Version 2.12.0
- [web-vitals](https://www.npmjs.com/package/web-vitals) - Version 2.1.4

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start` - Runs the app in development mode.
- `npm build` - Builds the app for production to the `build` folder.
- `npm test` - Launches the test runner in interactive watch mode.
- `npm eject` - This command will remove the single build dependency from your project.

## ESLint Configuration

The project uses ESLint for code linting. The ESLint configuration extends the following presets:

- `react-app`
- `react-app/jest`

## Browserslist Configuration

The `browserslist` configuration specifies the browser versions the project supports in production and development modes.

- Production:
  - `>0.2%`
  - `not dead`
  - `not op_mini all`
- Development:
  - `last 1 chrome version`
  - `last 1 firefox version`
  - `last 1 safari version`
