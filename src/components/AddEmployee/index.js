import React from "react";
import { useForm } from "react-hook-form";
import { employeeRegistrationSchema } from "../../ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import './index.scss';
const AddEmployee = (props) => {

    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm({ resolver: yupResolver(employeeRegistrationSchema) });

    const onSubmit = ( data ) => {
        //console.log( data );
        props.addContactHandler( data );
        reset();
    }
    return (
        <div className="main-content">
            <div className="form-heading">
                <span className="title"> Enter Employee details</span>
            </div>
            <form className="employee-registration-form" onSubmit={handleSubmit(onSubmit)} >
              
                    <div className="form-field">
                        <label>First Name <span> * </span></label>
                        <div className="input-error">
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Enter First Name"
                                {...register("firstName")}
                            />
                            <span>{errors.firstName?.message}</span>
                        </div>
                    </div>
                    <div className="form-field">
                        <label>Last Name</label>
                        <div className="input-error">
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Enter Last Name"
                                {...register("lastName")}
                            />
                            <span>{errors.lastName?.message}</span>
                        </div>
                    </div>
               
                <div className="form-field">
                    <label>Email <span> * </span></label>
                    <div className="input-error">
                        <input
                            type="email"
                            autoComplete="off"
                            placeholder='Enter Email'
                            {...register('email')} />
                        <span>{errors.email?.message}</span>
                    </div>
                </div>
                    <div className="form-field">
                        <label>Address <span> * </span></label>
                        <div className="input-error">
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Enter Address"
                                {...register("address")}
                            />
                            <span>{errors.address?.message}</span>
                        </div>
                    </div>
                    <div className="form-field">
                        <label>Phone No <span> * </span></label>
                        <div className="input-error">
                            <input
                                type="number"
                                autoComplete="off"
                                placeholder="Enter phone no"
                                {...register("phoneNo")}
                            />
                            <span>{errors.phoneNo?.message}</span>
                        </div>
                    </div>
              
                {/*<div className="form-group">
          <div className="form-field">
            <label>Age <span> * </span></label>
            <div className="input-error">
              <input
                type="number"
                autoComplete="off"
                placeholder="Enter age"
                {...register("age")}
              />
              <span>{errors.age?.message}</span>
            </div>
          </div>
         <div className="form-field"> 
            <label>gender</label>
            <div className="input-error">
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter Last Name"
                {...register("lastName")}
              />
              <span>{errors.lastName?.message}</span>
            </div>
    </div> 
        </div>*/}
                <div className="form-field">
                    <label>Job Title<span> * </span></label>
                    <div className="input-error">
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder='Enter Job title'
                            {...register('jobTitle')} />
                        <span>{errors.jobTitle?.message}</span>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn-class" type="submit">
                        Add
                    </button>
                    <button className="btn-class cancel" onClick={()=>{
                        reset("");
                    }}>
                        Reset
                    </button>
                </div>
            </form>

        </div>)
}
export default AddEmployee;