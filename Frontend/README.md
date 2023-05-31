
## Installation

npx create-react-app EmployeeRegistration

```bash
  cd frontend
  npm start
```
## Installation dependancy
```bash

npm install semantic-ui-react semantic-ui-css
npm install react-router-dom
npm install axios
npm i cors
```

# Employee Registration Web based application

The Employee Registration web-based application is designed to facilitate the management of employee records within an organization. The application has two main components: the frontend, developed using HTML, SCSS, JavaScript, and React JS, and the backend, developed using Node JS.

The application begins with an admin login page where the admin can enter their username and password to access the system. Once logged in, the admin gains access to various features and functionalities.

The primary operations available to the admin are:

### 1. Add New Employees: 
The admin can fill in the necessary employee details such as name, address, contact information, and any other relevant information. Upon submission, this information is sent from the frontend to the backend.

### 2. Update Registered Employees: 
The admin can modify the details of existing employees. This functionality allows for updating employee information such as address, contact details, or any other relevant data.

### 3. Delete Employees: 
The admin has the ability to remove employee records from the system. This operation permanently deletes the selected employee's data from the backend database.

### 4. View All Registered Employees: 
The admin can view a comprehensive list of all registered employees. This list includes relevant information such as employee names, addresses, and contact details. The backend retrieves this data from the JSON file acting as the database and sends it back to the frontend for display.
### 5. Search Employees: 
The admin can enter search criteria such as employee name, employee ID, or any other relevant information into a search input field. Upon submitting the search query, the frontend sends the search request to the backend.

## Frontend and Backend 
To ensure data persistence, the backend utilizes a JSON file to store and manage all employee records. When the admin submits new employee data or updates existing employee data, the backend processes the request and saves the changes to the JSON file. Similarly, when the admin requests to view all employees, the backend retrieves the data from the JSON file and sends it back to the frontend for display.

The communication between the frontend and backend is facilitated by the Node server. The server receives requests from the frontend, handles them appropriately using the defined routes and logic, and sends the responses back to the frontend.

## Rssponsive, user friendly, easy to add new functionality

Overall, the Employee Registration web-based application provides a user-friendly interface for the admin to manage employee records effectively. The frontend allows for seamless data entry and display, while the backend processes and stores the data in a JSON file acting as the database, ensuring a smooth user experience.


## API Reference

#### Get all Employees

```http
  api.get('employees/');
```

#### Get single Employee

```http
  GET /api/employees/${id}
```

#### Add new Employee

```http
  api.post("employees/", request);
```

#### Update Employee

```http
  api.put(`employees/${updateEmployee.id}`, contact);

```
#### delete Employee

```http
  api.delete(`employees/${updateEmployee.id}`);

```


## Employee Registration System

![EmployeeRegistration](https://github.com/Hinashahzad/ContactList/blob/main/Frontend/src/images/EmployeeRegistration.png?raw=true)

