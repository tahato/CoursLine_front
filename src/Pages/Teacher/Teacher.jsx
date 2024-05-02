import { RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

import NavBar from "../../Components/Navbar/NavBar";
import "./Teacher.css";
import CreateCourse from "../../Components/CreateCourse/CreateCourse";
import { useState } from "react";
import CreateClasse from "../../Components/CreateClasse/CreateClasse";
const Teacher = () => {
    const [create,setCreate]=useState(true)

    const createCourse=()=>{
        setCreate(true)
    }
  return (
    <>
      <NavBar></NavBar>
      <div> 
        <div>
            {create? (<CreateCourse></CreateCourse>): (<div></div>) }
        </div>
        <aside className="sidebar">
          <div className="upSidebare">
            <div className="Name1side1bare">
              <h5>benlakel</h5>
              <h5>taha</h5>
            </div>
            <div className="imgrofile">T</div>
          </div>
          <ul className="sidelist">
            <li className="listelement">
              {" "}
              <ImBooks className="sidebarIcon" />
              My Courses
            </li>

            <li className="listelement">My clases</li>
          </ul>
          <ul className="sidelist">
            <li className="listelement">
              {" "}
              <CgProfile className="sidebarIcon" />
             Profile
            </li>

            <li className="listelement">
              <IoSettings  className="sidebarIcon"/>
              Settings
            </li>
          </ul>
          <ul className="sidelist">
            <li className="listelement">
              {" "}
              <RiLogoutBoxFill  className="sidebarIcon"/>
              Logut
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Teacher;
