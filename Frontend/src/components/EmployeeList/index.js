import React, {useEffect, useRef, useState} from "react";
import EmployeeCard from "../EmployeeCard";
import {AiOutlineSearch} from 'react-icons/ai';
import './index.scss';

const EmployeeList = (props) =>
{
    const inputElement = useRef("");
   
    
    const searchEmployee = () => {
       
        //console.log(inputElement.current.value);
        props.searchHandler(inputElement.current.value);
    }
    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    }

    const receivingUpdateEmployee =(employee)=>{
        console.log(employee);
        props.receiveUpdatedEmployee(employee);
    }
    useEffect(()=>{
        console.log("Employee List UseEffect is calling....");
    }, [])
    
    const renderContactList = props.contacts.map((contact) =>
    {
        return (
        <EmployeeCard contact={contact}  receivingUpdateEmployee= {receivingUpdateEmployee} clickHandler= {deleteContactHandler} key={contact.id }/>
        )
    });
    return (
        <div className="employee-list-content">
            <div className='search-employee-container'>
                    <input
                    ref ={inputElement}
                    type='text'
                    placeholder='Enter Employee details to search employee'
                    value={props.term}
                    onChange={searchEmployee}></input>
                    <AiOutlineSearch/>
                    
                </div>

            <div className="employee-list-details">
                <div className="employee-list">
                { renderContactList.length>0 ? renderContactList : <p> No Employees available</p>} 
                </div>
            </div>
            </div>
    );
};
export default EmployeeList;