import React from "react";
import EmployeeCard from "../EmployeeCard";
import './index.scss';

const EmployeeList = (props) =>
{
    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    }

    const receivingUpdateEmployee =(employee)=>{
        console.log(employee);
        props.receiveUpdatedEmployee(employee);
    }
    
    const renderContactList = props.contacts.map((contact) =>
    {
        return (
        
        <EmployeeCard contact={contact}  receivingUpdateEmployee= {receivingUpdateEmployee} clickHandler= {deleteContactHandler} key={contact.id }/>
        )
    });
    return (
        <div class="employee-list-content">
            <div className="employee-list-heading">
                <span className="heading"> Registered Employees</span>
            </div>
            <div className="employee-list-details">
                <div className="employee-list">
                { renderContactList} 
                </div>
            </div>
            </div>
    );
};
export default EmployeeList;