import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent{

  name = signal ('Iroman');
  age = signal (45);

  heroDescription = computed(() => {
    const descripcion = `${this.name()}-${this.age()}`;
  return descripcion;
});

capitalizedName = computed(() => this.name().toUpperCase());

changeHero(){
  this.name.set('Spiderman'),
  this.age.set(22)
}
resetForm(){
  this.name.set('Iroman');
  this.age.set(45);
}
changeAge() {
this.age.set(60);
}
eliminarHero(){
  this.name.set('');
  this.age.set(0);
}

}
