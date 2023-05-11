import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokemon.css'

let padToThree = (num) => (`00${num}`.slice(-3))

class Pokemon extends Component {
    state = {
        info: [],
        types: [],
        img: []
    }
    componentDidMount(){
        let types = []
        axios.get(this.props.obj).then(response => {
            this.setState({info: response.data})
            console.log(response.data.sprites.front_default)
            this.setState({img: response.data.sprites.front_default})
            response.data.types.map(t => {
                types.push(t.type.name)})
            })
        this.setState({types: types})
        }                               
    render() {
        return (
            <div>
                <div className='Pokemon card'>
                    <figure className='Pokemon-img-figure'>
                        <img className='Pokemon-img' alt={this.state.info.name} src={`${this.state.img}`}></img>
                    </figure>
                    <h5>#{padToThree(this.state.info.id)}</h5>
                    <h1>{this.state.info.name}</h1>
                    <h4>{`${this.state.types}`}
                    </h4>
                </div>
            </div>
        )
    } 
}

export default Pokemon