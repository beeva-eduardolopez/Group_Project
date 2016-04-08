import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class VideosViewControl extends BaseViewControl {
    templateString: string = require('./videos.vc.html');

    context: any = {};
}

register.viewControl('videos-vc', VideosViewControl);
