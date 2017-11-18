import { Lecture } from "./reg.system.model";

export class RegSystemController implements ng.IComponentController {
    lectureList: Lecture[]; 
    
    constructor() {
        let lectureList = [{ course: 'test', studentCount: 200, registered: 100 }, { course: 'secon', studentCount: 30, registered: 15 }, { course: 'trd', studentCount: 20, registered: 15}];
        this.lectureList = lectureList;
    }


}
