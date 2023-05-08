import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
    render() {
        return (
            <div className='Pokemon'>
                <figure className='Pokemon-img'>
                    <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'></img>
                </figure>
                <h5>Index</h5>
                <h1>Bulbasaur</h1>
                <h4>Type: Grass</h4>
            </div>
        )
    } 
}

export default Pokemon