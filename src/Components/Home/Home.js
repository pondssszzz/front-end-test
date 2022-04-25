import React from 'react'
import {useState, useEffect} from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './Home.css'
import Card from '../Card/Card'
import { FaSearch } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';



export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [selects, setSelects] = useState()

    const [articles, setArticles] = useState([])

    const [article1,setArticle1] = useState([])
    const [article2,setArticle2] = useState([])
    const [article3,setArticle3] = useState([])
    const [article4,setArticle4] = useState([])
    const [article5,setArticle5] = useState([])
    const [article6,setArticle6] = useState([])

    const [sportArticle1, setSportArticle1] = useState([])
    const [sportArticle2, setSportArticle2] = useState([])
    const [sportArticle3, setSportArticle3] = useState([])

    const navigate = useNavigate();

  
    const getArticles = async () => {
      try{
        const url = `https://content.guardianapis.com/search?page=50&api-key=d22cffc2-d4c9-403a-98af-d5c535f1e71b&show-fields=all`
        const sportUrl = `https://content.guardianapis.com/search?section=sport&page=20&api-key=d22cffc2-d4c9-403a-98af-d5c535f1e71b&show-fields=all`
  
        const response = await fetch(url)
        const responseJson = await response.json()
        // console.log(responseJs.response.results[0])
        setArticle1(responseJson.response.results[0])
        setArticle2(responseJson.response.results[1])
        setArticle3(responseJson.response.results[2])
        setArticle4(responseJson.response.results[3])
        setArticle5(responseJson.response.results[4])
        setArticle6(responseJson.response.results[5])

        const response1 = await fetch(sportUrl)
        const responseJson1 = await response1.json()
        setSportArticle1(responseJson1.response.results[0])
        setSportArticle2(responseJson1.response.results[1])
        setSportArticle3(responseJson1.response.results[2])
        

        setLoading(true)

  
      }catch(error){
        console.log(error)
        setLoading(true)
      }
  
    }

    const getSearchValue = async (searchValue) => {
        try{
            const url = `https://content.guardianapis.com/search?q=${searchValue}&api-key=d22cffc2-d4c9-403a-98af-d5c535f1e71b&show-fields=all`
            const response = await fetch(url)
            const responseJsonn = await response.json()
            setArticles(responseJsonn.response.results)
    
            
            console.log(responseJsonn)
        }
        catch(error){
            console.log(error)
        }
    }

    const getFilterValue = async(selects) => {
      
      if(selects === "Oldest First"){
        const url = `https://content.guardianapis.com/search?order-by=oldest&api-key=d22cffc2-d4c9-403a-98af-d5c535f1e71b&show-fields=all`
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(selects)
        setArticle1(responseJson.response.results[0])
        setArticle2(responseJson.response.results[1])
        setArticle3(responseJson.response.results[2])
        setArticle4(responseJson.response.results[3])
        setArticle5(responseJson.response.results[4])
        setArticle6(responseJson.response.results[5])


      }
      else{
        getArticles()
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/search_result", { state: articles});
    }
  
    useEffect(() => {
      getArticles()
      getSearchValue(searchValue)
    },[searchValue])

    useEffect(() => {
      getFilterValue(selects)
    }, [selects])
  
    if(!loading){
      return(
        <div className="container-loading">
          <AiOutlineLoading3Quarters className="loading-icon"></AiOutlineLoading3Quarters>
        </div>

      )
    }
    return (
        <div>
              <div className="container">
              <h1 className="header">Top stories</h1>
              <Link to={"/bookmark"} className="view-bookmark">View bookmarks</Link>
              <span>
              <select className="dropdown" value={selects} onChange={(e) => setSelects(e.target.value)}>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>

              </span>
              <div className="search-box">
        <form onSubmit={handleSubmit}>
        <input className="search-txt" onChange={(e)=> setSearchValue(e.target.value)} type="text" placeholder="Type..."></input>
        <a className="search-bth">
          <FaSearch/>
        </a>
        </form>
    </div>
              <div className="item-1">
                <Link to={`/post/${article1.id}`} className="card">
                <img className="thumb" src={article1.fields.thumbnail}></img>
                  <h1>{article1.webTitle}</h1>
                  <p>{article1.fields.trailText}</p>
                </Link>
              </div>
              <div className="item-2">
              <Link to={`/post/${article2.id}`} className="card">
                <img className="thumb" src={article2.fields.thumbnail}></img>
                  <h1>{article2.webTitle}</h1>
                  <p>{article2.fields.trailText}</p>
                </Link>
        
              </div>
              <div className="item-3">
              <Link to={`/post/${article3.id}`} className="card">
                <img className="thumb" src={article3.fields.thumbnail}></img>
                  <h1>{article3.webTitle}</h1>
                  <p>{article3.fields.trailText}</p>
                </Link>
              </div>
              <div className="item-4">
              <Link to={`post/${article4.id}`} className="card">
                <img className="thumb" src={article4.fields.thumbnail}></img>
                  <h1>{article4.webTitle}</h1>
                  <p>{article4.fields.trailText}</p>
                </Link>
        
              </div>
              <div className="item-5">
              <Link to={`post/${article5.id}`} className="card">
                <img className="thumb" src={article5.fields.thumbnail}></img>
                  <h1>{article5.webTitle}</h1>
                  <p>{article5.fields.trailText}</p>
                </Link>
        
              </div>
              <div className="item-6">
              <Link to={`post/${article6.id}`} className="card">
                <img className="thumb" src={article6.fields.thumbnail}></img>
                  <h1>{article6.webTitle}</h1>
                  <p>{article6.fields.trailText}</p>
                </Link>
        
              </div>
            </div>
                       <div className="sport-container">
            <h1 className="header-category">Sports</h1>
            <div>
                <Link to={`/post/${sportArticle1.id}`} className="card">
                <img className="thumb" src={sportArticle1.fields.thumbnail}></img>
                  <h1>{sportArticle1.webTitle}</h1>
                </Link>
              </div>
              <div>
                <Link to={`/post/${sportArticle2.id}`} className="card">
                <img className="thumb" src={sportArticle2.fields.thumbnail}></img>
                  <h1>{sportArticle2.webTitle}</h1>
                </Link>
              </div>
              <div>
                <Link to={`/post/${sportArticle3.id}`} className="card">
                <img className="thumb" src={sportArticle3.fields.thumbnail}></img>
                  <h1>{sportArticle3.webTitle}</h1>
                </Link>
              </div>
            </div>

        </div>
    )
}

export default Home