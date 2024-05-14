import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./AllCourses.css";
import CardCourse from "../../Components/CardCourse/CardCourse";


const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [module, setModule] = useState();
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
 
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
      .get(`${import.meta.env.VITE_URL}/course?page=${page}`)
      .then((res) => {
        setCourses(res.data.course);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.log( " Course  connection failed", err.message));
  }, [page]);

  // ...........get all modules avilabe in database to the search bar.....................
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/course/module`)
      .then((res) => {
        setModule(res.data);
      })
      .catch((err) => console.log("Module connection failed", err.message));
  }, []);
 

  useEffect(() => {
    module?.map((module, index) => {
      setItems((prevItem) => [...prevItem, { id: index, name: module }]);
    });
  }, [module]);

  // ...............handle search Bar functions...........................
  const handleOnSearch = (string, results) => {
    if (string=="")setSearch(string)

  };

  const handleOnSelect = (item) => {
    // Triggered when the user selects an item from the suggestions list
    setSearch(item);
  };

  return (
    <div>

      {/* search bar ............... */}
      <div className="search-bar-container">
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          className="searchBar"
        />
      </div>
      {/* ...........main Courses...................... */}
      <div className="courseContainer">
        {filteredCourses?.map((course) => (
          <CardCourse key={course._id} course={course}></CardCourse>
        ))}
      </div>
      {/* ....................pagination.................... */}
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
