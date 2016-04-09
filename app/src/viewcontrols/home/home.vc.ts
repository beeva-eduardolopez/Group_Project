import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    // viewcontrol constructor
constructor(navbar: platui.Navbar) {
    super();

    // using FontAwesome for icons
    navbar.setLeft({
        content: '<a href="#"><img src="../../images/home/logocolor.svg"</a>',
        action: () => {
            //go to homepage
        }
    });

    navbar.setRight([{
        
    }, {
        content: '<i class="fa fa-bars" plat-dbltap="onTap"></i>',
        customActions: {
            onTap: () => {
                alert('double tapped menu');
            }
        }
    }]);
}
}

register.viewControl('home-vc', HomeViewControl);
