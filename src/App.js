import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=8a05c851';



const App = () => {
    const [movies, setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
    }
    useEffect(() => {
       searchMovie('Spiderman')
    }, []);

    return(
        <div className="App">
            <h1>MOvies-WOrld</h1>
        <div className="search">
            <input
            placeholder="search for movies here.."
            value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src= {SearchIcon}
            alt = "searchicon"
            onClick={() => searchMovie(searchTerm)}
            />

        </div>
       {
           movies?.length > 0
           ?(
           <div className="container">
               {movies.map((movie1) => (
                 <MovieCard movie1={movie1}/>
                ))}
            </div>
           ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
           )
        }
        

        </div>
    );
}

export default App;