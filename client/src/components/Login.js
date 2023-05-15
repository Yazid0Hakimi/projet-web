import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [pageType, setPageType] = useState("Login");

  const handlePageTypeChange = (newPageType) => {
    console.log("ggg");
    console.log(newPageType);
    setPageType(newPageType);
  };

  let isLogin = pageType === "Register";

  return (
    <div>
      {isLogin ? (
        <Register handlePageTypeChange={handlePageTypeChange} />
      ) : (
        <Login handlePageTypeChange={handlePageTypeChange} />
      )}
    </div>
  );
}

function Login({ handlePageTypeChange }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,  
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => postData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
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
        {errors.exampleRequired && <span>This field is required</span>}

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
  } = useForm();

  const postData = async (data) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/article?&take=80&skip=10",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => postData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <TextField
          name="lastName"
          label="Last Name"
          fullWidth
          defaultValue=""
          {...register("Name")}
          margin="normal"
        />

        <TextField
          name="email"
          label="Email"
          defaultValue=""
          {...register("Email")}
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
        {errors.exampleRequired && <span>This field is required</span>}
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
