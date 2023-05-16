import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokemon.css'

let padToThree = (num) => {
    if (num > 999) {
        return num
    }
    return `00${num}`.slice(-3)
    }
                                    //  pokemons: 1009, 1010, 10128, 10129, 10146, 10153, 10154, 10158, 10159, 10160, 10181, 10182, 10183, 10187, 10192 and from 10264 to 10271 
                                    //  dont have image, either find it online and add manually or not render them with if
                                    // change pokemon cards so they are displayed as 2 divs, one with image, second one with the rest, to fix images being smaller with 2 liner names
class Pokemon extends Component {
    state = {
        info: [],
        types: [],
        img: [],
    }
    static defaultProps = {
        pokemonTypes: {
            grass: {
                color: 'rgb(0, 179, 0)'
            },
            normal: {
                color: 'rgb(204, 204, 204)'
            },
            bug: {
                color: 'rgb(0, 255, 0)'
            },
            fire: {
                color: 'rgb(255, 153, 0)'
            },
            fighting: {
                color: 'rgb(204, 0, 82)'
            },
            water: {
                color: 'rgb(51, 153, 255)'
            },
            ice: {
                color: 'rgb(0, 230, 230)'
            },
            steel: {
                color: 'rgb(115, 115, 115)'
            },
            psychic : {
                color: 'rgb(255, 128, 128)'
            },
            poison: {
                color: 'rgb(153, 0, 204)'
            },
            dragon: {
                color: 'rgb(51, 51, 255)'
            },
            ghost: {
                color: 'rgb(179, 179, 255)'
            },
            dark: {
                color: 'rgb(77, 77, 77)'
            },
            ground: {
                color: 'rgb(204, 82, 0)'
            },
            fairy: {
                color: 'rgb(255, 77, 196)'
            },
            flying: {
                color: 'rgb(242, 242, 242)'
            },
            rock: {
                color: 'rgb(205, 205, 177)'
            },
            electric: {
                color: 'rgb(255, 255, 26)'
            },

        }
    }
    componentDidMount(){
        let types = []
        axios.get(this.props.obj).then(response => {
            this.setState({info: response.data})
            this.setState({img: response.data.sprites.front_default})
            response.data.types.map(t => {
                types.push(t.type.name)})
            })
        this.setState({types: types})
        }                               
    render() {
        let n  = 'grass'
        console.log(this.props.pokemonTypes[n].color)
        return (
            <div className='Pokemon-card'>
                <div className='Pokemon card'>
                    <figure className='Pokemon-img-figure'>
                        <img className='Pokemon-img' alt={this.state.info.name} src={`${this.state.img}`}></img>
                    </figure>
                    <h5>#{padToThree(this.state.info.id)}</h5>
                        <h1>{this.state.info.name}</h1>
        
                    <div className={`Pokemon-types-box ${this.state.types.length > 1 ? 'justify-content-between' : 'justify-content-center'}`}>
                        {this.state.types.map(t => {
                            return <h4 className='Pokemon-type' style={{background: this.props.pokemonTypes[t].color}}>{t}</h4>
                        })}
                    </div>
                </div>
            </div>
        )
    } 
}

export default Pokemon