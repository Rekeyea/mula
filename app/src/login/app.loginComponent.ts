import {Component} from "angular2/core";
import {LoginService} from "../../common/services/login.service";
import {Router} from 'angular2/router';

@Component({
    selector:"login-mula",
    templateUrl:"app/src/login/app.loginComponent.html",
    styleUrls:["app/src/login/app.loginComponent.css"],
    providers:[LoginService]
})
export class LoginComponent{
    public username:string;
    public password:string;
    constructor(private loginService:LoginService, private router:Router){}
    login(){
        this.loginService.login(this.username,this.password)
        .then(x=> this.router.navigate(["Agregar"]));
    }
}