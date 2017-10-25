import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from '../../domain/task-service';
import { Task } from '../../domain/task';

/**
 * Generated class for the ViewTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-tarefa',
  templateUrl: 'view-tarefa.html',
})
export class ViewTarefaPage implements OnInit {

  public tasks: Task[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _service: TaskService) {
  }
  ngOnInit() {
    this._service.getTasks().then((response) => {
      this.tasks = response;
      console.log("tarefas", this.tasks);
    })
  }

  markAsDone(data: any) {
    data.Status=!data.Status;
    this._service.saveTask(data);
  }

}
