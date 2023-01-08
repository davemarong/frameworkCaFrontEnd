import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 5) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const loginUser = async () => {
    try {
      const { data } = await axios.post("http://localhost:1337/auth/local", {
        identifier: username,
        password: password,
      });
      setErrorMessage(true);
      navigate("/Admin");
      console.log("correct modder", data);
    } catch (err) {
      setErrorMessage(true);
      console.log("Wrong modder", err);
    }
  };

  return (
    <Container style={{ marginTop: 40 }}>
      <Grid container direction="column" gap={5}>
        <Typography>
          {errorMessage ? "Your credentials was wrong, try again." : null}
        </Typography>
        <TextField
          onChange={handleUsername}
          value={username}
          label="Username"
          error={usernameError}
          helperText={usernameError ? "Must be more than 5 characters" : null}
        />
        <TextField
          onChange={handlePassword}
          value={password}
          label="Password"
          type="password"
        />
        <Button variant="contained" onClick={loginUser}>
          Login
        </Button>
      </Grid>
    </Container>
  );
};
