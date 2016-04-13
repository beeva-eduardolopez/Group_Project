import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {};
}

register.viewControl('about-vc', AboutViewControl);
