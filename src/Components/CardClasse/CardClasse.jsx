import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import room from "../../assets/room.webp";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashBinSharp } from "react-icons/io5";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { RiEdit2Fill } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { updateUser } from "../../Redux/Slices/Authslice";

const CardClasse = ({ classe }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // dialog confirmation pop-up
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // delete classe function
  const deleteClasse = () => {
    axios
      .delete(`${import.meta.env.VITE_URL}/classe/delete/${classe._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        toast.success(res.data.message, {
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
    navigate(`/teacher/myCourses`);
  };
    // add student to courses
    const addStudToCourse = () => {
      axios
      .put(
        `${import.meta.env.VITE_URL}/course/student/${classe.course._id}`,
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
    }
    // add student to classe (push id student to classe document)
    const addStudToClasse = () => {
      axios
      .put(
        `${import.meta.env.VITE_URL}/classe/student/${classe._id}`,
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
    }
  // student join a class function ,student id will be added to Classe and course document ,and student will get course id and classe id
  const joinClasse = () => {
    // add classe id and course id to sutdent
    axios
      .put(
        `${import.meta.env.VITE_URL}/user/classe/${user._id}`,
        {
          courseId: classe.course._id,
          classeId: classe._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) =>{
        toast.success(res.data.message, {   
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        dispatch(updateUser(res.data.user)) // update user to get new list of courses
      }
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
    addStudToCourse()
    // add student to classes
    addStudToClasse()
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={classe._id} className="courseCard">
      <CardHeader
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
      {/* teacher side buttons options div */}
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
          <div className="cardIcon delete " onClick={handleClickOpen}>
            <IoTrashBinSharp />
          </div>
        </div>
      ) : (
        //  student side buttons options div
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
      {/* tostify component */}
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* dialog dlelte confirmation */}
        <DialogTitle id="responsive-dialog-title">
          {"Are you sur ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            By click on delete you will remove this classe
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={deleteClasse} autoFocus style={{ color: "red" }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default CardClasse;
