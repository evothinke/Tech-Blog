# Tech Blog

Welcome to the Tech Blog, a CMS-style blog site where you can publish articles, blog posts, and share your thoughts and opinions on various tech topics.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Tech Blog is built following the Model-View-Controller (MVC) architectural pattern. It utilizes the following technologies and packages:

- Front-end:
  - HTML
  - CSS
  - JavaScript
  - Handlebars.js (templating language)

- Back-end:
  - Node.js
  - Express.js (web application framework)
  - Sequelize (ORM)
  - MySQL (database)

- Authentication:
  - express-session (session management)
  - bcrypt (password hashing)
  - connect-session-sequelize (session storage)

## Features

The Tech Blog comes with the following features:

1. User Authentication:
   - Sign up with a username and password.
   - Log in with your credentials.
   - Log out of the site.

2. Homepage:
   - View existing blog posts (if any) with post title and creation date.
   - Navigate to the homepage.
   - Navigate to the dashboard.

3. Navigation:
   - Access the homepage and dashboard from the navigation menu.
   - Prompted to sign up or sign in when clicking on other links.

4. Blog Posts:
   - Click on an existing blog post to view its details, including the post title, contents, post creator's username, and date created.
   - Leave comments on blog posts.
   - Comments are saved and displayed with the comment creator's username and creation date.

5. Dashboard:
   - View and manage your own blog posts.
   - Add new blog posts by providing a title and contents.
   - Update and delete your existing blog posts.

6. Session Management:
   - Idle session timeout: If you are idle on the site for a set time, you will be prompted to log in again before performing certain actions.

## Installation

To run the Tech Blog locally, please follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: 
3. Install the dependencies: `npm install`
4. Set up the database:
   - Create a MySQL database.
   - Update the database configuration in the `.env` file.
5. Start the application: `npm start`
6. Access the application in your browser at `http://localhost:3001`

## Usage

Once the Tech Blog is up and running, you can perform the following actions:

- Sign up for a new account by providing a unique username and password.
- Log in using your credentials.
- Explore the homepage and read existing blog posts.
- Click on a blog post to view its details and leave comments.
- Navigate to the dashboard to manage your own blog posts.
- Add new blog posts, update existing ones, or delete them.
- Log out of the site when you're done.

## Contributing

Contributions are welcome! If you would like to contribute to the Tech Blog, please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

The Tech Blog

 is licensed under the [MIT License](LICENSE).

---

Thank you for stopping by. If you have any questions or need further assistance, please don't hesitate to contact me.