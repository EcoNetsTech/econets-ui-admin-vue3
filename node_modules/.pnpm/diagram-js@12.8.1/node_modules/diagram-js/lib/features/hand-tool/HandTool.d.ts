export default class HandTool {
  static $inject: string[];

  /**
   * @param eventBus
   * @param canvas
   * @param dragging
   * @param injector
   * @param toolManager
   * @param mouse
   */
  constructor(eventBus: EventBus, canvas: Canvas, dragging: Dragging, injector: Injector, toolManager: ToolManager, mouse: Mouse);

  activateMove(event: any, autoActivate: any, context: any): void;
  activateHand(event: any, autoActivate: any, reactivate: any): void;
  toggle(): void;
  isActive(): boolean;
}

type Injector = import('didi').Injector;
type Canvas = import('../../core/Canvas').default;
type Dragging = import('../dragging/Dragging').default;
type EventBus = import('../../core/EventBus').default;
type Mouse = import('../mouse/Mouse').default;
type ToolManager = import('../tool-manager/ToolManager').default;
