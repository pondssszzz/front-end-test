import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './Post.css'
import Bookmark from '../Bookmark/Bookmark'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Post = () => {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [bookmarks, setBookmarks] = useState([])
    const {id, year, day, month, category} = useParams()
    const navigate = useNavigate()
    const getArticles = async () => {
    try {
        const response = await fetch(`https://content.guardianapis.com/${category}/${year}/${month}/${day}/${id}?api-key=d22cffc2-d4c9-403a-98af-d5c535f1e71b&show-fields=all`)
        const data = await response.json()
        setArticle(data.response.content)
        setLoading(false)

        console.log(article)

    }catch(error){
        console.log(error)
        setLoading(false)
    }

}



const handleBookmark = () => {
    toast.success('Successfully added to bookmark')
    let i = 0
    let foo = '';
        for(i=0; i<19; ++i) foo += Math.floor(Math.random() * 10);
    if(localStorage.getItem('article') === null){
        var previousBookmark = []
    }
    else{
        previousBookmark = JSON.parse(localStorage.article)
    }
    previousBookmark.push({key:foo, value:[article.webTitle, article.fields.thumbnail, article.id]})
    localStorage.setItem("article", JSON.stringify(previousBookmark))


}

useEffect(() => {
    getArticles()
},[loading])

if(loading === true){
    return(
      <div className="container-loading">
        <AiOutlineLoading3Quarters className="loading-icon"></AiOutlineLoading3Quarters>
      </div>
    )
  }

    return (
        <div className="Container">
            <button onClick={handleBookmark} className="bookmark">ADD BOOKMARK</button>
            <ToastContainer/>
            <p>Date:{" "}
            {
                new Date(`${article.webPublicationDate}`)
                .toLocaleString()
                .split(",")
            }
            </p>
            <img src={article.fields.thumbnail}></img>
            <h1 className="title">{article.webTitle}</h1>
            <h3 className="headline">{article.fields.trailText}</h3>
            <hr className="line"></hr>
            <h4 className="content">{article.fields.bodyText}</h4>
        </div>
    )
}

export default Post
