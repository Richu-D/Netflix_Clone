import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import Youtube from 'react-youtube'

import "./RowPost.css"
import {imageUrl} from '../../Constants/constants'



function RowPost(props) {
  const [movie,setMovie] = useState([])
  useEffect(()=>{
    fetch(props.url)
    .then(response => response.json())
    .then(json =>{
        setMovie(json.results)        
    } ).catch(err=>{
      console.log("Error ind ")
    })
  },[])

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj,index)=>   
            <img key={index} className={props.Smallimg ? "smallPoster" :"bigPoster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
        </div>
        {/* <Youtube opts={opts} videoId='2g811Eo7K8U' /> */}
    </div>
  )
}

export default RowPost