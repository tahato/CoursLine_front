import { useEffect, useState } from "react";
import "./Meet.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../../Components/Navbar/NavBar";
const Meet = () => {
  const { classeId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [wherebyRoomUrl, setWherebyRoomUrl] = useState();
  const [wherebyhostroomUrl, setWherebyHostRoomUrl] = useState();
  const [inputMeetUrl, setInputMeetUrl] = useState("");
  const [lien, setLien] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/meet").then((res) => {
      setWherebyRoomUrl(res.data.roomUrl);
      setWherebyHostRoomUrl(res.data.hosturl);
    });

    if (user.role == "student") {
      axios.get(`http://localhost:3000/classe/${classeId}`).then((res) => {
        setLien(res.data.roomUrl);
      });
    } else {
      setLien(wherebyhostroomUrl);
    }
  }, []);
  console.log("lieennnnn", lien);

  // submit link to database
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://courseline-back.onrender.com/classe/link/${classeId}`,
        {
          url: inputMeetUrl,
        },
        
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        toast.success(res.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="startMeet">
      {user.role == "teacher" && (
        <>
          <h1>Put youe GoogleMeet Link</h1>
          <form
            action=""
            on
            onSubmit={(e) => handleSubmit(e)}
            className="meetForm"
          >
            <input
              type="text"
              placeholder="enter meet Link"
              className="meetInput"
              onChange={(e) => setInputMeetUrl(e.target.value)}
            />
            <button type="submit" className="bluebtn">
              Share Link
            </button>
          </form>
          <h3>ــ OR start classe with WHERBY ــ </h3>
        </>
      )}

      <a href={!lien||lien==""? wherebyRoomUrl:lien} className="bluebtn" target="blank">
        start classe
      </a>

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
    </div>
    </>
  );
};

export default Meet;
