import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {

  users: Array<object>;
  clearElement: HTMLElement;

  constructor(private ren:Renderer2) {
    this.users = [
      {nombre: 'David', id: 1},
      {nombre: 'Antonio', id: 1},
      {nombre: 'Erik', id: 1}
    ];
   }

  ngOnInit(): void {
  }

  activeMethod(element:HTMLElement){
    if(this.clearElement){
      this.ren.removeClass(this.clearElement, 'miClase');
    }
    this.ren.addClass(element, 'miClase');
    this.ren.setAttribute(element, "data-select", "true");

    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML","✅");
    this.ren.appendChild(element, nuevoElemento);
    this.clearElement = element;
  }

}
