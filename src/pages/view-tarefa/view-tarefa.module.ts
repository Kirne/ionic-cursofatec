import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTarefaPage } from './view-tarefa';

@NgModule({
  declarations: [
    ViewTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewTarefaPage),
  ],
})
export class ViewTarefaPageModule {}
