System.register(["angular2/core", 'angular2/router', "../../../common/services/project.service", "../../../common/services/links.service"], function(exports_1, context_1) {
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
    var core_1, router_1, project_service_1, links_service_1;
    var DetalleProyecto;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (links_service_1_1) {
                links_service_1 = links_service_1_1;
            }],
        execute: function() {
            DetalleProyecto = (function () {
                function DetalleProyecto(_linksService, _projectService, _params) {
                    this._linksService = _linksService;
                    this._projectService = _projectService;
                    this._params = _params;
                    this.project = { title: "", description: "", id: "", images: [], mainImage: "" };
                }
                DetalleProyecto.prototype.routerOnActivate = function (to, from) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this._linksService.unselectLinks();
                        _this._projectService.getProject(_this._params.get("id")).then(function (p) {
                            console.log(p);
                            _this.project = p;
                            resolve(true);
                        })
                            .catch(function (err) { return console.error(err); });
                    });
                };
                DetalleProyecto = __decorate([
                    core_1.Component({
                        selector: "detalle-proyecto",
                        templateUrl: "app/src/proyectos/detalle/app.projectDetailComponent.html",
                        styleUrls: ["app/src/proyectos/detalle/app.projectDetailComponent.css"]
                    }), 
                    __metadata('design:paramtypes', [links_service_1.LinksService, project_service_1.ProjectService, router_1.RouteParams])
                ], DetalleProyecto);
                return DetalleProyecto;
            }());
            exports_1("DetalleProyecto", DetalleProyecto);
        }
    }
});
