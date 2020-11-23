import React from 'react'
import axios from "axios";
import NewsPost from "./NewsPost";


export default function NewsHeader() {
    let newsArray = [];
    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
      params: {q: 'Web Development', media: 'True', lang: 'en'},
      headers: {
        // 'x-rapidapi-key': '12d5ec1238msh592efbbc1c917e7p1b499ejsnc4830fc60542',
        "x-rapidapi-key": "2b07b6ec73mshd7f568f32fa4427p1efeb3jsnf11a6a1c6510",
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        // console.log(response.data);
        breakdownResponse(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
    function breakdownResponse(response) {
        // let newsArray = [];
        for (let i = 0; i < 5; i++) {
            console.log("hi")
            newsArray.push({
                title: response.articles[i].title,
                summary: response.articles[i].summary,
                date: response.articles[i].published_date
            })
        }
        // console.log(newsArray);
    }
    
    console.log("here", newsArray);
    return (
        <div>
            <h1>Newsfeed</h1>
            <p>Surf the latest news in web development!</p>
            {newsArray.map(item => {
                return (
                    <NewsPost
                        title={item.title}
                        summary={item.summary}
                        date={item.date}
                    />
                )
            })}
        </div>
    )
}

// export default NewsHeader;
