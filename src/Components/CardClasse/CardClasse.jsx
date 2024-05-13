import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import room from "../../assets/room.webp";
import { useSelector } from "react-redux";
import { IoTrashBinSharp } from "react-icons/io5";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { RiEdit2Fill } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CardClasse = ({ classe }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const deleteClasse = () => {
    axios
      .delete(`http://localhost:3000/classe/delete/${classe._id}`)
      .then((res) => {
        console.log(res.data);
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
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  // add a student for a classe
  const joinClasse = () => {
    axios
      .put(
        `http://localhost:3000/user/classe/${user._id}`,
        {
          courseId: classe.course._id,
          classeId: classe._id,
        },
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      )
      .then((res) =>
        toast.success(res.data, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((err) =>
        toast.error(err.response.data, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
    // add student to courses
    axios
      .put(
        `http://localhost:3000/course/student/${classe.course._id}`,
        {
          userId: user._id
        },
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
    // add student to classes
    axios
      .put(
        `http://localhost:3000/classe/student/${classe._id}`,
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={classe._id} className="courseCard">
      <CardHeader
        //   action={
        //     <IconButton aria-label="settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
        title={classe.name}
        //   subheader={course.user.role.toUpperCase()}
      />
      <CardMedia component="img" height="194" image={room} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div className="cardMainInfo">
            <div>
              <h3> {classe.day} </h3>
            </div>
            <div>
              <h2> {classe.startTime} </h2>
              <h2> {classe.endTime} </h2>
            </div>
          </div>
        </Typography>
      </CardContent>
      {isAuth && user.role == "teacher" ? (
        <div className="redirect">
          <div
            id="show"
            className="cardIcon show"
            onClick={() => navigate(`/meet/${classe._id}`)}
          >
            <SiGoogledisplayandvideo360 />
          </div>

          <div
            className="cardIcon show"
            onClick={() => navigate(`/teacher/editClasse/${classe._id}`)}
          >
            <RiEdit2Fill />
          </div>
          <div className="cardIcon" id="delete" onClick={deleteClasse}>
            <IoTrashBinSharp />
          </div>
        </div>
      ) : (
        isAuth &&
        user.role == "student" && (
          <div className="redirect">
            {!classe.user.includes(user._id) ? (
              <button className="btn" onClick={joinClasse}>
                Join the classe
              </button>
            ) : (
              <div
                id="show"
                className="cardIcon show"
                onClick={() => navigate(`/meet/${classe._id}`)}
              >
                <SiGoogledisplayandvideo360 />
              </div>
            )}
          </div>
        )
      )}

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
    </Card>
  );
};

export default CardClasse;
