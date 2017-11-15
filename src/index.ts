import '../node_modules/bootstrap/dist/css/bootstrap.css';

import appModule from './app';

import {RegSystemComponent} from "./components/reg-system.component";


appModule.component('regList', new RegSystemComponent());