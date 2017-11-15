import { RegSystemController } from './reg-system.controller';
const regSystemAppTemplate = require('./reg-system.template.jade');
import './todo-app-style.less';

export class RegSystemComponent implements ng.IComponentOptions {
    controller = RegSystemController;
    template;
    constructor() {
        this.template = regSystemAppTemplate;
    }
}