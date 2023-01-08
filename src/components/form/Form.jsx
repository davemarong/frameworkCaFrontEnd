import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 3) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 4) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const res =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (res.test(String(e.target.value).toLowerCase())) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length < 10) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} style={{ padding: 20 }}>
        <Grid container direction="column" gap={4}>
          <TextField
            onChange={handleFirstName}
            value={firstName}
            label="First Name"
            variant="outlined"
            error={firstNameError}
            helperText={
              firstNameError ? "Must be more than 2 characters" : null
            }
          />
          <TextField
            onChange={handleLastName}
            value={lastName}
            label="Last Name"
            variant="outlined"
            error={lastNameError}
            helperText={lastNameError ? "Must be more than 3 characters" : null}
          />
          <TextField
            onChange={handleEmail}
            value={email}
            label="Email"
            variant="outlined"
            error={emailError}
            helperText={emailError ? "Must be a valid email" : null}
          />
          {/* <TextField
            onChange={handleSubject}
            value={subject}
            label="Subject"
            variant="outlined"
            error={subjectError}
          /> */}
          <FormControl error={subjectError}>
            <InputLabel>Season</InputLabel>
            <Select value={subject} label="Season" onChange={handleSubject}>
              <MenuItem value="1">Season 1</MenuItem>
              <MenuItem value="2">Season 2</MenuItem>
              <MenuItem value="3">Season 3</MenuItem>
              <MenuItem value="4">Season 4</MenuItem>
            </Select>
            <FormHelperText>
              {subjectError ? "You must select a season" : null}
            </FormHelperText>
          </FormControl>
          <TextField
            onChange={handleMessage}
            value={message}
            label="Message"
            variant="outlined"
            error={messageError}
            helperText={messageError ? "Must be more than 10 characters" : null}
          />
        </Grid>
      </Paper>
    </Container>
  );
};
