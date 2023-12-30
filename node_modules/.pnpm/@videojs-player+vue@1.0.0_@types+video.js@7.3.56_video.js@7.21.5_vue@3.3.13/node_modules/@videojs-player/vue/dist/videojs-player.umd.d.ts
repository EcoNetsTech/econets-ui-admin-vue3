import { Plugin } from 'vue';
import videojs from "video.js";
import { VideoJsPlayerOptions } from "video.js";
import { VideoJsPlayer as Player } from "video.js";
interface VideoJsPlayer extends Player {
    // https://docs.videojs.com/player#playbackRates
    playbackRates(newRates?: number[]): number[];
}
type PropType<T> = {
    (): T;
};
type InferPropType<T> = T extends PropType<infer V> ? V : T;
declare const propsConfig: {
    readonly volume: {
        type: PropType<number>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    readonly playbackRate: {
        type: PropType<number>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    readonly options: {
        type: PropType<VideoJsPlayerOptions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: VideoJsPlayerOptions, oldValue?: VideoJsPlayerOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: VideoJsPlayerOptions) => void) => any) | undefined;
    };
    readonly html5: {
        type: PropType<Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>, oldValue?: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>) => void) => any) | undefined;
    };
    readonly children: {
        type: PropType<videojs.Child[]>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: videojs.Child[], oldValue?: videojs.Child[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: videojs.Child[]) => void) => any) | undefined;
    };
    readonly controlBar: {
        type: PropType<false | videojs.ControlBarOptions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: false | videojs.ControlBarOptions, oldValue?: false | videojs.ControlBarOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: false | videojs.ControlBarOptions) => void) => any) | undefined;
    };
    readonly id: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly sources: {
        type: PropType<videojs.Tech.SourceObject[]>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: videojs.Tech.SourceObject[], oldValue?: videojs.Tech.SourceObject[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: videojs.Tech.SourceObject[]) => void) => any) | undefined;
    };
    readonly tracks: {
        type: PropType<videojs.TextTrackOptions[]>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: videojs.TextTrackOptions[], oldValue?: videojs.TextTrackOptions[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: videojs.TextTrackOptions[]) => void) => any) | undefined;
    };
    readonly textTrackSettings: {
        type: PropType<videojs.TextTrackSettingsOptions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: videojs.TextTrackSettingsOptions, oldValue?: videojs.TextTrackSettingsOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: videojs.TextTrackSettingsOptions) => void) => any) | undefined;
    };
    readonly language: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly languages: {
        type: PropType<{
            [code: string]: videojs.LanguageTranslations;
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            [code: string]: videojs.LanguageTranslations;
        }, oldValue?: {
            [code: string]: videojs.LanguageTranslations;
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            [code: string]: videojs.LanguageTranslations;
        }) => void) => any) | undefined;
    };
    readonly playbackRates: {
        type: PropType<number[]>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number[], oldValue?: number[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number[]) => void) => any) | undefined;
    };
    readonly audioOnlyMode: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly audioPosterMode: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly responsive: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly breakpoints: {
        type: PropType<Partial<videojs.Breakpoint>>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<videojs.Breakpoint>, oldValue?: Partial<videojs.Breakpoint> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<videojs.Breakpoint>) => void) => any) | undefined;
    };
    readonly fluid: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly fill: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly aspectRatio: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly fullscreen: {
        type: PropType<{
            options: {
                navigationUI: "hide";
            };
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            options: {
                navigationUI: "hide";
            };
        }, oldValue?: {
            options: {
                navigationUI: "hide";
            };
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            options: {
                navigationUI: "hide";
            };
        }) => void) => any) | undefined;
    };
    readonly liveui: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly liveTracker: {
        type: PropType<Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>, oldValue?: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>) => void) => any) | undefined;
    };
    readonly disablePictureInPicture: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly notSupportedMessage: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly normalizeAutoplay: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly noUITitleAttributes: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly preferFullWindow: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly suppressNotSupportedError: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly techCanOverridePoster: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly reportTouchActivity: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly techOrder: {
        type: PropType<string[]>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string[], oldValue?: string[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string[]) => void) => any) | undefined;
    };
    readonly inactivityTimeout: {
        type: PropType<number>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    readonly userActions: {
        type: PropType<videojs.UserActions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: videojs.UserActions, oldValue?: videojs.UserActions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: videojs.UserActions) => void) => any) | undefined;
    };
    readonly plugins: {
        type: PropType<Partial<import("video.js").VideoJsPlayerPluginOptions>>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>, oldValue?: Partial<import("video.js").VideoJsPlayerPluginOptions> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>) => void) => any) | undefined;
    };
    readonly restoreEl: {
        type: PropType<boolean | Element>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | Element, oldValue?: boolean | Element | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | Element) => void) => any) | undefined;
    };
    readonly "vtt.js": {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly src: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly width: {
        type: PropType<number>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    readonly height: {
        type: PropType<number>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    readonly preload: {
        type: PropType<"auto" | "metadata" | "none">;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: "auto" | "metadata" | "none", oldValue?: "auto" | "metadata" | "none" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: "auto" | "metadata" | "none") => void) => any) | undefined;
    };
    readonly loop: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly muted: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly poster: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly controls: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly autoplay: {
        type: PropType<boolean | "muted" | "play" | "any">;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | "muted" | "play" | "any", oldValue?: boolean | "muted" | "play" | "any" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | "muted" | "play" | "any") => void) => any) | undefined;
    };
    readonly crossorigin: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly crossOrigin: {
        type: PropType<string>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    readonly playsinline: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    readonly playsInline: {
        type: PropType<boolean>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
};
type PropsConfig = typeof propsConfig;
type PropKey = keyof PropsConfig;
type Props = {
    [K in PropKey]?: InferPropType<(typeof propsConfig)[K]["type"]>;
};
declare const eventsMap: {
    readonly componentresize: "onComponentResize";
    readonly playerresize: "onPlayerResize";
    readonly ready: "onReady";
    readonly tap: "onTap";
    readonly beforepluginsetup: "onBeforePluginSetup";
    readonly pluginsetup: "onPluginSetup";
    readonly posterchange: "onPosterChange";
    readonly languagechange: "onLanguageChange";
    readonly fullscreenchange: "onFullscreenChange";
    readonly playbackrateschange: "onPlaybackRatesChange";
    readonly controlsdisabled: "onControlsDisabled";
    readonly controlsenabled: "onControlsEnabled";
    readonly enterFullWindow: "onEnterFullWindow";
    readonly exitFullWindow: "onExitFullWindow";
    readonly enterpictureinpicture: "onEnterPictureInPicture";
    readonly leavepictureinpicture: "onLeavePictureInPicture";
    readonly sourceset: "onSourceSet";
    readonly texttrackchange: "onTextTrackChange";
    readonly textdata: "onTextData";
    readonly useractive: "onUserActive";
    readonly userinactive: "onUserInactive";
    readonly usingcustomcontrols: "onUsingCustomControls";
    readonly usingnativecontrols: "onUsingNativeControls";
    readonly dispose: "onDispose";
    readonly loadstart: "onLoadStart";
    readonly suspend: "onSuspend";
    readonly abort: "onAbort";
    readonly error: "onError";
    readonly emptied: "onEmptied";
    readonly stalled: "onStalled";
    readonly loadedmetadata: "onLoadedMetadata";
    readonly loadeddata: "onLoadedData";
    readonly canplay: "onCanPlay";
    readonly canplaythrough: "onCanPlayThrough";
    readonly playing: "onPlaying";
    readonly waiting: "onWaiting";
    readonly seeking: "onSeeking";
    readonly seeked: "onSeeked";
    readonly ended: "onEnded";
    readonly durationchange: "onDurationChange";
    readonly timeupdate: "onTimeUpdate";
    readonly progress: "onProgress";
    readonly play: "onPlay";
    readonly pause: "onpause";
    readonly ratechange: "onRateChange";
    readonly resize: "onResize";
    readonly volumechange: "onVolumeChange";
};
type EventMap = typeof eventsMap;
type EventKey = keyof EventMap;
type Player$0 = VideoJsPlayer;
// https://videojs.com/advanced/
// https://github.com/videojs/videojs.com/blob/main/src/components/HomeComponents/AdvancedExample/mediaProperties.js
// https://github.com/videojs/videojs.com/blob/main/src/components/HomeComponents/AdvancedExample/MediaPropertyItem.jsx
declare const StateConfig: {
    src: {
        getter: (player: Player$0) => string;
    };
    currentSrc: {
        getter: (player: Player$0) => string;
    };
    currentSource: {
        getter: (player: Player$0) => import("video.js").default.Tech.SourceObject;
    };
    width: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    height: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    currentWidth: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    currentHeight: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    videoWidth: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    videoHeight: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    controls: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    volume: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    muted: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    poster: {
        events: string[];
        getter: (player: Player$0) => string;
    };
    seeking: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    paused: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    ended: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    currentTime: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    duration: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    playbackRate: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    playbackRates: {
        events: string[];
        getter: (player: Player$0) => number[];
    };
    isFullscreen: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    isInPictureInPicture: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    isLive: {
        getter: (player: Player$0) => boolean;
    };
    language: {
        events: string[];
        getter: (player: Player$0) => string;
    };
    userActive: {
        events: string[];
        getter: (player: Player$0) => boolean;
    };
    readyState: {
        events: string[];
        getter: (player: Player$0) => import("video.js").default.ReadyState;
    };
    networkState: {
        events: string[];
        getter: (player: Player$0) => import("video.js").default.NetworkState;
    };
    error: {
        events: string[];
        getter: (player: Player$0) => MediaError | null;
    };
    buffered: {
        events: string[];
        getter: (player: Player$0) => import("video.js").default.TimeRange;
    };
    bufferedPercent: {
        events: string[];
        getter: (player: Player$0) => number;
    };
    played: {
        events: string[];
        getter: (player: Player$0) => TimeRanges;
    };
    seekable: {
        events: string[];
        getter: (player: Player$0) => TimeRanges;
    };
    audioTracks: {
        getter: (player: Player$0) => import("video.js").default.AudioTrackList;
    };
    videoTracks: {
        getter: (player: any) => any;
    };
    textTracks: {
        getter: (player: Player$0) => TextTrackList;
    };
};
type PlayerBastState = {
    [K in keyof typeof StateConfig]: ReturnType<(typeof StateConfig)[K]["getter"]>;
};
interface PlayerState extends PlayerBastState {
    playing: boolean;
    waiting: boolean;
}
declare const VideoPlayer: import("vue").DefineComponent<{
    class: import("vue").PropType<unknown>;
    volume: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    playbackRate: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    options: {
        type: () => import("video.js").VideoJsPlayerOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").VideoJsPlayerOptions, oldValue?: import("video.js").VideoJsPlayerOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").VideoJsPlayerOptions) => void) => any) | undefined;
    };
    html5: {
        type: () => Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>, oldValue?: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>) => void) => any) | undefined;
    };
    children: {
        type: () => import("video.js").default.Child[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Child[], oldValue?: import("video.js").default.Child[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Child[]) => void) => any) | undefined;
    };
    controlBar: {
        type: () => false | import("video.js").default.ControlBarOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: false | import("video.js").default.ControlBarOptions, oldValue?: false | import("video.js").default.ControlBarOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: false | import("video.js").default.ControlBarOptions) => void) => any) | undefined;
    };
    id: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    sources: {
        type: () => import("video.js").default.Tech.SourceObject[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Tech.SourceObject[], oldValue?: import("video.js").default.Tech.SourceObject[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Tech.SourceObject[]) => void) => any) | undefined;
    };
    tracks: {
        type: () => import("video.js").default.TextTrackOptions[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackOptions[], oldValue?: import("video.js").default.TextTrackOptions[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackOptions[]) => void) => any) | undefined;
    };
    textTrackSettings: {
        type: () => import("video.js").default.TextTrackSettingsOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackSettingsOptions, oldValue?: import("video.js").default.TextTrackSettingsOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackSettingsOptions) => void) => any) | undefined;
    };
    language: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    languages: {
        type: () => {
            [code: string]: import("video.js").default.LanguageTranslations;
        };
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            [code: string]: import("video.js").default.LanguageTranslations;
        }, oldValue?: {
            [code: string]: import("video.js").default.LanguageTranslations;
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            [code: string]: import("video.js").default.LanguageTranslations;
        }) => void) => any) | undefined;
    };
    playbackRates: {
        type: () => number[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number[], oldValue?: number[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number[]) => void) => any) | undefined;
    };
    audioOnlyMode: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    audioPosterMode: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    responsive: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    breakpoints: {
        type: () => Partial<import("video.js").default.Breakpoint>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").default.Breakpoint>, oldValue?: Partial<import("video.js").default.Breakpoint> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").default.Breakpoint>) => void) => any) | undefined;
    };
    fluid: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    fill: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    aspectRatio: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    fullscreen: {
        type: () => {
            options: {
                navigationUI: "hide";
            };
        };
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            options: {
                navigationUI: "hide";
            };
        }, oldValue?: {
            options: {
                navigationUI: "hide";
            };
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            options: {
                navigationUI: "hide";
            };
        }) => void) => any) | undefined;
    };
    liveui: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    liveTracker: {
        type: () => Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>, oldValue?: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>) => void) => any) | undefined;
    };
    disablePictureInPicture: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    notSupportedMessage: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    normalizeAutoplay: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    noUITitleAttributes: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    preferFullWindow: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    suppressNotSupportedError: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    techCanOverridePoster: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    reportTouchActivity: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    techOrder: {
        type: () => string[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string[], oldValue?: string[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string[]) => void) => any) | undefined;
    };
    inactivityTimeout: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    userActions: {
        type: () => import("video.js").default.UserActions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.UserActions, oldValue?: import("video.js").default.UserActions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.UserActions) => void) => any) | undefined;
    };
    plugins: {
        type: () => Partial<import("video.js").VideoJsPlayerPluginOptions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>, oldValue?: Partial<import("video.js").VideoJsPlayerPluginOptions> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>) => void) => any) | undefined;
    };
    restoreEl: {
        type: () => boolean | Element;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | Element, oldValue?: boolean | Element | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | Element) => void) => any) | undefined;
    };
    'vtt.js': {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    src: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    width: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    height: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    preload: {
        type: () => "auto" | "metadata" | "none";
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: "auto" | "metadata" | "none", oldValue?: "auto" | "metadata" | "none" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: "auto" | "metadata" | "none") => void) => any) | undefined;
    };
    loop: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    muted: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    poster: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    controls: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    autoplay: {
        type: () => boolean | "muted" | "play" | "any";
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | "muted" | "play" | "any", oldValue?: boolean | "muted" | "play" | "any" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | "muted" | "play" | "any") => void) => any) | undefined;
    };
    crossorigin: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    crossOrigin: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    playsinline: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    playsInline: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("volumechange" | "posterchange" | "play" | "languagechange" | "playerresize" | "resize" | "controlsenabled" | "controlsdisabled" | "playbackrateschange" | "ratechange" | "componentresize" | "ready" | "tap" | "beforepluginsetup" | "pluginsetup" | "fullscreenchange" | "enterFullWindow" | "exitFullWindow" | "enterpictureinpicture" | "leavepictureinpicture" | "sourceset" | "texttrackchange" | "textdata" | "useractive" | "userinactive" | "usingcustomcontrols" | "usingnativecontrols" | "dispose" | "loadstart" | "suspend" | "abort" | "error" | "emptied" | "stalled" | "loadedmetadata" | "loadeddata" | "canplay" | "canplaythrough" | "playing" | "waiting" | "seeking" | "seeked" | "ended" | "durationchange" | "timeupdate" | "progress" | "pause" | "mounted" | "unmounted")[], "volumechange" | "posterchange" | "play" | "languagechange" | "playerresize" | "resize" | "controlsenabled" | "controlsdisabled" | "playbackrateschange" | "ratechange" | "componentresize" | "ready" | "tap" | "beforepluginsetup" | "pluginsetup" | "fullscreenchange" | "enterFullWindow" | "exitFullWindow" | "enterpictureinpicture" | "leavepictureinpicture" | "sourceset" | "texttrackchange" | "textdata" | "useractive" | "userinactive" | "usingcustomcontrols" | "usingnativecontrols" | "dispose" | "loadstart" | "suspend" | "abort" | "error" | "emptied" | "stalled" | "loadedmetadata" | "loadeddata" | "canplay" | "canplaythrough" | "playing" | "waiting" | "seeking" | "seeked" | "ended" | "durationchange" | "timeupdate" | "progress" | "pause" | "mounted" | "unmounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: import("vue").PropType<unknown>;
    volume: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    playbackRate: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    options: {
        type: () => import("video.js").VideoJsPlayerOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").VideoJsPlayerOptions, oldValue?: import("video.js").VideoJsPlayerOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").VideoJsPlayerOptions) => void) => any) | undefined;
    };
    html5: {
        type: () => Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>, oldValue?: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            vhs: any;
            nativeControlsForTouch: boolean;
            nativeAudioTracks: boolean;
            nativeTextTracks: boolean;
            nativeVideoTracks: boolean;
            preloadTextTracks: boolean;
        }>) => void) => any) | undefined;
    };
    children: {
        type: () => import("video.js").default.Child[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Child[], oldValue?: import("video.js").default.Child[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Child[]) => void) => any) | undefined;
    };
    controlBar: {
        type: () => false | import("video.js").default.ControlBarOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: false | import("video.js").default.ControlBarOptions, oldValue?: false | import("video.js").default.ControlBarOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: false | import("video.js").default.ControlBarOptions) => void) => any) | undefined;
    };
    id: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    sources: {
        type: () => import("video.js").default.Tech.SourceObject[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Tech.SourceObject[], oldValue?: import("video.js").default.Tech.SourceObject[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Tech.SourceObject[]) => void) => any) | undefined;
    };
    tracks: {
        type: () => import("video.js").default.TextTrackOptions[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackOptions[], oldValue?: import("video.js").default.TextTrackOptions[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackOptions[]) => void) => any) | undefined;
    };
    textTrackSettings: {
        type: () => import("video.js").default.TextTrackSettingsOptions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackSettingsOptions, oldValue?: import("video.js").default.TextTrackSettingsOptions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackSettingsOptions) => void) => any) | undefined;
    };
    language: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    languages: {
        type: () => {
            [code: string]: import("video.js").default.LanguageTranslations;
        };
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            [code: string]: import("video.js").default.LanguageTranslations;
        }, oldValue?: {
            [code: string]: import("video.js").default.LanguageTranslations;
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            [code: string]: import("video.js").default.LanguageTranslations;
        }) => void) => any) | undefined;
    };
    playbackRates: {
        type: () => number[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number[], oldValue?: number[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number[]) => void) => any) | undefined;
    };
    audioOnlyMode: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    audioPosterMode: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    responsive: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    breakpoints: {
        type: () => Partial<import("video.js").default.Breakpoint>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").default.Breakpoint>, oldValue?: Partial<import("video.js").default.Breakpoint> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").default.Breakpoint>) => void) => any) | undefined;
    };
    fluid: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    fill: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    aspectRatio: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    fullscreen: {
        type: () => {
            options: {
                navigationUI: "hide";
            };
        };
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: {
            options: {
                navigationUI: "hide";
            };
        }, oldValue?: {
            options: {
                navigationUI: "hide";
            };
        } | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
            options: {
                navigationUI: "hide";
            };
        }) => void) => any) | undefined;
    };
    liveui: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    liveTracker: {
        type: () => Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>, oldValue?: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
            [key: string]: any;
            trackingThreshold: number;
            liveTolerance: number;
        }>) => void) => any) | undefined;
    };
    disablePictureInPicture: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    notSupportedMessage: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    normalizeAutoplay: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    noUITitleAttributes: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    preferFullWindow: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    suppressNotSupportedError: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    techCanOverridePoster: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    reportTouchActivity: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    techOrder: {
        type: () => string[];
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string[], oldValue?: string[] | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string[]) => void) => any) | undefined;
    };
    inactivityTimeout: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    userActions: {
        type: () => import("video.js").default.UserActions;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.UserActions, oldValue?: import("video.js").default.UserActions | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.UserActions) => void) => any) | undefined;
    };
    plugins: {
        type: () => Partial<import("video.js").VideoJsPlayerPluginOptions>;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>, oldValue?: Partial<import("video.js").VideoJsPlayerPluginOptions> | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>) => void) => any) | undefined;
    };
    restoreEl: {
        type: () => boolean | Element;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | Element, oldValue?: boolean | Element | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | Element) => void) => any) | undefined;
    };
    'vtt.js': {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    src: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    width: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    height: {
        type: () => number;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
    };
    preload: {
        type: () => "auto" | "metadata" | "none";
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: "auto" | "metadata" | "none", oldValue?: "auto" | "metadata" | "none" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: "auto" | "metadata" | "none") => void) => any) | undefined;
    };
    loop: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    muted: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    poster: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    controls: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    autoplay: {
        type: () => boolean | "muted" | "play" | "any";
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean | "muted" | "play" | "any", oldValue?: boolean | "muted" | "play" | "any" | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | "muted" | "play" | "any") => void) => any) | undefined;
    };
    crossorigin: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    crossOrigin: {
        type: () => string;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
    };
    playsinline: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
    playsInline: {
        type: () => boolean;
        default?: any;
        onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
        onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
    };
}>> & {
    onSuspend?: ((...args: any[]) => any) | undefined;
    onAbort?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onEmptied?: ((...args: any[]) => any) | undefined;
    onStalled?: ((...args: any[]) => any) | undefined;
    onPlaying?: ((...args: any[]) => any) | undefined;
    onWaiting?: ((...args: any[]) => any) | undefined;
    onSeeking?: ((...args: any[]) => any) | undefined;
    onSeeked?: ((...args: any[]) => any) | undefined;
    onEnded?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onPlay?: ((...args: any[]) => any) | undefined;
    onResize?: ((...args: any[]) => any) | undefined;
    onEnterFullWindow?: ((...args: any[]) => any) | undefined;
    onExitFullWindow?: ((...args: any[]) => any) | undefined;
    onDispose?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
    onTap?: ((...args: any[]) => any) | undefined;
    onVolumechange?: ((...args: any[]) => any) | undefined;
    onPosterchange?: ((...args: any[]) => any) | undefined;
    onLanguagechange?: ((...args: any[]) => any) | undefined;
    onPlayerresize?: ((...args: any[]) => any) | undefined;
    onControlsenabled?: ((...args: any[]) => any) | undefined;
    onControlsdisabled?: ((...args: any[]) => any) | undefined;
    onPlaybackrateschange?: ((...args: any[]) => any) | undefined;
    onRatechange?: ((...args: any[]) => any) | undefined;
    onComponentresize?: ((...args: any[]) => any) | undefined;
    onBeforepluginsetup?: ((...args: any[]) => any) | undefined;
    onPluginsetup?: ((...args: any[]) => any) | undefined;
    onFullscreenchange?: ((...args: any[]) => any) | undefined;
    onEnterpictureinpicture?: ((...args: any[]) => any) | undefined;
    onLeavepictureinpicture?: ((...args: any[]) => any) | undefined;
    onSourceset?: ((...args: any[]) => any) | undefined;
    onTexttrackchange?: ((...args: any[]) => any) | undefined;
    onTextdata?: ((...args: any[]) => any) | undefined;
    onUseractive?: ((...args: any[]) => any) | undefined;
    onUserinactive?: ((...args: any[]) => any) | undefined;
    onUsingcustomcontrols?: ((...args: any[]) => any) | undefined;
    onUsingnativecontrols?: ((...args: any[]) => any) | undefined;
    onLoadstart?: ((...args: any[]) => any) | undefined;
    onLoadedmetadata?: ((...args: any[]) => any) | undefined;
    onLoadeddata?: ((...args: any[]) => any) | undefined;
    onCanplay?: ((...args: any[]) => any) | undefined;
    onCanplaythrough?: ((...args: any[]) => any) | undefined;
    onDurationchange?: ((...args: any[]) => any) | undefined;
    onTimeupdate?: ((...args: any[]) => any) | undefined;
    onPause?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onUnmounted?: ((...args: any[]) => any) | undefined;
}, {}>;
declare const install: Plugin;
declare const _default: {
    VideoPlayer: import("vue").DefineComponent<{
        class: import("vue").PropType<unknown>;
        volume: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        playbackRate: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        options: {
            type: () => import("video.js").VideoJsPlayerOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").VideoJsPlayerOptions, oldValue?: import("video.js").VideoJsPlayerOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").VideoJsPlayerOptions) => void) => any) | undefined;
        };
        html5: {
            type: () => Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>, oldValue?: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>) => void) => any) | undefined;
        };
        children: {
            type: () => import("video.js").default.Child[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Child[], oldValue?: import("video.js").default.Child[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Child[]) => void) => any) | undefined;
        };
        controlBar: {
            type: () => false | import("video.js").default.ControlBarOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: false | import("video.js").default.ControlBarOptions, oldValue?: false | import("video.js").default.ControlBarOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: false | import("video.js").default.ControlBarOptions) => void) => any) | undefined;
        };
        id: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        sources: {
            type: () => import("video.js").default.Tech.SourceObject[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Tech.SourceObject[], oldValue?: import("video.js").default.Tech.SourceObject[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Tech.SourceObject[]) => void) => any) | undefined;
        };
        tracks: {
            type: () => import("video.js").default.TextTrackOptions[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackOptions[], oldValue?: import("video.js").default.TextTrackOptions[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackOptions[]) => void) => any) | undefined;
        };
        textTrackSettings: {
            type: () => import("video.js").default.TextTrackSettingsOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackSettingsOptions, oldValue?: import("video.js").default.TextTrackSettingsOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackSettingsOptions) => void) => any) | undefined;
        };
        language: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        languages: {
            type: () => {
                [code: string]: import("video.js").default.LanguageTranslations;
            };
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: {
                [code: string]: import("video.js").default.LanguageTranslations;
            }, oldValue?: {
                [code: string]: import("video.js").default.LanguageTranslations;
            } | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
                [code: string]: import("video.js").default.LanguageTranslations;
            }) => void) => any) | undefined;
        };
        playbackRates: {
            type: () => number[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number[], oldValue?: number[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number[]) => void) => any) | undefined;
        };
        audioOnlyMode: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        audioPosterMode: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        responsive: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        breakpoints: {
            type: () => Partial<import("video.js").default.Breakpoint>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").default.Breakpoint>, oldValue?: Partial<import("video.js").default.Breakpoint> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").default.Breakpoint>) => void) => any) | undefined;
        };
        fluid: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        fill: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        aspectRatio: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        fullscreen: {
            type: () => {
                options: {
                    navigationUI: "hide";
                };
            };
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: {
                options: {
                    navigationUI: "hide";
                };
            }, oldValue?: {
                options: {
                    navigationUI: "hide";
                };
            } | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
                options: {
                    navigationUI: "hide";
                };
            }) => void) => any) | undefined;
        };
        liveui: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        liveTracker: {
            type: () => Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>, oldValue?: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>) => void) => any) | undefined;
        };
        disablePictureInPicture: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        notSupportedMessage: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        normalizeAutoplay: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        noUITitleAttributes: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        preferFullWindow: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        suppressNotSupportedError: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        techCanOverridePoster: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        reportTouchActivity: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        techOrder: {
            type: () => string[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string[], oldValue?: string[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string[]) => void) => any) | undefined;
        };
        inactivityTimeout: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        userActions: {
            type: () => import("video.js").default.UserActions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.UserActions, oldValue?: import("video.js").default.UserActions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.UserActions) => void) => any) | undefined;
        };
        plugins: {
            type: () => Partial<import("video.js").VideoJsPlayerPluginOptions>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>, oldValue?: Partial<import("video.js").VideoJsPlayerPluginOptions> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>) => void) => any) | undefined;
        };
        restoreEl: {
            type: () => boolean | Element;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean | Element, oldValue?: boolean | Element | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | Element) => void) => any) | undefined;
        };
        'vtt.js': {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        src: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        width: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        height: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        preload: {
            type: () => "auto" | "metadata" | "none";
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: "auto" | "metadata" | "none", oldValue?: "auto" | "metadata" | "none" | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: "auto" | "metadata" | "none") => void) => any) | undefined;
        };
        loop: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        muted: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        poster: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        controls: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        autoplay: {
            type: () => boolean | "muted" | "play" | "any";
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean | "muted" | "play" | "any", oldValue?: boolean | "muted" | "play" | "any" | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | "muted" | "play" | "any") => void) => any) | undefined;
        };
        crossorigin: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        crossOrigin: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        playsinline: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        playsInline: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("volumechange" | "posterchange" | "play" | "languagechange" | "playerresize" | "resize" | "controlsenabled" | "controlsdisabled" | "playbackrateschange" | "ratechange" | "componentresize" | "ready" | "tap" | "beforepluginsetup" | "pluginsetup" | "fullscreenchange" | "enterFullWindow" | "exitFullWindow" | "enterpictureinpicture" | "leavepictureinpicture" | "sourceset" | "texttrackchange" | "textdata" | "useractive" | "userinactive" | "usingcustomcontrols" | "usingnativecontrols" | "dispose" | "loadstart" | "suspend" | "abort" | "error" | "emptied" | "stalled" | "loadedmetadata" | "loadeddata" | "canplay" | "canplaythrough" | "playing" | "waiting" | "seeking" | "seeked" | "ended" | "durationchange" | "timeupdate" | "progress" | "pause" | "mounted" | "unmounted")[], "volumechange" | "posterchange" | "play" | "languagechange" | "playerresize" | "resize" | "controlsenabled" | "controlsdisabled" | "playbackrateschange" | "ratechange" | "componentresize" | "ready" | "tap" | "beforepluginsetup" | "pluginsetup" | "fullscreenchange" | "enterFullWindow" | "exitFullWindow" | "enterpictureinpicture" | "leavepictureinpicture" | "sourceset" | "texttrackchange" | "textdata" | "useractive" | "userinactive" | "usingcustomcontrols" | "usingnativecontrols" | "dispose" | "loadstart" | "suspend" | "abort" | "error" | "emptied" | "stalled" | "loadedmetadata" | "loadeddata" | "canplay" | "canplaythrough" | "playing" | "waiting" | "seeking" | "seeked" | "ended" | "durationchange" | "timeupdate" | "progress" | "pause" | "mounted" | "unmounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: import("vue").PropType<unknown>;
        volume: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        playbackRate: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        options: {
            type: () => import("video.js").VideoJsPlayerOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").VideoJsPlayerOptions, oldValue?: import("video.js").VideoJsPlayerOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").VideoJsPlayerOptions) => void) => any) | undefined;
        };
        html5: {
            type: () => Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>, oldValue?: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
                vhs: any;
                nativeControlsForTouch: boolean;
                nativeAudioTracks: boolean;
                nativeTextTracks: boolean;
                nativeVideoTracks: boolean;
                preloadTextTracks: boolean;
            }>) => void) => any) | undefined;
        };
        children: {
            type: () => import("video.js").default.Child[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Child[], oldValue?: import("video.js").default.Child[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Child[]) => void) => any) | undefined;
        };
        controlBar: {
            type: () => false | import("video.js").default.ControlBarOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: false | import("video.js").default.ControlBarOptions, oldValue?: false | import("video.js").default.ControlBarOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: false | import("video.js").default.ControlBarOptions) => void) => any) | undefined;
        };
        id: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        sources: {
            type: () => import("video.js").default.Tech.SourceObject[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.Tech.SourceObject[], oldValue?: import("video.js").default.Tech.SourceObject[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.Tech.SourceObject[]) => void) => any) | undefined;
        };
        tracks: {
            type: () => import("video.js").default.TextTrackOptions[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackOptions[], oldValue?: import("video.js").default.TextTrackOptions[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackOptions[]) => void) => any) | undefined;
        };
        textTrackSettings: {
            type: () => import("video.js").default.TextTrackSettingsOptions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.TextTrackSettingsOptions, oldValue?: import("video.js").default.TextTrackSettingsOptions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.TextTrackSettingsOptions) => void) => any) | undefined;
        };
        language: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        languages: {
            type: () => {
                [code: string]: import("video.js").default.LanguageTranslations;
            };
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: {
                [code: string]: import("video.js").default.LanguageTranslations;
            }, oldValue?: {
                [code: string]: import("video.js").default.LanguageTranslations;
            } | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
                [code: string]: import("video.js").default.LanguageTranslations;
            }) => void) => any) | undefined;
        };
        playbackRates: {
            type: () => number[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number[], oldValue?: number[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number[]) => void) => any) | undefined;
        };
        audioOnlyMode: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        audioPosterMode: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        responsive: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        breakpoints: {
            type: () => Partial<import("video.js").default.Breakpoint>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").default.Breakpoint>, oldValue?: Partial<import("video.js").default.Breakpoint> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").default.Breakpoint>) => void) => any) | undefined;
        };
        fluid: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        fill: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        aspectRatio: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        fullscreen: {
            type: () => {
                options: {
                    navigationUI: "hide";
                };
            };
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: {
                options: {
                    navigationUI: "hide";
                };
            }, oldValue?: {
                options: {
                    navigationUI: "hide";
                };
            } | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: {
                options: {
                    navigationUI: "hide";
                };
            }) => void) => any) | undefined;
        };
        liveui: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        liveTracker: {
            type: () => Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>, oldValue?: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<{
                [key: string]: any;
                trackingThreshold: number;
                liveTolerance: number;
            }>) => void) => any) | undefined;
        };
        disablePictureInPicture: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        notSupportedMessage: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        normalizeAutoplay: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        noUITitleAttributes: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        preferFullWindow: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        suppressNotSupportedError: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        techCanOverridePoster: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        reportTouchActivity: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        techOrder: {
            type: () => string[];
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string[], oldValue?: string[] | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string[]) => void) => any) | undefined;
        };
        inactivityTimeout: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        userActions: {
            type: () => import("video.js").default.UserActions;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: import("video.js").default.UserActions, oldValue?: import("video.js").default.UserActions | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: import("video.js").default.UserActions) => void) => any) | undefined;
        };
        plugins: {
            type: () => Partial<import("video.js").VideoJsPlayerPluginOptions>;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>, oldValue?: Partial<import("video.js").VideoJsPlayerPluginOptions> | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: Partial<import("video.js").VideoJsPlayerPluginOptions>) => void) => any) | undefined;
        };
        restoreEl: {
            type: () => boolean | Element;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean | Element, oldValue?: boolean | Element | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | Element) => void) => any) | undefined;
        };
        'vtt.js': {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        src: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        width: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        height: {
            type: () => number;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: number, oldValue?: number | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: number) => void) => any) | undefined;
        };
        preload: {
            type: () => "auto" | "metadata" | "none";
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: "auto" | "metadata" | "none", oldValue?: "auto" | "metadata" | "none" | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: "auto" | "metadata" | "none") => void) => any) | undefined;
        };
        loop: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        muted: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        poster: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        controls: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        autoplay: {
            type: () => boolean | "muted" | "play" | "any";
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean | "muted" | "play" | "any", oldValue?: boolean | "muted" | "play" | "any" | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean | "muted" | "play" | "any") => void) => any) | undefined;
        };
        crossorigin: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        crossOrigin: {
            type: () => string;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: string, oldValue?: string | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: string) => void) => any) | undefined;
        };
        playsinline: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
        playsInline: {
            type: () => boolean;
            default?: any;
            onChange?: ((player: VideoJsPlayer, newValue: boolean, oldValue?: boolean | undefined) => any) | undefined;
            onEvent?: ((player: VideoJsPlayer, callback: (newValue: boolean) => void) => any) | undefined;
        };
    }>> & {
        onSuspend?: ((...args: any[]) => any) | undefined;
        onAbort?: ((...args: any[]) => any) | undefined;
        onError?: ((...args: any[]) => any) | undefined;
        onEmptied?: ((...args: any[]) => any) | undefined;
        onStalled?: ((...args: any[]) => any) | undefined;
        onPlaying?: ((...args: any[]) => any) | undefined;
        onWaiting?: ((...args: any[]) => any) | undefined;
        onSeeking?: ((...args: any[]) => any) | undefined;
        onSeeked?: ((...args: any[]) => any) | undefined;
        onEnded?: ((...args: any[]) => any) | undefined;
        onProgress?: ((...args: any[]) => any) | undefined;
        onPlay?: ((...args: any[]) => any) | undefined;
        onResize?: ((...args: any[]) => any) | undefined;
        onEnterFullWindow?: ((...args: any[]) => any) | undefined;
        onExitFullWindow?: ((...args: any[]) => any) | undefined;
        onDispose?: ((...args: any[]) => any) | undefined;
        onReady?: ((...args: any[]) => any) | undefined;
        onTap?: ((...args: any[]) => any) | undefined;
        onVolumechange?: ((...args: any[]) => any) | undefined;
        onPosterchange?: ((...args: any[]) => any) | undefined;
        onLanguagechange?: ((...args: any[]) => any) | undefined;
        onPlayerresize?: ((...args: any[]) => any) | undefined;
        onControlsenabled?: ((...args: any[]) => any) | undefined;
        onControlsdisabled?: ((...args: any[]) => any) | undefined;
        onPlaybackrateschange?: ((...args: any[]) => any) | undefined;
        onRatechange?: ((...args: any[]) => any) | undefined;
        onComponentresize?: ((...args: any[]) => any) | undefined;
        onBeforepluginsetup?: ((...args: any[]) => any) | undefined;
        onPluginsetup?: ((...args: any[]) => any) | undefined;
        onFullscreenchange?: ((...args: any[]) => any) | undefined;
        onEnterpictureinpicture?: ((...args: any[]) => any) | undefined;
        onLeavepictureinpicture?: ((...args: any[]) => any) | undefined;
        onSourceset?: ((...args: any[]) => any) | undefined;
        onTexttrackchange?: ((...args: any[]) => any) | undefined;
        onTextdata?: ((...args: any[]) => any) | undefined;
        onUseractive?: ((...args: any[]) => any) | undefined;
        onUserinactive?: ((...args: any[]) => any) | undefined;
        onUsingcustomcontrols?: ((...args: any[]) => any) | undefined;
        onUsingnativecontrols?: ((...args: any[]) => any) | undefined;
        onLoadstart?: ((...args: any[]) => any) | undefined;
        onLoadedmetadata?: ((...args: any[]) => any) | undefined;
        onLoadeddata?: ((...args: any[]) => any) | undefined;
        onCanplay?: ((...args: any[]) => any) | undefined;
        onCanplaythrough?: ((...args: any[]) => any) | undefined;
        onDurationchange?: ((...args: any[]) => any) | undefined;
        onTimeupdate?: ((...args: any[]) => any) | undefined;
        onPause?: ((...args: any[]) => any) | undefined;
        onMounted?: ((...args: any[]) => any) | undefined;
        onUnmounted?: ((...args: any[]) => any) | undefined;
    }, {}>;
    install: ((app: import("vue").App<any>, ...options: any[]) => any) & {
        install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
    };
};
export type { Props as VideoPlayerProps, EventKey as VideoPlayerEvents, PlayerState as VideoPlayerState };
export { _default as default, VideoPlayer, install };
