System.register(['angular2/core', 'angular2/router', "../proyectos/listado/app.projectsComponent", "../proyectos/detalle/app.projectDetailComponent", "../../common/services/project.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_projectsComponent_1, app_projectDetailComponent_1, project_service_1;
    var ProjectCenterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_projectsComponent_1_1) {
                app_projectsComponent_1 = app_projectsComponent_1_1;
            },
            function (app_projectDetailComponent_1_1) {
                app_projectDetailComponent_1 = app_projectDetailComponent_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            ProjectCenterComponent = (function () {
                function ProjectCenterComponent() {
                }
                ProjectCenterComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/src/proyectos/app.projectRouting.html",
                        directives: [router_1.RouterOutlet],
                        providers: [project_service_1.ProjectService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Proyectos', component: app_projectsComponent_1.Proyectos, useAsDefault: true },
                        { path: '/:id', name: 'ProyectoDetalle', component: app_projectDetailComponent_1.DetalleProyecto, useAsDefault: false }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ProjectCenterComponent);
                return ProjectCenterComponent;
            }());
            exports_1("ProjectCenterComponent", ProjectCenterComponent);
        }
    }
});
