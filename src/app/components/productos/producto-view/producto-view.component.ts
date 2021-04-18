import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css'],
})
export class ProductoViewComponent implements OnInit {
  productos = [];
  constructor(
    private aut: AuthService,
    private db: AngularFirestore,
    private route: Router
  ) {}

  ngOnInit(): void {
    console.log('Si está ingresando acá');
  }

  getJugadores() {
    this.productos = [];
    this.db
      .collection('jugadores')
      .get()
      .subscribe((colSnap) => {
        colSnap.forEach((snap) => {
          let informacionAux: any = snap.data();
          // this.informacion.push(informacionAux);
        });
      });
    // console.log(this.informacion);
  }
  createProduct() {
    this.route.navigate(['product-create']);
  }
  logout() {
    this.aut.SignOut();
  }
}
