import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions";

export default function App() {
  const [pageType, setPageType] = useState("Login");

  const isLogged = useSelector((state) => state.isSignedUp);

  const handlePageTypeChange = (newPageType) => {
    setPageType(newPageType);
  };

  let isLogin = pageType === "Register";

  return (
    <>
      <Header />
      <Box sx={{ marginTop: "70px" }}>
        {isLogin ? (
          <div>
            {isLogged}
            <Register handlePageTypeChange={handlePageTypeChange} />
          </div>
        ) : (
          <Login handlePageTypeChange={handlePageTypeChange} />
        )}
      </Box>
    </>
  );
}

function Login({ handlePageTypeChange }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loginError, setLoginError] = useState(false); // State for login error

  const Login = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      dispatch(signUp());
    } catch (err) {
      console.log(err);
      setLoginError(true); // Set login error state to true
      reset(); // Reset the form on wrong credentials
    }
  };

  const onSubmit = (data) => Login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography color="primary" sx={{ fontSize: "2rem" }}>
          Login
        </Typography>
        <TextField
          name="email"
          label="Email"
          type="email"
          defaultValue=""
          {...register("email")}
          fullWidth
          margin="normal"
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          defaultValue=""
          {...register("password")}
          fullWidth
          margin="normal"
        />
        {errors.exampleRequired && (
          <Typography variant="body2" color="error">
            This field is required
          </Typography>
        )}

        {loginError && (
          <Typography variant="body2" color="error" sx={{ marginTop: "10px" }}>
            Wrong credentials. Please try again.
          </Typography>
        )}

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          <Typography
            variant="body1"
            onClick={() => handlePageTypeChange("Register")}
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            I want To Register
          </Typography>
        </Stack>
      </Container>
    </form>
  );
}

function Register({ handlePageTypeChange }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postData = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:5000/users/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => postData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography color="primary" sx={{ fontSize: "2rem" }}>
          Register
        </Typography>
        <TextField
          name="nom"
          label="Name"
          fullWidth
          defaultValue=""
          {...register("nom")}
          margin="normal"
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          defaultValue=""
          {...register("email")}
          fullWidth
          margin="normal"
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          defaultValue=""
          {...register("password")}
          fullWidth
          margin="normal"
        />

        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          defaultValue=""
          fullWidth
          margin="normal"
        />
        {errors.exampleRequired && (
          <Typography variant="body2" color="error">
            This field is required
          </Typography>
        )}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>

          <Typography
            variant="body1"
            onClick={() => handlePageTypeChange("Login")}
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            I have an Account
          </Typography>
        </Stack>
      </Container>
    </form>
  );
}
