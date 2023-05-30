import React, { useState, useEffect, useR } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Header from '../Header/index';
import './index.scss';
import AddEmployee from '../AddEmployee';
import EmployeeList from '../EmployeeList';
import UpdateEmployee from '../UpdateEmployee';
import api from '../api/Employee';
import { retreiveEmployees, addEmployees, deleteEmployee, updateEmployees } from '../api/CRUD-methods';

const AdminPortal = () => {
    //const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [registerEmployee, setRegisterEmployee] = useState(false);
    const [employeeList, setEmployeeList] = useState(false);
    const [updateEmployee, setUpdateEmployee] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
// This handler add the contact into the JSON File
const addContactHandler = async (contact) =>
{
  const request = { 
    id: uuidv1(),
    ...contact
  }
  // addEmployee function is handled the api to add the Employees in the JSON file.
  const response = addEmployees(request);
    setContacts([...contacts, response]);
};

// Update Contact Handler function is update the already registered Employees in JSON file.
const updateContactHandler = async (contact )=> {
const response = await api.put(`employees/${updateEmployee.id}`, contact);

//const response = updateEmployees(contact, updateEmployee);
setContacts(contacts.map((item) => 
  (item.id === response.data.id ? response.data : item)));
}
  
const removeContactHandler =  async (id) =>{
    deleteEmployee(id);
    const newContactList = contacts.filter((contact) =>
    {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  const receiveUpdatedEmployee =(props) => {
      setUpdateEmployee(props);
      setEmployeeList(false);
  }
  const searchHandler =( searchValue ) => {
      setSearchValue(searchValue);
     if(searchValue !== "") {
      const searchContacts = contacts.filter((contact) => {
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      });
      setSearchResult(searchContacts);
      console.log(searchResult)
     }
     else{
      setSearchResult(contacts);
     }
  };
// Depency is EmployeeList. Whenever the Employee List is updated it retrive all employees
  useEffect(() =>
  {
    //const retrieve_contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const getAllEmployees = async () => {
      const allEmployees = await retreiveEmployees();
      if(allEmployees){
        setContacts(allEmployees);
      }
    }
    
    getAllEmployees();

  }, [employeeList]);
  
return(
    <div className='portal-main-content'>
      <Header />
      <div className='portal-body'>
      <div className='show-container'>
      <div className='registered-employees-container'>
        { registerEmployee 
        ?
          (<>
        
          <div className='register-employee'>
            <AddEmployee  
              addContactHandler = {addContactHandler} 
              contacts = {contacts}
            />
            </div> </>)
          :
            ( <div className='employees-list-container'>
            { employeeList  && (<div className='employee-list'>
              <EmployeeList 
                contacts={searchValue.length < 1 ? contacts: searchResult}   
                receiveUpdatedEmployee = {receiveUpdatedEmployee} 
                getContactId={ removeContactHandler} 
                term ={searchValue}
                searchHandler={searchHandler}/>
              </div>)}
            </div>)}
        { updateEmployee && 
        (<UpdateEmployee  
            employee = { updateEmployee} 
            updateContactHandler = {updateContactHandler}  
            contacts = {contacts}/>)}
        </div>
      </div>
     
        <div className='dropdown-menu'>
          <button className='dropdown-btn'> Select the option </button>
          <div className='dropdown-content'>
              <span onClick={()=>{ 
                setRegisterEmployee(true);
                setEmployeeList(false);
                setUpdateEmployee("");
                }
                }> Add Employee </span>
              <span onClick={()=>{ 
                setEmployeeList(true);
              setRegisterEmployee(false);
              setUpdateEmployee("");
              }}> Employees List</span>              
          </div>
        </div>
      </div>
    </div>)
}
export default AdminPortal;