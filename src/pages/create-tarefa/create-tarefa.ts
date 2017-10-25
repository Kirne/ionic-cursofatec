import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Task } from '../../domain/task';
import { TaskService } from '../../domain/task-service';

@IonicPage()
@Component({
  selector: 'page-create-tarefa',
  templateUrl: 'create-tarefa.html',
})
export class CreateTarefaPage {

  public task: Task = new Task("", "", false);
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: TaskService,
    private _alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTarefaPage');
  }

  saveClick() {
    console.log("CreateTarefaSaveClick");
    this._service.saveTask(this.task).then((response) => {
      if (response) {
        this._alertCtrl.create({
          title: 'Tarefa cadastrada com sucesso.',
          buttons: [{ text: 'Ok' }]
        }).present();
        this.task = { Description: '', Name: '', Status: false }
      }
    })
    this.navCtrl.pop();
  }
}
