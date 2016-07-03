import {Component} from "angular2/core";
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {IAmMainView} from "../../types/view";
import {IAmALink} from "../../types/link";
import {IAmSocialIcon} from "../../types/social";
import {LinksService} from "../../common/services/links.service";
import {ProjectCenterComponent} from "../proyectos/app.projectRoutingComponent";
import {AboutComponent} from "../nosotros/app.aboutComponent";
import {ContactComponent} from "../contacto/app.contactComponent";
import {AddComponent} from "../agregar/app.addComponent";


@RouteConfig([
    {
        path:"/proyectos/...",
        name:"Proyectos",
        component:ProjectCenterComponent,
        useAsDefault:true
    },
    {
        path:"/somos",
        name:"Somos",
        component:AboutComponent,
        useAsDefault:false
        
    },
    {
        path:"/contacto",
        name:"Contacto",
        component:ContactComponent,
        useAsDefault:false
    },
    {
        path:"/agregar",
        name:"Agregar",
        component:AddComponent,
        useAsDefault:false
    },
    {//cualquier ruta desconocida va a Proyectos 
        path: '/**', 
        redirectTo: ['Proyectos'] 
    }
])
@Component({
    selector:"mula-app",
    templateUrl:"app/src/app/app.component.html",
    styleUrls:["app/src/app/app.component.css"],
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS,LinksService]
})

export class AppComponent implements IAmMainView{
    opened=false;
    title = "mula";
    links:Array<IAmALink> = this.service.links;
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
        this.service.unselectLinks();
        this.service.selectLink(link);
    };
    toggleCollapse=function(){
        this.opened=!this.opened;
    };
    
    constructor(private router: Router,private service: LinksService) {
		this.setUpEvents();
	}

	private setUpEvents(): void {
		this.router.subscribe((value: any) => this.onNext(value));
	}

	private onNext(value: any): void {
        var selectedLink = this.links.filter((v:IAmALink) => v.name===value )[0];
        this.selectLink(selectedLink);
	}
}