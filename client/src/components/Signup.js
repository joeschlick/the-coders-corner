import React, {useState, useEffect} from 'react'
import API from "../utils/API";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function Signup() {
    
    const [users, setUsers] = useState([]);
    const [formObject, setFormObject] = useState([]);

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
            API.saveUser({
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
        }
    }


    return (
        <div style={{alignItems: "center"}}>
            <form>
                <Input
                    onChange={handleInputChange}
                    name="firstName"
                    placeholder="First Name (required)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="userName"
                    placeholder="Username (required)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password (required)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    placeholder="Email (required)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="github"
                    placeholder="Github (Optional)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="linkedin"
                    placeholder="Linkedin (Optional)"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    name="jobTitle"
                    placeholder="Job Title (required)"
                />
                <br/>
            <button 
                disabled={!(formObject.firstName && formObject.lastName && formObject.userName && formObject.password && formObject.email)} 
                onClick={handleFormSubmit}
            >
                Submit
            </button>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.userName}
                    </li>
                ))}
              </ul>
            </form>
        </div>
    )
}
