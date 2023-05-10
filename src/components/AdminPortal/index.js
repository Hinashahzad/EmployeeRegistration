import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Header from '../Header/index';
import './index.scss';
import AddEmployee from '../AddEmployee';
import EmployeeList from '../EmployeeList';

const AdminPortal =()=>{
  //console.log(props);
    const LOCAL_STORAGE_KEY = "contacts";
 const [contacts, setContacts] = useState([]);
 const [registerEmployee, setRegisterEmployee] = useState('inactive');
 const [emoloyeeList, setEmployeeList] = useState('inactive');
  
const addContactHandler = (contact) =>
{
  console.log("REceiving contact from AddContact component", contact);
  console.log(contacts)
  setContacts([...contacts, { id: uuidv1(), ...contact }]);
};
  
  const removeContactHandler = (id) =>
  {
    const newContactList = contacts.filter((contact) =>
    {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }
  useEffect(() =>
  {
    const retrieve_contact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieve_contact)
    {
      setContacts(retrieve_contact)
    }
  }, []);
  
  useEffect(() =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    
  }, [contacts])
return(
    <div className='portal-main-content'>
      <Header />
      <div className='portal-body'>

      <div className='registered-employees-container'>
        
        { registerEmployee === "active" ?
        (<div className='register-employee'>
          <AddEmployee  addContactHandler={addContactHandler}/>
          </div>)
          : ( <div className='employees-list-container'>
          {emoloyeeList ==="active" && (<div className='employee-list'>
            <EmployeeList contacts={contacts} getContactId={ removeContactHandler} />
      
            </div>)}
  
          </div>)}

        </div>
        <div className='dropdown-menu'>
          <button className='dropdown-btn'> Select the option </button>
          <div className='dropdown-content'>
              <span onClick={()=>{ 
                setRegisterEmployee("active");
                setEmployeeList("inactive");
                  console.log("Register Employee status are ",registerEmployee);}
                
                }> New Employee </span>
              <span onClick={()=>{ setEmployeeList("active");
              setRegisterEmployee("inactive")
                console.log(" Employee List status are ",emoloyeeList);

              }}> Employees List</span>              
          </div>
        </div>
       
     
            
       
       

        
      </div>
      

     {/* <AddContact addContactHandler = { addContactHandler }/>*/ }
    {/*  <ContactList contacts={contacts} getContactId={ removeContactHandler}/> */}
      
    </div>
)
}
export default AdminPortal;