import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions'

const initialState = {
    info: {
        pages: '',
        next: '',
        prev: ''
    },
    results: [],
    isLoading: false,
    error: ''
}

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                info: {
                    ...state.info,
                    pages: action.payload.info.pages,
                    next: action.payload.info.next,
                    prev: action.payload.info.prev
                },
                results: action.payload.results,
                isLoading: false
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}