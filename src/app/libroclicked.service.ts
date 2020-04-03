import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: Array<object>

  constructor() { 
    this.libros =[];
  }

  libroVisto(libroVisto){
    this.libros.push(libroVisto);
  }

  verListado(){
    if(this.libros.length >0){
      return this.libros;
    }else{
      return false;
    }
  }
}
