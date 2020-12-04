import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../context/UserContext";
import {
  Button,
  TextField,
  Typography,
  Paper,
  CssBaseline,
} from "@material-ui/core";
import API from "../utils/API";

//Nav
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 25,
    marginBottom: 10,
  },
  headline: {
    marginBottom: 30,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    width: "80%",
    //paddingBottom: 30,
    paddingBottom: theme.spacing(8),
  },

  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function HackHub() {
  let classes = useStyles();
  const [users, setUsers] = useState([]);
  const { userData } = useContext(UserContext);
  const [formObject, setFormObject] = useState([]);

  let getUser = localStorage.getItem("user");
  let userInfo = JSON.parse(getUser);

  function loadUsers() {
    API.getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.post) {
      API.updateUser(userInfo.user._id, {
        posts: [
          {
            post: formObject.post,
            likes: 0,
          },
        ],
      })
        .then((res, req) => {
          console.log(formObject.post);
          console.log(res.data);
          loadUsers();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <Navbar />
      {console.log(userData)}
      <CssBaseline />
      <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h2" align="center">
        HackHub
      </Typography>
      <Typography className={classes.headline} variant="h5" align="center">
        See what the hubbub is about!
      </Typography>
      
            <Typography variant="h4">{userInfo.user.userName}</Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="post"
                onChange={handleInputChange}
                name="post"
                autoFocus
                label="Write post here"
            />
            <Button
                fullWidth
                className={classes.submit}
                variant="contained"
                disabled={!formObject.post}
                onClick={handleFormSubmit}
            >
                Submit
            </Button>
            </form>
        </Paper>
        </div>
  );
}
