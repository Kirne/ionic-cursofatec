webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_task__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_task_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTarefaPage = (function () {
    function CreateTarefaPage(navCtrl, navParams, _service, _alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._service = _service;
        this._alertCtrl = _alertCtrl;
        this.task = new __WEBPACK_IMPORTED_MODULE_2__domain_task__["a" /* Task */]("", "", false);
    }
    CreateTarefaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTarefaPage');
    };
    CreateTarefaPage.prototype.saveClick = function () {
        var _this = this;
        console.log("CreateTarefaSaveClick");
        this._service.saveTask(this.task).then(function (response) {
            if (response) {
                _this._alertCtrl.create({
                    title: 'Tarefa cadastrada com sucesso.',
                    buttons: [{ text: 'Ok' }]
                }).present();
                _this.task = { Description: '', Name: '', Status: false };
            }
        });
        this.navCtrl.pop();
    };
    return CreateTarefaPage;
}());
CreateTarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-tarefa',template:/*ion-inline-start:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\create-tarefa\create-tarefa.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criar Tarefa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>Nome da Tarefa</ion-label>\n          <ion-input [(ngModel)]="task.Name" type="text" placeholder="Nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Descrição da Tarefa</ion-label>\n          <ion-input [(ngModel)]="task.Description" type="text" placeholder="Descrição"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-buttons end>\n        <button ion-button icon-only (click)="saveClick()">\n          <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\create-tarefa\create-tarefa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__domain_task_service__["a" /* TaskService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreateTarefaPage);

//# sourceMappingURL=create-tarefa.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTarefaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_task_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViewTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewTarefaPage = (function () {
    function ViewTarefaPage(navCtrl, navParams, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._service = _service;
        this.tasks = [];
    }
    ViewTarefaPage.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getTasks().then(function (response) {
            _this.tasks = response;
            console.log("tarefas", _this.tasks);
        });
    };
    ViewTarefaPage.prototype.markAsDone = function (data) {
        data.Status = !data.Status;
        this._service.saveTask(data);
    };
    return ViewTarefaPage;
}());
ViewTarefaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-tarefa',template:/*ion-inline-start:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\view-tarefa\view-tarefa.html"*/'<!--\n  Generated template for the ViewTarefaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Tarefas Ativas</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background-content">\n  <div *ngFor="let task of tasks">\n    <ion-card class="background-card">\n      <ion-card-content class="card">\n        <ion-card-title class="card-title group">\n          {{task.Name}}\n          <ion-icon name="checkmark" class="done-button" [class.extraclass]="!task.Status" (click)="markAsDone(task)"></ion-icon>\n        </ion-card-title>\n        <p>{{task.Description}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\view-tarefa\view-tarefa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__domain_task_service__["a" /* TaskService */]])
], ViewTarefaPage);

//# sourceMappingURL=view-tarefa.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-tarefa/create-tarefa.module": [
		274,
		1
	],
	"../pages/view-tarefa/view-tarefa.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(Name, Description, Status) {
        this.Name = Name;
        this.Description = Description;
        this.Status = Status;
    }
    return Task;
}());

/*type Task = {
    
    Name: String;
    Description: String;
    Status: boolean;
}*/
//# sourceMappingURL=task.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskDao = (function () {
    function TaskDao(_storage) {
        this._storage = _storage;
    }
    TaskDao.prototype.save = function (taskToSave) {
        var key = this._getKey(taskToSave);
        return this._storage.set(key, taskToSave);
    };
    TaskDao.prototype._getKey = function (taskToSave) {
        return taskToSave.Name;
    };
    TaskDao.prototype.listAll = function () {
        var tasks = [];
        return this._storage.forEach(function (dado) {
            var task = new __WEBPACK_IMPORTED_MODULE_0__task__["a" /* Task */](dado.Name, dado.Description, dado.Status);
            tasks.push(task);
        })
            .then(function () { return tasks; });
    };
    return TaskDao;
}());
TaskDao = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
], TaskDao);

//# sourceMappingURL=task.dao.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tarefa_create_tarefa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_tarefa_view_tarefa__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pages = [
            { component: __WEBPACK_IMPORTED_MODULE_3__view_tarefa_view_tarefa__["a" /* ViewTarefaPage */] },
            { component: __WEBPACK_IMPORTED_MODULE_2__create_tarefa_create_tarefa__["a" /* CreateTarefaPage */] }
        ];
    }
    HomePage.prototype.createButton = function () {
        console.log("createClick");
        this.navCtrl.push(this.pages[1].component);
    };
    HomePage.prototype.viewButton = function () {
        console.log("viewClick");
        this.navCtrl.push(this.pages[0].component);
    };
    HomePage.prototype.deleteButton = function () {
        console.log("deleteClick");
        var confirm = this.alertCtrl.create({
            title: 'Apagar tarefas',
            message: 'Apagar as tarefas selecionadas?',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('deleteClickNo');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('deleteClickYes');
                    }
                }
            ]
        });
        confirm.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\home\home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button (click)="createButton()" ion-button icon-only>\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-buttons>\n      \n      <ion-segment>\n        Tarefas\n      </ion-segment>\n\n      <ion-buttons end>\n        <button (click)="deleteButton()" ion-button icon-only>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="content-button">\n  <button (click)="createButton()" ion-button>Criar Tarefas</button>\n  <button (click)="viewButton()" ion-button>Visualizar Tarefas</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_tarefa_create_tarefa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_view_tarefa_view_tarefa__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__domain_task_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__domain_task_dao__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */]({
        name: 'taskdb',
        storeName: 'tasks',
        driverOrder: ['indexeddb', 'sqlite']
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_create_tarefa_create_tarefa__["a" /* CreateTarefaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_view_tarefa_view_tarefa__["a" /* ViewTarefaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/create-tarefa/create-tarefa.module#CreateTarefaPageModule', name: 'CreateTarefaPage', segment: 'create-tarefa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-tarefa/view-tarefa.module#ViewTarefaPageModule', name: 'ViewTarefaPage', segment: 'view-tarefa', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_create_tarefa_create_tarefa__["a" /* CreateTarefaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_view_tarefa_view_tarefa__["a" /* ViewTarefaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__domain_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_11__domain_task_dao__["a" /* TaskDao */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */], useFactory: provideStorage }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\userHenrik\Desktop\Projetos\curso fatec ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_dao__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(_dao) {
        this._dao = _dao;
    }
    TaskService.prototype.saveTask = function (task) {
        return this._dao.save(task)
            .then(function () { return true; });
    };
    TaskService.prototype.getTasks = function () {
        return this._dao.listAll()
            .then(function (tasks) { return tasks; });
    };
    return TaskService;
}());
TaskService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_dao__["a" /* TaskDao */]])
], TaskService);

//# sourceMappingURL=task-service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map