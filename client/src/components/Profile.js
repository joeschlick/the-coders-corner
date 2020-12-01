import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import UserContext from '../context/UserContext';

const useStyles = makeStyles({
    cardStyles: {
      margin: "15px",
      display:'flex', 
      justifyContent:'center',
      textAlign: "center",
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
    const { userData } = useContext(UserContext);
    return (
    <div>
    <Container>

    <Grid container justify="center">
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ height:400, width:"95%"}}>
                <CardContent>
                <Typography variant="h5" component="h2">
                  {userData.user.userName}{ console.log(userData) }
                </Typography>
                <img src="https://via.placeholder.com/300"></img>
                </CardContent>
            </Card>  
        </Grid>
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ height:400, width:"95%"}}>
            <CardContent>
                <Typography variant="h6">
                </Typography>
                <Typography variant="h6">
                    Job Description
                </Typography>
                <Typography variant="body1" component="p">
                {/* <Link href="#" onClick={preventDefault}>Link</Link> */}
                <Link href="https://github.com/">{userData.user.github}</Link>
                <br></br>
                  <Link href="#">{userData.user.linkedin}</Link>
                <br></br>
                <Link href="#">Link</Link>
                </Typography>
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
            {/*userData.posts.map(post => (
              <Typography>{post.post}</Typography>
            ))*/}
          </Typography>
        </CardContent>
      </Card> 
      </Container>
    </div>
    );
  }
