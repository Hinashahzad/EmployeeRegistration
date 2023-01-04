import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';

function App() {
 //useState Hooks in React
 const LOCAL_STORAGE_KEY = "contacts";
 const [contacts, setContacts] = useState([]);
  
const addContactHandler = (contact) =>
{
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
  
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/> 
      <ContactList contacts={contacts} getContactId={ removeContactHandler}/>
      
    </div>
  );
}

export default App;
