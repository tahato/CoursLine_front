import { RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { ImBooks } from "react-icons/im";
import NavBar from "../../Components/Navbar/NavBar";
import "./Student.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../Redux/Slices/Authslice";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const Student = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [menue, setMenue] = useState("allCourses");

  // logout function
  const logoutHandle = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <NavBar></NavBar>
     
      <div>
      <Outlet />
      {/* {menue == "allCourses" ? <AllCourses></AllCourses> : <div></div>} */}
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
          <NavLink to={"allCourses"}  className="sideLink">
          <li className="listelement" onClick={()=>setMenue("allCourses")}>
            {" "}
            <ImBooks className="sidebarIcon" />
            All Courses
          </li>
          </NavLink>
         
          <Link to={"/student/myCourses"} className="sideLink">
          <li className="listelement">
            {" "}
            <ImBooks className="sidebarIcon" />
            My Courses
          </li>
          </Link>

          <li
            className="listelement"
            //   onClick={() => setCreate("createClasse")}
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
        </ul>
        <ul className="sidelist">
          <li className="listelement" onClick={logoutHandle}>
            {" "}
            <RiLogoutBoxFill className="sidebarIcon" />
            Logut
          </li>
        </ul>
      </aside>
      {/* ..........end side bar component ................................... */}
    </div>
  );
};

export default Student;
