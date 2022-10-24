import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import './App.css'
import RowPost from "./Components/RowPost/RowPost.js";
import {original,
  action,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries} from './urls'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url={original} title="Netflix Originals" />
     <RowPost url={action} title="Action" Smallimg />
    
    </div>
  );
}
 {/* <RowPost url={ComedyMovies} title="Comedy Movies" Smallimg />
     <RowPost url={HorrorMovies} title="Horror Movies" Smallimg />
     <RowPost url={RomanceMovies} title="Romance Movies" Smallimg />
     <RowPost url={Documentaries} title="Documentaries" Smallimg /> */}

export default App;
