import React from "react";
import user from "../../images/user.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import "./index.scss";
const EmployeeCard = (props) => {
  const { id, 
    firstName, 
    lastName, 
    email, 
    address, 
    phone, 
    jobTitle } = props.contact;
  return (
    <div className="employee-card">
      <div className="card-content" key={id}>
        <div className="card-image" >
          <img src={user} alt=""></img>
        </div>
        <div className="card-text">
          <div className="card-text-inner">
            <span> Name: </span>
            <span>
              {firstName} {lastName}
            </span>
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
            <span>{phone} </span>
          </div>
          <div className="card-text-inner">
            <span> Job Title: </span>
            <span>{jobTitle} </span>
          </div>
        </div>
        <div className="btn-container">
          <RiDeleteBin5Line onClick={() => props.clickHandler(id)} />
          <BsPencilSquare
            onClick={() => { props.receivingUpdateEmployee(props.contact);}}/>
        </div>
      </div>
    </div>);
};

export default EmployeeCard;
