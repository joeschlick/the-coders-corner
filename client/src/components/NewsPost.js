import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title:{
        marginBottom: 10
    },
    containers: {
        background: "#CACACA",
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 35,
        margin: 20,
        borderRadius: 25
    }
}))


function NewsPost(props) {
    let classes = useStyles();
    return (
        <div className={classes.containers}>
            <p>{props.date}</p>
            <Typography className={classes.title} variant="h6">
                {props.title}
            </Typography>
            <Typography variant="body2">
                {props.summary}
            </Typography>
            <a href={props.link} target="_blank">{props.link}</a>
        </div>
    )
}

export default NewsPost;
