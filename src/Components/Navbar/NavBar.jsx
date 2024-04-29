import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { GrLanguage } from "react-icons/gr";
import logo from "../../assets/coursline_logo.webp"
const NavBar = () => {
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
            <Link to={"/register"}className='bluebtn '>Teacher</Link>
            <Link to={"/register"}className='bluebtn'>Student</Link>
            <Link to={"/login"}className='btn'>Login</Link>
            <GrLanguage />
           </div>
        </nav>
    );
};

export default NavBar;