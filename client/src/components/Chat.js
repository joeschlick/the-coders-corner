import React, {useState, useEffect} from 'react';
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const socket = io.connect('http://localhost:3001/');

const useStyles = makeStyles(theme => ({
    title:{
        marginTop: 25,
        marginBottom: 10
    },
    headline: {
        marginBottom: 30
    },
    formContainer: {
        display: "flex"
    },
    form: {
        margin: 50,
        marginLeft: 200,
        backgroundColor: '#e0e0e0',
        padding: 30,
        borderRadius: 20
    },
    chatLog: {
        margin: 50,
        backgroundColor: '#e0e0e0',
        padding: 30,
        borderRadius: 20,
        width: 400
    }
}))

function Chat() {
    let classes = useStyles();
    const [state, setState] = useState({message: '', name: ''})
    const [chat, setChat] = useState([])


    useEffect(() => {
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
        })
    })

    const onTextChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const onMessageSubmit = event => {
        event.preventDefault();

        const {name, message} = state
        socket.emit('message', {name, message})
        setState({message: '', name})
    }


    const renderChat = () => {
        return chat.map(({name, message}, index) => (
            <div key={index}>
                <h3>{name}: <span>{message}</span></h3>
            </div>
        ))
    }

    return (
        <div>
            <Typography className={classes.title} variant='h2' align="center">
                Chat
            </Typography>
            <Typography className={classes.headline} variant='h5' align="center">
                Message fellow developers!
            </Typography>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={onMessageSubmit}>
                    <div className="name-field">
                        <TextField
                            name="name"
                            onChange={e => onTextChange(e)}
                            value={state.name}
                            label="Name"
                        />
                    </div>
                    <div className="message-field">
                        <TextField
                            name="message"
                            onChange={e => onTextChange(e)}
                            value={state.message}
                            label="Message"
                        />
                    </div>
                    <button>Send</button>
                </form>
                
                <div className={classes.chatLog}>
                    <h1>Live Message Board</h1>
                    {renderChat()}
                </div>  
            </div>
        </div>
    )
}

export default Chat;
