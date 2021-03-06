import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';


export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {
        showOver: true,
        showVideos: false,
        colorOver: "#f1f2f2",
        colorVideos: "white"
    };

    showO() {
        this.context.showOver = !this.context.showOver;
        this.context.showVideos = !this.context.showVideos;
        this.context.colorOver = "#f1f2f2";
        this.context.colorVideos = "white";
    }

    showV() {
        this.context.showVideos = !this.context.showVideos;
        this.context.showOver = !this.context.showOver;
        this.context.colorVideos = "#f1f2f2";
        this.context.colorOver = "white";
    }
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);
