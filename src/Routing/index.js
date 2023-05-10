import React from "react";
import Admin from "../components/Admin";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminPortal from "../components/AdminPortal/index";
const Routing =()=>{
return(<>
    <Router>
        <Routes>
            <Route path="/" element={<Admin/>}></Route>
            <Route path="/AdminPortal" element={<AdminPortal/>}></Route>
        </Routes>
    </Router>
</>)
}

export default Routing;