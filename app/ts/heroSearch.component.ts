/**
 * Created by yabing on 16/9/15.
 */
import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import {HeroSearchService} from './heroSearch.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/tpl/hero-search.component.html',
    styleUrls: ['app/css/hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService,
                private router: Router) {
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}
