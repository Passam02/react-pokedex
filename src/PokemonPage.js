import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import './PokemonPage.css'
import { Paper, Typography } from '@mui/material';

let padToThree = (num) => {
    if (num > 999) {
        return num
    }
    return `00${num}`.slice(-3)
}

function PokemonPage() {
    const {pokemon} = useParams()
    const [allData, setState] = useState({
        type: '',
        pokemon: '',
        pokemonSpecies: '',
        pokemonHabitat: '',
        ability: '',
        evolutionChain: ''
    })
    console.log(allData)
    
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const type = await axios.get(`https://pokeapi.co/api/v2/type/${pokemon}`).then(res => {
                    return res.data
                })
                const pokemoninfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
                    return res.data
                })
                const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`).then(res => {
                    return res.data
                })
                const pokemonHabitat = await axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/${pokemon}`).then(res => {
                    return res.data
                })
                const ability = await axios.get(`https://pokeapi.co/api/v2/ability/${pokemon}`).then(res => {
                    return res.data
                })
                const evolutionChain = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemon}`).then(res => {
                    return res.data
                })
                setState({ type: type, pokemon: pokemoninfo, pokemonSpecies: pokemonSpecies, pokemonHabitat: pokemonHabitat, ability: ability, evolutionChain: evolutionChain });
                } catch (error) {
                console.log(error);
            }
          };
          fetchDetails();
    }, [])
    // find out why out of nowhere allData.pokemonSpecies.flavor_text_entries[2].flavor_text is undefined even tho i wasnt for like 10 min .......
    if (allData.pokemonSpecies !== '') {console.log(allData.pokemonSpecies.flavor_text_entries[2].flavor_text)}
    return (
        <div className='d-flex justify-content-center' style={{marginTop: '6rem'}}>
            <Paper style={{width: '80%'}}>
                <h1>{allData.pokemon.name} #{padToThree(pokemon)}</h1>
                <img className='PokemonPage-img' alt={allData.pokemon.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(pokemon)}.png`}></img>
                <Typography>{allData.pokemonSpecies === '' ? ('') : allData.pokemonSpecies.flavor_text_entries[2].flavor_text}</Typography>
            </Paper>
        </div>
    )
}


export default PokemonPage