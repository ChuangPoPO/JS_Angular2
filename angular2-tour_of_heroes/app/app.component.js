"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <h2>{{hero.name}} details!</h2>\n  \n  <div>\n    <label>id : </label>{{hero.id}}\n  </div>\n  \n  <div>\n    <label>name : </label>\n    <input\n      [(ngModel)] = \"hero.name\" placeholder=\"name\">\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// hero property
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//The HEROES array is of type Hero
var HEROES = [
    { id: 11, name: 'Mr. Chien' },
    { id: 12, name: 'Mrs. Super' },
    { id: 13, name: 'Dr. CV' },
    { id: 14, name: 'Mrs. PoPO' },
    { id: 15, name: 'Mr. Gaduo' },
    { id: 16, name: 'Mr. GG' },
    { id: 17, name: 'Mrs. vivian' },
    { id: 18, name: 'Mr. Kevin' },
    { id: 19, name: 'Mom' },
    { id: 20, name: 'papa' }
];
//# sourceMappingURL=app.component.js.map