import {Injectable} from "angular2/core";
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService{
    private options:RequestOptions;
    constructor(private http:Http){
        let headers = new Headers({"Content-Type":"application/json"});
        this.options = new RequestOptions({headers:headers});
    }

    login(username:string,password:string){
        var user = {"username":"mula","password":"mula"};
        return this.http
        .post("/api/login",JSON.stringify(user),this.options)
        .toPromise()
        .then(x=>localStorage.setItem("user", JSON.stringify(user)))
        .catch(err=> console.error(JSON.stringify(err)));
    }
}