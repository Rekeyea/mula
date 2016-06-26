import {Injectable} from "angular2/core";
import {IAmALink} from "../../types/link";

@Injectable()
export class LinksService{
    public links:Array<IAmALink> = [
        {
            active:false,
            name:"somos",
            url:"Somos"
        },
        {
            active:true,
            name:"proyectos",
            url:"Proyectos"
        },
        {
            active:false,
            name:"contacto",
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