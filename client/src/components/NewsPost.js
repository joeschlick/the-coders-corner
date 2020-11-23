import React from 'react'

function NewsPost(props) {
    return (
        <div>
            <h1>post</h1>
            <h1>{props.title}</h1>
            <p>{props.summary}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default NewsPost;
