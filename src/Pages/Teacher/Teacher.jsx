import { RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { ImBooks } from "react-icons/im";

import NavBar from "../../Components/Navbar/NavBar";
import "./Teacher.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Slices/Authslice";
import { TbBellSchool } from "react-icons/tb";
import { setComponent } from "../../Redux/Slices/CourseSlice";
import { useEffect } from "react";
const Teacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // logout function
  const logoutHandle = () => {
    dispatch(logout());
    navigate("/");
  };
  //   function to change the menu
  const changeMenu = (m) => {
    dispatch(setComponent(m));
  };
  useEffect(() => {
    navigate("/teacher/myCourses");
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div>
        <div>
          <Outlet />
        </div>

        {/* ..........sideBar component ................................... */}
        <aside className="sidebar">
          <div className="upSidebare">
            <div className="Name1side1bare">
              <h5>{user && user.lastName}</h5>
              <h5>{user && user.firstName}</h5>
            </div>
            <div className="imgprofile">
            {user.image ? (
              <img src={user.image} alt="profile" className="cardPhoto" />
            ) : (
              user && user.lastName[0]
            )}
          </div>
          </div>
          <ul className="sidelist">
            <Link to={"/teacher/allCourses"} className="sideLink">
              <li className="listelement">
                {" "}
                <ImBooks className="sidebarIcon" />
                All Courses
              </li>
            </Link>
            <Link to={"/teacher/myCourses"} className="sideLink">
              <li
                className="listelement"
                onClick={() => changeMenu("myCourses")}
              >
                {" "}
                <ImBooks className="sidebarIcon" />
                My Courses
              </li>
            </Link>

            <Link to={"/teacher/createCourse"} className="sideLink">
              <li className="listelement">
                {" "}
                <ImBooks className="sidebarIcon" />
                Add Course
              </li>
            </Link>

            <Link to={"/teacher/myClasses"} className="sideLink">
              <li className="listelement">
                <TbBellSchool className="sidebarIcon" />
                My clases
              </li>
            </Link>
          </ul>
          <ul className="sidelist">
            <NavLink to={"/teacher/profile"}>
              <li className="listelement">
                {" "}
                <CgProfile className="sidebarIcon" />
                Profile
              </li>
            </NavLink>
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
    </>
  );
};

export default Teacher;
