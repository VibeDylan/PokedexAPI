import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokedexController } from './pokedex/pokedex.controller';
import { PokedexService } from './pokedex/pokedex.service';
import { PokedexModule } from './pokedex/pokedex.module';

@Module({
  imports: [PokedexModule],
  controllers: [AppController, PokedexController],
  providers: [AppService, PokedexService],
})
export class AppModule {}
