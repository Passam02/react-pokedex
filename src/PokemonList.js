import React, { Component } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'
import './PokemonList.css'

class PokemonList extends Component {
    state = {
        Pokemons: [],
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
            this.setState({Pokemons: response.data.results})})
    }
        
    render(){
        console.log(this.state.Pokemons)
        return(
            <div>
                <h1>Pokemon List</h1>
                <div className='PokemonList-pokemons'>
                    {this.state.Pokemons.map((p) => (
                        <Pokemon obj={p.url}/>  
                    ))}
                </div>
            </div>
        )
    }
}

export default  PokemonList