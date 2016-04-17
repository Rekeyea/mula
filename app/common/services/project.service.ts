import {Injectable} from "angular2/core";
import {IAmAProject} from "../../types/project";
import {PROJECTS} from "./mock.projects";

@Injectable()
export class ProjectService{
    getProjects():Promise<Array<IAmAProject>>{
        
        return new Promise<Array<IAmAProject>>(resolve => setTimeout(resolve(PROJECTS),100));
    }
    getProject(id:string):Promise<IAmAProject>{
        let index = PROJECTS.map(x=>x.id).indexOf(id);
        let p = PROJECTS[index];
        return new Promise<IAmAProject>(resolve => setTimeout(resolve(p),100));
    }
    
    private mapServerProject(serverProject):IAmAProject{
        return serverProject;
    }
}