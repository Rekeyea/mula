import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {Proyectos} from "../proyectos/listado/app.projectsComponent";
import {DetalleProyecto} from "../proyectos/detalle/app.projectDetailComponent";
import {ProjectService} from "../../common/services/project.service";

@Component({
  templateUrl:"app/src/proyectos/app.projectRouting.html",
  directives: [RouterOutlet],
  providers:[ProjectService]
})
@RouteConfig([
    {path:'/', name: 'Proyectos', component: Proyectos, useAsDefault: true},
    {path:'/:id', name: 'ProyectoDetalle', component: DetalleProyecto, useAsDefault: false}
])
export class ProjectCenterComponent { }