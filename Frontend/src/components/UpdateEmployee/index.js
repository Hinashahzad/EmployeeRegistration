import React,{ useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeRegistrationSchema } from "../../ValidationSchema";
import { useForm } from 'react-hook-form';

const UpdateEmployee =( props) =>{
    const [employee, setEmployee] = useState(props.employee);
    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm({ resolver: yupResolver(employeeRegistrationSchema) });

    const updateOnSubmit =(data) => {
        console.log("Inside the Update Component ", data);
        props.updateContactHandler(data);
        setEmployee({firstName:"", lastName:"", email:"", address:"", phone:"", jobTitle:""});
}
    return(<>
            <div className="main-content">
            <div className="form-heading">
                <span className="title"> Update the Existing Employee record</span>
            </div>
            <form className="employee-registration-form" onSubmit={handleSubmit(updateOnSubmit)} >
              
                    <div className="form-field">
                        <label>First Name <span> * </span></label>
                        <div className="input-error">
                            <input
                                type="text"
                                autoComplete="off"
                                value={employee.firstName}
                                {...register("firstName", {onChange:(e)=>{setEmployee({firstName: e.target.value})}})}
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
                                value= {employee.lastName}
                                {...register("lastName", {onChange:(e) => { setEmployee({lastName:e.target.value})}})}
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
                            value= {employee.email}
                            {...register('email', {onChange: (e)=> { setEmployee({email: e.target.value})}})} />
                        <span>{errors.email?.message}</span>
                    </div>
                </div>
                    <div className="form-field">
                        <label>Address <span> * </span></label>
                        <div className="input-error">
                            <input
                                type="text"
                                autoComplete="off"
                                value={employee.address}
                                {...register("address" , {onChange: (e) => { setEmployee({ address: e.target.value })}})}
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
                                value={employee.phone}
                                {...register("phone", { onChange: (e) =>{ setEmployee({ phone: e.target.value})}})}
                            />
                            <span>{errors.phone?.message}</span>
                        </div>
                    </div>
              
                <div className="form-field">
                    <label>Job Title<span> * </span></label>
                    <div className="input-error">
                        <input
                            type="text"
                            autoComplete="off"
                            value={employee.jobTitle}
                            {...register('jobTitle', {onChange: (e) => { setEmployee({ jobTitle: e.target.value})}})} />
                        <span>{errors.jobTitle?.message}</span>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn-class" type="submit">
                        Update
                    </button>
                    <button className="btn-class cancel">
                        Cancel
                    </button>
                </div>
            </form>

        </div>
       
    </>)
}
export default UpdateEmployee;