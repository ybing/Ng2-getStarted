/**
 * Created by yabing on 16/9/13.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/tpl/hero-detail.component.html',
    styleUrls: ['app/css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route
            .params
            .forEach((params: Params) => {
                let id = +params['id'];
                this.heroService.getHero(id).then(hero => this.hero = hero);
            });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.heroService
            .update(this.hero)
            .then(this.goBack);
    }
}
