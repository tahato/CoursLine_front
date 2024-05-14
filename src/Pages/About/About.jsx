import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import university from "../../assets/university.webp";
import "./About.css";
const About = () => {
  return (
    <div className="allAbout">
      <NavBar></NavBar>
      <div className="aboutPage">
        <h1 className="aboutTitle">CouseLine</h1>
        <article className="aboutP">
          E-learning platform created in 2024 by Algerien developper the best
          place to connect teachers with students around the country for all
          academic levels, this platform alows teachers to attend a huge
          number of students , and gives students the chance to get courses
          frome the teacher they want ,from home
        </article>
        <img src={university} alt="" />
      </div>
      <div className="fot">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
