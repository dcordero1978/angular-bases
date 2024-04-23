import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public listHeroes: string[] = ['Uno','Dos','Tres','Cuatro', 'Cinco', 'Seis']
  public heroeBorrado?: string;
  public borrarUltimoHeroe():void {
    this.heroeBorrado = this.listHeroes.pop();
  }
}
