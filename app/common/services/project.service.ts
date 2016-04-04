import {Injectable} from "angular2/core";
import {IAmAProject} from "../../src/projects/types/project";
import {PROJECTS} from "./mock.projects";

@Injectable()
export class ProjectService{
    getProjects():Promise<Array<IAmAProject>>{
        
        return new Promise<Array<IAmAProject>>(resolve => resolve(PROJECTS));
    }
    
    private mapServerProject(serverProject):IAmAProject{
        return serverProject;
    }
}