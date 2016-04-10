import {register, ui} from 'platypus';

export default class NavbarcontrolTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbarcontrol.tc.html');
}

register.control('navbarcontrol', NavbarcontrolTemplateControl);
