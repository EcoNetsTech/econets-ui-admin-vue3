export default class LassoTool {
  static $inject: string[];

  /**
   * @param eventBus
   * @param canvas
   * @param dragging
   * @param elementRegistry
   * @param selection
   * @param toolManager
   * @param mouse
   */
  constructor(eventBus: EventBus, canvas: Canvas, dragging: Dragging, elementRegistry: ElementRegistry, selection: Selection, toolManager: ToolManager, mouse: Mouse);

  activateLasso(event: any, autoActivate: any): void;
  activateSelection(event: any, autoActivate: any): void;
  select(elements: any, bbox: any): void;
  toggle(): void;
  isActive(): boolean;
}

type Canvas = import('../../core/Canvas').default;
type Dragging = import('../dragging/Dragging').default;
type ElementRegistry = import('../../core/ElementRegistry').default;
type EventBus = import('../../core/EventBus').default;
type Mouse = import('../mouse/Mouse').default;
type Selection = import('../selection/Selection').default;
type ToolManager = import('../tool-manager/ToolManager').default;
