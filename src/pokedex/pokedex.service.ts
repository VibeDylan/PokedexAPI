import { Injectable } from '@nestjs/common';;
import { readFileSync } from 'fs';
import { resolve } from 'path';

const rawdata = readFileSync(resolve(__dirname, '../../data/pokedex.json',), { encoding: "utf8" });
const pokedex = JSON.parse(rawdata);

@Injectable()
export class PokedexService {

    getAllPokemon() {
        return rawdata;
    }

    getPokemonById(id: number) {
        const pokemonFound = pokedex.pokemons.find(pokemon => pokemon.id === +id)
        return pokemonFound;
    }

    getPokemonByName(name: string) {
        const pokemonFound = pokedex.pokemons.find(pokemon => pokemon.name === name)
        return pokemonFound;
    }

    // getPokemonsByType(type: string){
    //     const pokemonFound = pokedex.pokemons.find(pokemon => pokemon.type === type)
    //     console.log(type)
    //     return pokemonFound;
    // }

}
