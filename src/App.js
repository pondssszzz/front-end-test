import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card'
import Home from './Components/Home/Home'
import {useState, useEffect} from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BrowserRouter as Router,Route, Routes, Switch} from 'react-router-dom'
import { SearchResult } from './Components/SearchResult/SearchResult';
import Post from './Components/Post/Post'
import NoPageFound from './Components/NoPageFound'
import Bookmark from './Components/Bookmark/Bookmark'

const App = () => {
  

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/search_result" element={<SearchResult/>}></Route>
        <Route path="/post/:category/:year/:month/:day/:id" element={<Post/>}></Route>
        <Route path="bookmark" element={<Bookmark/>}></Route>
        <Route path="*" element={<NoPageFound/>}></Route>

      </Routes>

      </Router>
    </div>
  );
}

export default App;
