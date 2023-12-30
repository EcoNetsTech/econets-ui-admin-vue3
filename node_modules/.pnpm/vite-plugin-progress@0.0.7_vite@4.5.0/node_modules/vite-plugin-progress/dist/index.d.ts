import { PluginOption } from 'vite';

interface PluginOptions {
    /**
     * total number of ticks to complete
     * @default 100
     */
    total?: number;
    /**
     * The format of the progress bar
     */
    format?: string;
    /**
     * The src directory of the build files
     */
    srcDir?: string;
    /**
     * current completed index
     */
    curr?: number | undefined;
    /**
     * head character defaulting to complete character
     */
    head?: string | undefined;
    /**
     * The displayed width of the progress bar defaulting to total.
     */
    width?: number | undefined;
    /**
     * minimum time between updates in milliseconds defaulting to 16
     */
    renderThrottle?: number | undefined;
    /**
     * The output stream defaulting to stderr.
     */
    stream?: NodeJS.WritableStream | undefined;
    /**
     * Completion character defaulting to "=".
     */
    complete?: string | undefined;
    /**
     * Incomplete character defaulting to "-".
     */
    incomplete?: string | undefined;
    /**
     * Option to clear the bar on completion defaulting to false.
     */
    clear?: boolean | undefined;
    /**
     * Optional function to call when the progress bar completes.
     */
    callback?: Function | undefined;
}
declare function viteProgressBar(options?: PluginOptions): PluginOption;

export { viteProgressBar as default };
