import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Login = () => {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://dummyjson.com/auth/login", userData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(({ data }) => {
        setToken(data.token);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0 0 2px 0 black",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "40%",
        margin: "150px auto",
        rowGap: "20px",
        padding: "20px",
      }}
    >
      <h1>Login Here!..</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={userData.username}
          name="username"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
        <TextField
          fullWidth
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={userData.password}
          name="password"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" fullWidth variant="contained" disableElevation>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
