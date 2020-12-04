import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import {  
    Avatar, 
    Button, 
    CssBaseline, 
    TextField, 
    Typography,
    Container 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';

//Login - Signup Navbar
import LoginSignupNav from './LoginSignupNav';

export default function Signup() {
    const [users, setUsers] = useState([]);
    const [formObject, setFormObject] = useState([]);

    const history = useHistory();

    //Grab all users to display
    function loadUsers(){
        API.getUsers()
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

     //Delete a User from the Database
     function deleteUser(id){
        API.deleteUser(id)
            .then((res) => {
                loadUsers();
            })
            .catch((err) => {
                console.log(err);
            })
    }

     //Updating inputs
     function handleInputChange(e){
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    //Save users and reload users from database
    function handleFormSubmit(e){
        e.preventDefault();
        if(formObject.firstName && formObject.lastName && formObject.userName && formObject.password && formObject.email && formObject.jobTitle){
            API.signupUser({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                userName: formObject.userName,
                password: formObject.password,
                email: formObject.email,
                github: formObject.github,
                linkedin: formObject.linkedin,
                jobTitle: formObject.jobTitle
            })
            .then((res) => {
                loadUsers();
            })
            .catch((err) => console.log(err));
            console.log(formObject);
            history.push("/login")
        }
    }

          //Styling
          const useStyles = makeStyles((theme) => ({
            paper: {
              marginTop: theme.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: theme.spacing(1),
              backgroundColor: "#457b9d",
            },
            form: {
              width: '60%', // Fix IE 11 issue.
              marginTop: theme.spacing(1),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
              background: "#457b9d",
              color: "white"
            },
          }));
    
          const classes = useStyles();

    return (
        <>
            <LoginSignupNav/>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ExitToApp />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Signup
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        onChange={handleInputChange}
                        name="firstName"
                        autoFocus
                        label="First Name"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        onChange={handleInputChange}
                        name="lastName"
                        autoFocus
                        label="Last Name"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        onChange={handleInputChange}
                        name="userName"
                        autoFocus
                        label="Username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        autoFocus
                        label="Password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        autoFocus
                        label="Email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="github"
                        onChange={handleInputChange}
                        name="github"
                        autoFocus
                        label="Github Username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="linkedin"
                        onChange={handleInputChange}
                        name="linkedin"
                        autoFocus
                        label="Linkedin Username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="jobTitle"
                        onChange={handleInputChange}
                        name="jobTitle"
                        label="Job Title"
                    />
                <Button
                    fullWidth
                    className={classes.submit}
                    variant="contained" 
                    disabled={!(formObject.firstName && formObject.lastName && formObject.userName && formObject.password && formObject.email)} 
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            {user.userName}
                        </li>
                    ))}
                </ul>

                </form>
            </div>
        </>
    )
}
