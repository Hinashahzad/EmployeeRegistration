import React from "react";
import { Segment, Image, Icon } from "semantic-ui-react";
import user from "../images/user.png"

// This is Functional Component

const  Header = ()=>{

  return (
    <div>
      <Segment attached="bottom" basic padded="very" color="red" size="tiny" textAlign="center" > 
        <Icon name='users' size='big' color="red" corner="top left" ></Icon>
          <h2 alignment="center">Contact Card</h2>
          
        </Segment>
      </div>
    );
}

export default Header;