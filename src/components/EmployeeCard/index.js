import React from "react";
import user from "../../images/user.png";
import {RiDeleteBin5Line} from 'react-icons/ri';
import './index.scss';
const EmployeeCard = (props) =>
{
    console.log("props.contact", props.contact);
    const { id, firstName, lastName, email, address, phoneNo,jobTitle } = props.contact;
    
    return (<div className="employee-card">
        <div className="card-content">
            <div className="card-image">
                <img src={user} alt=""></img>
            </div>
            <div className="card-text">
            <div className="card-text-inner">
                <span> Name: </span>
                <span> {firstName} {lastName} </span>
            </div>
            <div className="card-text-inner">
                <span> Email: </span>
                <span>{email} </span>
            </div>
            <div className="card-text-inner">
                <span> Address: </span>
                <span>{address} </span>
            </div>
            <div className="card-text-inner">
                <span> Contact no: </span>
                <span>{phoneNo} </span>
            </div>
            <div className="card-text-inner">
                <span> Job Title: </span>
                <span>{jobTitle} </span>
            </div>
            </div>
            <div className="delete-button">
                <RiDeleteBin5Line onClick={() => props.clickHandler(id)}/>
                
            </div>
        </div>
    </div>
       );

}

export default EmployeeCard; 