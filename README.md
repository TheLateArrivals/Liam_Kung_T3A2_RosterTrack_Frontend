# [RosterTrack](https://roster-track.onrender.com/)

Team: Liam and Kung
[Github link](https://github.com/TheLateArrivals)

## R1: Description of your website

### Purpose:

RosterTrack is an online roster management platform designed to streamline team management for childcare educators, eliminating the hassle of using spreadsheets. The purpose is to provide an intuitive and efficient solution for creating, managing, and communicating team rosters.

### Functionality/Features:

- Admin can create and manage team rosters, assign shifts, and update schedules as needed.
- An interactive calendar interface displays team schedules, making it easy to visualise and manage shifts.
- User Roles: Different user roles are implemented, with admins having full roster management capabilities and standard users being able to view the calendar and their assigned shifts.
- Secure Login and User Management: A secure login system ensures only authorised individuals can access the platform. User management allows for adding, editing, and removing users.
- Automated Email Notifications: Email notifications are sent automatically to team members for their assigned shifts, reducing manual communication efforts.

### Additional features if time permits:

- External Calendar Integration: Integration with external calendar systems, allowing users to sync their assigned shifts with personal calendars.
- User Profile Page: Users can manage their settings, update personal details, and configure notification preferences.
- Availability and Dispute Management: Users can indicate their availability or unavailability for specific dates, and a system is implemented to handle disputes or requests for shift changes.
- Messaging/chat system: for team members to communicate availability or tasks to be done.
- Upload profile picture

### Target Audience:

Childcare educators and organisations seeking a streamlined solution for managing team rosters. The platform caters to both admins responsible for roster creation and standard users who need visibility into their assigned shifts.

### Tech Stack:

- HTML
- CSS
- Bootstrap
- JavaScript
- MongoDB (database)
- Express.js (backend framework)
- React (frontend library)
- Node.js (backend runtime environment)
- Mongoose (object modeling for MongoDB)


### Third-Party Tools:

- Jest
- Postman
- ChatGPT 

### Project Tools:

- Github (for source control and collaboration)
- Figma (for visual planning and collaboration)
- Render.com (Web App Hosting)
- Trello (for task tracking and project management)

## R2: Dataflow Diagram

![Data Flow Diagram](../docs/Diagrams/DFD.png)

## R3: Application Architecture Diagram

![Application Architecture Diagram](../docs/Diagrams/Application%20Architecture%20Diagram.png)

## R4: User Stories

### Staff:

#### Staff Member 1

" As a staff member, I want to be able to see my roster in a calendar format so I can understand my schedule with ease."

Revised & refined -

"As a staff member, I want to be able to see my roster in a calendar format so I can understand my schedule with ease. Additionally, I would like to receive notifications or reminders for any changes or updates to my shifts, so that I am always aware of the latest schedule modifications. This will help me stay organised and prevent any potential conflicts with my personal activities and commitments."

#### Staff Member 2

"As a staff member, I need to be able to access my roster on multiple devices."

Revised & refined -

"As a staff member, I need to be able to access my roster on multiple devices. This will allow me to view and manage my schedule conveniently, whether I'm using a computer, tablet, or smartphone."

#### Staff Member 3

"As an employee, I want to be able to view my work schedule in advance, so that I can plan my personal activities and commitments accordingly."

Revised & refined -

"As an employee, I want to be able to view my work schedule in advance, so that I can plan my personal activities and commitments accordingly. Having a clear overview of my upcoming shifts will help me effectively manage my time and make necessary arrangements in advance."

#### Staff Member 4

"As an employee, I want to be able to set my availability preferences, so that the manager takes them into account and assigns shifts accordingly."

Revised & refined -

"As an employee, I want to be able to set my availability preferences, so that the manager takes them into account and assigns shifts accordingly. By specifying my preferred working hours and days off, I can ensure a better work-life balance and increase job satisfaction."

### Managers:

#### Centre Manager

As a manager, I want to be able to easily asign shifts to my staff.

Revised & refined -

"As a manager, I want to be able to easily assign shifts to my staff. The app should provide a user-friendly interface that allows me to quickly allocate employees to specific shifts, taking into consideration their availability, qualifications, and any preferences they have expressed. I'm also sick of these fools claiming they haven't seen the roster."

#### Centre Assistant Manager (assman)

"As assman, I need something intuitive and easy to use, to increase my efficency when I organise staff shifts."

Revised & refined -

"As assman, I need something intuitive and easy to use, to increase my efficiency when I organise staff shifts. The app should have a streamlined workflow and intuitive design that enables me to create, edit, and manage employee schedules effortlessly. This will save time and minimize errors in the scheduling process."

### Director

"As director, I need my ledership team to be able to create and manage employee schedules easily, so that I can efficiently allocate resources and ensure adequate staffing is in place for all shifts."

Revised & refined -

"As director, I need my ledership team to be able to create and manage employee schedules easily, so that I can efficiently allocate resources and ensure adequate staffing is in place for all shifts. The app should provide features such as drag-and-drop functionality, schedule generation based on what I tell my minions, and the ability to easily make adjustments when needed."

## R5: Wireframes

### Desktop

<!-- Large diagram, decided to embed it as a downloadable pdf file -->
<object data="../docs/Diagrams/RT_Desktop_Wireframe.pdf" type="application/pdf" width="700px" height="700px">
  <embed src="../docs/Diagrams/RT_Desktop_Wireframe.pdf">
    <p>This browser does not support PDFs. Please download the PDF to view it: <a href="../docs/Diagrams/RT_Desktop_Wireframe.pdf">Desktop Wireframe Diagram</a>.</p>
  </embed>
</object>

### Mobile Phone

<object data="../docs/Diagrams/RT_Phone_Wireframe.pdf" type="application/pdf" width="700px" height="700px">
  <embed src="../docs/Diagrams/RT_Phone_Wireframe.pdf">
    <p>This browser does not support PDFs. Please download the PDF to view it: <a href="../docs/Diagrams/RT_Phone_Wireframe.pdf">Phone Wireframe Diagram</a>.</p>
  </embed>
</object>

## R6: Kanban Board

### 28-06-2023 - Planning

![Trello 28/06/23](../docs/Trello%20Screenshots/20230628/Trello%20Screenshot%202023-06-28%20193603.jpg)

![Trello 28/06/23](../docs/Trello%20Screenshots/20230628/Trello%20Screenshot%202023-06-28%20193923.jpg)

### 05-07-2023 - Project underway

![Trello 05/07/23](../docs/Trello%20Screenshots/20230705/Trello%20Screenshot%202023-07-05%20194326.png)

![Trello 05/07/23](../docs/Trello%20Screenshots/20230705/Trello%20Screenshot%202023-07-05%20193568.png)

### 12-07-2023 - Completing Part A

![Trello 12/07/23](../docs/Trello%20Screenshots/20230712/Trello%20Screenshot%202023-07-12%20091423.jpg)

![Trello 12/07/23](../docs/Trello%20Screenshots/20230712/Trello%20Screenshot%202023-07-12%20221352.jpg)

![Trello 12/07/23](../docs/Trello%20Screenshots/20230712/Trello%20Screenshot%202023-07-12%20221535.jpg)

### 06-08-2023 - Completing Part B

## R7: Libraries/Dependancies:

### Backend
bcrypt (v5.1.0): a library for hashing and verifying passwords.

cors (v2.8.5): middleware for enabling CORS in Express applications. It allows for the specification of which sources are permitted to access your server.

dotenv (v16.3.1): module that loads environment variables from a .env file into process.env. This makes it easier to manage configuration settings without hardcoding them into the application.

express (v4.18.2): minimalistic web framework for Node.js, making it easier to build and manage web servers.

helmet (v7.0.0): middleware functions to help secure Express-based applications by setting various HTTP headers.

jsonwebtoken (v9.0.1): a library for creating and verifying JSON Web Tokens (JWT). It's commonly used for handling authentication and authorization.

mongodb (v5.6.0): MongoDB driver for Node.js, allowing for direct communication with MongoDB databases.

mongoose (v7.3.1): An elegant object modeling tool for MongoDB and Node.js. It provides a schema-based solution to model application data.

passport (v0.6.0): authentication middleware for Node.js, offering various strategies to authenticate requests.

supertest (v6.3.3): testing library for HTTP assertions, making it easier to test Express routes.

devDependencies: cross-env (v7.0.3): A utility that allows for setting and using environment variables across platforms (Windows, macOS, Linux) in a consistent manner.

### Frontend
@fullcalendar/: set of libraries providing functionality for a full-sized drag & drop event calendar.

axios (v1.4.0): HTTP client for making asynchronous requests. It's often used in React applications to fetch or send data to an API.

express (v4.18.2): minimalistic web framework for Node.js. Its presence in a frontend project might indicate some server-side functionality or a mock server for development.

moment (v2.29.4): JavaScript library for parsing, validating, manipulating, and formatting dates.

react (v17.0.2) & react-dom (v17.0.2): core libraries for building React applications.

react-router-dom (v6.14.2): standard library for adding navigation into a React application.

react-scripts (v2.1.3): Scripts and configuration used by Create React App (CRA).

styled-components (v6.0.5): library for styling React components.

user-event (v14.4.3): Simulates user events like typing, clicking, etc.

jest-dom (v5.17.0): JS testing.

react (v11.2.7): testing React components.

#### devDependencies:
@babel/preset-env & @babel/preset-react: Babel presets for compiling modern JavaScript and React JSX into backwards-compatible JavaScript.

identity-obj-proxy (v3.0.0): A proxy object for mocking modules in tests, often used with CSS Module imports in Jest.