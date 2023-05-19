import React ,{useState}from "react";
import { userSchema} from '../../ValidationSchema/index';
import { yupResolver } from "@hookform/resolvers/yup"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './index.scss';
import { FcApproval } from 'react-icons/fc';
import AdminPortal from "../AdminPortal";

const Admin =()=> {
    const[ auth, setAuth ] = useState(false); 
    const [isloading, setIsLoading] = useState(false);
    const navigate= useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({ resolver: yupResolver(userSchema) });
        
      const onSubmit =( data )=>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            if (data.username ==="admin" && data.password ==="123"){
                setAuth(true);
                reset();
            }
            else{
                setAuth(false);
                alert("Invalid Admin");
                reset();
               
            }
        }, 1000);
       
       
        }
return (
<div className="main-div"> 
   <div className="main-content">
    <div className="heading">
        <span className="heading-text"> Employee Registration System </span>
        
    </div>
    <div className="content">
        <form className="Admin-login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label className="form-label">Username</label>
                <input className="form-input" 
                name="username"
                type="text" 
                placeholder="Enter username" 
                {...register('username', { required: true })}/>
                <span>{errors.username?.message}</span>
            </div>
            <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input" 
                name="password"
                type="password" 
                placeholder=" Enter password" 
                {...register('password', { required: true })}/>
                <span>{errors.password?.message}</span>
            </div>
            <div className="btn-container">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </div>
</div>

    {isloading && (<div className="loader"></div>)}
    { auth && (  
        <>
        <div className="opac-layer"></div>
        <div className="popup-box">
            <div className="popup-box-inner">
            <div className="approve-icon">
                <FcApproval />
            </div>
        <div className="popup-box-inner-content">
            <span className="message"> Authentiaction successfull! </span>
        </div>
        <div className="btn-container">
            <button className="button-ok" onClick={()=>{
                setAuth(false);
                navigate('/AdminPortal', {state: auth});

            }}> OK </button>
        </div>
    </div>
</div> 
</>)}
 
    </div>
)
}
export default Admin;