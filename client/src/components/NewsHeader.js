import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsPost from "./NewsPost";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {Typography, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: "6vw",
    fontFamily: "Cutive Mono, monospace",
    color: "#db7500",
  },
  headline: {
    marginBottom: 30,
    fontSize: "3vw",
    fontFamily: "Cutive Mono, monospace",
  },
}));

function NewsHeader() {
  let classes = useStyles();
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    searchNews();
  }, []);

  function searchNews() {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: { q: "Web Development", media: "True", lang: "en" },
      headers: {
        "x-rapidapi-key": "12d5ec1238msh592efbbc1c917e7p1b499ejsnc4830fc60542",
        // "x-rapidapi-key": "2b07b6ec73mshd7f568f32fa4427p1efeb3jsnf11a6a1c6510",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        breakdownResponse(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function breakdownResponse(response) {
    for (let i = 0; i < 5; i++) {
      setNewsArray(response.articles);
    }
  }

  console.log("here", newsArray);

  return (
    <ThemeProvider>
      <div>
        <Typography className={classes.title} variant="h2" align="center">
          NEWSFEED
        </Typography>
        <Typography className={classes.headline} variant="h5" align="center">
          Surf the latest news in web development!
        </Typography>
        <Grid container spacing={3}>
        {newsArray.slice(0, 10).map((item) => {
          return (
            <NewsPost
              key={item._id}
              title={item.title}
              summary={item.summary}
              date={item.date}
              link={item.link}
            />
          );
        })}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default NewsHeader;
