import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { employeeRegistrationSchema } from "../../ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai'
import './index.scss';
const AddEmployee = (props) => {
    
    const [ updateStatus, setUpdateStatus ] = useState(false);
    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm({ resolver: yupResolver(employeeRegistrationSchema) });
    const onSubmit = ( data ) => {

        props.addContactHandler( data );
        setUpdateStatus(true);
        setTimeout(()=>{
            setUpdateStatus(false);
        }, 1000);
        reset();
    }

    useEffect(()=>{
        console.log("ADD Employee UseEffect is calling....");
    }, [])
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
                        <label>Contact no<span> * </span></label>
                        <div className="input-error">
                            <input
                                type="phoneno"
                                autoComplete="off"
                                placeholder="Enter contact number"
                                {...register("phone")}
                            />
                            <span>{errors.phoneNo?.message}</span>
                        </div>
                    </div>
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
                    { updateStatus && (<div className="success">
                       <div className="circle">
                       <AiOutlineCheck />
                       </div>
                        <span>Record added <FaUserAlt /></span></div>)}
                    <button className="btn-class" type="submit">
                        Add
                    </button>
                    
                   
                </div>
            </form>
        </div>)
}
export default AddEmployee;