# Real-Time-Chat-App

## Overview

This Real-Time Chat Web Application offers a seamless platform for users to engage in live conversations. Leveraging the power of WebSockets for real-time communication and JWT for secure user authentication, this application provides a dynamic and secure environment for chatting.

## Technology Stack

- **Frontend:** ReactJS - A JavaScript library for building user interfaces
- **Backend:** NodeJS + ExpressJS - A server-side JavaScript runtime and framework for building efficient web applications
- **Database:** MongoDB - A NoSQL database for storing user and chat data
- **Real-Time Communication:** WebSocket - Enables real-time, bidirectional, and event-based communication between web clients and servers
- **Authentication:** JWT (JSON Web Tokens) - Securely transmits information between parties as a JSON object

## Features

- Real-time messaging between users
- Secure user authentication using JWT
- Scalable MongoDB database integration
- Responsive design for various devices and screen sizes

## Screenshoots

1.  Login Page

![Image](https://github.com/Hanzalashaik/Real-Time-Chat-App/blob/main/client/public/login%20page.png "Image")

2. Signup Page

![Image](https://github.com/Hanzalashaik/Real-Time-Chat-App/blob/main/client/public/signup%20page.png "Image")

3. Home Page

![Image](https://github.com/Hanzalashaik/Real-Time-Chat-App/blob/main/client/public/Homepage.png "Image")

## Installation

### Prerequisites

- Node.js and npm (Node Package Manager)
- MongoDB installed and running on your system

### Steps

```bash
git clone git@github.com:Hanzalashaik/project-management-mern.git
cd project-management-mern
```

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

```

```bash
# Start the server
cd ../server
nodemon app.js

# Start the client
cd ../client
npm run dev

```

### Install dependencies for the basic setup: </h4>

### Dev Dependencies

```bash
npm i -D nodemon
```

### Dependencies

```bash
npm i config
```

<h4> Integrate a new script </h4>

- Add "type" : "module"
- Change "script" :{ "dev": "nodemon app.js"}

```bash

{
  "name": "Book-Store-API",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type" : "module",
  "scripts": {
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
}

```
