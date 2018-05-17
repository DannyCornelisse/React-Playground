import axios from 'axios';
import React, { Component } from 'react';

class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: []
        };
    }

    addPokemon(pokemon) {
        const tmpPokemon = this.state.pokemon;
        tmpPokemon.push(pokemon);
        this.setState({ pokemon: tmpPokemon} );
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((res) => {
            debugger;
            this.addPokemon(res.data);
        })
    }

    render() {
        let pokemonElements = this.state.pokemon.map((pokeman) => {
            return (
                <div key={pokeman.id}>
                    <img src={pokeman.sprites.front_shiny} alt={pokeman.name} />
                    <p>{pokeman.name}</p>
                    <span>{pokeman.id}</span>
                </div>
            );
        });

        return (
            <div>
                <p>Hello</p>
                {pokemonElements}
            </div>
        )
    }
}

export default Pokemon;