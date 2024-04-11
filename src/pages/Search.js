import React, { useEffect } from 'react';
import Title from '../components/Title';
import MoviesData from "../components/MoviesData";
import NoData from "../components/NoData";
import { useMovieContext } from "../components/ContextAPI";
import { useParams } from 'react-router-dom';

const Search = () => {

    const { movies, searchMovies } = useMovieContext()

    const params = useParams()

    useEffect(() => {
        searchMovies(params.keyword)
    }, [])


    return (
        <div>
            <Title title={`Search Keyword: ${params?.keyword}`} />
            {movies &&
                <MoviesData data={movies} />
            }
        </div>
    );
};

export default Search;
