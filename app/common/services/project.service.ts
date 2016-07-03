import {Injectable} from "angular2/core";
import {IAmAProject} from "../../types/project";
import {PROJECTS} from "./mock.projects";
import { Http, Response, RequestOptions, Headers } from 'angular2/http';

@Injectable()
export class ProjectService{
    private options:RequestOptions;
    constructor(private http:Http){
        let headers = new Headers({"Content-Type":"application/json"});
        this.options = new RequestOptions({headers:headers});
    }
    getProjects():Promise<Array<IAmAProject>>{
        return new Promise<Array<IAmAProject>>(resolve => setTimeout(resolve(PROJECTS),100));
    }
    getProject(id:string):Promise<IAmAProject>{
        let index = PROJECTS.map(x=>x.id).indexOf(id);
        let p = PROJECTS[index];
        return new Promise<IAmAProject>(resolve => setTimeout(resolve(p),100));
    }
    createProject(proj){
        //return this.http.post("/api/project",JSON.stringify(proj),this.options);
    }
    
    private mapServerProject(serverProject):IAmAProject{
        return serverProject;
    }
}