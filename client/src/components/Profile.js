import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';




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

export default function Profile(props) {
    const classes = useStyles();
  
    return (
    <div>
    <Container>

    <Grid container justify="center">
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ height:400, width:"95%"}}>
                <CardContent>
                <Typography variant="h5" component="h2">
                    @UserName goes here
                </Typography>
                <img src="https://via.placeholder.com/300"></img>
                </CardContent>
            </Card>  
        </Grid>
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardStyles} style={{ height:400, width:"95%"}}>
            <CardContent>
                <Typography variant="h6">
                    FirstName LastName
                </Typography>
                <Typography variant="h6">
                    Job Description
                </Typography>
                <Typography variant="body1" component="p">
                {/* <Link href="#" onClick={preventDefault}>Link</Link> */}
                <Link href="#">Github</Link>
                <br></br>
                <Link href="#">LinkedIn</Link>
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
            Pull in user's posts here.
          </Typography>
        </CardContent>
      </Card> 
      </Container>
    </div>
    );
  }
