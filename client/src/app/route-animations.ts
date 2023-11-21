import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations'

export const fade = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            animate('600ms ease', 
                style({
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    opacity: 0,
                }),
            )
        ]),
        query(':enter', [
            animate('600ms ease', 
                style({
                    opacity: 1,
                }),
            )
        ]),
    ]),
])