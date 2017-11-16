import { Lecture } from "./reg.system.model";

export class RegSystemController implements ng.IComponentController {
    barStatus: string;
    
    handleNavBarClick(){
        this.barStatus = 'active'
    }
}