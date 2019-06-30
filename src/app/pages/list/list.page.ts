import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista') lista:IonList;

  constructor(private toastCtrl:ToastController,
     private dataService:DataService) { }

  ngOnInit() {
    this.usuarios=this.dataService.getUsers();
  }

  async presentToast(message:string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user){
    this.presentToast('Guardo en favoritos')
    this.lista.closeSlidingItems();
  }
  share(user){
    this.presentToast('Compartido!')
    this.lista.closeSlidingItems();
  }
  borrar(user){
    this.presentToast('Borrado :(')
    this.lista.closeSlidingItems();
  }

}
