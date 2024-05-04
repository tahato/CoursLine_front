import { RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

import NavBar from "../../Components/Navbar/NavBar";
import "./Teacher.css";
import CreateCourse from "../../Components/CreateCourse/CreateCourse";
import { useState } from "react";
import CreateClasse from "../../Components/CreateClasse/CreateClasse";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Slices/Authslice";
const Teacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [create, setCreate] = useState("");
  const { user } = useSelector((state) => state.auth);

  const createCourse = () => {
    setCreate(true);
  };
   // logout function
   const logoutHandle = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <NavBar></NavBar>
      <div>
        <div>
          {create == "createCourse" ? (
            <CreateCourse ></CreateCourse>
          ) : create == "createClasse" ? (
            <CreateClasse></CreateClasse>
          ) : (
            <div></div>
          )}
        </div>

        {/* ..........side bar component ................................... */}
        <aside className="sidebar">
          <div className="upSidebare">
            <div className="Name1side1bare">
              <h5>{user && user.lastName}</h5>
              <h5>{user && user.firstName}</h5>
            </div>
            <div className="imgprofile">{user && user.lastName[0]}</div>
          </div>
          <ul className="sidelist">
            <li className="listelement">
              {" "}
              <ImBooks className="sidebarIcon" />
              My Courses
            </li>
            <li
              className="listelement"
              onClick={() => setCreate("createCourse")}
            >
              {" "}
              <ImBooks className="sidebarIcon" />
              Add Course
            </li>

            <li
              className="listelement"
              onClick={() => setCreate("createClasse")}
            >
              My clases
            </li>
          </ul>
          <ul className="sidelist">
            <li className="listelement">
              {" "}
              <CgProfile className="sidebarIcon" />
              Profile
            </li>

            <li className="listelement">
              <IoSettings className="sidebarIcon" />
              Settings
            </li>
          </ul>
          <ul className="sidelist">
            <li className="listelement"  onClick={logoutHandle}>
              {" "}
              <RiLogoutBoxFill className="sidebarIcon" />
              Logut
            </li>
          </ul>
        </aside>
        {/* ..........end side bar component ................................... */}
      </div>
    </>
  );
};

export default Teacher;
