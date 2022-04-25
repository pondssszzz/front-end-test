import React from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import Card from '../Card/Card'
import './Bookmark.css'

const Bookmark = (props) => {
    const location = useLocation();
    const articles = JSON.parse(localStorage.article)
    return (
        <>

        <h1 className="header">Bookmarks</h1>
        <div className="bookmark-container">
                {articles.map((data,index) => ( 
                    <div className="bookmark-card">
                        <img className="thumb" src={data.value[1]}></img>
                        <h1>{data.value[0]}</h1>
                    </div>
             ))} 
             </div>
        </>
    )
}

export default Bookmark
