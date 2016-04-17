import {Component,OnInit} from "angular2/core";
import {RouterLink} from "angular2/router";
import {ProjectService} from "../../../common/services/project.service";
import {IAmAProject} from "../../../types/project";


@Component({
    selector:"mula-listado-proyectos",
    templateUrl:"app/src/proyectos/listado/app.projectsComponent.html",
    styleUrls:["app/src/proyectos/listado/app.projectsComponent.css"],
    providers:[ProjectService],
    directives:[RouterLink]
})
export class Proyectos implements OnInit{
    
    projects:Array<IAmAProject>;
    
    constructor(private _projectService:ProjectService){}
    
    ngOnInit(){
        this._projectService.getProjects().then(projects => {
            this.projects=projects;
        });    
    }
}