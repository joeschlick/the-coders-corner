import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'


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
    return (
        <div>
            <Typography className={classes.title} variant='h2' align="center">
                Profile Page
            </Typography>
            <Typography className={classes.headline} variant='h5' align="center">
                Edit your profile page!
            </Typography>
        </div>
    )
}
