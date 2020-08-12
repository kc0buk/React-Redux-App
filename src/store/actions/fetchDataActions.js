import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then( res => {
            dispatch({ 
                type: FETCH_DATA_SUCCESS, 
                payload: res.data 
            })
        })
}