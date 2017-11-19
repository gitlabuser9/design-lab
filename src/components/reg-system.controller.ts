import { Lecture } from "./reg.system.model";

export class RegSystemController implements ng.IComponentController {
    lectureList: Lecture[]; 
    
    constructor() {
        let lectureList = [{ course: 'algoritmi', studentCount: 200, registered: 100},
                           { course: 'polezniy predmet', studentCount: 30, registered: 15},
                           { course: 'predmet', studentCount: 20, registered: 15}];
        this.lectureList = lectureList;
    }


}
