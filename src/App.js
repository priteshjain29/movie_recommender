import { useState, useEffect} from "react";
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = ' http://www.omdbapi.com?apikey=47a0cc1d';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => { const completeURL = API_URL + "&s=" + title;

    const response = await fetch(completeURL);
    const data = await response.json();

    setMovies(data.Search);
}
useEffect(() =>{
    searchMovies("Godfather");
},[]);



  return(
    <div className="app">
      <h1>Cine-Voyage</h1>
      <h2>Navigate the Cinematic Universe</h2>

      <div className="search">
        <input 
          // placeholder="search for movies"
          // value = {searchTerm}
          // onchange = {(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img 
          src = {SearchIcon}
          alt = 'search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movie = {movie} />
          ))}
          </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  )
}

export default App;