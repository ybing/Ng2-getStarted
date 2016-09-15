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
/**
 * Created by yabing on 16/9/13.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    HeroDetailComponent.prototype.save = function () {
        this.heroService
            .update(this.hero)
            .then(this.goBack);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            templateUrl: 'app/tpl/hero-detail.component.html',
            styleUrls: ['app/css/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=heroDetail.component.js.map