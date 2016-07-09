import {Component} from "angular2/core";
import {ProjectService} from "../../common/services/project.service";

@Component({
    selector:"agregar-mula",
    templateUrl:"app/src/agregar/app.addComponent.html",
    styleUrls:["app/src/agregar/app.addComponent.css"],
    providers:[ProjectService]
})
export class AddComponent{
    public title:string;
    public description:string;
    public files:any;
    public mainFile:any;
    public username:string;
    public password:string;
    constructor(private projectService:ProjectService){}
    // addProject(){
    //     this.projectService.createProject({
    //          title: this.title,
    //          description:this.description,
    //          files: this.files,
    //          mainFile: this.mainFile
    //     })
    //     .then(res=>console.log(res.json()),err=>console.error(err));
    // }
}