import { Component, signal } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: 'One push', power: 9001},
    {id: 2, name: 'Zonic', power: 1500},
    {id: 3, name: 'Hero', power: 600},
  ]);



}
