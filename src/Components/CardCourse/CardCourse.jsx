import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import room from "../../assets/room.webp";
import { useNavigate } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { BiDollar } from "react-icons/bi";
import "./CardCourse.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
const CardCourse = ({ course }) => {
  const { user } = useSelector((state) => state.auth);
  const { isAuth } = useSelector((state) => state.auth);
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
  const navigate = useNavigate();
  // delete Course.......................
  const deleteCourse = () => {
  
// delete course from courses document
    axios
      .delete(`${import.meta.env.VITE_URL}/course/delete/${course._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
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
      // delete classes matched with the deleted course 
      axios
      .delete(`${import.meta.env.VITE_URL}/classe/course/${course._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
      console.log(res.data);
      })
      .catch((err) => {
       alert(err)
      });
      // delete course from user document
      course.students.map((stud)=>{
        axios
        .put(
          `${import.meta.env.VITE_URL}/user/delete/course/${user._id}`,
          {
            courseId: course._id,
          
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      })
      
      handleClose()
  };
  return (
    <Card sx={{ maxWidth: 345 }} key={course._id} className="courseCard">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {course.user.image ? (
              <img src={course.user.image} alt="" className="cardPhoto" />
            ) : (
              course.user.firstName[0].toUpperCase()
            )}
          </Avatar>
        }
        
        title={
          course.user.firstName.toUpperCase() +
          " " +
          course.user.lastName.toUpperCase()
        }
        subheader={course.user.role.toUpperCase()}
      />
      <CardMedia component="img" height="194" image={room} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          <div className="courseCardInfo">
            <h1> {course.module} </h1>

            <div className="cardMainInfo">
              <div>
                <h3> {course.school} </h3>
                <h3 className="price"> {course.price} DA </h3>
              </div>
              <div>
                <h3> {course.category} </h3>
                <h4> {course.level} </h4>
              </div>
            </div>
          </div>

          <p>{course.description}</p>
        </Typography>
      </CardContent>
      {/* display option div for authentified teachers */}
      {isAuth && user._id == course.user._id ? (
        <div className="redirect ">
          <div
            className="cardIcon show"
            onClick={() => navigate(`/${user.role}/classes/${course._id}`)}
          >
            <SiGoogledisplayandvideo360 />
          </div>
          {user.role == "teacher" && (
            <div className="cardIcon delete" onClick={handleClickOpen}>
              <IoTrashBinSharp />
            </div>
          )}
        </div>
      ) : (
        // display option div for authentified students
        isAuth &&
        user.role == "student" && (
          <div className="redirect show">
            {!course.students.includes(user._id) ? (
              <div
                className="cardIcon"
                onClick={() => navigate(`/${user.role}/classes/${course._id}`)}
              >
                <BiDollar />
              </div>
            ) : (
              <div
                className="cardIcon"
                onClick={() => navigate(`/${user.role}/classes/${course._id}`)}
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
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {" Are you sur ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           <br />
           By click on delete you will remove this course and classes included

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={deleteCourse} autoFocus style={{color:"red"}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default CardCourse;
