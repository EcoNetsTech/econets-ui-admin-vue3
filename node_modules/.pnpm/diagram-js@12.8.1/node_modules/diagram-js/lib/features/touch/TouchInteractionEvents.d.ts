/**
 * A plugin that provides touch events for elements.
 *
 */
export default class TouchInteractionEvents {
    static $inject: string[];
    /**
     * @param injector
     * @param canvas
     * @param eventBus
     * @param elementRegistry
     * @param interactionEvents
     */
    constructor(injector: Injector, canvas: Canvas, eventBus: EventBus, elementRegistry: ElementRegistry, interactionEvents: InteractionEvents);
}

type Injector = import('didi').Injector;
type Canvas = import('../../core/Canvas').default;
type ElementRegistry = import('../../core/ElementRegistry').default;
type EventBus = import('../../core/EventBus').default;
type InteractionEvents = import('../interaction-events/InteractionEvents').default;
