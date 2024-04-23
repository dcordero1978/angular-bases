import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'daniel sebastian cordero el mejor';
  public age: number = 45;

  get capitalizedName(): string{
    return "Hola Mundo"
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = "IronMan";
  }

  chanteAge(): void {
    this.age = 25;
  }

  resetForm():void{
    document.querySelectorAll('h1').forEach(
      e => {
        e.innerHTML = '<h1>Lo que sea</h1>';
      }
    )
  }
}
