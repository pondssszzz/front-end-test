import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) => {
    return(
        <>
             {props.articles.map((article,index) => ( 
                <div key={article.id} className="wrapper">
                     <Link to={`/post/${article.id}`}  className="card">
                        <img className="thumb" src={article.fields.thumbnail}></img>
                        <h1>{article.webTitle}</h1>
                    </Link> 
                </div>
             ))} 
            </>
    )
}

export default Card