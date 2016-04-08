import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import PromotionsViewControl from '../viewcontrols/promotions/promotions.vc';
import HowToPlayViewController from '../viewcontrols/howtoplay/howtoplay.vc';
import OverviewViewController from '../viewcontrols/overview/overview.vc';
import VideosViewController from '../viewcontrols/videos/videos.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

        config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'about', view: AboutViewControl },
            { pattern: 'promotions', view: PromotionsViewControl },
            { pattern: 'howtoplay', view: HowToPlayViewController },
            { pattern: 'howtoplay/overview', view: OverviewViewController },
            { pattern: 'howtoplay/videos', view: VideosViewController }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
