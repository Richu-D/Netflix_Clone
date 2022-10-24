import React,{useEffect,useState} from 'react'
import axiosInstance from '../axiosInstance'
import Youtube from 'react-youtube'

import "./RowPost.css"
import {imageUrl,API_KEY} from '../../Constants/constants'



function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axiosInstance.get(props.url).then(response=>{
      setMovie(response.data.results);
    }).catch(err=>{
      console.log(`Err : ${err}`);
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie = (id)=>{
  axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  .then(response =>{
  setUrlId(response.data.results[0]?.key)
  
}).catch(err=>{
  console.log(`Error : ${err}`);
})
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj,index)=>   
            <img onClick={()=>{handleMovie(obj.id)}} key={index} className={props.Smallimg ? "smallPoster" :"bigPoster"} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
          )}
        </div>
   {  urlId  &&  <Youtube opts={opts} videoId={urlId} />}
    </div>
  )
}

export default RowPost