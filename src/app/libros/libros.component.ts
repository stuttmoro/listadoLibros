import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  /*1.0 
  
    libros: Array<object>;
    constructor() { 
    this.libros =[
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ];
  }*/

  libros: any;
  errorHttps: boolean;
  loading: boolean;

  constructor(private http: HttpClient, public LibroClicked: LibroclickedService){

  }

  ngOnInit(): void {
    this.loading = true;
    this.cargarLista();
  }

  cargarLista(){
    this.http.get('assets/lista-libro.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta;  this.loading = false;},
      (respuesta: Response) => {this.errorHttps= true; this.loading = false;}
    )
   
  }

  agregarLibro(_libroVisto){
    this.LibroClicked.libroVisto(_libroVisto);
  }

}
