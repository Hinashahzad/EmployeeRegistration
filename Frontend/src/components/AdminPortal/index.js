import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Header from '../Header/index';
import './index.scss';
import AddEmployee from '../AddEmployee';
import EmployeeList from '../EmployeeList';
import UpdateEmployee from '../UpdateEmployee';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../api/Employee';

const AdminPortal =()=>{
    //const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [registerEmployee, setRegisterEmployee] = useState(false);
    const [employeeList, setEmployeeList] = useState(false);
    const [updateEmployee, setUpdateEmployee] = useState();
    
    
const retreiveEmployees = async () => {
  const response =  await api.get('employees/');
  //const response = await axios.get(`/api/employees/`)
  return response.data;
}
const addContactHandler = async (contact) =>
{
  const request ={
    id: uuidv1(),
    ...contact
  }
  const response = await api.post("employees/", request);
    //setContacts([...contacts, { id: uuidv1(), ...contact }]);
    setContacts([...contacts, response.data]);
};
const updateContactHandler = async (contact)=> {
const response = await api.put(`employees/${updateEmployee.id}`, contact);
setContacts(contacts.map((item) => (item.id === response.data.id ? response.data : item)));
  //setContacts([...contacts, contact]);
  //setContacts(contact);
}
  
  const removeContactHandler =  async (id) =>
  {
    await api.delete(`employees/${id}`);

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

  }, []);
  
  /*useEffect(() =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    
  }, [contacts])*/
return(
    <div className='portal-main-content'>
      <Header />
      <div className='portal-body'>
      
      <div className='search-employee-container'>
        <input className='search-employee'
        type='text'
        placeholder='Enter Employee details to search employee'></input>
        <AiOutlineSearch/>
        
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
                contacts={contacts}   
                receiveUpdatedEmployee = {receiveUpdatedEmployee} 
                getContactId={ removeContactHandler} />
              </div>)}
            </div>)}
        { updateEmployee && 
        (<UpdateEmployee  
            employee = { updateEmployee} 
            updateContactHandler = {updateContactHandler}  
            contacts = {contacts}/>)}
        </div>
      </div>
    </div>)
}
export default AdminPortal;