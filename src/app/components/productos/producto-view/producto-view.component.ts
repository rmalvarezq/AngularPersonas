import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css'],
})
export class ProductoViewComponent implements OnInit {
  productos = [];
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
    private authService: AuthService,
    private db: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log('Si está ingresando acá');
    this.getProductos();
  }

  getProductos() {
    this.db
      .collection('productos')
      .snapshotChanges()
      .subscribe((colSnap) => {
        this.productos = [];
        colSnap.forEach((snap) => {
          let producto: any = snap.payload.doc.data();
          this.productos.push(producto);
        });
      });
  }

  deleteProducto(producto) {
    this.db
      .collection('productos')
      .doc(producto.uid)
      .delete()
      .then((res) => {})
      .catch((error) => {
        //console.log(error);
      });
  }
  btnClicEditar(id_producto: any) {
    this.router.navigate(['product-edit', { id_producto }]);
  }
  createProduct() {
    this.router.navigate(['product-create']);
  }
  logout() {
    this.authService.SignOut();
  }
}
