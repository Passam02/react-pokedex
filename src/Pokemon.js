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

class Pokemon extends Component {
    state = {
        info: [],
        types: [],
        img: [],
    }
    static defaultProps = {
        missingImages: [1009,1010,10128,10129,10146,10153,10154,10158,10159,10160,10181,10182,10183,10187,10192,10264,10265,10266,10267,10268,10269,10270,10271],
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
        if (this.props.missingImages.includes(this.state.info.id)) {
            return null
        }
        return (
            <a href={`/${this.state.info.id}`} className='Pokemon-a'>
                <div className='Pokemon-card'>
                    <div className='Pokemon card'>
                        <figure className='Pokemon-img-figure'>
                            <img className='Pokemon-img' alt={this.state.info.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(this.state.info.id)}.png`}></img>
                        </figure>
                        <h5>#{padToThree(this.state.info.id)}</h5>
                        <div style={{height: '72px'}}>
                        <h1 className='Pokemon-name'>{this.state.info.name}</h1>
                        </div>
                        <div className={`Pokemon-types-box ${this.state.types.length > 1 ? 'justify-content-between' : 'justify-content-center'}`}>
                            {this.state.types.map(t => {
                                return <h4 className='Pokemon-type' style={{background: this.props.pokemonTypes[t].color}}>{t.toUpperCase()}</h4>
                            })}
                        </div>
                    </div>
                </div>
            </a>
        )
    } 
}

export default Pokemon