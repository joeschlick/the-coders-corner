import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UserContext from '../context/UserContext';
import Button from '@material-ui/core/Button';

//Nav 
import Navbar from './Navbar';

const useStyles = makeStyles({
    cardStyles: {
      margin: "15px",
      display:'flex', 
      justifyContent:'center',
      textAlign: "center",
      backgroundColor: ""
    },
    profileCard: {
        margin: "15px",
        display:'flex', 
        justifyContent:'center',
        textAlign: "center",
      }
  });

  

export default function Profile() {
    const classes = useStyles();

    let getUser = localStorage.getItem("user");
    let userInfo = JSON.parse(getUser);
    console.log(userInfo);

    const { userData } = useContext(UserContext);
    return (
      <div>
        <Navbar/>
          <Container>
            {/* User's username and avatar */}
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{ height:400, width:"90%"}}>
                        <CardContent>
                        <Typography variant="h4" component="h2">
                          @{userInfo.user.userName}
                        </Typography>
                        <img alt="" class="profile-picture" src="https://via.placeholder.com/300"></img>
                        </CardContent>
                    </Card>  
                </Grid>

            {/* User's profile information with links to websites */}
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardStyles} style={{ height:400, width:"90%"}}>
                    <CardContent>
                        <Typography variant="h4">
                        {userInfo.user.firstName} {userInfo.user.lastName} 
                        </Typography>
                        <Typography variant="h6">
                        {userInfo.user.jobTitle}
                        </Typography>
                        <Typography variant="h6">
                        <Link href="#"><i class="fab fa-github-square fa-2x"></i> {userInfo.user.github}</Link>
                        <br></br>
                          <Link href="#"><i class="fab fa-linkedin fa-2x"></i> {userInfo.user.linkedin}</Link>
                        <br></br>
                        </Typography>
                        <Button variant="contained"><Link href="#"><i class="fab fa-github-square fa-3x"></i> {userInfo.user.github}</Link></Button>
                        <br></br>
                        <Button variant="outlined"><Link href="#"><i class="fab fa-linkedin fa-3x"></i> {userInfo.user.linkedin}</Link></Button>
                  </CardContent>
              </Card> 
                </Grid>
            </Grid>

              <Card className={classes.cardStyles}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    User Posts:
                    </Typography>
                    <Typography variant="h6">
                    </Typography>
                  </CardContent>
                </Card> 
              </Container>
          </div>
      );
  }
