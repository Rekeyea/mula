import {Component,OnInit} from "angular2/core";
import {ProjectService} from "../../../common/services/project.service";
import {IAmAProject} from "../types/project"

@Component({
    selector:"mula-proyectos",
    templateUrl:"app/src/projects/templates/app.projectsComponent.html",
    providers:[ProjectService],
    styleUrls:["app/src/projects/templates/app.projectsComponent.css"]
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