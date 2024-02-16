# Contact Manager API
## Back-End server for a Contact Management app

Key Features:
- Tokens for authentication
- Password hashing

### Stack used:
- **MongoDB**, **Express**, **Nodejs**, jsonwebtoken (authentication), bcrypt (password hashing)



## Endpoints
- ### User
    - **Register a user**   POST /api/users/register
    - **Login user**        POST /api/users/login
    - **Current user info** GET /api/users/current
- ### Contacts
    - **Get all contacts** GET /api/contacts
    - **Create New contact** POST /api/contacts
    - **Get contact** GET /api/contacts/:id
    - **Update contact** PUT /api/contacts/:id
    - **Delete contact** DELETE /api/contacts/:id
    
## Installation:
1. git clone https://github.com/alexisNorthcoders/expresscontactmanager.git
2. cd expresscontactmanager
3. npm install
4. Create file ".env" with PORT="port number", CONNECTION_STRING="mongodb database", ACCESS_TOKEN_SECRET ="token secret for authentication"
5. node server.js


## Front End React App
- https://github.com/alexisNorthcoders/Contact-Manager

