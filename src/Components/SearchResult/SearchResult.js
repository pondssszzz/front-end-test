import Card from "../Card/Card";
import React from 'react';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import './SearchResult.css'

export const SearchResult = (props) => {

    const location = useLocation();

    return (
        <div className="wrapper">
            <h1 className="header">Search Result</h1>
            <Card articles={location.state}/>
        </div>
         
    )
}