import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title:{
        marginBottom: 10,
        fontWeight: "bold"
    },
    bigContainer: {
        display: "flex",
        justifyContent: "center"
    },
    containers: {
        backgroundColor: "rgba(38,50,56,0.9)",
        color: "white",
        padding: 25,
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 35,
        margin: 20,
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 25,
        lineHeight: 2,
        maxWidth: "1100px",
    },
    summary: {
        lineHeight: 1.8,
    },
    link: {
        // display: "inlineBlock",
        overflowWrap: "normal",
        // wordWrap: "break-word",
        // wordBreak: "normal",
        // whiteSpace: "normal",
        color: "#5190b8"
    }
}))


function NewsPost(props) {
    let classes = useStyles();
    return (
        <div className={classes.bigContainer}>
            <div className={classes.containers}>
                <p>{props.date}</p>
                <Typography className={classes.title} variant="h6">
                    {props.title}
                </Typography>
                <Typography className={classes.summary} variant="body2">
                    {props.summary}
                </Typography>
                <a href={props.link} target="_blank" className={classes.link}>{props.link}</a>
            </div>
        </div>
    )
}

export default NewsPost;
