# AI-Based Code Snippet Generator for Developers

Welcome to the **AI-Based Code Snippet Generator**! This cutting-edge project leverages artificial intelligence to swiftly and accurately generate code snippets based on your prompts. Designed with developers in mind, it integrates a sleek, user-friendly interface with robust backend functionalities, offering seamless user authentication, real-time notifications, and powerful AI-driven code generation.

## 🚀 Features

- **🔒 User Authentication**: Secure login and registration with JWT token management. Keep your sessions safe and sound!
- **🤖 AI Integration**: Harness the power of AI to generate precise and relevant code snippets from your inputs. It's like having a coding assistant in your pocket!
- **🔔 Real-time Notifications**: Stay updated with instant notifications when your code snippets are ready. No more waiting around in suspense!
- **🖥️ Dashboard Interface**: A beautifully designed, responsive dashboard that allows you to generate and manage your code snippets effortlessly.
- **🌐 Firebase Backend**: Robust backend powered by Firebase for reliable authentication and database management.

## 🛠️ Tech Stack

- **Frontend**: React.js for a dynamic and responsive user experience.
- **Backend**: Node.js and Express.js for a fast and reliable server.
- **Database**: Firebase for secure and scalable data storage.
- **Authentication**: Firebase Auth and JWT for robust user authentication.
- **Notifications**: Real-time browser notifications to keep you informed.
- **AI Integration**: OpenAI API for intelligent code generation.
- **Styling**: Stylish CSS and WebP images for a visually appealing interface.

## 📦 Installation

Follow these detailed steps to get your development environment up and running:

1. **Clone the Repository**:
    Start by cloning the repository to your local machine. This will create a local copy of the project:
    ```bash
    git clone https://github.com/Surajwalia1/Snippet-Generator.git
    ```
    Replace `Surajwalia1` and Snippet-Generator` with your GitHub username and repository name.

2. **Navigate to the Project Directory**:
    Move into the project directory to begin the setup process:
    ```bash
    cd Snippet-Generator
    ```

3. **Install Dependencies**:
    Install all necessary dependencies for both the frontend and backend. This ensures that your project has all the required packages to run smoothly:
    ```bash
    npm install
    cd backend && npm install
    ```
    After this, you will have all the packages required for both frontend and backend.

4. **Create and Configure `.env` File**:
    In the `backend` directory, create a `.env` file to store environment variables. This file will hold sensitive information like API keys:
    ```env
    PORT=5000
    FIREBASE_API_KEY
    FIREBASE_AUTH_DOMAIN
    FIREBASE_PROJECT_ID
    OPENAI_API_KEY
    ```
    Replace placeholder values with your actual API keys and Firebase configuration details.

5. **Run the Backend Server**:
    Start the backend server, which will listen for incoming requests and handle API interactions:
    ```bash
    cd backend
    npm start
    ```
    Your backend server will now be up and running, providing the necessary API endpoints.

6. **Run the Frontend Application**:
    With the backend server running, you can now start the frontend application:
    ```bash
    cd ..
    npm start
    ```
    The frontend will launch in your browser, typically at `http://localhost:3000`.

7. **Access the Application**:
    Open your web browser and navigate to `http://localhost:3000` to access the application. Explore the features and enjoy the AI-powered code snippet generation!

## 📖 Usage

- **Login/Register**: Create a new account or log in to your existing one to access the dashboard.
- **Generate Code**: Use the intuitive interface to enter your prompts and generate code snippets effortlessly.
- **Receive Notifications**: Get instant updates when your code snippets are ready, ensuring you're always in the loop.






