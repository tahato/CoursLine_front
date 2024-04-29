import { Swiper, SwiperSlide } from "swiper/react";
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

const LandingPage = () => {
  return (
    <div>
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
            COURSELINE connect students with teachers in live sessions and
            online  courses for all academic education levels : middle
            school ,Secondary and university.
          </h1>
        </article>
        <div className="homeIllustrations">
          <article className="description_article">
            <h1>
              students can get the course they need instructred by the teacher
              they want, and interact with him,
              <br />
              wherever they are.
            </h1>
          </article>
          <div className="illustration">
            <img src={student} alt="student" className="studentimg" />
          </div>
        </div>
        <div className="homeIllustrations">
          <div className="illustration">
            <img src={bus} alt="student" className="studentimg" />
          </div>
          <article className="description_article">
            <ul className="desclist">
              <li>
                {" "}
                <h1>No More traveling</h1>
              </li>
              <li>
                <h1> No more buses</h1>
              </li>
              <li>
                <h1> No waste of time</h1>
              </li>
            </ul>
          </article>
        </div>
        <div className="homeIllustrations">
          <article className="description_article">
            <h1>
              Sign up as a teacher
              <br />
              and reach the max number of student <br />
              from your own home
            </h1>
          </article>
          <div className="illustration">
            <img src={teacher} alt="student" className="studentimg" />
          </div>
        </div>
        <div className="homeIllustrations">
          <div className="illustration">
            <img src={room} alt="student" className="studentimg" />
          </div>
          <article className="description_article">
            <h1>
              what you are waiting for! <br />
              you are not in need to be worry about the building anymore <br />
              just sign up and start teaching
            </h1>
          </article>
        </div>
      </section>
      <section className="showcousres">
        <h1>Our courses</h1>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
