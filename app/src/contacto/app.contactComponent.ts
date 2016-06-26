import {Component} from "angular2/core";

@Component({
    selector:"mula-app",
    templateUrl:"app/src/contacto/app.contactComponent.html",
    styleUrls:["app/src/contacto/app.contactComponent.css"],
})

export class ContactComponent{
    public email:string;
    public facebook:string;
    public behance:string;
    public instagram:string;

    constructor(){
        this.email = "hola@mula.com.uy";
        this.facebook = "facebook.com/somosmula";
        this.behance = "behance.net/somosmula";
        this.instagram = "instagram.com/somosmula";
    }
}