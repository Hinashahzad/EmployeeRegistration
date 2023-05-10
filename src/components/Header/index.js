import React from "react";
import { Segment, Image, Icon } from "semantic-ui-react";
import user from "../../images/user.png"
import './index.scss';
import { useNavigate } from "react-router-dom";

// This is Functional Component

const  Header = ()=>{
const navigate= useNavigate();
  return (
    <div className="header-main-content">
        <div className="header-inner-content">
            <span className="heading-title"> Welcome to Admin Portal </span>
            <div className="btn-container">
                <button className="logout-button" onClick={()=>{
                    navigate('/');
                }}> Logout </button>
            </div>
        </div>
    </div>
    );
}

export default Header;