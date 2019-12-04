import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {IonList} from '@ionic/angular';

@Component({
  selector: 'app-ion-list',
  templateUrl: './ion-list.page.html',
  styleUrls: ['./ion-list.page.scss'],
})
export class IonListPage implements OnInit {

  constructor( private dataService: DataService) { }
  usuarios: Observable<any>;
 //. @ViewChild('lista') lista: IonList;

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();

  }
  favorite(user){
console.log('favorite',user)
//this.lista.closeSlidingItems();
  }

  share(user){
    console.log('share',user);
   // this.lista.closeSlidingItems();
  }

  borrar(user){
    console.log('borrar',user);
   // this.lista.closeSlidingItems();
  }
}
