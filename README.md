# Realtime-Simple-Chat-Server-With-Frontend
Realtime Simple Chat Server With Frontend with HTML, CSS, NodeJS &amp; JS. 
Realtime Chat Project
Overview
Welcome to the Realtime Chat Project! This application uses Node.js and Socket.io to provide a real-time chat experience. The chat application supports persistent chat rooms, with chat history and user color-coding for easy identification.

Features
Real-time Messaging: Messages are sent and received instantly with Socket.io.
Persistent Chat History: Previous messages are retained for future reference.
User Color-Coding: Each user is assigned a unique color for their messages.
Username and Password: Users input a username, and the chat room is secured with a fixed password.
Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or later recommended)
npm (comes with Node.js)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/realtime-chat-project.git
cd realtime-chat-project
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variable:

bash
Copy code
PORT=3000
Start the server:

bash
Copy code
npm start
The server will start on port 3000 by default. You can change this in the .env file.

Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
You should see the chat application.

Usage
Enter a Username: Input your desired username in the provided field.
Join the Chat Room: Click the join button to enter the chat room.
Send Messages: Type your message in the input box and press Enter to send.
View Chat History: The chat history will be displayed, and you can see messages from all users.
Development
To contribute to this project or make modifications:

Create a new branch:

bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit:

bash
Copy code
git add .
git commit -m "Add feature: your-feature-name"
Push to the repository:

bash
Copy code
git push origin feature/your-feature-name
Open a Pull Request: Go to the repository on GitHub and open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Socket.io - For enabling real-time communication.
Node.js - For the server-side runtime environment.
