/**
 * Provides searching infrastructure.
 *
 */
export default class SearchPad {
  static $inject: string[];

  /**
   * CONSTANTS
   */
  static CONTAINER_SELECTOR: string;

  static INPUT_SELECTOR: string;
  static RESULTS_CONTAINER_SELECTOR: string;
  static RESULT_SELECTOR: string;
  static RESULT_SELECTED_CLASS: string;
  static RESULT_SELECTED_SELECTOR: string;
  static RESULT_ID_ATTRIBUTE: string;
  static RESULT_HIGHLIGHT_CLASS: string;
  static OVERLAY_CLASS: string;
  static BOX_HTML: string;
  static RESULT_HTML: string;
  static RESULT_PRIMARY_HTML: string;
  static RESULT_SECONDARY_HTML: string;

  /**
   * @param canvas
   * @param eventBus
   * @param overlays
   * @param selection
   */
  constructor(canvas: Canvas, eventBus: EventBus, overlays: Overlays, selection: Selection);

  /**
   * Register search element provider.
   *
   * @param provider
   */
  registerProvider(provider: SearchPadProvider): void;

  /**
   * Open search pad.
   */
  open(): void;

  /**
   * Close search pad.
   */
  close(): void;

  /**
   * Toggles search pad on/off.
   */
  toggle(): void;

  /**
   * Report state of search pad.
   */
  isOpen(): boolean;
}

type Canvas = import('../../core/Canvas').default;
type EventBus = import('../../core/EventBus').default;
type Overlays = import('../overlays/Overlays').default;
type Selection = import('../selection/Selection').default;
type OverlayAttrs = import('../overlays/Overlays').OverlayAttrs;
type Dimensions = import('../../util/Types').Dimensions;
type SearchPadProvider = import('./SearchPadProvider').default;
type SearchResult = import('./SearchPadProvider').SearchResult;
type Token = import('./SearchPadProvider').Token;
