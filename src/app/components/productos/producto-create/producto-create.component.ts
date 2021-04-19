import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  productos = [];
  selectedFiles: FileList;
  file: File;
  downloadURL: Observable<string>;
  constructor(
    // private storage: AngularFireStorage,
    private db: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  chooseFiles(event) {
    //console.log('Evento: ' + event);
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.item(0)) {
      // console.log('ingreso imagenes usuarios' + this.selectedFiles.item);
    }
  }
  
  addImageProduct() {
    var file = this.selectedFiles.item(0);
    var filePath =
      'products-images/image' + Math.floor(Math.random() * 1000000);
    // const fileRef = this.storage.ref(filePath);
    // const uploadTask = this.storage.upload(filePath, file);
    // uploadTask
    //   .snapshotChanges()
    //   .pipe(
    //     finalize(() => {
    //       fileRef.getDownloadURL().subscribe((url) => {
    //         this.producto.imagen = url; // asigna url de firebase
    //         var cedulaUnique = true;
    //         for (const iterator of this.productos) {
    //           if (iterator.cedula == this.producto.nombre) {
    //             cedulaUnique = false;
    //             break;
    //           }
    //         }
    //         if (cedulaUnique) {
    //           this.addproducto();
    //         } else {
    //           console.log();
    //         }
    //       });
    //     })
    //   )
    // .subscribe();
    // uploadTask.percentageChanges().subscribe((value) => {
    //console.log(value);
    // this.progressBarValue = value.toFixed(0)
    // });
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
        });
        this.router.navigate(['product-view']);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
}
