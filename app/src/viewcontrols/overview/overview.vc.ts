import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class OverviewViewControl extends BaseViewControl {
    templateString: string = require('./overview.vc.html');

    context: any = {};
}

register.viewControl('overview-vc', OverviewViewControl);
