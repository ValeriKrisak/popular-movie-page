# Movie Page

Welcome to Movie Page, a simple web application for exploring movies! This README will guide you through setting up the project, running it on your local machine, and obtaining an API key for The Movie Database (TMDb) API.

## Getting Started

To get started with Movie Page, follow these simple steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.

## Prerequisites

Before running the application, ensure you have Node.js and npm installed on your machine.

## Installation

To install the necessary dependencies, run the following command:

```sh
npm install
 ```

## Setting Up The Movie Database API Key

Movie Page utilizes The Movie Database (TMDb) API to fetch movie data. To test the application, you'll need to obtain your own API key from TMDb.

1. Sign up for an account on [TMDb](https://www.themoviedb.org/).
2. After signing in, go to your account settings and navigate to the API section.
3. Generate a new API key.
4. Once you have your API key, create a new file named `.env` in the root directory of the project.
5. Inside the `.env` file, add the following line with your API key:

    ```sh
    REACT_APP_API_KEY=YOUR_API_KEY_HERE
    ```

    Replace `YOUR_API_KEY_HERE` with your actual API key from TMDb.

Note: Ensure the `.env` file is in the root directory of the project.

## Running the Application

In the project directory, you can run the following commands:

### `npm run start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

Note: This command is a one-way operation. Once you eject, you can't go back!

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
