import React, { useContext } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { FilmContext } from '../../App';

function Movies () {
 let movies = useContext(FilmContext)
 console.log(movies)
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }

 
export default Movies;