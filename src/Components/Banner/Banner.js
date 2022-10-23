import React, { useEffect, useState } from 'react';
// import axiosInstance from '../axiosInstance.js'
// let axios = require('axios');
import {API_KEY,baseUrl,imageUrl} from '../../Constants/constants'
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        fetch(`${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(json =>{
                setMovie(json.results[Math.floor( Math.random()*20)])
            } )
            
        },[])  


    
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} >
       <div className='content'>
        <h1 className='title'>{movie ? movie.title : "Movie Name"}</h1>
        <div className="banner_buttons">
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : "Movie Overview"}</h1>
       </div> 
       <div className='fade'></div>
    </div>
    )
}

export default Banner;