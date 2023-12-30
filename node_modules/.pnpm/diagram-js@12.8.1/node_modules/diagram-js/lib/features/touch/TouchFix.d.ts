export default class TouchFix {
    static $inject: string[];
    /**
     * @param eventBus
     */
    constructor(eventBus: EventBus);
    /**
     * Safari mobile (iOS 7) does not fire touchstart event in <SVG> element
     * if there is no shape between 0,0 and viewport elements origin.
     *
     * So touchstart event is only fired when the <g class="viewport"> element was hit.
     * Putting an element over and below the 'viewport' fixes that behavior.
     *
     * @param svg
     */
    addBBoxMarker(svg: SVGElement): void;
}

type EventBus = import('../../core/EventBus').default;
