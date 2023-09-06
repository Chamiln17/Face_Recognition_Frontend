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

## How to Use the Clarifai API for Face Recognition

To use the Clarifai API for face recognition, follow these steps:

1. **Get a Personal Access Token (PAT):**

   - Your PAT (Personal Access Token) can be obtained from the Clarifai portal under Authentication.
   - This token is required for authenticating your requests to the Clarifai API.

2. **Specify Model ID:**

   - Set the `MODEL_ID` variable to the specific model you want to use for face recognition.
   - You can change this to the desired Clarifai model.

3. **Create a JSON Request Body:**

   - Use the `requestOptionsJSON` function to create the JSON body for your API request.
   - Replace the `PAT`, `USER_ID`, `APP_ID`, and `IMAGE_URL` with your specific values.
   - The `PAT` is your Personal Access Token, and the `IMAGE_URL` should be the URL of the image you want to process.

4. **Make the API Request:**

   - In the `onPictureSubmit` function, use the `fetch` function to send a POST request to the Clarifai API.
   - The Clarifai API will process the image and return the result, including face detection data.

5. **Display Face Recognition Results:**

   - Use the `displayFaceBox` and `calcBoxFace` functions to calculate and display the bounding box around detected faces.
   - You can customize how the face recognition results are displayed in your application.

Make sure to replace the placeholder values in the code with your actual Clarifai credentials and image URLs.

