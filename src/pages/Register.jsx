import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://todo-list.p.rapidapi.com/users", userData, {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "51ab3b7490msh142101e9800cdf3p104368jsnfbba0d918aff",
          "X-RapidAPI-Host": "todo-list.p.rapidapi.com",
        },
      })
      .then((resp) => console.log(resp))
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
      <h1>Register</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="name"
          variant="outlined"
          value={userData.name}
          name="name"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
        <TextField
          fullWidth
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={userData.email}
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
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" fullWidth variant="contained" disableElevation>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
