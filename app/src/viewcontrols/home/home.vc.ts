import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        
        
    };
  
    
}

register.viewControl('home-vc', HomeViewControl);
