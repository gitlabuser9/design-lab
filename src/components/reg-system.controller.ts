import { Lecture } from "./reg.system.model";

export class RegSystemController implements ng.IComponentController {
    lectureList: Lecture[] = [
        { course: 'MIP', studentCount: 40, registered: 30 },
        { course: 'LAM', studentCount: 30, registered: 15 },
        { course: 'Datu ieguve', studentCount: 20, registered: 15 }
    ]; 
    headings: string[] = ['Course name', 'Student count', 'Registered students'];

    constructor() {
        this.lectureList;
        this.headings;
    }

    addRegistration(lecture: Lecture) {
        if (lecture.registered < lecture.studentCount) {
            lecture.registered++;
        }
    }

}
