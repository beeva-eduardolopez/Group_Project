import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class OverviewViewControl extends BaseViewControl {
    templateString: string = require('./overview.vc.html');

    context: any = {};
}

register.viewControl('overview-vc', OverviewViewControl);
