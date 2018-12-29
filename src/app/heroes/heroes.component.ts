import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from '../env';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
 constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    console.log(hero.name);
    this.selectedHero = hero;
  }
}
