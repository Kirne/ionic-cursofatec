import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateTarefaPage } from '../pages/create-tarefa/create-tarefa';
import { ViewTarefaPage } from '../pages/view-tarefa/view-tarefa';
import { TaskService } from '../domain/task-service';
import { TaskDao } from '../domain/task.dao';

function provideStorage() {
  return new Storage({
    name: 'taskdb',
    storeName: 'tasks',
    driverOrder: ['indexeddb', 'sqlite']
  })
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateTarefaPage,
    ViewTarefaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateTarefaPage,
    ViewTarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    TaskDao,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Storage, useFactory: provideStorage }
  ]
})
export class AppModule { }
