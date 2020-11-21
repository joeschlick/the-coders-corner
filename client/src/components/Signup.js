import React, {useState, useEffect} from 'react'
import API from "../utils/API";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function Signup() {
    const [user, setUser] = useState([]);
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [job, setJob] = useState("");
    // const [fName, setfName] = useState("");
    // const [lName, setlName] = useState("");
    // const [github, setGithub] = useState("");
    // const [linkedin, setLinkedin] = useState("");
    // const [portfolio, setPortfolio] = useState("");

    useEffect(() => {
        saveUsers()
    },[])
    function saveUsers() {
        API.saveUser().then((res) => {
            setUser(res.data)
        }).catch(err => console.log(err));
    } 

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div style={{alignItems: "center"}}>
            <form onChange={handleSubmit}>
            <Input
                onChange={() => {}}
                name="firstName"
                placeholder="First Name"
                />
            <Input
                onChange={() => {}}
                name="lastName"
                placeholder="Last Name"
                />
            <Input
                onChange={() => {}}
                name="userName"
                placeholder="Username"
                />
            <Input
                onChange={() => {}}
                name="password"
                placeholder="Password"
                />
            <Input
                onChange={() => {}}
                name="email"
                placeholder="Email"
                />
            <Input
                onChange={() => {}}
                name="github"
                placeholder="Github"
                />
            <Input
                onChange={() => {}}
                name="linkedin"
                placeholder="Linkedin"
                />
            <Input
                onChange={() => {}}
                name="jobTitle"
                placeholder="Job Title"
                />
            <Button type="submit" onClick={() => {}}>Submit</Button>
            {/* <label>Email:</label>
                <input type="text" onChange={(event) => setEmail(event.target.value)}></input>
                <br></br>
            <label>Username:</label>
                <input type="text" onChange={(event) => setUsername(event.target.value)}></input>
                <br></br>
            <label>Password:</label>
                <input type="password" onChange={(event) => setPassword(event.target.value)}></input>
                <br></br>
            <label>Job Title:</label>
                <input type="text" onChange={(event) => setJob(event.target.value)}></input>
                <br></br>
            <label>First Name:</label>
                <input type="text" onChange={(event) => setfName(event.target.value)}></input>
                <br></br>
            <label>Last Name:</label>
                <input type="text" onChange={(event) => setlName(event.target.value)}></input>
                <br></br>
            <label>Github Username:</label>
                <input type="text" onChange={(event) => setGithub(event.target.value)}></input>
                <br></br>
            <label>LinkedIn URL:</label>
                <input type="text" onChange={(event) => setLinkedin(event.target.value)}></input>
                <br></br>
            <label>Portfolio:</label>
                <input type="text" onChange={(event) => setPortfolio(event.target.value)}></input>
                <br></br>
                <button type="submit">Sign Up</button> */}
            </form>
        </div>
    )
}
