import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css'],
})
export class ProductoCreateComponent implements OnInit {
  producto: producto = {
    uid: '',
    imagen: '',
    nombre: '',
    precio: 0,
    categoria: '',
    descuento: true,
    estado: true,
    cantidad: 0,
  };
  constructor(private db: AngularFirestore, private router: Router) {}

  ngOnInit(): void {}
  addproducto() {
    this.db
      .collection('productos')
      .add(this.producto)
      .then((res) => {
        console.log('Document written with ID: ', res.id);
        res.set({ uid: res.id }, { merge: true }).then(() => {
          console.log('id Creada');
          console.log('Documento Creado Exitosamente');
        });
        this.router.navigate(['product-view']);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
}
