import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import UserContext from '../context/UserContext';

const useStyles = makeStyles(theme => ({
    title:{
        marginTop: 25,
        marginBottom: 10
    },
    headline: {
        marginBottom: 30
    }
}))

export default function Profile() {
    let classes = useStyles();
    const { userData } = useContext(UserContext);
    return (
        <div>
            {console.log(userData)}
            <Typography className={classes.title} variant='h2' align="center">
                HackHub
            </Typography>
            <Typography className={classes.headline} variant='h5' align="center">
                See what the hubbub is about!
            </Typography>
        </div>
    )
}
