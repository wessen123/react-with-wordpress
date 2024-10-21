# React with WordPress: Post Creation Application

## Overview
This project is a web application that allows users to create and manage posts using React as the front end and WordPress as the backend content management system (CMS). The application integrates WordPress's REST API with a React-based interface, enabling seamless post creation, editing, and management.

## Features
- **Post Creation**: Users can create posts with titles, content, and featured images using a simple and intuitive React form.
- **Post Management**: Edit and delete posts directly from the front end using WordPress API integration.
- **Authentication**: User authentication using JWT (JSON Web Token) to secure access to post creation and management features.
- **Media Upload**: Supports uploading images directly from the React interface to WordPress for use in posts.
- **Responsive Design**: Mobile-friendly layout built using modern React components.
- **Real-time Updates**: The app automatically syncs with WordPress to display the latest posts and updates.

## Technologies Used
- **React**: Front-end library for building the user interface.
- **WordPress REST API**: For managing posts, media, and authentication.
- **Axios**: For making API requests between React and WordPress.
- **JWT Authentication**: For securing API calls.
- **CSS/Styled-Components**: For styling the application and ensuring a responsive design.

## Installation

### Prerequisites
- Node.js and npm installed
- A WordPress installation with REST API enabled
- WordPress plugins:
  - JWT Authentication for WP REST API
  - CORS plugin (if needed to manage cross-origin requests)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/wessen123/react-with-wordpress.git
   cd react-with-wordpress
