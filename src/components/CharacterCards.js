import React from 'react'
import { connect } from 'react-redux'

const CharacterCards = (props) => {
    console.log(props)
    const { results } = props
    // console.log(results[0][0])
    return (
        <section className='mainWrapper'>
            {
                results.map( character => 
                   <article className='characterCard'>
                   <div className='imgWrapper'>
                       <img id='characterImg' src={character.image} alt={character.name} />
                   </div>
                   <div classname='characterDetails'>
                        <h2 key={character.id}>
                        {character.name}
                        </h2>
                        <p>Species: {character.species}</p>
                        <p>
                            <span className='text-gray'>
                                Last known location:
                            </span> </p>
                            <p>
                            {character.location.name}
                        </p>
                    </div>
                    </article>
                )
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results[0]
    }
}

export default connect(mapStateToProps, {})(CharacterCards)