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
      border: "solid 1px black",
      listStyle: "none",

    }
  });

  // const LikeCounter = () => {
  //   const [{post.likes}, setLikes] = useState(0)

  //   increaseLikes = () => {
  //     setLikes({posts.likes} + 1)
  //   }

  //   handleLike
  // }


  

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

  useEffect(() => {
    loadUsers()
  },[])

    const { userData } = useContext(UserContext);
    return (
      <div>
        <Navbar/>
          <Container>
            {/* User's username and avatar */}
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{ height:350, width:"90%"}}>
                        <CardContent>
                        <Typography variant="h4" component="h2">
                        <i class="fas fa-id-badge"></i> {userInfo.user.userName}
                        </Typography>
                        <br></br>
                        <img alt="" class="profile-picture" src="https://via.placeholder.com/200"></img>
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
                        <Link href="#"><i class="fab fa-github-square"></i> GitHub: {userInfo.user.github}</Link>
                        <br></br>
                          <Link href="#"><i class="fab fa-linkedin"></i> Linkedin: {userInfo.user.linkedin}</Link>
                        <br></br>
                          <Link href="#"><i class="fas fa-envelope-square"></i> Email: {userInfo.user.email}</Link>
                        <br></br>
                        </Typography>
                  </CardContent>
              </Card> 
                </Grid>
            </Grid>

              <Card className={classes.cardStyles}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    @{userInfo.user.userName}'s Posts:
                    </Typography>
                    <div>
                    {console.log(post)}
                      {post.map((p) => 
                       (
                        <div className={classes.postStyles} key={p._id}>
                        {console.log(p)}
                          <ul>
                          <li>Post: {p.post}</li>
                             <li>Likes: {p.likes}</li> 
                             <li>Time: {p.time}</li> 
                          </ul>
                          <button><i class="fas fa-thumbs-up"></i>Like </button>
                          </div>))}
                         
                    </div>
                  </CardContent>
                </Card> 
              </Container>
          </div>
      );
  }
