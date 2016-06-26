import {Component} from "angular2/core";

@Component({
    selector:"mula-app",
    templateUrl:"app/src/nosotros/app.aboutComponent.html",
    styleUrls:["app/src/nosotros/app.aboutComponent.css"],
})

export class AboutComponent{
    description:string=`
        Somos Sofía y Carolina; y juntas creamos mula, un estudio de diseño de comunicación visual.
        Desarrollamos ideas, conceptos y diseños. La comunicación visual es la pieza clave para realzar el valor de las marcas.
        Te proponemos crear juntos una estrategia a la medida de tus necesidades.
        
        Servicios: Identidad corporativa, folletos, afiches, catálogos, revistas, tarjetería, packaging, diseño web,
        communication management y eventos.
    `;
}