import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './Pokemon'
import axios from 'axios'
import './PokemonList.css'

class PokemonList extends Component {
    state = {
        Pokemons: [],
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => {
            this.setState({Pokemons: response.data.results})})
    }
        
    render(){
        return(
            <div className='d-flex justify-content-center'>
                <div className='PokemonList'>
                    <h1>Pokemon List</h1>
                    <div className='PokemonList-pokemons col row row-cols-1 g-3 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5'>
                        {this.state.Pokemons.map((p) => (
                            <Pokemon obj={p.url}/>  
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default  PokemonList