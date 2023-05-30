import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllpokemons: any;
  public getAllpokemons: any;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemon.subscribe(
      res => {
        this.setAllpokemons = res.results;
        this.getAllpokemons = this.setAllpokemons
      }
    )
  }

  public getSearch(value: string) {
    const filtro = this.setAllpokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.getAllpokemons = filtro
  }

}
