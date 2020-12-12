import React, { useContext, useState, useEffect } from "react";
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
    fontSize: "6vw",
    fontFamily: 'Cutive Mono, monospace',
    color: "#db7500"
  },
  headline: {
    marginBottom: 30,
    fontSize: "3vw",
    fontFamily: 'Cutive Mono, monospace',
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
  postStyles: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px",
    borderRadius: "25px",
    border: "solid 1.5px",
    justifyContent:'center',
    textAlign: "center",
  },
  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  span: {
    backgroundColor: "#db7500",
    borderRadius: "5px",
    color: "#fff"
  }
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
        console.log("response from get users", res)
        let allPosts = []
        res.data.map((p) => {
          if (p.posts.length === 0) {
            return 
          } else {
          p.posts.map((i) => {
            allPosts.push(i)
          })}
        })
        allPosts = allPosts.sort(function(a,b){
          return new Date(b.time) - new Date(a.time);
          });
        
        setUsers(allPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadUsers()
  },[])

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
            user: userInfo.user.userName,
            userID: userInfo.user._id,
            post: formObject.post,
            likes: 0,
          },
        ],
      })
        .then((res, req) => {
          loadUsers();
        })
        .catch((err) => console.log(err));
    }
    window.location.reload();
  }

  function handleLike(userID, postID, likes) {
    console.log("handleLike has been clicked");
    likes+=1
    console.log(likes);
    // API.updateUser(userID, ({"$set": {"posts[2].$.likes": likes}})
    API.updateLikes(userID, postID, {likes: likes}).then(res => {
      console.log("calling updatelikes API")
      loadUsers();
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

function getLink(id) {
  let userLink = '/userProfile/' + id;
  return userLink;
}

function formatDate(date) {
  date = date.slice(0, 19).replace("T", " ").slice(0, 16);
  console.log(date)
  return date
}

  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h1" align="center">
        HACKHUB
      </Typography>
      <Typography className={classes.headline} variant="h5" align="center">
        See what the hubbub is about!
      </Typography>
            <Typography variant="h4" className={classes.headline}>@{userInfo.user.userName}</Typography>
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
            {users.map((user) => (
                <div className={classes.postStyles}>
                  <a href={getLink(user.userID)} className={classes.span}>@{user.user}</a>
                  <h3>{user.post}</h3>
                  <p>Likes: {user.likes}</p>
                  <p>{formatDate(user.time)}</p>
                  <Button size="small" variant="outlined" color="primary" onClick={() => handleLike(user.userID, user._id, user.likes)}><i class="fas fa-thumbs-up"></i> Like </Button>
                </div>
            ))}
            </form>
        </Paper>
        </div>
  );
}
