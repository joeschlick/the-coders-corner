import React, { useState, useEffect } from 'react'
import axios from "axios";
import NewsPost from "./NewsPost";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    title:{
        marginTop: 25,
        marginBottom: 10,
        fontSize: "6vw",
        fontFamily: 'Cutive Mono, monospace',
        color: "#db7500"
    },
    headline: {
        marginBottom: 30,
        fontSize: "3vw",
        fontFamily: 'Cutive Mono, monospace',
    }
}))


function NewsHeader() {
    // let newsArray = [];
    let classes = useStyles();
    const [newsArray, setNewsArray] = useState([])
    
    useEffect(() => {
        // Update the document title using the browser API
        searchNews();
    }, []);

    function searchNews() {
        const options = {
          method: 'GET',
          url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
          params: {q: 'Web Development', media: 'True', lang: 'en'},
          headers: {
            'x-rapidapi-key': '12d5ec1238msh592efbbc1c917e7p1b499ejsnc4830fc60542',
            // "x-rapidapi-key": "2b07b6ec73mshd7f568f32fa4427p1efeb3jsnf11a6a1c6510",
            'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            // console.log(response.data);
            breakdownResponse(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    function breakdownResponse(response) {
        // let newsArray = [];
        for (let i = 0; i < 5; i++) {
            // console.log("hi")
            setNewsArray(response.articles)
            // newsArray.push({
            //     title: response.articles[i].title,
            //     summary: response.articles[i].summary,
            //     date: response.articles[i].published_date
            // })
        }
        // console.log(newsArray);
    }
    
    console.log("here", newsArray);

    return (
        <ThemeProvider>
            <div>
                <Typography className={classes.title} variant='h2' align="center">
                    NEWSFEED
                </Typography>
                <Typography className={classes.headline} variant='h5' align="center">
                    Surf the latest news in web development!
                </Typography>

                {newsArray.slice(0, 10).map(item => {
                    return (
                        <NewsPost
                            key={item._id}
                            title={item.title}
                            summary={item.summary}
                            date={item.date}
                            link={item.link}
                        />
                    )
                })}
            </div>
        </ThemeProvider>
    )
}

export default NewsHeader;
