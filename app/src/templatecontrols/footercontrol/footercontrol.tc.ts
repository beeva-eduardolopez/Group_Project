import {register, ui} from 'platypus';

export default class FootercontrolTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footercontrol.tc.html');
}

register.control('footercontrol', FootercontrolTemplateControl);
