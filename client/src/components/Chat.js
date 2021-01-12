import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Nav
import Navbar from "./Navbar";

const socketServer = "https://the-coders-corner.herokuapp.com/";
console.log(socketServer);
const socket = io.connect(socketServer);

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
  title: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: "6vw",
    fontFamily: "Cutive Mono, monospace",
    color: "#db7500",
  },
  headline: {
    marginBottom: 30,
    fontSize: "3vw",
    fontFamily: "Cutive Mono, monospace",
  },
  formContainer: {
    // margin: "auto",
    //justifyContent: "center",
    //display: "flex",
  },
  form: {
    //width: "70vh",
    //height: "215px",
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    backgroundColor: "#457b9d",
    backgroundColor: '#737578',
    //marginLeft: "40px",
    //marginRight: "20px",
    padding: "30px",
    maxWidth: "600px",
  },
  sendTitle: {
    color: "#E0E0E0",
  },
  chatLog: {
    //width: "100vw",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    // boxShadow: '3px 2px 5px rgba(0,0,0,.26)',
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    //marginRight: "40px",
    maxWidth: "600px",
  },
  chatLogTitle: {
    margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderRadius: 20,
    color: "white",
    backgroundColor: "#457b9d",
    padding: "30px",
  },
  sendBtn: {
    width: "50px",
  },
  messageField: {
    marginTop: "10px",
    marginBottom: "15px",
  },
  message: {
    margin: "7px",
  },
  messageContainer: {
    padding: "20px",
    overflow: "auto",
  },
  userName: {
    fontWeight: "bold",
  },
}));

function Chat() {
  let classes = useStyles();
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  let getUser = localStorage.getItem("user");
  let userInfo = JSON.parse(getUser);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  function updateScroll() {
    var element = document.getElementById("messageContainer");
    element.scrollTop = element.scrollHeight;
  }

  const onTextChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onMessageSubmit = (event) => {
    event.preventDefault();

    const { message } = state;
    const name = userInfo.user.userName;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <Typography variant="subtitle1" className={classes.message}>
          <span className={classes.userName}>{name}:</span>{" "}
          <span>{message}</span>
        </Typography>
        {updateScroll()}
      </div>
    ));
  };

  return (
    <div>
      <Navbar />

      <Typography className={classes.title} variant="h2" align="center">
        CHAT
      </Typography>
      <Typography className={classes.headline} variant="h5" align="center">
        Message fellow developers!
      </Typography>
      <Grid alignItems="center" justify="center" container>
        <div className={classes.formContainer}>
          <Grid item xs={12} s={6}>
            <form className={classes.form}>
              <Typography className={classes.sendTitle} variant="h6">
                Send a Message
              </Typography>
              <div className={classes.messageField}>
                <TextField
                  name="message"
                  onChange={(e) => onTextChange(e)}
                  value={state.message}
                  variant="filled"
                  label="Message"
                />
              </div>
              <Button
                className={classes.sendBtn}
                variant="contained"
                onClick={onMessageSubmit}
              >
                Send
              </Button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.chatLog}>
              <Typography className={classes.chatLogTitle} variant="h5">
                Live Message Board
              </Typography>
              <div className={classes.messageContainer} id="messageContainer">
                {renderChat()}
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Chat;
