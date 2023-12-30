/**
 * A component that renders the popup menus.
 *
 */
export default class PopupMenuComponent {
    /**
     * @param props
     */
    constructor(props: {
        onClose: () => void;
        position: (element: HTMLElement) => Point;
        className: string;
        entries: PopupMenuEntry[];
        headerEntries: PopupMenuHeaderEntry[];
        scale: number;
        title?: string;
        search?: boolean;
        width?: number;
    });
}

type PopupMenuEntry = import('./PopupMenuProvider').PopupMenuEntry;
type PopupMenuHeaderEntry = import('./PopupMenuProvider').PopupMenuHeaderEntry;
type Point = import('../../util/Types').Point;
