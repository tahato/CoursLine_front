import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./LandingPage.css";
import student from "../../assets/student.webp";
import bus from "../../assets/bus.webp";
import home from "../../assets/home.webp";
import teacher from "../../assets/teach.webp";
import room from "../../assets/room.webp";
import Footer from "../../Components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import Mschool from "../../assets/Mschool.webp";
import secondary from "../../assets/secondary.webp";
import university from "../../assets/university.webp";
import SwiperHome from "../../util/SwiperHome/SwiperHome";
import Typewriter from "../../util/Typewriter"
const LandingPage = () => {
  // const { courses } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/course`)
      .then((res) => {
        dispatch(setCourses(res.data.course));
      })
      .catch((err) => console.log("connection failed", err.message));
  }, []);
  console.log(courses);

  return (
    <div >
      <img src={home} alt="home" className="mainimg" />
      <div className="titre">
        <h2>
          E-class learning
          <br />
          for anyone,anywhere
        </h2>
        <p>
          get startd to boost your
          <br />
          acadimic study career
        </p>
      </div>

      <section className="prsentation">
        <article className="titledescreption">
          <h1>
            {" "}
            <Typewriter text=" COURSELINE connect students with teachers in live sessions and
            online courses for all academic education levels : middle school
            ,High School and university." delay={40} />
           
          </h1>
        </article>
        {/* ajouter des image top page */}
        <h1 className="sous-titre">Boost Your Acdemic Career</h1>
        <section className="schoolimg">

          <div className="school">
            <img
              src={Mschool}
              alt="school"
              className="imgSchool"
              id="leftimg"
            />
            <h1>High School</h1>
          </div>
          <div className="school">
            <img
              src={secondary}
              alt="school"
              className="imgSchool"
              id="middleimg"
            />
            <h1>Secondary School</h1>
          </div>
          <div className="school">
            <img
              src={university}
              alt="school"
              className="imgSchool"
              id="rightimg"
            />
            <h1>University</h1>
          </div>
        </section>
        <section className="showcousres">
          <h1 className="sous-titre">Best Courses</h1>
          <SwiperHome courses={courses}></SwiperHome>
        </section>
        <div className="homeIllustrations">
          <article className="description_article">
            <div>
              <h1>As a student</h1> <br />
              <p>
                from your own home <br /> 
                you can get any course you wante the time you wante <br />
                designed by the teacher you like 
                all teachers you know,you saw in social media 
                are here to give you the best lessons.
              </p>
            </div>
          </article>
          <div className="illustration">
            <img src={student} alt="student" className="studentimg" />
          </div>
        </div>

        <div className="homeIllustrations">
          <div className="illustration">
            <img src={teacher} alt="student" className="studentimg" />
          </div>
          <article className="description_article">
            <div>
              <h1>Become a teacher </h1>
              <br />
              <p>
                Our platforme give you the opportunity to reach the number you
                wante of students <br />
                from your own home <br />
                without need to any building <br />
                CourseLine is your classroome
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
