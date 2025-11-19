import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../Components/dragonball/character-list/character-list.component";

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'Dragonball-super',
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'One push', power: 9001 },
    //{ id: 2, name: 'Zonic', power: 1500 },
  ]);

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
     id: this.characters().length + 1,
     name: this.name(),
     power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
