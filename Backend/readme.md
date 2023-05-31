
## PURE Vanilla NODE JS Project FOR managing the Backend application 

## Installation

## Create the Package.json file 

```bash
  npm init
```
## Installation dependancy
```bash
`install node`
`npm i --save-dev nodemon`
`npm i dotenv` 

```

## Automatically save the file in server.js
Add the below line under the script in `package.json` file to automatically save the file and run the server.js

`"start": "nodemon server.js"`


# Employee Registration Web based application

The Employee Registration web-based application is designed to facilitate the management of employee records within an organization. The application has two main components: the frontend, developed using HTML, SCSS, JavaScript, and React JS, and the backend, developed using Node JS.

The application begins with an admin login page where the admin can enter their username and password to access the system. Once logged in, the admin gains access to various features and functionalities.

## Functionality
### BASIC CRUD OPERATIONS 
### 1. ADD EMPLOYEE
    In client application when client add the New Employee then `postMethod` is called and save the Employee in `Employee.json` file.
### 2. DELETE EMPLOYEE
    In client application when client delete the Employee then `deleteMethod` is called and save the Employee in `Employee.json` file.
### 3. UPDATE EMPLOYEE
    In client application when client update the Employee record then `putMethod` is called and save the Employee in `Employee.json` file.
### 4. EMPLOYEE LIST
    In client application when client can see the Employee registered in the `Employee.json` then `getMethod` is called.

## Database "WriteToFile"
    This file accepts the following Employees record and help to write into the database.
        - Newly Employee
        - Update the Existing Employee
        - Delete the Existing Employee
## BodyParser
This file is used to parse the body of the request.As this is the pure Vanilla JavaSCript Backend Project so, by returning the Promise, the data is accepting from client side to server side before store the new, and updating record in `Employee.json`. 

## Run the Backend 
Navigate to the Backend directory and type the below command 
    `npm run start`



## Employee Registration System

![EmployeeRegistration](https://github.com/Hinashahzad/ContactList/blob/main/Frontend/src/images/EmployeeRegistration.png?raw=true)

