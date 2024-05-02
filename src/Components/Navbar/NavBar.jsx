import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { GrLanguage } from "react-icons/gr";
import logo from "../../assets/coursline_logo.webp"
import { useDispatch, useSelector } from 'react-redux';
import { setRole } from '../../Redux/Slices/Authslice';
const NavBar = () => {
    
    const dispatch=useDispatch()
    const userRole=()=>{
        dispatch(setRole("teacher"))
    }
    return (
        <nav className='navbar'>
           <div className='navleft'>
            <div className='logodiv'>
            <img src={logo}alt="logo" className='logo' />
            <h5>CourseLine</h5>
            </div>
            <Link className='lien' to={"/"}>Home</Link>
            <Link className='lien' to={"/about"}>About</Link>
            <Link className='lien' to={"/contact"}>Contact us</Link>
           </div>
           <div className='navright'>
            <label htmlFor="">Sign up :</label>
            <Link to={"/register"}className='bluebtn ' onClick={()=>dispatch(setRole("teacher"))}>Teacher</Link>
            <Link to={"/register"}className='bluebtn' onClick={()=>dispatch(setRole("student"))}>Student</Link>
            <Link to={"/login"}className='btn'>Login</Link>
            <GrLanguage />
           </div>
        </nav>
    );
};

export default NavBar;