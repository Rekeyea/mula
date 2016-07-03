System.register(["angular2/core", 'angular2/router', "../../common/services/links.service", "../proyectos/app.projectRoutingComponent", "../nosotros/app.aboutComponent", "../contacto/app.contactComponent", "../agregar/app.addComponent"], function(exports_1, context_1) {
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
    var core_1, router_1, links_service_1, app_projectRoutingComponent_1, app_aboutComponent_1, app_contactComponent_1, app_addComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (links_service_1_1) {
                links_service_1 = links_service_1_1;
            },
            function (app_projectRoutingComponent_1_1) {
                app_projectRoutingComponent_1 = app_projectRoutingComponent_1_1;
            },
            function (app_aboutComponent_1_1) {
                app_aboutComponent_1 = app_aboutComponent_1_1;
            },
            function (app_contactComponent_1_1) {
                app_contactComponent_1 = app_contactComponent_1_1;
            },
            function (app_addComponent_1_1) {
                app_addComponent_1 = app_addComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, service) {
                    this.router = router;
                    this.service = service;
                    this.opened = false;
                    this.title = "mula";
                    this.links = this.service.links;
                    this.trademark = "mula 2016";
                    this.socialIcons = [
                        {
                            icon: "fa fa-facebook",
                            tooltip: "Facebook",
                            url: "https://www.facebook.com/somosmula"
                        },
                        {
                            icon: "fa fa-behance",
                            tooltip: "Behance",
                            url: "https://www.behance.net/SomosMula"
                        },
                        {
                            icon: "fa fa-instagram",
                            tooltip: "Instagram",
                            url: "https://www.instagram.com/SomosMula"
                        }
                    ];
                    this.selectLink = function (link) {
                        this.service.unselectLinks();
                        this.service.selectLink(link);
                    };
                    this.toggleCollapse = function () {
                        this.opened = !this.opened;
                    };
                    this.setUpEvents();
                }
                AppComponent.prototype.setUpEvents = function () {
                    var _this = this;
                    this.router.subscribe(function (value) { return _this.onNext(value); });
                };
                AppComponent.prototype.onNext = function (value) {
                    var selectedLink = this.links.filter(function (v) { return v.name === value; })[0];
                    this.selectLink(selectedLink);
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: "/proyectos/...",
                            name: "Proyectos",
                            component: app_projectRoutingComponent_1.ProjectCenterComponent,
                            useAsDefault: true
                        },
                        {
                            path: "/somos",
                            name: "Somos",
                            component: app_aboutComponent_1.AboutComponent,
                            useAsDefault: false
                        },
                        {
                            path: "/contacto",
                            name: "Contacto",
                            component: app_contactComponent_1.ContactComponent,
                            useAsDefault: false
                        },
                        {
                            path: "/agregar",
                            name: "Agregar",
                            component: app_addComponent_1.AddComponent,
                            useAsDefault: false
                        },
                        {
                            path: '/**',
                            redirectTo: ['Proyectos']
                        }
                    ]),
                    core_1.Component({
                        selector: "mula-app",
                        templateUrl: "app/src/app/app.component.html",
                        styleUrls: ["app/src/app/app.component.css"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, links_service_1.LinksService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, links_service_1.LinksService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
