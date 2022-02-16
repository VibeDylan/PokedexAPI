import { Controller, Get, Param } from '@nestjs/common';
import { identity } from 'rxjs';
import { PokedexService } from './pokedex.service';

@Controller('pokedex')
export class PokedexController {
    constructor(private pokedexService: PokedexService) { }

    @Get()
    async findAllPokement() {
        return await this.pokedexService.getAllPokemon()
    }

    @Get(':id')
    async findPokementById(@Param('id') id: number) {
        return await this.pokedexService.getPokemonById(id)
    }

    @Get('/name/:name')
    async findPokementByName(@Param('name') name: string) {
        return await this.pokedexService.getPokemonByName(name)
    }

    // Todo by race (poisson, dog etc etc)

    // Todo find by type

    // @Get('/type/:type')
    //     async findPokemonByType(@Param('type') type: string) {
    //         return await this.pokedexService.getPokemonsByType(type)
    //     }
    
}
