import React, {useState, useEffect} from 'react';
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'


//Nav
import Navbar from './Navbar';

const socket = io.connect('http://localhost:3001/');

const useStyles = makeStyles(theme => ({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
    title:{
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
    formContainer: {
        // margin: "auto",
        justifyContent: "center",
        display: "flex"
    },
    form: {
        width: '70vh',
        height: '215px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: '#457b9d',
        // backgroundColor: '#737578',
        marginLeft: "40px",
        marginRight: "20px",
        padding: "30px",
        maxWidth: "320px"
    },
    sendTitle: {
        color: "#E0E0E0"
    },
    chatLog: {
        width: '100vw',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        // boxShadow: '3px 2px 5px rgba(0,0,0,.26)',
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginRight: "40px",
        maxWidth: "600px"
    },
    chatLogTitle: {
        margin: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderRadius: 20,
        color: "white",
        backgroundColor: "#457b9d",
        padding: "30px"
    },
    sendBtn: {
        width: '50px'
    },
    messageField: {
        marginTop: '10px',
        marginBottom: '15px',
    },
    message: {
        margin: '7px'
    },
    messageContainer: {
        padding: "20px",
        overflow: "auto"
    },
    userName: {
        fontWeight: 'bold'
    }
}));

function Chat() {
    let classes = useStyles();
    const [state, setState] = useState({message: '', name: ''})
    const [chat, setChat] = useState([])
    // const [formObject, setFormObject] = useState([]);

    let getUser = localStorage.getItem("user");
    let userInfo = JSON.parse(getUser);

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
        })
    })

    function updateScroll(){
        var element = document.getElementById("messageContainer");
        element.scrollTop = element.scrollHeight;
    }

    const onTextChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const onMessageSubmit = event => {
        event.preventDefault();

        // const {name, message} = state
        const {message} = state
        const name = userInfo.user.userName
        socket.emit('message', {name, message})
        setState({message: '', name})
    }

    const renderChat = () => {
        return chat.map(({name, message}, index) => (
            <div key={index}>
                <Typography variant="subtitle1" className={classes.message}><span className={classes.userName}>{name}:</span> <span>{message}</span></Typography>
                {updateScroll()}
            </div>
        ))
    }

    return (
        <div>
            <Navbar/>
            <Typography className={classes.title} variant='h2' align="center">
            CHAT
            </Typography>
            <Typography className={classes.headline} variant='h5' align="center">
                Message fellow developers!
            </Typography>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <Typography className={classes.sendTitle} variant='h6'>
                        Send a Message
                    </Typography>
                    {/* <div className="name-field">
                        <TextField
                            name="name"
                            onChange={e => onTextChange(e)}
                            value={state.name}
                            variant="outlined"
                            label="Name"
                        />
                    </div> */}
                    <div className={classes.messageField}>
                        <TextField
                            name="message"
                            onChange={e => onTextChange(e)}
                            value={state.message}
                            variant="filled"
                            label="Message"
                        />
                    </div>
                    <Button className={classes.sendBtn} variant="contained" onClick={onMessageSubmit}>Send</Button>
                </form>
                
                <div className={classes.chatLog}>
                    <Typography className={classes.chatLogTitle} variant="h5">Live Message Board</Typography>
                    <div className={classes.messageContainer} id="messageContainer">
                        {renderChat()}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Chat;
