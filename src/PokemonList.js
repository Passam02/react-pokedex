import React, { Component } from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'

class PokemonList extends Component {
    state = {
        Pokemons: []
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
                <div>
                    {this.state.Pokemons.map(() => (
                    <Pokemon/>  
                        ))}
                </div>
                <Pokemon />
            </div>
        )
    }
}

export default  PokemonList