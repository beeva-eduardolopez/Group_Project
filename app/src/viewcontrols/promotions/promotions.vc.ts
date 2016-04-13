import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import HowToPlayViewController from '../../viewcontrols/howtoplay/howtoplay.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context: any = {
        showModal: false,
        name: '',
        last: '',
        email: '',
        zip: '',
        team:''
    };

    toggleModal() {
        this.context.showModal = !this.context.showModal;
        this.context.name = '';
        this.context.last = '';
        this.context.email = '';
        this.context.zip = '';
        this.context.team = '';

    }
}

register.viewControl('promotions-vc', PromotionsViewControl);
