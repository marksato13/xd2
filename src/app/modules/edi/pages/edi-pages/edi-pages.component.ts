import { Component } from '@angular/core';
import { EdiService } from '../../services/edi.service';
import { Facultad } from 'src/app/models/editorial';

@Component({
  selector: 'app-edi-pages',
  templateUrl: './edi-pages.component.html',
  styleUrls: ['./edi-pages.component.css']
})
export class EdiPagesComponent {


  facultades: Facultad[] = [];
  nuevaFacultad: Facultad = new Facultad();
  facultadSeleccionada: Facultad = new Facultad();

  constructor(private facultadService: EdiService) {}

  ngOnInit(): void {
    this.getAllFacultades();
  }

  getAllFacultades() {
    this.facultadService.getAllFacultades().subscribe((data) => {
      this.facultades = data;
    });
  }

  crearFacultad() {
    this.facultadService.createFacultad(this.nuevaFacultad).subscribe(
      (data) => {
        console.log('Facultad creada', data);
        this.nuevaFacultad = new Facultad(); 
        this.getAllFacultades(); 
      },
      (error) => {
        console.error('Error al crear la facultad', error);
      }
    );
  }

  seleccionarFacultad(facultad: Facultad) {
    this.facultadSeleccionada = facultad;
  }

  actualizarFacultad() {
    this.facultadService.updateFacultad(this.facultadSeleccionada.id, this.facultadSeleccionada).subscribe(() => {
      this.facultadSeleccionada = new Facultad(); 
      this.getAllFacultades(); 
    });
  }

  eliminarFacultad(id: number) {
    this.facultadService.deleteFacultad(id).subscribe(() => {
      this.getAllFacultades(); 
    });
  }
}