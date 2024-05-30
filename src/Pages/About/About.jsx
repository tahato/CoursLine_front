import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import university from "../../assets/university.webp";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="allAbout">
        <NavBar></NavBar>
        <div className="aboutPage">
          <h1 className="aboutTitle">CouseLine</h1>
          <article className="aboutP">
            Welcome to CourseLine, your premier destination for online learning!
            We are dedicated to bridging the gap between knowledge and learners
            worldwide by providing a dynamic e-learning platform where teachers
            can create and share their courses in real-time with students. Our
            mission is to empower educators to deliver engaging and interactive
            lessons, while offering students the flexibility to explore a wide
            range of courses and connect with instructors who inspire them. Join
            us at CourseLine, where education meets innovation, and take your
            learning journey to the next level.
          </article>
          <img src={university} alt="" />
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
