import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTarefaPage } from './create-tarefa';

@NgModule({
  declarations: [
    CreateTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTarefaPage),
  ],
})
export class CreateTarefaPageModule {}
