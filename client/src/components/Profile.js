import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UserContext from '../context/UserContext';
import API from "../utils/API";

//Nav 
import Navbar from './Navbar';
import { Paper, Button } from '@material-ui/core';

// Job title icons
import defaultIcon from '../images/default.png';
import developerIcon from '../images/developer.png';
import engineerIcon from '../images/engineer.png';
import itIcon from '../images/IT.png';
import securityIcon from '../images/security.png';


const useStyles = makeStyles({
    cardStyles: {
      margin: "15px",
      display:'flex', 
      justifyContent:'center',
      textAlign: "center",
      backgroundColor: "#edf6f9"
    },
    postStyles: {
      backgroundColor: "#fff",

      padding: "10px",
      margin: "5px",
    },
    listItem: {
      listStyleType: "none",
    },  

      border: "solid 1px black",
      listStyle: "none",
    },
    jobIcon: {
      width : "40%",
      height: "75%"
    }
  });
  

export default function Profile() {
    const [post, setPost] = useState([]);
    const classes = useStyles();

    function loadUsers(){
      API.getUser(userInfo.user._id)
          .then((res) => {
             setPost(res.data.posts);
              console.log(res.data.posts);
          })
          .catch((err) => {
              console.log(err);
          })
  }

  

  let getUser = localStorage.getItem("user");
  let userInfo = JSON.parse(getUser);
  console.log(post);
  let githubLink = `https://github.com/${userInfo.user.github}`;

  useEffect(() => {
    loadUsers()
  },[])

    const { userData } = useContext(UserContext);
    return (
      <div>
        <Navbar/>
          <Container>
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{width:"90%"}}>
                        <CardContent>
                        <Typography variant="h4" component="h2">
                        <i class="fas fa-id-badge"></i> {userInfo.user.userName}
                        </Typography>
                        <br></br>

                        <img alt="user-icon" class="profile-picture" className={classes.jobIcon}
                        src={
                          userInfo.user.jobTitle === 'developer' || userInfo.user.jobTitle === 'Developer' ?
                          developerIcon :
                          userInfo.user.jobTitle === 'engineer' || userInfo.user.jobTitle === 'Engineer' ?
                          engineerIcon :
                          userInfo.user.jobTitle === 'IT' || userInfo.user.jobTitle === 'it' ?
                          itIcon :
                          userInfo.user.jobTitle === 'security' || userInfo.user.jobTitle === 'Security' ?
                          securityIcon : 
                          defaultIcon
                          }
                          ></img>
                        </CardContent>
                    </Card>  
                </Grid>

            {/* User's profile information with links to websites */}
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{ height:350, width:"90%"}}>
                    <CardContent>
                        <Typography variant="h4">
                        {userInfo.user.firstName} {userInfo.user.lastName} 
                        </Typography>
                        <Typography variant="h6">
                        {userInfo.user.jobTitle}
                        </Typography>
                        <br></br>
                        <Typography>
                          Contact Me:
                        </Typography>
                        <Typography variant="h6">
                        <Link href={githubLink}><i class="fab fa-github-square"></i> GitHub: {userInfo.user.github}</Link>
                        <br></br>
                          <Link href={userInfo.user.linkedin}><i class="fab fa-linkedin"></i> Linkedin: {userInfo.user.linkedin}</Link>
                        <br></br>
                          <Link href="#"><i class="fas fa-envelope-square"></i> Email: {userInfo.user.email}</Link>
                        <br></br>
                        </Typography>
                        </CardContent>
                    </Card>  
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{width:"90%"}}>
                    <CardContent>
                    <div>
                    <Typography variant="h4">
                    @{userInfo.user.userName}'s Posts:
                    </Typography>
                      {post.map((p) => 
                       (
                        <div className={classes.postStyles} key={p._id}>
                        {console.log(p)}
                          <h3>{p.post}</h3>
                          <p>Likes: {p.likes}</p>
                          <p>{p.time}</p>
                          
                          </div>))}
                    </div>
                  </CardContent>
              </Card> 
                </Grid>
            </Grid>
              </Container>
          </div>
      );
  }
