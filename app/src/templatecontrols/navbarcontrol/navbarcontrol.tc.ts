import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class NavbarcontrolTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbarcontrol.tc.html');
}

register.control('navbarcontrol', NavbarcontrolTemplateControl);
