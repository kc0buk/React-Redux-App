import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store'
import CharacterCards from './CharacterCards'

const Main = (props) => {
    // console.log(props)
    /* Make initial API call to get data via the fetchData action creator */
    useEffect( () => {
        props.fetchData()
    }, [])

    return (
        <section>
            {/* Display loading spinner if waiting for data */}
            {props.isLoading ? <h4>Loading data...please wait...</h4> : null}
            {/* Display error message if there was an error fetching data */}
            {props.error ? (
                <p style={{ color: "red" }}>
                Houston, we have a problem! Please try again. Your request failed with a status {props.error.response.status}, "{props.error.response.data.error}"
                </p>
                ) : null}
            {/* Display results from API call */}
            {props.results.length > 0 ? <CharacterCards /> : null}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchData})(Main)