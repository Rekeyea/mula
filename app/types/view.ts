import {IAmALink} from "./link";
import {IAmSocialIcon} from "./social";

export interface IAmMainView{
    title:string;
    links:Array<IAmALink>;
    trademark:string;
    socialIcons:Array<IAmSocialIcon>;
    selectLink(link:IAmALink);
}