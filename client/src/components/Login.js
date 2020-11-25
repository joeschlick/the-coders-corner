import React, { useState } from 'react'
import API from "../utils/API";
import Input from '@material-ui/core/Input';


export default function Login() {
    const [formObject, setFormObject] = useState([]);

    function loadUsers(){
        API.getUsers()
            .then((res) => {
                // getUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(formObject.password && formObject.email){
            API.getUsers()
            .then((res) => {
                // getUsers(res.data);
                console.log(res.data);
                let allUsers = res.data;
                let userID = allUsers.filter(user => {
                    if (user.email === formObject.email && user.password === formObject.password) {
                        return user
                    }
                })
                console.log(userID)
            })
            .catch((err) => {
                console.log(err);
            })
            // API.getUser({
            //     email: formObject.email,
            //     password: formObject.password
            // })
            // .then((res) => {
            //     loadUsers();
            // })
            // .catch((err) => console.log(err));
            // console.log(formObject);
        }
    }

    return (
        <div style={{alignItems: "center"}}>
            <form>
                <Input
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <br/>
                <Input
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <br/>
            <button 
                disabled={!(formObject.email && formObject.password)} 
                onClick={handleFormSubmit}
            >Log In
            </button>
            </form>
        </div>
    )
}
