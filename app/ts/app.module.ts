/**
 * Created by yabing on 16/9/13.
 */
import './rxjs-extensions';

import {NgModule}           from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import {FormsModule}        from '@angular/forms';
import {HttpModule}         from '@angular/http';

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent}       from './app.component';
import {HeroesComponent}    from './heroes.component';
import {HeroDetailComponent}from './heroDetail.component';
import {HeroService}        from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './heroSearch.component';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
    ],
    providers: [
        HeroService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
