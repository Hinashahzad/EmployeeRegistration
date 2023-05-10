import React from "react";
import EmployeeCard from "../EmployeeCard";

const EmployeeList = (props) =>
{
    console.log(props);
    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) =>
    {
        return <EmployeeCard contact={contact} clickHandler={deleteContactHandler} key={contact.id }/>
        {/*<ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id }/>*/};
    });
    return (
        <div class="main">
            <h2>Contact List</h2>
            <div className="ui celled list"> { renderContactList} </div>
            </div>
    );
};
export default EmployeeList;