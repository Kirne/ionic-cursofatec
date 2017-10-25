import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CreateTarefaPage } from '../create-tarefa/create-tarefa';
import { ViewTarefaPage } from '../view-tarefa/view-tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public pages = [
    { component:ViewTarefaPage },
    { component:CreateTarefaPage }
  ];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  createButton() {
    console.log("createClick");
    this.navCtrl.push(this.pages[1].component);
  }
  viewButton() {
    console.log("viewClick");
    this.navCtrl.push(this.pages[0].component);
  }
  deleteButton() {
    console.log("deleteClick");
    let confirm = this.alertCtrl.create({
      title: 'Apagar tarefas',
      message: 'Apagar as tarefas selecionadas?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('deleteClickNo');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('deleteClickYes');
          }
        }
      ]
    });
    confirm.present();
  }
}