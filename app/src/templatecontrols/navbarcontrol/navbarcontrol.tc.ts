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

toggleNavbar() {
    this.context.showNavbar = !this.context.showNavbar
}

cssScroll() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".clearHeader").removeClass("scrolled");
        }
    });
    
}
}

register.control('navbarcontrol', NavbarcontrolTemplateControl);
