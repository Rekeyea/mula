System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var LinksService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LinksService = (function () {
                function LinksService() {
                    this.links = [
                        {
                            active: false,
                            name: "somos",
                            url: "Somos"
                        },
                        {
                            active: true,
                            name: "proyectos",
                            url: "Proyectos"
                        },
                        {
                            active: false,
                            name: "contacto",
                            url: "Contacto"
                        }
                    ];
                    this.unselectLinks = function () {
                        this.links.forEach(function (e) { e.active = false; });
                    };
                    this.selectLink = function (l) {
                        if (l) {
                            l.active = true;
                        }
                    };
                }
                LinksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LinksService);
                return LinksService;
            }());
            exports_1("LinksService", LinksService);
        }
    }
});
