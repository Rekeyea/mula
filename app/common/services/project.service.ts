import {Injectable} from "angular2/core";
import {IAmAProject} from "../../types/project";
import {PROJECTS} from "./mock.projects";
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService{
    private options:RequestOptions;
    constructor(private http:Http){
        let headers = new Headers({"Content-Type":"application/json"});
        this.options = new RequestOptions({headers:headers});
    }
    getProjects():Promise<Array<IAmAProject>>{
        //return new Promise<Array<IAmAProject>>(resolve => setTimeout(resolve(PROJECTS),100));
        return this.http.get("/api/projects",this.options)
            .toPromise()
            .then(res => {
                var projs = res.json();
                return projs.map(v=><IAmAProject>v);
            });
    }
    getProject(id:string):Promise<IAmAProject>{
        return this.http.get("/api/projects/"+id,this.options)
            .toPromise()
            .then(res => {
                var proj = res.json();
                console.log(proj);
                return <IAmAProject>proj;
            });
    }
    // createProject(proj){
    //     var user = JSON.parse(localStorage.getItem("user"));
    //     proj.username = user.username;
    //     proj.password = user.password;
    //     return this.http.post("/api/project",JSON.stringify(proj),this.options).toPromise();
    // }
    
    private mapServerProject(serverProject):IAmAProject{
        return serverProject;
    }
}