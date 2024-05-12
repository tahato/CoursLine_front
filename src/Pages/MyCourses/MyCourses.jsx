import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardCourse from "../../Components/CardCourse/CardCourse";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const MyCourses = () => {
  const userId = useSelector((state) => state.auth?.user?._id);
  const [courses, setCourses] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/course/user/${userId}`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.log("connection failed", err.message));
  }, []);
  return (
    <div>
      <div className="courseContainer">
        
        {courses?.map((course) => (
          <CardCourse key={course._id} course={course}></CardCourse>
        ))}
      </div>
    
    </div>
  );
};

export default MyCourses;
