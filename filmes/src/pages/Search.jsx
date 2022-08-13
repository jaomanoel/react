import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard  from "../components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

import './MoviesGrid.css'

const Search = () => {
    const [resSearch, setResSearch] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    const searchMovies = async (url) =>{
        const res = await fetch(url)
        const data = await res.json();

        setResSearch(data.results)
    }

    useEffect(() => {
        const buscas = `${searchURL}?api_key=${apiKey}&query=${query}`

        searchMovies(buscas)
    }, [query])
   


    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {resSearch.length > 0 && resSearch.map((movie) => 
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </div>
        </div>
    )
}

export default Search;