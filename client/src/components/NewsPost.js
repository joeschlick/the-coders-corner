import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {Typography, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#db7500",
  },
  bigContainer: {
    justifyContent: "center",
  },
  containers: {
    backgroundColor: "rgba(38,50,56,0.95)",
    color: "white",
    padding: 25,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 35,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 25,
    lineHeight: 2,
  },
  summary: {
    lineHeight: 1.8,
  },
  link: {
    overflowWrap: "break-word",
    color: "#5190b8",
  },
}));

function NewsPost(props) {
  let classes = useStyles();
  return (
    <Grid item
    xs={12}
    sm={10}
    md={6}
    lg={4}>
    <div className={classes.bigContainer}>
      <div className={classes.containers}>
        <p>{props.date}</p>
        <Typography className={classes.title} variant="h6">
          {props.title}
        </Typography>
        <Typography className={classes.summary} variant="body2">
          {props.summary}
        </Typography>
        <a href={props.link} target="_blank" className={classes.link}>
          {props.link}
        </a>
      </div>
    </div>
    </Grid>
  );
  
}

export default NewsPost;
