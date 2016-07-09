import {Component,OnInit} from "angular2/core";
import {RouteParams, Router,OnActivate,ComponentInstruction} from 'angular2/router';
import {IAmAProject} from "../../../types/project";
import {ProjectService} from "../../../common/services/project.service";
import {LinksService} from "../../../common/services/links.service";

@Component({
    selector:"detalle-proyecto",
    templateUrl:"app/src/proyectos/detalle/app.projectDetailComponent.html",
    styleUrls:["app/src/proyectos/detalle/app.projectDetailComponent.css"]
})
export class DetalleProyecto implements OnActivate{
    project:IAmAProject;
    
    routerOnActivate(to: ComponentInstruction, from: ComponentInstruction){
        return new Promise((resolve)=>{
            this._linksService.unselectLinks();
            this._projectService.getProject(this._params.get("id")).then(p=>
            {
                console.log(p);
                this.project=p
                resolve(true);    
            })
            .catch(err=>console.error(err));
        });
    }
    
    constructor(
        private _linksService:LinksService, 
        private _projectService: ProjectService, 
        private _params :RouteParams 
    ){
        this.project = {title:"",description:"",id:"",images:[],mainImage:""};
    }
}