const axios = require('axios');

export function addSearchInput(input) {
    return {
        type: 'ADD_SEARCH_INPUT',
        payload: { input }
    }
}

export function fetchMovie(input) {
    var str = input.replace(/\s/g,'+');
    return {
        type: 'GET_MOVIE',
        payload: axios.get(`/api/${str}`)
    }
}


export function getMovie(value) {
    console.log(value);
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: axios.get(`/api2/${value}`)
    }
}
