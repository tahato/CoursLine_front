import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaPinterestSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Footer.css"

const footer = () => {
  return (
    <footer>
      <div className="upfooter ">
        <div className="leftfooter">
          <Link to={"/"}> CourseLine</Link>
          <p>
            CourseLine is a leading online learning platform that offers a
            variety of Academic courses.
          </p>
        </div>
        <div className="rightfooter">
            <Link>About</Link>
            <Link>Licence</Link>
            <Link>Contact us</Link>
        </div>
      </div>
      <div className="downfooter">
<p>stay connected</p>
<ImFacebook2/>
<FaTwitterSquare/>
<ImInstagram/>
<ImLinkedin/>
<FaPinterestSquare/>
<ImYoutube/>
      </div>
      <p>© 2024 CourseLine. All Rights Reserved</p>
    </footer>
  );
};

export default footer;
