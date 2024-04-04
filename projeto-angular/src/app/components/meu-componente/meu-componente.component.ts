import { Component } from '@angular/core';


@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {

nome:string = "João";
idade:number = 26;
cidade:string = "São Paulo";
interesses = ["programação", "viagem", "fotografia"]
}
