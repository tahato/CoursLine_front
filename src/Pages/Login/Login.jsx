import logo from "../../assets/coursline_logo.webp";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../Redux/Slices/Authslice";
import signup from "../../assets/signup.svg";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ...............sign in mui component function.......................
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link to={"/"}>CoursLine.com</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const defaultTheme = createTheme();
  // ............... fin sign in mui component function.......................
console.log(role);
  // .......................form submit function.................................
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(login(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate(`/${role}`);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  // ....................... end form submit function.................................

  return (
    <div className="formcontainer">
      <div className="leftform">
        <img src={signup} alt="teach" />
      </div>
      <div className="rightform">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <div className="signupform">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={logo} alt="logo" className="logosign" />
                <h5>CourseLine</h5>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <form className="radiobox">
                    <div>
                      <input
                        type="radio"
                        name="role"
                        id="student"
                        value="student"
                        required
                        onChange={()=>(setRole("student"))}
                      />
                      <label htmlFor="student">Student</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="role"
                        id="teacher"
                        value="teacher"
                        required
                        onChange={()=>(setRole("teacher"))}

                      />
                      <label htmlFor="teacher">Teacher</label>
                    </div>
                  </form>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link to={"/resetpassword"}>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                      <Link to={"/register"}>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </div>
          </Container>
        </ThemeProvider>
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
    </div>
  );
};

export default Login;
