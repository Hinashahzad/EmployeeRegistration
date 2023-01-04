import React from "react";
import user from "../images/user.png"

const ContactCard = (props) =>
{
    const { id, name, email } = props.contact;
    
    return (
        <div className="item">
            <img className="ui avtar image" src={user} alt="user" sizes="2"></img>
            <div className="content">
                <div className="header">{name}</div>
                <i className="trash alternate outline icon"
                    style={{ color: "red", position: "absolute", right: 10 }}
                    onClick={() => props.clickHandler(id)}></i>
                <div>{email}</div>
            </div>

        </div>);

}

export default ContactCard; 