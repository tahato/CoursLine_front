import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Pagination } from "@mui/material";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./AllCourses.css";
import Stack from "@mui/material/Stack";
import CardCourse from "../CardCourse/CardCourse";



const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
console.log("thiss ssear", search);
  const filteredCourses =
    search === ""
      ? courses
      : courses.filter((course) => course.module === search.name);

  // ..........MUI declaration Card Component................
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  // ........................get All Courses From Database..................................
  useEffect(() => {
    axios
      .get(`http://localhost:3000/course?page=${page}`)
      .then((res) => {setCourses(res.data.course)
        setTotalPages(res.data.totalPages)})
      .catch((err) => alert("connection failed", err.message));
  }, [page]);

  const [items, setItems] = useState([]);
  useEffect(() => {
    courses.map((course, index) => {
      setItems((prevItem) => [...prevItem, { id: index, name: course.module }]);
    });
  }, [courses]);

  // ...............handle search Bar functions...........................
  const handleOnSearch = (string, results) => {
    // Triggered when the user types in the search input
    console.log("hhhhhhhh", string, results);
  };


  const handleOnSelect = (item) => {
    // Triggered when the user selects an item from the suggestions list
    setSearch(item);
  };

  return (
    <div>
      <div className="search-bar-container">
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          
          onSelect={handleOnSelect}
        />
      </div>
      <div className="courseContainer">
        {filteredCourses?.map((course) => (
          <CardCourse  key={course._id} course={course}>
        
          </CardCourse>
        ))}
      </div>
      <Stack spacing={2} className="pagination">
        <Pagination
          color="primary"
          page={page}
          count={totalPages}
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </Stack>
     
    </div>
  );
};

export default AllCourses;
