import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './Pokemon'
import axios from 'axios'
import './PokemonList.css'
import { Paper } from '@mui/material';

class PokemonList extends Component {
    state = {
        Pokemons: [],
    }
    // ?limit=100000&offset=0
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
            this.setState({Pokemons: response.data.results})})
    }
        
    render(){
        return(
            <Paper className='d-flex justify-content-center' style={{marginTop: '6rem'}}>
                <div className='PokemonList'>
                    <div className='PokemonList-pokemons col row row-cols-1 g-3 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5'>
                        {this.state.Pokemons.map((p,i) => (
                            <Pokemon obj={p.url} id={i+1}/>  
                        ))}
                    </div>
                </div>
            </Paper>
        )
    }
}

export default  PokemonList