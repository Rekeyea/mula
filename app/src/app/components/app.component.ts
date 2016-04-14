import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {IAmMainView} from "../types/view";
import {IAmALink} from "../types/link";
import {IAmSocialIcon} from "../types/social";
import {Proyectos} from "../../projects/components/app.projectsComponent"



@RouteConfig([
    {
        path:"/proyectos",
        name:"Proyectos",
        component:Proyectos,
        useAsDefault:true
    },
    {
        path:"/somos",
        name:"Somos",
        component:Proyectos,
        useAsDefault:false
    },
    {
        path:"/contacto",
        name:"Contacto",
        component:Proyectos,
        useAsDefault:false
    }
])
@Component({
    selector:"mula-app",
    templateUrl:"app/src/app/templates/app.component.html",
    styleUrls:["app/src/app/templates/app.component.css"],
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})

export class AppComponent implements IAmMainView{
    opened=false;
    title = "mula";
    links:Array<IAmALink> = [
        {
            active:false,
            name:"contacto",
            url:"Contacto"
        },
        {
            active:true,
            name:"proyectos",
            url:"Proyectos"
        },
        {
            active:false,
            name:"somos",
            url:"Somos"
        }
    ];
    trademark="mula 2016";
    socialIcons:Array<IAmSocialIcon>=[
        {
            icon:"fa fa-facebook",
            tooltip:"Facebook",
            url:"https://www.facebook.com/somosmula"
        },
        {
            icon:"fa fa-behance",
            tooltip:"Behance",
            url:"https://www.behance.net/SomosMula"
        },
        {
            icon:"fa fa-instagram",
            tooltip:"Instagram",
            url:"https://www.instagram.com/SomosMula"
        }
    ];
    selectLink = function(link: IAmALink){
        console.log(link.url);
    };
    toggleCollapse=function(){
        this.opened=!this.opened;
    };
}