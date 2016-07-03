///<reference path="../node_modules/angular2/typings/browser.d.ts"/> 
import {bootstrap} from "angular2/platform/browser";
import {provide} from 'angular2/core';
import {AppComponent} from './src/app/app.component';
import {LocationStrategy, PathLocationStrategy,ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
