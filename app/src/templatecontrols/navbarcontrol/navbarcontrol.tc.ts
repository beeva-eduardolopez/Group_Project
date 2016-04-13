import {register, ui, controls, events, web} from 'platypus';
import {DrawerController} from 'platypusui'
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class NavbarcontrolTemplateControl extends ui.TemplateControl {
    templateString: string = require('./navbarcontrol.tc.html');
    drawerController: controls.INamedElement<HTMLDivElement, DrawerController>


context: any = {
    showNavbar: false
};

initialize(): void {
    this.on('navigated', (ev: events.DispatchEvent, utils: web.UrlUtils) => {
        this.drawerController.control.close();
        
    });
}
}

register.control('navbarcontrol', NavbarcontrolTemplateControl);
