import { Lecture } from "./reg.system.model";

export class RegSystemController implements ng.IComponentController {
    lectureList: Lecture[]; 
    
    constructor() {
        let lectureList = [{ course: 'test', studentCount: 20, registered: 10 }, { course: 'test', studentCount: 20, registered: 10 }, { course: 'test', studentCount: 20, registered: 10}];
        this.lectureList = lectureList;
    }


}
