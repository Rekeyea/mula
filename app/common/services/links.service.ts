import {Injectable} from "angular2/core";
import {IAmALink} from "../../types/link";

@Injectable()
export class LinksService{
    public links:Array<IAmALink> = [
        {
            active:false,
            name:"Somos",
            url:"Somos"
        },
        {
            active:true,
            name:"Proyectos",
            url:"Proyectos"
        },
        {
            active:false,
            name:"Contacto",
            url:"Contacto"
        }
    ];
    public unselectLinks=function(){
        this.links.forEach(e=>{e.active=false;});
    }
    public selectLink=function(l:IAmALink) {
        l.active=true;   
    }
}