import * as React from "react";
import { styled } from "@mui/material/styles";
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

const CardCourse = ({course}) => {
    return (
        <Card sx={{ maxWidth: 345 }} key={course._id} className="courseCard">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {course.user.firstName[0].toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                course.user.firstName.toUpperCase() +
                " " +
                course.user.lastName.toUpperCase()
              }
              subheader={course.user.role.toUpperCase()}
            />
            <CardMedia
              component="img"
              height="194"
              image={room}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <div className="courseCardInfo">
                  <div>
                    <h3> {course.school} </h3>
                    <h3> {course.categoru} </h3>
                    <h4> {course.level} </h4>
                  </div>
                  <div>
                    <h1> {course.module} </h1>
                    <h3> {course.price} DA </h3>
                  </div>
                </div>

                <p>{course.description}</p>
              </Typography>
            </CardContent>
          </Card>
    );
};

export default CardCourse;