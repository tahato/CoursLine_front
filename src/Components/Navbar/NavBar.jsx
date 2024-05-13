import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { GrLanguage } from "react-icons/gr";
import logo from "../../assets/coursline_logo.webp";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../Redux/Slices/Authslice";
const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
const navigate=useNavigate()
  return (
    <nav className="navbar">
      <div className="navleft">
        <div className="logodiv">
          <img src={logo} alt="logo" className="logo" />
          <h5>CourseLine</h5>
        </div>
        <Link className="lien" to={"/"}>
          Home
        </Link>
        <Link className="lien" to={"/about"}>
          About
        </Link>
        <Link className="lien" to={"/contact"}>
          Contact us
        </Link>
      </div>
      <div className="navright">
        {!isAuth ? (
          <>
            <label htmlFor="">Sign up :</label>
            <Link
              to={"/register"}
              className="bluebtn "
              onClick={() => dispatch(setRole("teacher"))}
            >
              Teacher
            </Link>
            <Link
              to={"/register"}
              className="bluebtn"
              onClick={() => dispatch(setRole("student"))}
            >
              Student
            </Link>
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </>
        ) : (
          <div className="rightNav">
          <h3>{user.role.toUpperCase()}</h3>
          <div onClick={()=>navigate(`/${user.role}/allCourses`)}>
            {user.lastName[0].toUpperCase()+user.firstName[0].toUpperCase()}
          </div>
           </div>
        )}

       
      </div>
    </nav>
  );
};

export default NavBar;
