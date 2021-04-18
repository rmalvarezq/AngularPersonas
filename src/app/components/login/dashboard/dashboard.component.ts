import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private db: AngularFirestore,
    private router: Router,
    private aut: AuthService
  ) {}
  producto: producto = {
    uid: '',
    imagen: '',
    nombre: 'marcelo',
    precio: 120,
    categoria: '12',
    descuento: true,
    estado: true,
    cantidad: 12,
  };
  ngOnInit(): void {}
  logout() {
    this.aut.SignOut();
  }
  addproducto() {
    this.db
      .collection('productos')
      .add(this.producto)
      .then((res) => {
        console.log('Document written with ID: ', res.id);
        res.set({ uid: res.id }, { merge: true }).then(() => {
          console.log('id Creada');
          console.log('Documento Creado Exitosamente');
          this.router.navigate(['product-view']);
        });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
    // this.db
    //   .collection('productos')
    //   .doc('LA')
    //   .set(this.producto)
    //   .then((res) => {
    //     console.log('*******' + res);
    //     //     res.set({ uid: res.id }, { merge: true }).then(() => {
    //     //       console.log('creado');
    //     //       this.router.navigate(['producto-view']);
    //     //     });
    //     console.log('Document successfully written!');
    //   })
    //   .catch((error) => {
    //     console.error('Error writing document: ', error);
    //   });
    // this.db
    //   .collection('productos')
    //   .add(this.producto)
    //   .then((res: any) => {
    //     // console.log(res);
    //     //  console.log(this.jugador.uidDisciplina);
    //     res.set({ uid: res.id }, { merge: true }).then(() => {
    //       console.log('creado');
    //       this.router.navigate(['producto-view']);
    //     });
    //   });
  }
}
