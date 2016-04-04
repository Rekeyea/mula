System.register(["angular2/core", "../../../common/services/project.service"], function(exports_1, context_1) {
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
    var core_1, project_service_1;
    var Proyectos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            Proyectos = (function () {
                function Proyectos(_projectService) {
                    this._projectService = _projectService;
                }
                Proyectos.prototype.ngOnInit = function () {
                    var _this = this;
                    this._projectService.getProjects().then(function (projects) {
                        _this.projects = projects;
                    });
                };
                Proyectos = __decorate([
                    core_1.Component({
                        selector: "mula-proyectos",
                        templateUrl: "app/src/projects/templates/app.projectsComponent.html",
                        providers: [project_service_1.ProjectService],
                        styleUrls: ["app/src/projects/templates/app.projectsComponent.css"]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], Proyectos);
                return Proyectos;
            }());
            exports_1("Proyectos", Proyectos);
        }
    }
});
