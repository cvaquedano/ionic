import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  slides: { img:string, titulo:string, desc:string}[]=[
    {
      img:'/assets/slides/Isaac.jpeg',
      titulo:'Isaac',
      desc:'algo descripcion'
    },
    {
      img:'/assets/slides/Ivanna.jpg',
      titulo:'Algo',
      desc:'algo descripcion'
    },
    {
      img:'/assets/slides/Nancy.jpeg',
      titulo:'Algo',
      desc:'algo descripcion'
    }
  ]

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.navCtrl.navigateBack("/");

  }

}
