import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css'],
})
export class ProductoEditComponent implements OnInit {
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
  constructor(
    private actRoute: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.producto.uid = this.actRoute.snapshot.paramMap.get('id_producto');
    this.getDataProducto(this.producto.uid);
  }

  getDataProducto(id_producto) {
    this.db
      .collection('productos')
      .doc(id_producto)
      .get()
      .subscribe((colSnap) => {
        let producto: any = colSnap.data();
        this.producto = producto;
      });
  }
  updateProducto() {
    this.db
      .collection('productos')
      .doc(this.producto.uid)
      .update(this.producto)
      .then((res) => {
        // this.getReportes()
        this.router.navigate(['product-view']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
