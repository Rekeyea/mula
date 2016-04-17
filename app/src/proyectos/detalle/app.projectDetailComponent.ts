import {Component} from "angular2/core";
import {RouteParams, Router} from 'angular2/router';
import {IAmAProject} from "../../../types/project";
import {ProjectService} from "../../../common/services/project.service";

@Component({
    selector:"detalle-proyecto",
    templateUrl:"app/src/proyectos/detalle/app.projectDetailComponent.html",
    styleUrls:["app/src/proyectos/detalle/app.projectDetailComponent.css"]
})
export class DetalleProyecto{
    Project:IAmAProject;
    
}