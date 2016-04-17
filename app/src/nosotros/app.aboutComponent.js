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
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                    this.description = "\n        Somos Sof\u00EDa y Carolina y juntas creamos mula, un estudio de dise\u00F1o de comunicaci\u00F3n visual.\n        Desarrollamos ideas, conceptos y dise\u00F1os. La comunicaci\u00F3n visual es la pieza clave para realzar el valor de las marcas.\n        Te proponemos crear juntos una estrategia a la medida de tus necesidades.\n        \n        Servicios: Identidad corporativa, folletos, afiches, cat\u00E1logos, revistas, tarjeter\u00EDa, packaging, dise\u00F1o web,\n        communication management y eventos.\n    ";
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: "mula-app",
                        templateUrl: "app/src/nosotros/app.aboutComponent.html",
                        styleUrls: ["app/src/nosotros/app.aboutComponent.css"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
