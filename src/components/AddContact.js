import React from "react";

//This is class Component
class AddContact extends React.Component{
    state = {
        name: "", 
        email: "", 
    };

   add = (e) => {
       e.preventDefault();
       if (this.state.name === "" || this.state.email === ""){
       alert ("Both fields are mandatory!");
       return;
    }
    this.props.addContactHandler(this.state);
       console.log(this.state);
       this.setState({name: "", email:""})
   }
   
    render(){
        return (
            <div class="main">
            <div className="ui main">
                <div className="ui container center">
                    <form className="ui form" onSubmit={this.add}>
                        <h2>Add Contact</h2>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {this.state.name} 
                        onChange={(e) => this.setState({ name: e.target.value }) } >

                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name = "email" 
                        placeholder="Email"
                        value = {this.state.email}
                        onChange={(e) => this.setState({ email : e.target.value}) }></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

                </div>
                </div>
                </div>
        );
    }
    
}

export default AddContact;