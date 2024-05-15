import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import NavBar from "../../Components/Navbar/NavBar";
import "./Contact.css";
import Footer from "../../Components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs
        .sendForm(
          "service_l437khh",
          "template_3tv4x77",
          formRef.current,
          "xqAhi42zOToyHnvkC"
        )
        .then(
          () => {
            toast.success("message sent", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
      formRef.current.reset();
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="allContact">
      <div className="contactContainer">
        <div className="leftContact">
          <h1>Contact us</h1>
          <div>
            <h3>CourseLin@gmail.com</h3>
            <p>
              {" "}
              Sign up and get started at CourseLine <br />
              For any issues,Dont hesitate to send us <br />
              a full desceription for your probleme <br />
              <br />
              you will be satisfeid by our answer in just few time.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contactForm" ref={formRef}>
          <div className="upContact">
            <div className="entree">
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                id="name"
                required
                placeholder="FullName"
              />
            </div>
            <div className="entree" id="Email">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <textarea name="message" id="message" cols="30" rows="8"></textarea>
          <button type="submit" className="bluebtn btn">
            Send
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer></Footer>

      </div>
    </>
  );
};

export default Contact;
