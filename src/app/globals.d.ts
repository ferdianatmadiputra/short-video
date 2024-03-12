interface Window {
  player: any;
  shaka: shaka;
}

/**
 * No official type from Shaka Player. See https://github.com/shaka-project/shaka-player/issues/1030.
 * source: https://gist.githubusercontent.com/niklaskorz/4847dacb16a7c3d5a227be12f6c0faae/raw/b7743313c4238a49ec8abe1a92b21d3c67ac45ae/shaka-player.compiled.d.ts
 */
declare namespace shaka {
  namespace polyfill {
    function installAll() {}
  }
  namespace util {
    class FakeEvent extends Event {
      private noStructuralTyping_shaka_util_FakeEvent: any;
      constructor(type: string, dict?: Map<string, object | null> | null);
    }

    /**
     * A timer allows a single function to be executed at a later time or at regular intervals.
     */
    class Timer {
      /**
       * Create a new timer. A timer is committed to a single callback function. While there is no technical reason to do this, it is far easier to understand and use timers when they are connected to one functional idea.
       */
      constructor(onTick: () => void);
      /**
       * Have the timer call |onTick| now.
       */
      tickNow(): shaka.util.Timer;
      /**
       * Have the timer call |onTick| after |seconds| has elapsed unless |stop| is called first.
       */
      tickAfter(seconds: number): shaka.util.Timer;
      /**
       * Have the timer call |onTick| every |seconds| until |stop| is called.
       */
      tickEvery(seconds: number): shaka.util.Timer;
      /**
       * Stop the timer and clear the previous behaviour. The timer is still usable after calling |stop|.
       */
      stop(): void;
    }
    class Error extends window.Error implements shaka.extern.Error {
      severity: shaka.util.Error.Severity;
      readonly category: shaka.util.Error.Category;
      readonly code: shaka.util.Error.Code;
      readonly data: any[];
      handled: boolean;
      constructor(
        severity: shaka.util.Error.Severity,
        category: shaka.util.Error.Category,
        code: shaka.util.Error.Code,
        ...varArgs: any[]
      );
    }
    namespace Error {
      enum Severity {
        RECOVERABLE,
        CRITICAL
      }
      enum Category {
        NETWORK,
        TEXT,
        MEDIA,
        MANIFEST,
        STREAMING,
        DRM,
        PLAYER,
        CAST,
        STORAGE,
        ADS
      }
      enum Code {
        UNSUPPORTED_SCHEME,
        BAD_HTTP_STATUS,
        HTTP_ERROR,
        TIMEOUT,
        MALFORMED_DATA_URI,
        UNKNOWN_DATA_URI_ENCODING,
        REQUEST_FILTER_ERROR,
        RESPONSE_FILTER_ERROR,
        MALFORMED_TEST_URI,
        UNEXPECTED_TEST_REQUEST,
        ATTEMPTS_EXHAUSTED,
        INVALID_TEXT_HEADER,
        INVALID_TEXT_CUE,
        UNABLE_TO_DETECT_ENCODING,
        BAD_ENCODING,
        INVALID_XML,
        INVALID_MP4_TTML,
        INVALID_MP4_VTT,
        UNABLE_TO_EXTRACT_CUE_START_TIME,
        BUFFER_READ_OUT_OF_BOUNDS,
        JS_INTEGER_OVERFLOW,
        EBML_OVERFLOW,
        EBML_BAD_FLOATING_POINT_SIZE,
        MP4_SIDX_WRONG_BOX_TYPE,
        MP4_SIDX_INVALID_TIMESCALE,
        MP4_SIDX_TYPE_NOT_SUPPORTED,
        WEBM_CUES_ELEMENT_MISSING,
        WEBM_EBML_HEADER_ELEMENT_MISSING,
        WEBM_SEGMENT_ELEMENT_MISSING,
        WEBM_INFO_ELEMENT_MISSING,
        WEBM_DURATION_ELEMENT_MISSING,
        WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING,
        WEBM_CUE_TIME_ELEMENT_MISSING,
        MEDIA_SOURCE_OPERATION_FAILED,
        MEDIA_SOURCE_OPERATION_THREW,
        VIDEO_ERROR,
        QUOTA_EXCEEDED_ERROR,
        TRANSMUXING_FAILED,
        UNABLE_TO_GUESS_MANIFEST_TYPE,
        DASH_INVALID_XML,
        DASH_NO_SEGMENT_INFO,
        DASH_EMPTY_ADAPTATION_SET,
        DASH_EMPTY_PERIOD,
        DASH_WEBM_MISSING_INIT,
        DASH_UNSUPPORTED_CONTAINER,
        DASH_PSSH_BAD_ENCODING,
        DASH_NO_COMMON_KEY_SYSTEM,
        DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED,
        DASH_CONFLICTING_KEY_IDS,
        UNPLAYABLE_PERIOD,
        RESTRICTIONS_CANNOT_BE_MET,
        NO_PERIODS,
        HLS_PLAYLIST_HEADER_MISSING,
        INVALID_HLS_TAG,
        HLS_INVALID_PLAYLIST_HIERARCHY,
        DASH_DUPLICATE_REPRESENTATION_ID,
        HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND,
        HLS_COULD_NOT_GUESS_MIME_TYPE,
        HLS_MASTER_PLAYLIST_NOT_PROVIDED,
        HLS_REQUIRED_ATTRIBUTE_MISSING,
        HLS_REQUIRED_TAG_MISSING,
        HLS_COULD_NOT_GUESS_CODECS,
        HLS_KEYFORMATS_NOT_SUPPORTED,
        DASH_UNSUPPORTED_XLINK_ACTUATE,
        DASH_XLINK_DEPTH_LIMIT,
        HLS_COULD_NOT_PARSE_SEGMENT_START_TIME,
        CONTENT_UNSUPPORTED_BY_BROWSER,
        CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM,
        HLS_AES_128_ENCRYPTION_NOT_SUPPORTED,
        INVALID_STREAMS_CHOSEN,
        NO_RECOGNIZED_KEY_SYSTEMS,
        REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE,
        FAILED_TO_CREATE_CDM,
        FAILED_TO_ATTACH_TO_VIDEO,
        INVALID_SERVER_CERTIFICATE,
        FAILED_TO_CREATE_SESSION,
        FAILED_TO_GENERATE_LICENSE_REQUEST,
        LICENSE_REQUEST_FAILED,
        LICENSE_RESPONSE_REJECTED,
        ENCRYPTED_CONTENT_WITHOUT_DRM_INFO,
        NO_LICENSE_SERVER_GIVEN,
        OFFLINE_SESSION_REMOVED,
        EXPIRED,
        SERVER_CERTIFICATE_REQUIRED,
        INIT_DATA_TRANSFORM_ERROR,
        LOAD_INTERRUPTED,
        OPERATION_ABORTED,
        NO_VIDEO_ELEMENT,
        OBJECT_DESTROYED,
        CAST_API_UNAVAILABLE,
        NO_CAST_RECEIVERS,
        ALREADY_CASTING,
        UNEXPECTED_CAST_ERROR,
        CAST_CANCELED_BY_USER,
        CAST_CONNECTION_TIMED_OUT,
        CAST_RECEIVER_APP_UNAVAILABLE,
        STORAGE_NOT_SUPPORTED,
        INDEXED_DB_ERROR,
        DEPRECATED_OPERATION_ABORTED,
        REQUESTED_ITEM_NOT_FOUND,
        MALFORMED_OFFLINE_URI,
        CANNOT_STORE_LIVE_OFFLINE,
        STORE_ALREADY_IN_PROGRESS,
        NO_INIT_DATA_FOR_OFFLINE,
        LOCAL_PLAYER_INSTANCE_REQUIRED,
        NEW_KEY_OPERATION_NOT_SUPPORTED,
        KEY_NOT_FOUND,
        MISSING_STORAGE_CELL,
        IMA_SDK_MISSING,
        CS_AD_MANAGER_NOT_INITIALIZED
      }
    }
    /**
     * A utility to wrap abortable operations.  Note that these are not cancelable. Cancelation implies undoing what has been done so far, whereas aborting only means that futher work is stopped.
     */
    class AbortableOperation<T> implements shaka.extern.IAbortableOperation<T> {
      /**
       * @returnType An operation which has already failed with the error given by the caller.
       */
      static failed(
        error: shaka.util.Error
      ): shaka.util.AbortableOperation<any>;
      /**
       * @returnType An operation which has already failed with the error OPERATION_ABORTED.
       */
      static aborted(): shaka.util.AbortableOperation<any>;
      /**
       * @returnType An operation which has already completed with the given value.
       */
      static completed<U>(value: U): shaka.util.AbortableOperation<U>;
      /**
       * @returnType An operation which cannot be aborted.  It will be completed when the given Promise is resolved, or will be failed when the given Promise is rejected.
       */
      static notAbortable<U>(
        promise: Promise<U>
      ): shaka.util.AbortableOperation<U>;
      /**
       * @returnType An operation which is resolved when all operations are successful and fails when any operation fails. For this operation, abort() aborts all given operations.
       */
      static all(
        operations: shaka.util.AbortableOperation<any>[]
      ): shaka.util.AbortableOperation<any>;
      readonly promise: Promise<T>;
      /**
       * @param promise A Promise which represents the underlying operation.  It is resolved when the operation is complete, and rejected if the operation fails or is aborted.  Aborted operations should be rejected with a shaka.util.Error object using the error code OPERATION_ABORTED.
       * @param onAbort Will be called by this object to abort the underlying operation. This is not cancelation, and will not necessarily result in any work being undone.  abort() should return a Promise which is resolved when the underlying operation has been aborted.  The returned Promise should never be rejected.
       */
      constructor(promise: Promise<T>, onAbort: () => Promise<void>);
      abort(): Promise<void>;
      finally(
        onFinal: (p0: boolean) => void
      ): shaka.extern.IAbortableOperation<T>;
      /**
       * @param onSuccess A callback to be invoked after this operation is complete, to chain to another operation.  The callback can return a plain value, a Promise to an asynchronous value, or another AbortableOperation.
       * @param onError An optional callback to be invoked if this operation fails, to perform some cleanup or error handling.  Analogous to the second parameter of Promise.prototype.then.
       * @returnType An operation which is resolved when this operation and the operation started by the callback are both complete.
       */
      chain<U>(
        onSuccess:
          | undefined
          | ((p0: T | null) => U | null)
          | ((p0: T | null) => Promise<U>)
          | ((p0: T | null) => shaka.util.AbortableOperation<U>),
        onError?: (p0: any) => void
      ): shaka.util.AbortableOperation<U>;
    }
    /**
     * A set of BufferSource utility functions.
     */
    class BufferUtils {
      /**
       * Compare two buffers for equality.  For buffers of different types, this compares the underlying buffers as binary data.
       */
      static equal(arr1: BufferSource, arr2: BufferSource): boolean;
      /**
       * Gets an ArrayBuffer that contains the data from the given TypedArray.  Note this will allocate a new ArrayBuffer if the object is a partial view of the data.
       */
      static toArrayBuffer(view: BufferSource): ArrayBuffer;
      /**
       * Creates a new Uint8Array view on the same buffer.  This clamps the values to be within the same view (i.e. you can't use this to move past the end of the view, even if the underlying buffer is larger).  However, you can pass a negative offset to access the data before the view.
       * @param offset The offset from the beginning of this data's view to start the new view at.
       * @param length The byte length of the new view.
       */
      static toUint8(
        data: BufferSource,
        offset?: number,
        length?: number
      ): Uint8Array;
      /**
       * Creates a DataView over the given buffer.
       */
      static toDataView(
        buffer: BufferSource,
        offset?: number,
        length?: number
      ): DataView;
    }
    /**
     * A work-alike for EventTarget.  Only DOM elements may be true EventTargets, but this can be used as a base class to provide event dispatch to non-DOM classes.  Only FakeEvents should be dispatched.
     */
    class FakeEventTarget implements EventTarget {
      constructor();
      /**
       * Add an event listener to this object.
       * @param type The event type to listen for.
       * @param listener The callback or listener object to invoke.
       * @param options Ignored.
       */
      addEventListener(
        type: string,
        listener: shaka.util.FakeEventTarget.ListenerType,
        options?: AddEventListenerOptions | boolean
      ): void;
      /**
       * Remove an event listener from this object.
       * @param type The event type for which you wish to remove a listener.
       * @param listener The callback or listener object to remove.
       * @param options Ignored.
       */
      removeEventListener(
        type: string,
        listener: shaka.util.FakeEventTarget.ListenerType,
        options?: EventListenerOptions | boolean
      ): void;
      /**
       * Dispatch an event from this object.
       * @param event The event to be dispatched from this object.
       * @returnType True if the default action was prevented.
       */
      dispatchEvent(event: Event): boolean;
    }
    namespace FakeEventTarget {
      /**
       * These are the listener types defined in the closure extern for EventTarget.
       */
      type ListenerType = EventListener | ((p0: Event) => any);
    }
    /**
     * An interface to standardize how objects are destroyed.
     */
    interface IDestroyable {
      /**
       * Request that this object be destroyed, releasing all resources and shutting down all operations. Returns a Promise which is resolved when destruction is complete. This Promise should never be rejected.
       */
      destroy(): Promise<void>;
    }
    /**
     * An interface to standardize how objects release internal references synchronously. If an object needs to asynchronously release references, then it should use 'shaka.util.IDestroyable'.
     */
    interface IReleasable {
      /**
       * Request that this object release all internal references.
       */
      release(): void;
    }
    /**
     * An EventManager maintains a collection of "event bindings" between event targets and event listeners.
     */
    class EventManager implements shaka.util.IReleasable {
      constructor();
      /**
       * Detaches all event listeners.
       */
      release(): void;
      /**
       * Attaches an event listener to an event target.
       * @param target The event target.
       * @param type The event type.
       * @param listener The event listener.
       * @param options An object that specifies characteristics about the event listener. The passive option, if true, indicates that this function will never call preventDefault(), which improves scrolling performance.
       */
      listen(
        target: EventTarget,
        type: string,
        listener: shaka.util.EventManager.ListenerType,
        options?: boolean | AddEventListenerOptions
      ): void;
      /**
       * Attaches an event listener to an event target.  The listener will be removed when the first instance of the event is fired.
       * @param target The event target.
       * @param type The event type.
       * @param listener The event listener.
       * @param options An object that specifies characteristics about the event listener. The passive option, if true, indicates that this function will never call preventDefault(), which improves scrolling performance.
       */
      listenOnce(
        target: EventTarget,
        type: string,
        listener: shaka.util.EventManager.ListenerType,
        options?: boolean | AddEventListenerOptions
      ): void;
      /**
       * Detaches an event listener from an event target.
       * @param target The event target.
       * @param type The event type.
       * @param listener The event listener.
       */
      unlisten(
        target: EventTarget,
        type: string,
        listener?: shaka.util.EventManager.ListenerType
      ): void;
      /**
       * Detaches all event listeners from all targets.
       */
      removeAll(): void;
    }
    namespace EventManager {
      type ListenerType = (p0: Event) => void;
    }
    /**
     * A set of FairPlay utility functions.
     */
    class FairPlayUtils {
      /**
       * Using the default method, extract a content ID from the init data.  This is based on the FairPlay example documentation.
       */
      static defaultGetContentId(initData: BufferSource): string;
      /**
       * Transforms the init data buffer using the given data.  The format is: <pre> [4 bytes] initDataSize [initDataSize bytes] initData [4 bytes] contentIdSize [contentIdSize bytes] contentId [4 bytes] certSize [certSize bytes] cert </pre>
       * @param cert The server certificate; this will throw if not provided.
       */
      static initDataTransform(
        initData: BufferSource,
        contentId: BufferSource | string,
        cert: BufferSource
      ): Uint8Array;
    }
    /**
     * This contains a single value that is lazily generated when it is first requested.  This can store any value except "undefined".
     */
    class Lazy<T> {
      constructor(gen: () => T | null);
      value(): T;
    }
    /**
     * A set of string utility functions.
     */
    class StringUtils {
      /**
       * Creates a string from the given buffer as UTF-8 encoding.
       */
      static fromUTF8(data: BufferSource): string;
      /**
       * Creates a string from the given buffer as UTF-16 encoding.
       * @param littleEndian true to read little endian, false to read big.
       * @param noThrow true to avoid throwing in cases where we may expect invalid input.  If noThrow is true and the data has an odd length,it will be truncated.
       */
      static fromUTF16(
        data: BufferSource,
        littleEndian: boolean,
        noThrow?: boolean
      ): string;
      /**
       * Creates a string from the given buffer, auto-detecting the encoding that is being used.  If it cannot detect the encoding, it will throw an exception.
       */
      static fromBytesAutoDetect(data: BufferSource): string;
      /**
       * Creates a ArrayBuffer from the given string, converting to UTF-8 encoding.
       */
      static toUTF8(str: string): ArrayBuffer;
      /**
       * Creates a ArrayBuffer from the given string, converting to UTF-16 encoding.
       */
      static toUTF16(str: string, littleEndian: boolean): ArrayBuffer;
    }
    /**
     * DataViewReader abstracts a DataView object.
     */
    class DataViewReader {
      /**
       * @param endianness The endianness.
       */
      constructor(
        data: BufferSource,
        endianness: shaka.util.DataViewReader.Endianness
      );
      /**
       * @returnType True if the reader has more data, false otherwise.
       */
      hasMoreData(): boolean;
      /**
       * Gets the current byte position.
       */
      getPosition(): number;
      /**
       * Gets the byte length of the DataView.
       */
      getLength(): number;
      /**
       * Reads an unsigned 8 bit integer, and advances the reader.
       * @returnType The integer.
       */
      readUint8(): number;
      /**
       * Reads an unsigned 16 bit integer, and advances the reader.
       * @returnType The integer.
       */
      readUint16(): number;
      /**
       * Reads an unsigned 32 bit integer, and advances the reader.
       * @returnType The integer.
       */
      readUint32(): number;
      /**
       * Reads a signed 32 bit integer, and advances the reader.
       * @returnType The integer.
       */
      readInt32(): number;
      /**
       * Reads an unsigned 64 bit integer, and advances the reader.
       * @returnType The integer.
       */
      readUint64(): number;
      /**
       * Reads the specified number of raw bytes.
       * @param bytes The number of bytes to read.
       */
      readBytes(bytes: number): Uint8Array;
      /**
       * Skips the specified number of bytes.
       * @param bytes The number of bytes to skip.
       */
      skip(bytes: number): void;
      /**
       * Rewinds the specified number of bytes.
       * @param bytes The number of bytes to rewind.
       */
      rewind(bytes: number): void;
      /**
       * Seeks to a specified position.
       * @param position The desired byte position within the DataView.
       */
      seek(position: number): void;
      /**
       * Keeps reading until it reaches a byte that equals to zero.  The text is assumed to be UTF-8.
       */
      readTerminatedString(): string;
    }
    namespace DataViewReader {
      /**
       * Endianness.
       */
      enum Endianness {
        BIG_ENDIAN,
        LITTLE_ENDIAN
      }
    }
    class Mp4Parser {
      /**
       * A callback that tells the Mp4 parser to treat the body of a box as a series of boxes. The number of boxes is limited by the size of the parent box.
       */
      static children(box: shaka.extern.ParsedBox): void;
      /**
       * A callback that tells the Mp4 parser to treat the body of a box as a sample description. A sample description box has a fixed number of children. The number of children is represented by a 4 byte unsigned integer. Each child is a box.
       */
      static sampleDescription(box: shaka.extern.ParsedBox): void;
      /**
       * Create a callback that tells the Mp4 parser to treat the body of a box as a binary blob and to parse the body's contents using the provided callback.
       */
      static allData(
        callback: (p0: Uint8Array) => void
      ): shaka.util.Mp4Parser.CallbackType;
      /**
       * Convert an integer type from a box into an ascii string name. Useful for debugging.
       * @param type The type of the box, a uint32.
       */
      static typeToString(type: number): string;
      constructor();
      /**
       * Declare a box type as a Box.
       */
      box(
        type: string,
        definition: shaka.util.Mp4Parser.CallbackType
      ): shaka.util.Mp4Parser;
      /**
       * Declare a box type as a Full Box.
       */
      fullBox(
        type: string,
        definition: shaka.util.Mp4Parser.CallbackType
      ): shaka.util.Mp4Parser;
      /**
       * Stop parsing.  Useful for extracting information from partial segments and avoiding an out-of-bounds error once you find what you are looking for.
       */
      stop(): void;
      /**
       * Parse the given data using the added callbacks.
       * @param partialOkay If true, allow reading partial payloads from some boxes. If the goal is a child box, we can sometimes find it without enough data to find all child boxes.
       */
      parse(data: BufferSource, partialOkay?: boolean): void;
      /**
       * Parse the next box on the current level.
       * @param absStart The absolute start position in the original byte array.
       * @param partialOkay If true, allow reading partial payloads from some boxes. If the goal is a child box, we can sometimes find it without enough data to find all child boxes.
       */
      parseNext(
        absStart: number,
        reader: shaka.util.DataViewReader,
        partialOkay?: boolean
      ): void;
    }
    namespace Mp4Parser {
      type CallbackType = (p0: shaka.extern.ParsedBox) => void;
    }
    class ConfigUtils {
      /**
       * @param template supplies default values
       * @param overrides Supplies override type checking.  When the current path matches the key in this object, each sub-value must match the type in this object. If this contains an Object, it is used as the template.
       * @param path to this part of the config
       */
      static mergeConfigObjects(
        destination: object,
        source: object,
        template: object,
        overrides: object,
        path: string
      ): boolean;
      /**
       * Convert config from ('fieldName', value) format to a partial config object. E. g. from ('manifest.retryParameters.maxAttempts', 1) to { manifest: { retryParameters: { maxAttempts: 1 }}}.
       */
      static convertToConfigObject(fieldName: string, value: any): object;
    }
    class PlayerConfiguration {
      /**
       * Merges the given configuration changes into the given destination.  This uses the default Player configurations as the template.
       */
      static mergeConfigObjects(
        destination: shaka.extern.PlayerConfiguration,
        updates: object,
        template?: shaka.extern.PlayerConfiguration
      ): boolean;
    }
    class Dom {
      /**
       * Remove all of the child nodes of an element.
       */
      static removeAllChildren(element: Element): void;
    }
  }
  namespace net {
    /**
     * NetworkingEngine wraps all networking operations.  This accepts plugins that handle the actual request.  A plugin is registered using registerScheme. Each scheme has at most one plugin to handle the request.
     */
    class NetworkingEngine implements shaka.util.IDestroyable {
      /**
       * Registers a scheme plugin.  This plugin will handle all requests with the given scheme.  If a plugin with the same scheme already exists, it is replaced, unless the existing plugin is of higher priority. If no priority is provided, this defaults to the highest priority of APPLICATION.
       */
      static registerScheme(
        scheme: string,
        plugin: shaka.extern.SchemePlugin,
        priority?: number
      ): void;
      /**
       * Removes a scheme plugin.
       */
      static unregisterScheme(scheme: string): void;
      /**
       * Gets a copy of the default retry parameters.
       * @returnType NOTE: The implementation moved to shaka.net.Backoff to avoid a circular dependency between the two classes.
       */
      static defaultRetryParameters(): shaka.extern.RetryParameters;
      /**
       * Makes a simple network request for the given URIs.
       */
      static makeRequest(
        uris: string[],
        retryParams: shaka.extern.RetryParameters
      ): shaka.extern.Request;
      /**
       * @param onProgressUpdated Called when a progress event is triggered. Passed the duration, in milliseconds, that the request took, and the number of bytes transferred.
       */
      constructor(onProgressUpdated?: (p0: number, p1: number) => void);
      /**
       * Registers a new request filter.  All filters are applied in the order they are registered.
       */
      registerRequestFilter(filter: shaka.extern.RequestFilter): void;
      /**
       * Removes a request filter.
       */
      unregisterRequestFilter(filter: shaka.extern.RequestFilter): void;
      /**
       * Clears all request filters.
       */
      clearAllRequestFilters(): void;
      /**
       * Registers a new response filter.  All filters are applied in the order they are registered.
       */
      registerResponseFilter(filter: shaka.extern.ResponseFilter): void;
      /**
       * Removes a response filter.
       */
      unregisterResponseFilter(filter: shaka.extern.ResponseFilter): void;
      /**
       * Clears all response filters.
       */
      clearAllResponseFilters(): void;
      destroy(): Promise<void>;
      /**
       * Makes a network request and returns the resulting data.
       */
      request(
        type: shaka.net.NetworkingEngine.RequestType,
        request: shaka.extern.Request
      ): shaka.net.NetworkingEngine.PendingRequest;
    }
    namespace NetworkingEngine {
      /**
       * A wrapper class for the number of bytes remaining to be downloaded for the request. Instead of using PendingRequest directly, this class is needed to be sent to plugin as a parameter, and a Promise is returned, before PendingRequest is created.
       */
      class NumBytesRemainingClass {
        /**
         * Constructor
         */
        constructor();
      }
      /**
       * A pending network request. This can track the current progress of the download, and allows the request to be aborted if the network is slow.
       */
      class PendingRequest
        extends shaka.util.AbortableOperation<any>
        implements shaka.extern.IAbortableOperation<shaka.extern.Response>
      {
        /**
         * @param promise A Promise which represents the underlying operation.  It is resolved when the operation is complete, and rejected if the operation fails or is aborted.  Aborted operations should be rejected with a shaka.util.Error object using the error code OPERATION_ABORTED.
         * @param onAbort Will be called by this object to abort the underlying operation. This is not cancelation, and will not necessarily result in any work being undone.  abort() should return a Promise which is resolved when the underlying operation has been aborted.  The returned Promise should never be rejected.
         */
        constructor(
          promise: Promise<void>,
          onAbort: () => Promise<void>,
          numBytesRemainingObj: shaka.net.NetworkingEngine.NumBytesRemainingClass
        );
      }
      /**
       * Request types.  Allows a filter to decide which requests to read/alter.
       */
      enum RequestType {
        MANIFEST,
        SEGMENT,
        LICENSE,
        APP,
        TIMING
      }
      /**
       * Priority level for network scheme plugins. If multiple plugins are provided for the same scheme, only the highest-priority one is used.
       */
      enum PluginPriority {
        FALLBACK,
        PREFERRED,
        APPLICATION
      }
    }
    /**
     * A networking plugin to handle data URIs.
     */
    class DataUriPlugin {
      /**
       * @param progressUpdated Called when a progress event happened.
       */
      static parse(
        uri: string,
        request: shaka.extern.Request,
        requestType: shaka.net.NetworkingEngine.RequestType,
        progressUpdated: shaka.extern.ProgressUpdated
      ): shaka.extern.IAbortableOperation<shaka.extern.Response>;
    }
    /**
     * A networking plugin to handle http and https URIs via the Fetch API.
     */
    class HttpFetchPlugin {
      /**
       * @param progressUpdated Called when a progress event happened.
       */
      static parse(
        uri: string,
        request: shaka.extern.Request,
        requestType: shaka.net.NetworkingEngine.RequestType,
        progressUpdated: shaka.extern.ProgressUpdated
      ): shaka.extern.IAbortableOperation<shaka.extern.Response>;
      /**
       * Determine if the Fetch API is supported in the browser. Note: this is deliberately exposed as a method to allow the client app to use the same logic as Shaka when determining support.
       */
      static isSupported(): boolean;
    }
    /**
     * A networking plugin to handle http and https URIs via XHR.
     */
    class HttpXHRPlugin {
      /**
       * @param progressUpdated Called when a progress event happened.
       */
      static parse(
        uri: string,
        request: shaka.extern.Request,
        requestType: shaka.net.NetworkingEngine.RequestType,
        progressUpdated: shaka.extern.ProgressUpdated
      ): shaka.extern.IAbortableOperation<shaka.extern.Response>;
    }
  }
  namespace text {
    class Cue implements shaka.extern.Cue {
      startTime: number;
      direction: shaka.text.Cue.direction;
      endTime: number;
      payload: string;
      region: shaka.extern.CueRegion;
      position: number;
      positionAlign: shaka.text.Cue.positionAlign;
      size: number;
      textAlign: shaka.text.Cue.textAlign;
      writingMode: shaka.text.Cue.writingMode;
      lineInterpretation: shaka.text.Cue.lineInterpretation;
      line: number;
      lineHeight: string;
      lineAlign: shaka.text.Cue.lineAlign;
      displayAlign: shaka.text.Cue.displayAlign;
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      fontSize: string;
      fontWeight: shaka.text.Cue.fontWeight;
      fontStyle: shaka.text.Cue.fontStyle;
      fontFamily: string;
      textDecoration: shaka.text.Cue.textDecoration[];
      wrapLine: boolean;
      id: string;
      nestedCues: shaka.extern.Cue[];
      spacer: boolean;
      constructor(startTime: number, endTime: number, payload: string);
    }
    namespace Cue {
      enum positionAlign {
        LEFT,
        RIGHT,
        CENTER,
        AUTO
      }
      enum textAlign {
        LEFT,
        RIGHT,
        CENTER,
        START,
        END
      }
      /**
       * Vertical alignments of the cues within their extents. 'BEFORE' means displaying at the top of the captions container box, 'CENTER' means in the middle, 'BOTTOM' means at the bottom.
       */
      enum displayAlign {
        BEFORE,
        CENTER,
        AFTER
      }
      enum direction {
        HORIZONTAL_LEFT_TO_RIGHT,
        HORIZONTAL_RIGHT_TO_LEFT
      }
      enum writingMode {
        HORIZONTAL_TOP_TO_BOTTOM,
        VERTICAL_LEFT_TO_RIGHT,
        VERTICAL_RIGHT_TO_LEFT
      }
      enum lineInterpretation {
        LINE_NUMBER,
        PERCENTAGE
      }
      enum lineAlign {
        CENTER,
        START,
        END
      }
      /**
       * In CSS font weight can be a number, where 400 is normal and 700 is bold. Use these values for the enum for consistency.
       */
      enum fontWeight {
        NORMAL,
        BOLD
      }
      enum fontStyle {
        NORMAL,
        ITALIC,
        OBLIQUE
      }
      enum textDecoration {
        UNDERLINE,
        LINE_THROUGH,
        OVERLINE
      }
    }
    class CueRegion implements shaka.extern.CueRegion {
      id: string;
      viewportAnchorX: number;
      viewportAnchorY: number;
      regionAnchorX: number;
      regionAnchorY: number;
      width: number;
      height: number;
      heightUnits: shaka.text.CueRegion.units;
      widthUnits: shaka.text.CueRegion.units;
      viewportAnchorUnits: shaka.text.CueRegion.units;
      scroll: any;
      constructor();
    }
    namespace CueRegion {
      enum units {
        PX,
        PERCENTAGE,
        LINES
      }
      enum scrollMode {
        NONE,
        UP
      }
    }
    /**
     * This defines the default text displayer plugin. An instance of this class is used when no custom displayer is given. This class simply converts shaka.text.Cue objects to TextTrackCues and feeds them to the browser.
     */
    class SimpleTextDisplayer implements shaka.extern.TextDisplayer {
      constructor(video: HTMLMediaElement);
      remove(start: any, end: any): boolean;
      append(cues: shaka.text.Cue[]): void;
      destroy(): Promise<void>;
      isTextVisible(): boolean;
      setTextVisibility(on: boolean): void;
    }
  }
  namespace abr {
    /**
     * <p> This defines the default ABR manager for the Player.  An instance of this class is used when no ABR manager is given. </p> <p> The behavior of this class is to take throughput samples using segmentDownloaded to estimate the current network bandwidth.  Then it will use that to choose the streams that best fit the current bandwidth.  It will always pick the highest bandwidth variant it thinks can be played. </p> <p> After initial choices are made, this class will call switchCallback() when there is a better choice.  switchCallback() will not be called more than once per ({@link shaka.abr.SimpleAbrManager.SWITCH_INTERVAL_MS}). </p>
     */
    class SimpleAbrManager implements shaka.extern.AbrManager {
      constructor();
      stop(): void;
      init(switchCallback: shaka.extern.AbrManager.SwitchCallback): void;
      chooseVariant(): shaka.extern.Variant;
      enable(): void;
      disable(): void;
      segmentDownloaded(deltaTimeMs: number, numBytes: number): void;
      getBandwidthEstimate(): number;
      setVariants(variants: shaka.extern.Variant[]): void;
      configure(config: shaka.extern.AbrConfiguration): void;
    }
  }
  namespace ads {
    class ClientSideAd implements shaka.extern.IAd {
      constructor(imaAd: google.ima.Ad, imaAdManager: google.ima.AdsManager);
      getDuration(): number;
      getRemainingTime(): number;
      isPaused(): boolean;
      pause(): void;
      play(): void;
      getVolume(): number;
      setVolume(volume: number): void;
      isMuted(): boolean;
      resize(width: number, height: number): void;
      setMuted(muted: boolean): void;
      release(): void;
    }
    /**
     * A class responsible for ad-related interactions.
     */
    class AdManager {
      static readonly AD_STARTED: string;
      static readonly AD_STOPPED: string;
      static readonly AD_VOLUME_CHANGED: string;
      static readonly AD_MUTED: string;
      static readonly AD_PAUSED: string;
      static readonly AD_RESUMED: string;
      constructor();
      initClientSide(adContainer: HTMLElement, video: HTMLMediaElement): void;
      requestClientSideAds(imaRequest: google.ima.AdsRequest): void;
      loadServerSideStream(
        assetKey: string,
        assetId: string,
        isLive: boolean,
        backupUrl?: string
      ): void;
    }
  }
  namespace cast {
    /**
     * A proxy to switch between local and remote playback for Chromecast in a way that is transparent to the app's controls.
     */
    class CastProxy implements shaka.util.IDestroyable {
      /**
       * @param video The local video element associated with the local Player instance.
       * @param player A local Player instance.
       * @param receiverAppId The ID of the cast receiver application. If blank, casting will not be available, but the proxy will still function otherwise.
       */
      constructor(
        video: HTMLMediaElement,
        player: shaka.Player,
        receiverAppId: string
      );
      /**
       * Destroys the proxy and the underlying local Player.
       * @param forceDisconnect If true, force the receiver app to shut down by disconnecting.  Does nothing if not connected.
       */
      destroy(forceDisconnect?: boolean): Promise<void>;
      /**
       * Get a proxy for the video element that delegates to local and remote video elements as appropriate.
       */
      getVideo(): HTMLMediaElement;
      /**
       * Get a proxy for the Player that delegates to local and remote Player objects as appropriate.
       */
      getPlayer(): shaka.Player;
      /**
       * @returnType True if the cast API is available and there are receivers.
       */
      canCast(): boolean;
      /**
       * @returnType True if we are currently casting.
       */
      isCasting(): boolean;
      /**
       * @returnType The name of the Cast receiver device, if isCasting().
       */
      receiverName(): string;
      /**
       * @returnType Resolved when connected to a receiver.  Rejected if the connection fails or is canceled by the user.
       */
      cast(): Promise<void>;
      /**
       * Set application-specific data.
       * @param appData Application-specific data to relay to the receiver.
       */
      setAppData(appData: object): void;
      /**
       * Show a dialog where user can choose to disconnect from the cast connection.
       */
      suggestDisconnect(): void;
      /**
       * Force the receiver app to shut down by disconnecting.
       */
      forceDisconnect(): void;
      changeReceiverId(newAppId: string): void;
    }
    /**
     * A receiver to communicate between the Chromecast-hosted player and the sender application.
     */
    class CastReceiver implements shaka.util.IDestroyable {
      /**
       * @param video The local video element associated with the local Player instance.
       * @param player A local Player instance.
       * @param appDataCallback A callback to handle application-specific data passed from the sender.  This can come either from a Shaka-based sender through CastProxy.setAppData, or from a sender using the customData field of the LOAD message of the standard Cast message namespace.  It can also be null if no such data is sent.
       * @param contentIdCallback A callback to retrieve manifest URI from the provided content id.
       */
      constructor(
        video: HTMLMediaElement,
        player: shaka.Player,
        appDataCallback?: (p0: object | null) => void,
        contentIdCallback?: (p0: string) => string
      );
      /**
       * @returnType True if the cast API is available and there are receivers.
       */
      isConnected(): boolean;
      /**
       * @returnType True if the receiver is not currently doing loading or playing anything.
       */
      isIdle(): boolean;
      /**
       * Destroys the underlying Player, then terminates the cast receiver app.
       */
      destroy(): Promise<void>;
    }
  }
  namespace media {
    /**
     * Creates an InitSegmentReference, which provides the location to an initialization segment.
     */
    class InitSegmentReference {
      /**
       * @param uris A function that creates the URIs of the resource containing the segment.
       * @param startByte The offset from the start of the resource to the start of the segment.
       * @param endByte The offset from the start of the resource to the end of the segment, inclusive.  A value of null indicates that the segment extends to the end of the resource.
       */
      constructor(uris: () => string[], startByte: number, endByte: number);
      /**
       * Returns the offset from the start of the resource to the start of the segment.
       */
      getStartByte(): number;
      /**
       * Returns the offset from the start of the resource to the end of the segment, inclusive.  A value of null indicates that the segment extends to the end of the resource.
       */
      getEndByte(): number;
    }
    /**
     * SegmentReference provides the start time, end time, and location to a media segment.
     */
    class SegmentReference {
      /**
       * @param position The segment's position within a particular Period. The following should hold true between any two SegmentReferences from the same Period, r1 and r2: IF r2.position > r1.position THEN [ (r2.startTime > r1.startTime) OR (r2.startTime == r1.startTime AND r2.endTime >= r1.endTime) ]
       * @param startTime The segment's start time in seconds, relative to the start of a particular Period.
       * @param endTime The segment's end time in seconds, relative to the start of a particular Period.  The segment ends the instant before this time, so |endTime| must be strictly greater than |startTime|.
       * @param uris A function that creates the URIs of the resource containing the segment.
       * @param startByte The offset from the start of the resource to the start of the segment.
       * @param endByte The offset from the start of the resource to the end of the segment, inclusive.  A value of null indicates that the segment extends to the end of the resource.
       * @param initSegmentReference The segment's initialization segment metadata, or null if the segments are self-initializing.
       * @param presentationTimeOffset The amount of time, in seconds, that the segment's presentation timestamps are offset from the start of the Period. This value should equal the first presentation timestamp of the first frame/sample in the Period.  For example, for MP4 based streams, this value should equal the first segment's tfdt box's 'baseMediaDecodeTime' field (after it has been converted to seconds).
       */
      constructor(
        position: number,
        startTime: number,
        endTime: number,
        uris: () => string[],
        startByte: number,
        endByte: number,
        initSegmentReference: shaka.media.InitSegmentReference,
        presentationTimeOffset: number
      );
      /**
       * Returns the segment's position within a particular Period.
       * @returnType The segment's position.
       */
      getPosition(): number;
      /**
       * Returns the segment's start time in seconds, relative to the start of a particular Period.
       */
      getStartTime(): number;
      /**
       * Returns the segment's end time in seconds, relative to the start of a particular Period.
       */
      getEndTime(): number;
      /**
       * Returns the offset from the start of the resource to the start of the segment.
       */
      getStartByte(): number;
      /**
       * Returns the offset from the start of the resource to the end of the segment, inclusive.  A value of null indicates that the segment extends to the end of the resource.
       */
      getEndByte(): number;
    }
    /**
     * SegmentIndex.
     */
    class SegmentIndex implements shaka.util.IDestroyable {
      /**
       * Create a SegmentIndex for a single segment of the given duration at the given URIs.
       */
      static forSingleSegment(
        duration: number,
        uris: string[]
      ): shaka.media.SegmentIndex;
      /**
       * @param references The list of SegmentReferences, which must be sorted first by their start times (ascending) and second by their end times (ascending).  They must have continuous, increasing positions.
       */
      constructor(references: shaka.media.SegmentReference[]);
      destroy(): Promise<void>;
      /**
       * Finds the position of the segment for the given time, in seconds, relative to the start of a particular Period.  Returns the position of the segment with the largest end time if more than one segment is known for the given time.
       * @returnType The position of the segment, or null if the position of the segment could not be determined.
       */
      find(time: number): number;
      /**
       * Gets the SegmentReference for the segment at the given position.
       * @param position The position of the segment.
       * @returnType The SegmentReference, or null if no such SegmentReference exists.
       */
      get(position: number): shaka.media.SegmentReference;
      /**
       * Offset all segment references by a fixed amount.
       * @param offset The amount to add to each segment's start and end times.
       */
      offset(offset: number): void;
      /**
       * Merges the given SegmentReferences.  Supports extending the original references only.  Will not replace old references or interleave new ones.
       * @param references The list of SegmentReferences, which must be sorted first by their start times (ascending) and second by their end times (ascending).  They must have continuous, increasing positions.
       */
      merge(references: shaka.media.SegmentReference[]): void;
      /**
       * Replace existing references with new ones, without merging.
       */
      replace(newReferences: shaka.media.SegmentReference[]): void;
      /**
       * Removes all SegmentReferences that end before the given time.
       * @param time The time in seconds.
       */
      evict(time: number): void;
      /**
       * Expands the first SegmentReference so it begins at the start of its Period if it already begins close to the start of its Period. Also expands or contracts the last SegmentReference so it ends at the end of its Period. Do not call on the last period of a live presentation (unknown duration). It is okay to call on the other periods of a live presentation, where the duration is known and another period has been added.
       */
      fit(periodDuration: number): void;
      /**
       * Updates the references every so often.  Stops when the references list becomes empty.
       * @param interval The interval in seconds.
       */
      updateEvery(
        interval: number,
        updateCallback: () => shaka.media.SegmentReference[]
      ): void;
    }
    /**
     * PresentationTimeline.
     */
    class PresentationTimeline {
      /**
       * @param presentationStartTime The wall-clock time, in seconds, when the presentation started or will start. Only required for live.
       * @param presentationDelay The delay to give the presentation, in seconds.  Only required for live.
       * @param autoCorrectDrift Whether to account for drift when determining the availability window.
       */
      constructor(
        presentationStartTime: number,
        presentationDelay: number,
        autoCorrectDrift?: boolean
      );
      /**
       * @returnType The presentation's duration in seconds. Infinity indicates that the presentation continues indefinitely.
       */
      getDuration(): number;
      /**
       * @returnType The presentation's max segment duration in seconds.
       */
      getMaxSegmentDuration(): number;
      /**
       * Sets the presentation's duration.
       * @param duration The presentation's duration in seconds. Infinity indicates that the presentation continues indefinitely.
       */
      setDuration(duration: number): void;
      /**
       * @returnType The presentation's start time in seconds.
       */
      getPresentationStartTime(): number;
      /**
       * Sets the clock offset, which is the difference between the client's clock and the server's clock, in milliseconds (i.e., serverTime = Date.now() + clockOffset).
       * @param offset The clock offset, in ms.
       */
      setClockOffset(offset: number): void;
      /**
       * Sets the presentation's static flag.
       * @param isStatic If true, the presentation is static, meaning all segments are available at once.
       */
      setStatic(isStatic: boolean): void;
      /**
       * Sets the presentation's segment availability duration. The segment availability duration should only be set for live.
       * @param segmentAvailabilityDuration The presentation's new segment availability duration in seconds.
       */
      setSegmentAvailabilityDuration(segmentAvailabilityDuration: number): void;
      /**
       * Sets the presentation delay in seconds.
       */
      setDelay(delay: number): void;
      /**
       * Gets the presentation delay in seconds.
       */
      getDelay(): number;
      /**
       * Gives PresentationTimeline a Stream's segments so it can size and position the segment availability window, and account for missing segment information.  This function should be called once for each Stream (no more, no less).
       */
      notifySegments(
        references: shaka.media.SegmentReference[],
        periodStart: number
      ): void;
      /**
       * Gives PresentationTimeline a Stream's minimum segment start time.
       */
      notifyMinSegmentStartTime(startTime: number): void;
      /**
       * Gives PresentationTimeline a Stream's maximum segment duration so it can size and position the segment availability window.  This function should be called once for each Stream (no more, no less), but does not have to be called if notifySegments() is called instead for a particular stream.
       * @param maxSegmentDuration The maximum segment duration for a particular stream.
       */
      notifyMaxSegmentDuration(maxSegmentDuration: number): void;
      /**
       * Offsets the segment times by the given amount.
       * @param offset The number of seconds to offset by.  A positive number adjusts the segment times forward.
       */
      offset(offset: number): void;
      /**
       * @returnType True if the presentation is live; otherwise, return false.
       */
      isLive(): boolean;
      /**
       * @returnType True if the presentation is in progress (meaning not live, but also not completely available); otherwise, return false.
       */
      isInProgress(): boolean;
      /**
       * Gets the presentation's current segment availability start time.  Segments ending at or before this time should be assumed to be unavailable.
       * @returnType The current segment availability start time, in seconds, relative to the start of the presentation.
       */
      getSegmentAvailabilityStart(): number;
      /**
       * Sets the start time of the user-defined seek range.  This is only used for VOD content.
       */
      setUserSeekStart(time: number): void;
      /**
       * Gets the presentation's current segment availability end time.  Segments starting after this time should be assumed to be unavailable.
       * @returnType The current segment availability end time, in seconds, relative to the start of the presentation.  Always returns the presentation's duration for video-on-demand.
       */
      getSegmentAvailabilityEnd(): number;
      /**
       * Gets the seek range start time, offset by the given amount.  This is used to ensure that we don't "fall" back out of the seek window while we are buffering.
       * @param offset The offset to add to the start time.
       * @returnType The current seek start time, in seconds, relative to the start of the presentation.
       */
      getSafeSeekRangeStart(offset: number): number;
      /**
       * Gets the seek range start time.
       */
      getSeekRangeStart(): number;
      /**
       * Gets the seek range end.
       */
      getSeekRangeEnd(): number;
      /**
       * True if the presentation start time is being used to calculate the live edge. Using the presentation start time means that the stream may be subject to encoder drift.  At runtime, we will avoid using the presentation start time whenever possible.
       */
      usingPresentationStartTime(): boolean;
    }
  }
  namespace dash {
    /**
     * Creates a new DASH parser.
     */
    class DashParser implements shaka.extern.ManifestParser {
      /**
       * Creates a new DASH parser.
       */
      constructor();
      configure(config: shaka.extern.ManifestConfiguration): void;
      start(
        uri: string,
        playerInterface: shaka.extern.ManifestParser.PlayerInterface
      ): Promise<shaka.extern.Manifest>;
      stop(): Promise<void>;
      update(): void;
      onExpirationUpdated(sessionId: string, expiration: number): void;
    }
  }
  namespace hls {
    /**
     * HLS parser.
     */
    class HlsParser implements shaka.extern.ManifestParser {
      /**
       * Creates an Hls Parser object.
       */
      constructor();
      configure(config: shaka.extern.ManifestConfiguration): void;
      start(
        uri: string,
        playerInterface: shaka.extern.ManifestParser.PlayerInterface
      ): Promise<shaka.extern.Manifest>;
      stop(): Promise<void>;
      update(): void;
      onExpirationUpdated(sessionId: string, expiration: number): void;
    }
  }
  namespace offline {
    /**
     * A plugin that handles requests for offline content.
     */
    class OfflineScheme {
      /**
       * @param progressUpdated Called when a progress event happened.
       */
      static plugin(
        uri: string,
        request: shaka.extern.Request,
        requestType: shaka.net.NetworkingEngine.RequestType,
        progressUpdated: shaka.extern.ProgressUpdated
      ): shaka.extern.IAbortableOperation<shaka.extern.Response>;
    }
    /**
     * This manages persistent offline data including storage, listing, and deleting stored manifests.  Playback of offline manifests are done through the Player using a special URI (see shaka.offline.OfflineUri). First, check support() to see if offline is supported by the platform. Second, configure() the storage object with callbacks to your application. Third, call store(), remove(), or list() as needed. When done, call destroy().
     */
    class Storage implements shaka.util.IDestroyable {
      /**
       * Gets whether offline storage is supported.  Returns true if offline storage is supported for clear content.  Support for offline storage of encrypted content will not be determined until storage is attempted.
       */
      static support(): boolean;
      /**
       * Delete the on-disk storage and all the content it contains. This should not be done in normal circumstances. Only do it when storage is rendered unusable, such as by a version mismatch. No business logic will be run, and licenses will not be released.
       */
      static deleteAll(): Promise<void>;
      /**
       * @param player A player instance to share a networking engine and configuration with. When initializing with a player, storage is only valid as long as |destroy| has not been called on the player instance. When omitted, storage will manage its own networking engine and configuration.
       */
      constructor(player?: shaka.Player);
      destroy(): Promise<void>;
      /**
       * Sets configuration values for Storage.  This is associated with Player.configure and will change the player instance given at initialization.
       * @param config This should either be a field name or an object following the form of {@link shaka.extern.PlayerConfiguration}, where you may omit any field you do not wish to change.
       * @param value This should be provided if the previous parameter was a string field name.
       */
      configure(config: string | object, value?: any): boolean;
      /**
       * Return a copy of the current configuration.  Modifications of the returned value will not affect the Storage instance's active configuration.  You must call storage.configure() to make changes.
       */
      getConfiguration(): shaka.extern.PlayerConfiguration;
      /**
       * Return the networking engine that storage is using. If storage was initialized with a player instance, then the networking engine returned will be the same as |player.getNetworkingEngine()|. The returned value will only be null if |destroy| was called before |getNetworkingEngine|.
       */
      getNetworkingEngine(): shaka.net.NetworkingEngine;
      /**
       * Stores the given manifest.  If the content is encrypted, and encrypted content cannot be stored on this platform, the Promise will be rejected with error code 6001, REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE.
       * @param uri The URI of the manifest to store.
       * @param appMetadata An arbitrary object from the application that will be stored along-side the offline content.  Use this for any application-specific metadata you need associated with the stored content.  For details on the data types that can be stored here, please refer to {@link https://bit.ly/StructClone}
       * @param mimeType The mime type for the content |manifestUri| points to or a manifest parser factory to override auto-detection or use an unregistered parser. Passing a manifest parser factory is deprecated and will be removed.
       * @returnType A Promise to a structure representing what was stored.  The "offlineUri" member is the URI that should be given to Player.load() to play this piece of content offline. The "appMetadata" member is the appMetadata argument you passed to store().
       */
      store(
        uri: string,
        appMetadata?: object,
        mimeType?: string | shaka.extern.ManifestParser.Factory
      ): Promise<shaka.extern.StoredContent>;
      /**
       * Returns true if an asset is currently downloading.
       */
      getStoreInProgress(): boolean;
      /**
       * Removes the given stored content.  This will also attempt to release the licenses, if any.
       */
      remove(contentUri: string): Promise<void>;
      /**
       * Removes any EME sessions that were not successfully removed before.  This returns whether all the sessions were successfully removed.
       */
      removeEmeSessions(): Promise<boolean>;
      /**
       * Lists all the stored content available.
       * @returnType A Promise to an array of structures representing all stored content.  The "offlineUri" member of the structure is the URI that should be given to Player.load() to play this piece of content offline.  The "appMetadata" member is the appMetadata argument you passed to store().
       */
      list(): Promise<shaka.extern.StoredContent[]>;
    }
  }
  /**
   * The main player object for Shaka Player.
   */
  class Player implements shaka.util.IDestroyable {
    static readonly version: string;
    /**
     * Registers a plugin callback that will be called with <code>support()</code>.  The callback will return the value that will be stored in the return value from <code>support()</code>.
     */
    static registerSupportPlugin(name: string, callback: () => any): void;
    /**
     * Return whether the browser provides basic support.  If this returns false, Shaka Player cannot be used at all.  In this case, do not construct a Player instance and do not use the library.
     */
    static isBrowserSupported(): boolean;
    /**
     * Probes the browser to determine what features are supported.  This makes a number of requests to EME/MSE/etc which may result in user prompts.  This should only be used for diagnostics. <p> NOTE: This may show a request to the user for permission.
     */
    static probeSupport(): Promise<shaka.extern.SupportType>;
    /**
     * @param mediaElement When provided, the player will attach to <code>mediaElement</code>, similar to calling <code>attach</code>. When not provided, the player will remain detached.
     * @param dependencyInjector Optional callback which is called to inject mocks into the Player.  Used for testing.
     */
    constructor(
      mediaElement?: HTMLMediaElement,
      dependencyInjector?: (p0: shaka.Player | null) => void
    );
    addEventListener(
      type: string,
      listener: EventListener | null | ((a: Event) => any),
      options?: AddEventListenerOptions | boolean
    ): any;

    dispatchEvent(event: Event): boolean;
    release(): any;
    /**
     * After destruction, a Player object cannot be used again.
     */
    destroy(): Promise<void>;
    /**
     * Tell the player to use <code>mediaElement</code> for all <code>load</code> requests until <code>detach</code> or <code>destroy</code> are called. <p> Calling <code>attach</code> with <code>initializedMediaSource=true</code> will tell the player to take the initial load step and initialize media source. <p> Calls to <code>attach</code> will interrupt any in-progress calls to <code>load</code> but cannot interrupt calls to <code>attach</code>, <code>detach</code>, or <code>unload</code>.
     */
    attach(
      mediaElement: HTMLMediaElement,
      initializeMediaSource?: boolean
    ): Promise<void>;
    /**
     * Tell the player to stop using its current media element. If the player is: <ul> <li>detached, this will do nothing, <li>attached, this will release the media element, <li>loading, this will abort loading, unload, and release the media element, <li>playing content, this will stop playback, unload, and release the media element. </ul> <p> Calls to <code>detach</code> will interrupt any in-progress calls to <code>load</code> but cannot interrupt calls to <code>attach</code>, <code>detach</code>, or <code>unload</code>.
     */
    detach(): Promise<void>;
    /**
     * Tell the player to either return to: <ul> <li>detached (when it does not have a media element), <li>attached (when it has a media element and <code>initializedMediaSource=false</code>) <li>media source initialized (when it has a media element and <code>initializedMediaSource=true</code>) </ul> <p> Calls to <code>unload</code> will interrupt any in-progress calls to <code>load</code> but cannot interrupt calls to <code>attach</code>, <code>detach</code>, or <code>unload</code>.
     */
    unload(initializeMediaSource?: boolean): Promise<void>;
    /**
     * Tell the player to load the content at <code>assetUri</code> and start playback at <code>startTime</code>. Before calling <code>load</code>, a call to <code>attach</code> must have succeeded. <p> Calls to <code>load</code> will interrupt any in-progress calls to <code>load</code> but cannot interrupt calls to <code>attach</code>, <code>detach</code>, or <code>unload</code>.
     * @param startTime When <code>startTime</code> is <code>null</code> or <code>undefined</code>, playback will start at the default start time (0 for VOD and liveEdge for LIVE).
     */
    load(
      assetUri: string,
      startTime?: number,
      mimeType?: string | shaka.extern.ManifestParser.Factory
    ): Promise<void>;
    /**
     * Changes configuration settings on the Player.  This checks the names of keys and the types of values to avoid coding errors.  If there are errors, this logs them to the console and returns false.  Correct fields are still applied even if there are other errors.  You can pass an explicit <code>undefined</code> value to restore the default value.  This has two modes of operation: <p> First, this can be passed a single "plain" object.  This object should follow the {@link shaka.extern.PlayerConfiguration} object.  Not all fields need to be set; unset fields retain their old values. <p> Second, this can be passed two arguments.  The first is the name of the key to set.  This should be a '.' separated path to the key.  For example, <code>'streaming.alwaysStreamText'</code>.  The second argument is the value to set.
     * @param config This should either be a field name or an object.
     * @param value In the second mode, this is the value to set.
     * @returnType True if the passed config object was valid, false if there were invalid entries.
     */
    configure(config: string | object, value?: any): boolean;
    /**
     * Return a copy of the current configuration.  Modifications of the returned value will not affect the Player's active configuration.  You must call <code>player.configure()</code> to make changes.
     */
    getConfiguration(): shaka.extern.PlayerConfiguration;
    /**
     * Reset configuration to default.
     */
    resetConfiguration(): void;
    /**
     * Get the current load mode.
     */
    getLoadMode(): shaka.Player.LoadMode;
    /**
     * Get the media element that the player is currently using to play loaded content. If the player has not loaded content, this will return <code>null</code>.
     */
    getMediaElement(): HTMLMediaElement;
    /**
     * @returnType A reference to the Player's networking engine.  Applications may use this to make requests through Shaka's networking plugins.
     */
    getNetworkingEngine(): shaka.net.NetworkingEngine;
    /**
     * Get the uri to the asset that the player has loaded. If the player has not loaded content, this will return <code>null</code>.
     */
    getAssetUri(): string;
    /**
     * Get the uri to the asset that the player has loaded. If the player has not loaded content, this will return <code>null</code>.
     */
    getManifestUri(): string;
    /**
     * Returns a shaka.ads.AdManager instance, responsible for Dynamic Ad Insertion functionality.
     */
    getAdManager(): shaka.ads.AdManager;
    /**
     * Get if the player is playing live content. If the player has not loaded content, this will return <code>false</code>.
     */
    isLive(): boolean;
    /**
     * Get if the player is playing in-progress content. If the player has not loaded content, this will return <code>false</code>.
     */
    isInProgress(): boolean;
    /**
     * Check if the manifest contains only audio-only content. If the player has not loaded content, this will return <code>false</code>. <p> The player does not support content that contain more than one type of variants (i.e. mixing audio-only, video-only, audio-video). Content will be filtered to only contain one type of variant.
     */
    isAudioOnly(): boolean;
    /**
     * Get the range of time (in seconds) that seeking is allowed. If the player has not loaded content, this will return a range from 0 to 0.
     */
    seekRange(): { start: number; end: number };
    /**
     * Get the key system currently used by EME. If EME is not being used, this will return an empty string. If the player has not loaded content, this will return an empty string.
     */
    keySystem(): string;
    /**
     * Get the drm info used to initialize EME. If EME is not being used, this will return <code>null</code>. If the player is idle or has not initialized EME yet, this will return <code>null</code>.
     */
    drmInfo(): shaka.extern.DrmInfo;
    /**
     * Get the next known expiration time for any EME session. If the session never expires, this will return <code>Infinity</code>. If there are no EME sessions, this will return <code>Infinity</code>. If the player has not loaded content, this will return <code>Infinity</code>.
     */
    getExpiration(): number;
    /**
     * Check if the player is currently in a buffering state (has too little content to play smoothly). If the player has not loaded content, this will return <code>false</code>.
     */
    isBuffering(): boolean;
    /**
     * Get the playback rate of what is playing right now. If we are using trick play, this will return the trick play rate. If no content is playing, this will return 0. If content is buffering, this will return 0. <p> If the player has not loaded content, this will return a playback rate of 0.
     */
    getPlaybackRate(): number;
    /**
     * Enable trick play to skip through content without playing by repeatedly seeking. For example, a rate of 2.5 would result in 2.5 seconds of content being skipped every second. A negative rate will result in moving backwards. <p> If the player has not loaded content or is still loading content this will be a no-op. Wait until <code>load</code> has completed before calling. <p> Trick play will be canceled automatically if the playhead hits the beginning or end of the seekable range for the content.
     */
    trickPlay(rate: number): void;
    /**
     * Cancel trick-play. If the player has not loaded content or is still loading content this will be a no-op.
     */
    cancelTrickPlay(): void;
    /**
     * Return a list of variant tracks that can be switched to in the current period. If there are multiple periods, you must seek to the period in order to get variants from that period. <p> If the player has not loaded content, this will return an empty list.
     */
    getVariantTracks(): shaka.extern.Track[];
    /**
     * Return a list of text tracks that can be switched to in the current period. If there are multiple periods, you must seek to a period in order to get text tracks from that period. <p> If the player has not loaded content, this will return an empty list.
     */
    getTextTracks(): shaka.extern.Track[];
    /**
     * Select a specific text track from the current period. <code>track</code> should come from a call to <code>getTextTracks</code>. If the track is not found in the current period, this will be a no-op. If the player has not loaded content, this will be a no-op. <p> Note that <code>AdaptationEvents</code> are not fired for manual track selections.
     */
    selectTextTrack(track: shaka.extern.Track): void;
    /**
     * Find the CEA 608/708 text stream embedded in video, and switch to it.
     */
    selectEmbeddedTextTrack(): void;
    /**
     * @returnType True if we are using any embedded text tracks present.
     */
    usingEmbeddedTextTrack(): boolean;
    /**
     * Select a specific variant track to play from the current period. <code>track</code> should come from a call to <code>getVariantTracks</code>. If <code>track</code> cannot be found in the current variant, this will be a no-op. If the player has not loaded content, this will be a no-op. <p> Changing variants will take effect once the currently buffered content has been played. To force the change to happen sooner, use <code>clearBuffer</code> with <code>safeMargin</code>. Setting <code>clearBuffer</code> to <code>true</code> will clear all buffered content after <code>safeMargin</code>, allowing the new variant to start playing sooner. <p> Note that <code>AdaptationEvents</code> are not fired for manual track selections.
     * @param safeMargin Optional amount of buffer (in seconds) to retain when clearing the buffer. Useful for switching variant quickly without causing a buffering event. Defaults to 0 if not provided. Ignored if clearBuffer is false. Can cause hiccups on some browsers if chosen too small, e.g. The amount of two segments is a fair minimum to consider as safeMargin value.
     */
    selectVariantTrack(
      track: shaka.extern.Track,
      clearBuffer?: boolean,
      safeMargin?: number
    ): void;
    /**
     * Return a list of audio language-role combinations available for the current period. If the player has not loaded any content, this will return an empty list.
     */
    getAudioLanguagesAndRoles(): shaka.extern.LanguageRole[];
    /**
     * Return a list of text language-role combinations available for the current period. If the player has not loaded any content, this will be return an empty list.
     */
    getTextLanguagesAndRoles(): shaka.extern.LanguageRole[];
    /**
     * Return a list of audio languages available for the current period. If the player has not loaded any content, this will return an empty list.
     */
    getAudioLanguages(): string[];
    /**
     * Return a list of text languages available for the current period. If the player has not loaded any content, this will return an empty list.
     */
    getTextLanguages(): string[];
    /**
     * Sets the current audio language and current variant role to the selected language and role, and chooses a new variant if need be. If the player has not loaded any content, this will be a no-op.
     */
    selectAudioLanguage(language: string, role?: string): void;
    /**
     * Sets the current text language and current text role to the selected language and role, and chooses a new variant if need be. If the player has not loaded any content, this will be a no-op.
     */
    selectTextLanguage(language: string, role?: string): void;
    /**
     * Select variant tracks that have a given label. This assumes the label uniquely identifies an audio stream, so all the variants are expected to have the same variant.audio.
     */
    selectVariantsByLabel(label: string): void;
    /**
     * Check if the text displayer is enabled.
     */
    isTextTrackVisible(): boolean;
    /**
     * Enable or disable the text displayer.  If the player is in an unloaded state, the request will be applied next time content is loaded.
     */
    setTextTrackVisibility(isVisible: boolean): Promise<void>;
    /**
     * Get the current playhead position as a date. This should only be called when the player has loaded a live stream. If the player has not loaded a live stream, this will return <code>null</code>.
     */
    getPlayheadTimeAsDate(): Date;
    /**
     * Get the presentation start time as a date. This should only be called when the player has loaded a live stream. If the player has not loaded a live stream, this will return <code>null</code>.
     */
    getPresentationStartTimeAsDate(): Date;
    /**
     * Get information about what the player has buffered. If the player has not loaded content or is currently loading content, the buffered content will be empty.
     */
    getBufferedInfo(): shaka.extern.BufferedInfo;
    /**
     * Get statistics for the current playback session. If the player is not playing content, this will return an empty stats object.
     */
    getStats(): shaka.extern.Stats;
    /**
     * Adds the given text track to the current Period.  <code>load()</code> must resolve before calling.  The current Period or the presentation must have a duration. This returns a Promise that will resolve with the track that was created, when that track can be switched to.
     */
    addTextTrack(
      uri: string,
      language: string,
      kind: string,
      mime: string,
      codec?: string,
      label?: string
    ): Promise<shaka.extern.Track>;
    /**
     * Set the maximum resolution that the platform's hardware can handle. This will be called automatically by <code>shaka.cast.CastReceiver</code> to enforce limitations of the Chromecast hardware.
     */
    setMaxHardwareResolution(width: number, height: number): void;
    /**
     * Retry streaming after a streaming failure has occurred. When the player has not loaded content or is loading content, this will be a no-op and will return <code>false</code>. <p> If the player has loaded content, and streaming has not seen an error, this will return <code>false</code>. <p> If the player has loaded content, and streaming seen an error, but the could not resume streaming, this will return <code>false</code>.
     */
    retryStreaming(): boolean;
    /**
     * Get the manifest that the player has loaded. If the player has not loaded any content, this will return <code>null</code>.
     */
    getManifest(): shaka.extern.Manifest;
    /**
     * Get the type of manifest parser that the player is using. If the player has not loaded any content, this will return <code>null</code>.
     */
    getManifestParserFactory(): shaka.extern.ManifestParser.Factory;
  }
  namespace Player {
    /**
     * In order to know what method of loading the player used for some content, we have this enum. It lets us know if content has not been loaded, loaded with media source, or loaded with src equals. This enum has a low resolution, because it is only meant to express the outer limits of the various states that the player is in. For example, when someone calls a public method on player, it should not matter if they have initialized drm engine, it should only matter if they finished loading content.
     */
    enum LoadMode {
      DESTROYED,
      NOT_LOADED,
      MEDIA_SOURCE,
      SRC_EQUALS
    }
  }
  namespace extern {
    /**
     * A representation of an abortable operation.  Note that these are not cancelable.  Cancelation implies undoing what has been done so far, whereas aborting only means that futher work is stopped.
     */
    interface IAbortableOperation<T> {
      readonly promise: Promise<T>;
      /**
       * Can be called by anyone holding this object to abort the underlying operation.  This is not cancelation, and will not necessarily result in any work being undone.  abort() should return a Promise which is resolved when the underlying operation has been aborted.  The returned Promise should never be rejected.
       */
      abort(): Promise<void>;
      /**
       * @param onFinal A callback to be invoked after the operation succeeds or fails.  The boolean argument is true if the operation succeeded and false if it failed.
       * @returnType Returns this.
       */
      finally(
        onFinal: (p0: boolean) => void
      ): shaka.extern.IAbortableOperation<T>;
    }
    /**
     * An object which selects Streams from a set of possible choices.  This also watches for system changes to automatically adapt for the current streaming requirements.  For example, when the network slows down, this class is in charge of telling the Player which streams to switch to in order to reduce the required bandwidth.  This class is given a set of streams to choose from when the Player starts up.  This class should store these and use them to make future decisions about ABR.  It is up to this class how those decisions are made.  All the Player will do is tell this class what streams to choose from.
     */
    interface AbrManager {
      /**
       * Initializes the AbrManager.
       */
      init(switchCallback: shaka.extern.AbrManager.SwitchCallback): void;
      /**
       * Stops any background timers and frees any objects held by this instance. This will only be called after a call to init.
       */
      stop(): void;
      /**
       * Updates manager's variants collection.
       */
      setVariants(variants: shaka.extern.Variant[]): void;
      /**
       * Chooses one variant to switch to.  Called by the Player.
       */
      chooseVariant(): shaka.extern.Variant;
      /**
       * Enables automatic Variant choices from the last ones passed to setVariants. After this, the AbrManager may call switchCallback() at any time.
       */
      enable(): void;
      /**
       * Disables automatic Stream suggestions. After this, the AbrManager may not call switchCallback().
       */
      disable(): void;
      /**
       * Notifies the AbrManager that a segment has been downloaded (includes MP4 SIDX data, WebM Cues data, initialization segments, and media segments).
       * @param deltaTimeMs The duration, in milliseconds, that the request took to complete.
       * @param numBytes The total number of bytes transferred.
       */
      segmentDownloaded(deltaTimeMs: number, numBytes: number): void;
      /**
       * Gets an estimate of the current bandwidth in bit/sec.  This is used by the Player to generate stats.
       */
      getBandwidthEstimate(): number;
      /**
       * Sets the ABR configuration.  It is the responsibility of the AbrManager implementation to implement the restrictions behavior described in shaka.extern.AbrConfiguration.
       */
      configure(config: shaka.extern.AbrConfiguration): void;
    }
    namespace AbrManager {
      /**
       * A callback into the Player that should be called when the AbrManager decides it's time to change to a different variant.  The first argument is a variant to switch to.  The second argument is an optional boolean. If true, all data will be removed from the buffer, which will result in a buffering event. Unless a third argument is passed.  The third argument in an optional number that specifies how much data (in seconds) should be retained when clearing the buffer. This can help achieve a fast switch that doesn't involve a buffering event. A minimum of two video segments should always be kept buffered to avoid temporary hiccups.
       */
      type SwitchCallback = (
        p0: shaka.extern.Variant,
        p1: boolean,
        p2: number
      ) => void;
      /**
       * A factory for creating the abr manager.  This will be called with 'new'.
       */
      interface Factory {
        new (): shaka.extern.AbrManager;
      }
    }
    /**
     * Interface for Ad objects.
     */
    interface IAd extends shaka.util.IReleasable {
      getDuration(): number;
      getRemainingTime(): number;
      isPaused(): boolean;
      play(): void;
      pause(): void;
      getVolume(): number;
      setVolume(volume: number): void;
      isMuted(): boolean;
      setMuted(muted: boolean): void;
      resize(width: number, height: number): void;
    }
    interface RestrictionInfo {
      /**
       * Whether there are streams that are restricted due to app-provided restrictions.
       */
      hasAppRestrictions: boolean;
      /**
       * The key IDs that were missing.
       */
      missingKeys: string[];
      /**
       * The restricted EME key statuses that the streams had.  For example, 'output-restricted' would mean streams couldn't play due to restrictions on the output device (e.g. HDCP).
       */
      restrictedKeyStatuses: string[];
    }
    interface Error {
      severity: shaka.util.Error.Severity;
      readonly category: shaka.util.Error.Category;
      readonly code: shaka.util.Error.Code;
      readonly data: any[];
      handled: boolean;
    }
    /**
     * <p> A Manifest object describes a collection of streams (segmented audio, video, or text data) that share a common timeline. We call the collection of streams "the presentation" and their timeline "the presentation timeline". A Manifest describes one of two types of presentations: live and video-on-demand. </p>  <p> A live presentation begins at some point in time and either continues indefinitely or ends when the presentation stops broadcasting. For a live presentation, wall-clock time maps onto the presentation timeline, and the current wall-clock time maps to the live-edge (AKA "the current presentation time"). In contrast, a video-on-demand presentation exists entirely independent of wall-clock time. </p>  <p> The presentation timeline is divided into one or more Periods, and each of these Periods contains its own collection of Variants and text streams. A variant is a combination of an audio and a video streams that can be played together. </p>  <p> A stream has the same logical content as another stream if the only difference between the two is their quality. For example, an SD video stream and an HD video stream that depict the same scene have the same logical content; whereas an English audio stream and a French audio stream have different logical contents. The player can automatically switch between streams which have the same logical content to adapt to network conditions. </p>
     */
    interface Manifest {
      /**
       * <i>Required.</i> <br> The presentation timeline.
       */
      presentationTimeline: shaka.media.PresentationTimeline;
      /**
       * <i>Required.</i> <br> The presentation's Periods. There must be at least one Period.
       */
      periods: shaka.extern.Period[];
      /**
       * <i>Defaults to [].</i> <br> An array of EME sessions to load for offline playback.
       */
      offlineSessionIds: string[];
      /**
       * <i>Defaults to 0.</i> <br> The minimum number of seconds of content that must be buffered before playback can begin.  Can be overridden by a higher value from the Player configuration.
       */
      minBufferTime: number;
    }
    /**
     * A Period object contains the Streams for part of the presentation.
     */
    interface Period {
      /**
       * <i>Required.</i> <br> The Period's start time, in seconds, relative to the start of the presentation. The first Period must begin at the start of the presentation. The Period ends immediately before the next Period's start time or exactly at the end of the presentation timeline. Periods which begin after the end of the presentation timeline are ignored.
       */
      startTime: number;
      /**
       * <i>Required.</i> <br> The Period's Variants. There must be at least one Variant.
       */
      variants: shaka.extern.Variant[];
      /**
       * <i>Required.</i> <br> The Period's text streams.
       */
      textStreams: shaka.extern.Stream[];
    }
    /**
     * Explicit initialization data, which override any initialization data in the content. The initDataType values and the formats that they correspond to are specified {@link https://bit.ly/EmeInitTypes here}.
     */
    interface InitDataOverride {
      /**
       * Initialization data in the format indicated by initDataType.
       */
      initData: Uint8Array;
      /**
       * A string to indicate what format initData is in.
       */
      initDataType: string;
      /**
       * The key Id that corresponds to this initData.
       */
      keyId: string;
    }
    /**
     * DRM configuration for a single key system.
     */
    interface DrmInfo {
      /**
       * <i>Required.</i> <br> The key system, e.g., "com.widevine.alpha".
       */
      keySystem: string;
      /**
       * <i>Filled in by DRM config if missing.</i> <br> The license server URI.
       */
      licenseServerUri: string;
      /**
       * <i>Defaults to false.  Can be filled in by advanced DRM config.</i> <br> True if the application requires the key system to support distinctive identifiers.
       */
      distinctiveIdentifierRequired: boolean;
      /**
       * <i>Defaults to false.  Can be filled in by advanced DRM config.</i> <br> True if the application requires the key system to support persistent state, e.g., for persistent license storage.
       */
      persistentStateRequired: boolean;
      /**
       * <i>Defaults to '', e.g., no specific robustness required.  Can be filled in by advanced DRM config.</i> <br> A key-system-specific string that specifies a required security level.
       */
      audioRobustness: string;
      /**
       * <i>Defaults to '', e.g., no specific robustness required.  Can be filled in by advanced DRM config.</i> <br> A key-system-specific string that specifies a required security level.
       */
      videoRobustness: string;
      /**
       * <i>Defaults to null, e.g., certificate will be requested from the license server if required.  Can be filled in by advanced DRM config.</i> <br> A key-system-specific server certificate used to encrypt license requests. Its use is optional and is meant as an optimization to avoid a round-trip to request a certificate.
       */
      serverCertificate: Uint8Array;
      /**
       * <i>Defaults to [], e.g., no override.</i> <br> A list of initialization data which override any initialization data found in the content.  See also shaka.extern.InitDataOverride.
       */
      initData: shaka.extern.InitDataOverride[];
      /**
       * <i>Defaults to []</i> <br> If not empty, contains the default key IDs for this key system, as lowercase hex strings.
       */
      keyIds: string[];
    }
    /**
     * A Variant describes a combination of an audio and video streams which could be played together. It's possible to have a video/audio only variant.
     */
    interface Variant {
      /**
       * <i>Required.</i> <br> A unique ID among all Variant objects within the same Manifest.
       */
      id: number;
      /**
       * <i>Defaults to '' (i.e., unknown).</i> <br> The Variant's language, specified as a language code. <br> See {@link https://tools.ietf.org/html/rfc5646} <br> See {@link http://www.iso.org/iso/home/standards/language_codes.htm}
       */
      language: string;
      /**
       * <i>Defaults to false.</i> <br> True indicates that the player should use this Variant over others in the same Period. The player may still use another Variant to meet application preferences.
       */
      primary: boolean;
      /**
       * The audio stream of the variant.
       */
      audio: shaka.extern.Stream;
      /**
       * The video stream of the variant.
       */
      video: shaka.extern.Stream;
      /**
       * The variant's required bandwidth in bits per second.
       */
      bandwidth: number;
      /**
       * <i>Defaults to [] (i.e., no DRM).</i> <br> An array of DrmInfo objects which describe DRM schemes are compatible with the content.
       */
      drmInfos: shaka.extern.DrmInfo[];
      /**
       * <i>Defaults to true.</i><br> Set by the Player to indicate whether the variant is allowed to be played by the application.
       */
      allowedByApplication: boolean;
      /**
       * <i>Defaults to true.</i><br> Set by the Player to indicate whether the variant is allowed to be played by the key system.
       */
      allowedByKeySystem: boolean;
    }
    /**
     * Creates a SegmentIndex; returns a Promise that resolves after the SegmentIndex has been created.
     */
    type CreateSegmentIndexFunction = () => Promise<void>;
    /**
     * A Stream object describes a single stream (segmented media data).
     */
    interface Stream {
      /**
       * <i>Required.</i> <br> A unique ID among all Stream objects within the same Manifest.
       */
      id: number;
      /**
       * <i>Optional.</i> <br> The original ID, if any, that appeared in the manifest.  For example, in DASH, this is the "id" attribute of the Representation element.  In HLS, this is the "NAME" attribute.
       */
      originalId: string;
      /**
       * <i>Required.</i> <br> Creates the Stream's segmentIndex (asynchronously).
       */
      createSegmentIndex: shaka.extern.CreateSegmentIndexFunction;
      /**
       * <i>Required.</i> <br> May be null until createSegmentIndex() is complete.
       */
      segmentIndex: shaka.media.SegmentIndex;
      /**
       * <i>Required.</i> <br> The Stream's MIME type, e.g., 'audio/mp4', 'video/webm', or 'text/vtt'.
       */
      mimeType: string;
      /**
       * <i>Defaults to '' (i.e., unknown / not needed).</i> <br> The Stream's codecs, e.g., 'avc1.4d4015' or 'vp9', which must be compatible with the Stream's MIME type. <br> See {@link https://tools.ietf.org/html/rfc6381}
       */
      codecs: string;
      /**
       * <i>Video streams only.</i> <br> The Stream's framerate in frames per second
       */
      frameRate: number | undefined;
      /**
       * <i>Audio and video streams only.</i> <br> The stream's required bandwidth in bits per second.
       */
      bandwidth: number | undefined;
      /**
       * <i>Video streams only.</i> <br> The stream's width in pixels.
       */
      width: number | undefined;
      /**
       * <i>Video streams only.</i> <br> The stream's height in pixels.
       */
      height: number | undefined;
      /**
       * <i>Text streams only.</i> <br> The kind of text stream.  For example, 'caption' or 'subtitle'.
       */
      kind: string | undefined;
      /**
       * <i>Defaults to false.</i><br> True if the stream is encrypted.
       */
      encrypted: boolean;
      /**
       * <i>Defaults to null (i.e., unencrypted or key ID unknown).</i> <br> The stream's key ID as a lowercase hex string. This key ID identifies the encryption key that the browser (key system) can use to decrypt the stream.
       */
      keyId: string;
      /**
       * The Stream's language, specified as a language code. <br> Audio stream's language must be identical to the language of the containing Variant.
       */
      language: string;
      /**
       * The Stream's label, unique text that should describe the audio/text track.
       */
      label?: string;
      /**
       * <i>Required.</i> <br> Content type (e.g. 'video', 'audio' or 'text')
       */
      type: string;
      /**
       * <i>Defaults to false.</i> <br> True indicates that the player should prefer this Stream over others in the same Period. The player may still use another Stream to meet application preferences.
       */
      primary: boolean;
      /**
       * <i>Video streams only.</i> <br> An alternate video stream to use for trick mode playback.
       */
      trickModeVideo: shaka.extern.Stream;
      /**
       * <i>Defaults to empty.</i><br> Array of registered emsg box scheme_id_uri that should result in Player events.
       */
      emsgSchemeIdUris: string[];
      /**
       * The roles of the stream as they appear on the manifest, e.g. 'main', 'caption', or 'commentary'.
       */
      roles: string[];
      /**
       * The channel count information for the audio stream.
       */
      channelsCount: number;
      /**
       * A map containing the description of closed captions, with the caption channel number (CC1 | CC2 | CC3 | CC4) as the key and the language code as the value. If the channel number is not provided by the description, we'll set an 0-based index as the key. Example: {'CC1': 'eng'; 'CC3': 'swe'}, or {'1', 'eng'; '2': 'swe'}, etc.
       */
      closedCaptions: Map<string, string>;
    }
    /**
     * Parses media manifests and handles manifest updates.  Given a URI where the initial manifest is found, a parser will request the manifest, parse it, and return the resulting Manifest object.  If the manifest requires updates (e.g. for live media), the parser will use background timers to update the same Manifest object.  There are many ways for |start| and |stop| to be called. Implementations should support all cases:  BASIC await parser.start(uri, playerInterface); await parser.stop();  INTERRUPTING const p = parser.start(uri, playerInterface); await parser.stop(); await p;  |p| should be rejected with an OPERATION_ABORTED error.  STOPPED BEFORE STARTING await parser.stop();
     */
    interface ManifestParser {
      /**
       * Called by the Player to provide an updated configuration any time the configuration changes.  Will be called at least once before start().
       */
      configure(config: shaka.extern.ManifestConfiguration): void;
      /**
       * Initialize and start the parser. When |start| resolves, it should return the initial version of the manifest. |start| will only be called once. If |stop| is called while |start| is pending, |start| should reject.
       * @param uri The URI of the manifest.
       * @param playerInterface The player interface contains the callbacks and members that the parser can use to communicate with the player and outside world.
       */
      start(
        uri: string,
        playerInterface: shaka.extern.ManifestParser.PlayerInterface
      ): Promise<shaka.extern.Manifest>;
      /**
       * Tell the parser that it must stop and free all internal resources as soon as possible. Only once all internal resources are stopped and freed will the promise resolve. Once stopped a parser will not be started again.  The parser should support having |stop| called multiple times and the promise should always resolve.
       */
      stop(): Promise<void>;
      /**
       * Tells the parser to do a manual manifest update.  Implementing this is optional.  This is only called when 'emsg' boxes are present.
       */
      update(): void;
      /**
       * Tells the parser that the expiration time of an EME session has changed. Implementing this is optional.
       */
      onExpirationUpdated(sessionId: string, expiration: number): void;
    }
    namespace ManifestParser {
      /**
       * Defines the interface of the Player to the manifest parser.  This defines fields and callback methods that the parser will use to interact with the Player.  The callback methods do not need to be called as member functions (i.e. they can be called as "free" functions).
       */
      interface PlayerInterface {
        /**
         * The networking engine to use for network requests.
         */
        networkingEngine: shaka.net.NetworkingEngine;
        /**
         * Should be called on a new Period so that it can be filtered.
         */
        filterNewPeriod: (p0: shaka.extern.Period) => void;
        /**
         * Should be called on all Periods so that they can be filtered.
         */
        filterAllPeriods: (p0: shaka.extern.Period[]) => void;
        /**
         * Should be called when a new timeline region is added.
         */
        onTimelineRegionAdded: (p0: shaka.extern.TimelineRegionInfo) => void;
        /**
         * Should be called to raise events.
         */
        onEvent: (p0: Event) => void;
        /**
         * Should be called when an error occurs.
         */
        onError: (p0: shaka.util.Error) => void;
      }
      /**
       * A factory for creating the manifest parser.  This will be called with 'new'. This function is registered with shaka.media.ManifestParser to create parser instances.
       */
      interface Factory {
        new (): shaka.extern.ManifestParser;
      }
    }
    interface ParsedBox {
      /**
       * The parser that parsed this box. The parser can be used to parse child boxes where the configuration of the current parser is needed to parsed other boxes.
       */
      parser: shaka.util.Mp4Parser;
      /**
       * If true, allows reading partial payloads from some boxes. If the goal is a child box, we can sometimes find it without enough data to find all child boxes. This property allows the partialOkay flag from parse() to be propagated through methods like children().
       */
      partialOkay: boolean;
      /**
       * The start of this box (before the header) in the original buffer. This start position is the absolute position.
       */
      start: number;
      /**
       * The size of this box (including the header).
       */
      size: number;
      /**
       * The version for a full box, null for basic boxes.
       */
      version: number;
      /**
       * The flags for a full box, null for basic boxes.
       */
      flags: number;
      /**
       * The reader for this box is only for this box. Reading or not reading to the end will have no affect on the parser reading other sibling boxes.
       */
      reader: shaka.util.DataViewReader;
    }
    /**
     * Parameters for retrying requests.
     */
    interface RetryParameters {
      /**
       * The maximum number of times the request should be attempted.
       */
      maxAttempts: number;
      /**
       * The delay before the first retry, in milliseconds.
       */
      baseDelay: number;
      /**
       * The multiplier for successive retry delays.
       */
      backoffFactor: number;
      /**
       * The maximum amount of fuzz to apply to each retry delay. For example, 0.5 means "between 50% below and 50% above the retry delay."
       */
      fuzzFactor: number;
      /**
       * The request timeout, in milliseconds.  Zero means "unlimited".
       */
      timeout: number;
    }
    /**
     * Defines a network request.  This is passed to one or more request filters that may alter the request, then it is passed to a scheme plugin which performs the actual operation.
     */
    interface Request {
      /**
       * An array of URIs to attempt.  They will be tried in the order they are given.
       */
      uris: string[];
      /**
       * The HTTP method to use for the request.
       */
      method: string;
      /**
       * The body of the request.
       */
      body: BufferSource;
      /**
       * A mapping of headers for the request.  e.g.: {'HEADER': 'VALUE'}
       */
      headers: { [key: string]: string };
      /**
       * Make requests with credentials.  This will allow cookies in cross-site requests.  See {@link https://bit.ly/CorsCred}.
       */
      allowCrossSiteCredentials: boolean;
      /**
       * An object used to define how often to make retries.
       */
      retryParameters: shaka.extern.RetryParameters;
      /**
       * If this is a LICENSE request, this field contains the type of license request it is (not the type of license).  This is the |messageType| field of the EME message.  For example, this could be 'license-request' or 'license-renewal'.
       */
      licenseRequestType: string;
      /**
       * If this is a LICENSE request, this field contains the session ID of the EME session that made the request.
       */
      sessionId: string;
    }
    /**
     * Defines a response object.  This includes the response data and header info. This is given back from the scheme plugin.  This is passed to a response filter before being returned from the request call.
     */
    interface Response {
      /**
       * The URI which was loaded.  Request filters and server redirects can cause this to be different from the original request URIs.
       */
      uri: string;
      /**
       * The original URI passed to the browser for networking. This is before any redirects, but after request filters are executed.
       */
      originalUri: string;
      /**
       * The body of the response.
       */
      data: BufferSource;
      /**
       * A map of response headers, if supported by the underlying protocol. All keys should be lowercased. For HTTP/HTTPS, may not be available cross-origin.
       */
      headers: { [key: string]: string };
      /**
       * Optional.  The time it took to get the response, in miliseconds.  If not given, NetworkingEngine will calculate it using Date.now.
       */
      timeMs: number | undefined;
      /**
       * Optional. If true, this response was from a cache and should be ignored for bandwidth estimation.
       */
      fromCache: boolean | undefined;
    }
    /**
     * Defines a plugin that handles a specific scheme.  The functions accepts four parameters, uri string, request, request type, and a progressUpdated function.  The progressUpdated function can be ignored by plugins that do not have this information, but it will always be provided by NetworkingEngine.
     */
    type SchemePlugin = (
      p0: string,
      p1: shaka.extern.Request,
      p2: shaka.net.NetworkingEngine.RequestType,
      p3: shaka.extern.ProgressUpdated
    ) => shaka.extern.IAbortableOperation<shaka.extern.Response>;
    /**
     * A callback function to handle progress event through networking engine in player. The first argument is a number for duration in milliseconds, that the request took to complete. The second argument is the total number of bytes downloaded during that time. The third argument is the number of bytes remaining to be loaded in a segment.
     */
    type ProgressUpdated = (p0: number, p1: number, p2: number) => void;
    /**
     * Defines a filter for requests.  This filter takes the request and modifies it before it is sent to the scheme plugin. A request filter can run asynchronously by returning a promise; in this case, the request will not be sent until the promise is resolved.
     */
    type RequestFilter = (
      p0: shaka.net.NetworkingEngine.RequestType,
      p1: shaka.extern.Request
    ) => Promise<void> | undefined | null;
    /**
     * Defines a filter for responses.  This filter takes the response and modifies it before it is returned. A response filter can run asynchronously by returning a promise.
     */
    type ResponseFilter = (
      p0: shaka.net.NetworkingEngine.RequestType,
      p1: shaka.extern.Response
    ) => Promise<void> | undefined | null;
    interface OfflineSupport {
      /**
       * True if offline is usable at all.
       */
      basic: boolean;
      /**
       * A map of key system name to whether it supports offline playback.
       */
      encrypted: { [key: string]: boolean };
    }
    interface StoredContent {
      /**
       * An offline URI to access the content. This can be passed directly to Player. If the uri is null, it means that the content has not finished downloading and is not ready to play.
       */
      offlineUri: string;
      /**
       * The original manifest URI of the content stored.
       */
      originalManifestUri: string;
      /**
       * The duration of the content, in seconds.
       */
      duration: number;
      /**
       * The size of the content, in bytes.
       */
      size: number;
      /**
       * The time that the encrypted license expires, in milliseconds.  If the media is clear or the license never expires, this will equal Infinity.
       */
      expiration: number;
      /**
       * The tracks that are stored.  This only lists those found in the first Period.
       */
      tracks: shaka.extern.Track[];
      /**
       * The metadata passed to store().
       */
      appMetadata: object;
    }
    interface ManifestDB {
      /**
       * The URI that the manifest was originally loaded from.
       */
      originalManifestUri: string;
      /**
       * The total duration of the media, in seconds.
       */
      duration: number;
      /**
       * The total size of all stored segments, in bytes.
       */
      size: number;
      /**
       * The license expiration, in milliseconds; or Infinity if not applicable.
       */
      expiration: number;
      /**
       * The Periods that are stored.
       */
      periods: shaka.extern.PeriodDB[];
      /**
       * The DRM offline session IDs for the media.
       */
      sessionIds: string[];
      /**
       * The DRM info used to initialize EME.
       */
      drmInfo: shaka.extern.DrmInfo;
      /**
       * A metadata object passed from the application.
       */
      appMetadata: object;
    }
    interface PeriodDB {
      /**
       * The start time of the period, in seconds.
       */
      startTime: number;
      /**
       * The streams that define the Period.
       */
      streams: shaka.extern.StreamDB[];
    }
    interface StreamDB {
      /**
       * The unique id of the stream.
       */
      id: number;
      /**
       * The original ID, if any, that appeared in the manifest.  For example, in DASH, this is the "id" attribute of the Representation element.
       */
      originalId: string;
      /**
       * Whether the stream set was primary.
       */
      primary: boolean;
      /**
       * The presentation time offset of the stream, in seconds.
       */
      presentationTimeOffset: number;
      /**
       * The type of the stream, 'audio', 'text', or 'video'.
       */
      contentType: string;
      /**
       * The MIME type of the stream.
       */
      mimeType: string;
      /**
       * The codecs of the stream.
       */
      codecs: string;
      /**
       * The Stream's framerate in frames per second.
       */
      frameRate: number | undefined;
      /**
       * The kind of text stream; undefined for audio/video.
       */
      kind: string | undefined;
      /**
       * The language of the stream; '' for video.
       */
      language: string;
      /**
       * The label of the stream; '' for video.
       */
      label: string;
      /**
       * The width of the stream; null for audio/text.
       */
      width: number;
      /**
       * The height of the stream; null for audio/text.
       */
      height: number;
      /**
       * The storage key where the init segment is found; null if no init segment.
       */
      initSegmentKey: number;
      /**
       * Whether this stream is encrypted.
       */
      encrypted: boolean;
      /**
       * The key ID this stream is encrypted with.
       */
      keyId: string;
      /**
       * An array of segments that make up the stream.
       */
      segments: shaka.extern.SegmentDB[];
      /**
       * An array of ids of variants the stream is a part of.
       */
      variantIds: number[];
    }
    interface SegmentDB {
      /**
       * The start time of the segment, in seconds from the start of the Period.
       */
      startTime: number;
      /**
       * The end time of the segment, in seconds from the start of the Period.
       */
      endTime: number;
      /**
       * The key to the data in storage.
       */
      dataKey: number;
    }
    interface SegmentDataDB {
      /**
       * The data contents of the segment.
       */
      data: ArrayBuffer;
    }
    interface EmeSessionDB {
      /**
       * The EME session ID.
       */
      sessionId: string;
      /**
       * The EME key system string the session belongs to.
       */
      keySystem: string;
      /**
       * The URI for the license server.
       */
      licenseUri: string;
      /**
       * A key-system-specific server certificate used to encrypt license requests. Its use is optional and is meant as an optimization to avoid a round-trip to request a certificate.
       */
      serverCertificate: Uint8Array;
      /**
       * The EME audio capabilities used to create the session.
       */
      audioCapabilities: MediaKeySystemMediacapability[];
      /**
       * The EME video capabilities used to create the session.
       */
      videoCapabilities: MediaKeySystemMediacapability[];
    }
    /**
     * An interface that defines access to collection of segments and manifests. All methods are designed to be batched operations allowing the implementations to optimize their operations based on how they store data.  The storage cell is one of two exposed APIs used to control where and how offline content is saved. The storage cell is responsible for converting information between its internal structures and the external (library) structures.
     */
    interface StorageCell {
      /**
       * Free all resources used by this cell. This should not affect the stored content.
       */
      destroy(): Promise<void>;
      /**
       * Check if the cell can support new keys. If a cell has a fixed key space, then all add-operations will fail as no new keys can be added. All remove-operations and update-operations should still work.
       */
      hasFixedKeySpace(): boolean;
      /**
       * Add a group of segments. Will return a promise that resolves with a list of keys for each segment. If one segment fails to be added, all segments should fail to be added.
       */
      addSegments(segments: shaka.extern.SegmentDataDB[]): Promise<number[]>;
      /**
       * Remove a group of segments using their keys to identify them. If a key is not found, then that removal should be considered successful.
       * @param onRemove A callback for when a segment is removed from the cell. The key of the segment will be passed to the callback.
       */
      removeSegments(
        keys: number[],
        onRemove: (p0: number) => void
      ): Promise<void>;
      /**
       * Get a group of segments using their keys to identify them. If any key is not found, the promise chain will be rejected.
       */
      getSegments(keys: number[]): Promise<shaka.extern.SegmentDataDB[]>;
      /**
       * Add a group of manifests. Will return a promise that resolves with a list of keys for each manifest. If one manifest fails to be added, all manifests should fail to be added.
       * @returnType keys
       */
      addManifests(manifests: shaka.extern.ManifestDB[]): Promise<number[]>;
      /**
       * Replace the expiration time of the manifest stored under |key| with |newExpiration|. If no manifest is found under |key| then this should act as a no-op.
       */
      updateManifestExpiration(key: number, expiration: number): Promise<void>;
      /**
       * Remove a group of manifests using their keys to identify them. If a key is not found, then that removal should be considered successful.
       * @param onRemove A callback for when a manifest is removed from the cell. The key of the manifest will be passed to the callback.
       */
      removeManifests(
        keys: number[],
        onRemove: (p0: number) => void
      ): Promise<void>;
      /**
       * Get a group of manifests using their keys to identify them. If any key is not found, the promise chain will be rejected.
       */
      getManifests(keys: number[]): Promise<shaka.extern.ManifestDB[]>;
      /**
       * Get all manifests stored in this cell. Since manifests are small compared to the asset they describe, it is assumed that it is feasible to have them all in main memory at one time.
       */
      getAllManifests(): Promise<Map<number, shaka.extern.ManifestDB>>;
    }
    /**
     * Similar to storage cells (shaka.extern.StorageCell), an EmeSessionStorageCell stores data persistently.  This only stores the license's session info, not the license itself.  The license itself is stored using EME.
     */
    interface EmeSessionStorageCell {
      /**
       * Free all resources used by this cell. This won't affect the stored content.
       */
      destroy(): Promise<void>;
      /**
       * Gets the currently stored sessions.
       */
      getAll(): Promise<shaka.extern.EmeSessionDB[]>;
      /**
       * Adds the given sessions to the store.
       */
      add(sessions: shaka.extern.EmeSessionDB[]): Promise<void>;
      /**
       * Removes the given session IDs from the store.
       */
      remove(sessionIds: string[]): Promise<void>;
    }
    /**
     * Storage mechanisms are one of two exported storage APIs. Storage mechanisms are groups of storage cells (shaka.extern.StorageCell). Storage mechanisms are responsible for managing the life cycle of resources shared between storage cells in the same block.  For example, a storage mechanism may manage a single database connection while each cell would manage different tables in the database via the same connection.
     */
    interface StorageMechanism {
      /**
       * Initialize the storage mechanism for first use. This should only be called once. Calling |init| multiple times has an undefined behaviour.
       */
      init(): Promise<void>;
      /**
       * Free all resources used by the storage mechanism and its cells. This should not affect the stored content.
       */
      destroy(): Promise<void>;
      /**
       * Get a map of all the cells managed by the storage mechanism. Editing the map should have no effect on the storage mechanism. The map key is the cell's address in the mechanism and should be consistent between calls to |getCells|.
       */
      getCells(): Map<string, shaka.extern.StorageCell>;
      /**
       * Get the current EME session storage cell.
       */
      getEmeSessionCell(): shaka.extern.EmeSessionStorageCell;
      /**
       * Erase all content from storage and leave storage in an empty state. Erase may be called with or without |init|.  This allows for storage to be wiped in case of a version mismatch.  After calling |erase|, the mechanism will be in an initialized state.
       */
      erase(): Promise<void>;
    }
    interface TrackChoice {
      /**
       * The timestamp the choice was made, in seconds since 1970 (i.e. <code>Date.now() / 1000</code>).
       */
      timestamp: number;
      /**
       * The id of the track that was chosen.
       */
      id: number;
      /**
       * The type of track chosen (<code>'variant'</code> or <code>'text'</code>).
       */
      type: string;
      /**
       * <code>true</code> if the choice was made by AbrManager for adaptation; <code>false</code> if it was made by the application through <code>selectTrack</code>.
       */
      fromAdaptation: boolean;
      /**
       * The bandwidth of the chosen track (<code>null</code> for text).
       */
      bandwidth: number;
    }
    interface StateChange {
      /**
       * The timestamp the state was entered, in seconds since 1970 (i.e. <code>Date.now() / 1000</code>).
       */
      timestamp: number;
      /**
       * The state the player entered.  This could be <code>'buffering'</code>, <code>'playing'</code>, <code>'paused'</code>, or <code>'ended'</code>.
       */
      state: string;
      /**
       * The number of seconds the player was in this state.  If this is the last entry in the list, the player is still in this state, so the duration will continue to increase.
       */
      duration: number;
    }
    /**
     * Contains statistics and information about the current state of the player. This is meant for applications that want to log quality-of-experience (QoE) or other stats.  These values will reset when <code>load()</code> is called again.
     */
    interface Stats {
      /**
       * The width of the current video track.
       */
      width: number;
      /**
       * The height of the current video track.
       */
      height: number;
      /**
       * The bandwidth required for the current streams (total, in bit/sec).
       */
      streamBandwidth: number;
      /**
       * The total number of frames corrupted by the Player.  This may be <code>NaN</code> if this is not supported by the browser.
       */
      corruptedFrames: number;
      /**
       * The total number of frames decoded by the Player.  This may be <code>NaN</code> if this is not supported by the browser.
       */
      decodedFrames: number;
      /**
       * The total number of frames dropped by the Player.  This may be <code>NaN</code> if this is not supported by the browser.
       */
      droppedFrames: number;
      /**
       * The current estimated network bandwidth (in bit/sec).
       */
      estimatedBandwidth: number;
      /**
       * This is the number of seconds it took for the video element to have enough data to begin playback.  This is measured from the time load() is called to the time the <code>'loadeddata'</code> event is fired by the media element.
       */
      loadLatency: number;
      /**
       * The total time spent in a playing state in seconds.
       */
      playTime: number;
      /**
       * The total time spent in a paused state in seconds.
       */
      pauseTime: number;
      /**
       * The total time spent in a buffering state in seconds.
       */
      bufferingTime: number;
      /**
       * A history of the stream changes.
       */
      switchHistory: shaka.extern.TrackChoice[];
      /**
       * A history of the state changes.
       */
      stateHistory: shaka.extern.StateChange[];
    }
    /**
     * Contains the times of a range of buffered content.
     */
    interface BufferedRange {
      /**
       * The start time of the range, in seconds.
       */
      start: number;
      /**
       * The end time of the range, in seconds.
       */
      end: number;
    }
    /**
     * Contains information about the current buffered ranges.
     */
    interface BufferedInfo {
      /**
       * The combined audio/video buffered ranges, reported by <code>video.buffered</code>.
       */
      total: shaka.extern.BufferedRange[];
      /**
       * The buffered ranges for audio content.
       */
      audio: shaka.extern.BufferedRange[];
      /**
       * The buffered ranges for video content.
       */
      video: shaka.extern.BufferedRange[];
      /**
       * The buffered ranges for text content.
       */
      text: shaka.extern.BufferedRange[];
    }
    /**
     * An object describing a media track.  This object should be treated as read-only as changing any values does not have any effect.  This is the public view of an audio/video paring (variant type) or text track (text type).
     */
    interface Track {
      /**
       * The unique ID of the track.
       */
      id: number;
      /**
       * If true, this is the track being streamed (another track may be visible/audible in the buffer).
       */
      active: boolean;
      /**
       * The type of track, either <code>'variant'</code> or <code>'text'</code>.
       */
      type: string;
      /**
       * The bandwidth required to play the track, in bits/sec.
       */
      bandwidth: number;
      /**
       * The language of the track, or <code>'und'</code> if not given.  This is the exact value provided in the manifest; it may need to be normalized.
       */
      language: string;
      /**
       * The track label, which is unique text that should describe the track.
       */
      label?: string;
      /**
       * (only for text tracks) The kind of text track, either <code>'caption'</code> or <code>'subtitle'</code>.
       */
      kind: string;
      /**
       * The video width provided in the manifest, if present.
       */
      width: number;
      /**
       * The video height provided in the manifest, if present.
       */
      height: number;
      /**
       * The video framerate provided in the manifest, if present.
       */
      frameRate: number;
      /**
       * The MIME type of the content provided in the manifest.
       */
      mimeType: string;
      /**
       * The audio/video codecs string provided in the manifest, if present.
       */
      codecs: string;
      /**
       * The audio codecs string provided in the manifest, if present.
       */
      audioCodec: string;
      /**
       * The video codecs string provided in the manifest, if present.
       */
      videoCodec: string;
      /**
       * True indicates that this in the primary language for the content. This flag is based on signals from the manifest. This can be a useful hint about which language should be the default, and indicates which track Shaka will use when the user's language preference cannot be satisfied.
       */
      primary: boolean;
      /**
       * The roles of the track, e.g. <code>'main'</code>, <code>'caption'</code>, or <code>'commentary'</code>.
       */
      roles: string[];
      /**
       * The roles of the audio in the track, e.g. <code>'main'</code> or <code>'commentary'</code>. Will be null for text tracks or variant tracks without audio.
       */
      audioRoles: string[];
      /**
       * (only for variant tracks) The video stream id.
       */
      videoId: number;
      /**
       * (only for variant tracks) The audio stream id.
       */
      audioId: number;
      /**
       * The count of the audio track channels.
       */
      channelsCount: number;
      /**
       * (only for variant tracks) The audio stream's bandwidth if known.
       */
      audioBandwidth: number;
      /**
       * (only for variant tracks) The video stream's bandwidth if known.
       */
      videoBandwidth: number;
      /**
       * (variant tracks only) The original ID of the video part of the track, if any, as it appeared in the original manifest.
       */
      originalVideoId: string;
      /**
       * (variant tracks only) The original ID of the audio part of the track, if any, as it appeared in the original manifest.
       */
      originalAudioId: string;
      /**
       * (text tracks only) The original ID of the text track, if any, as it appeared in the original manifest.
       */
      originalTextId: string;
    }
    /**
     * An object describing application restrictions on what tracks can play.  All restrictions must be fulfilled for a track to be playable/selectable. The restrictions system behaves somewhat differently at the ABR level and the player level, so please refer to the documentation for those specific settings.
     */
    interface Restrictions {
      /**
       * The minimum width of a video track, in pixels.
       */
      minWidth: number;
      /**
       * The maximum width of a video track, in pixels.
       */
      maxWidth: number;
      /**
       * The minimum height of a video track, in pixels.
       */
      minHeight: number;
      /**
       * The maximum height of a video track, in pixels.
       */
      maxHeight: number;
      /**
       * The minimum number of total pixels in a video track (i.e. <code>width * height</code>).
       */
      minPixels: number;
      /**
       * The maximum number of total pixels in a video track (i.e. <code>width * height</code>).
       */
      maxPixels: number;
      /**
       * The minimum bandwidth of a variant track, in bit/sec.
       */
      minBandwidth: number;
      /**
       * The maximum bandwidth of a variant track, in bit/sec.
       */
      maxBandwidth: number;
    }
    interface DrmSupportType {
      /**
       * Whether this key system supports persistent state.
       */
      persistentState: boolean;
    }
    /**
     * An object detailing browser support for various features.
     */
    interface SupportType {
      /**
       * A map of supported manifest types. The keys are manifest MIME types and file extensions.
       */
      manifest: { [key: string]: boolean };
      /**
       * A map of supported media types. The keys are media MIME types.
       */
      media: { [key: string]: boolean };
      /**
       * A map of supported key systems. The keys are the key system names.  The value is <code>null</code> if it is not supported.  Key systems not probed will not be in this dictionary.
       */
      drm: { [key: string]: shaka.extern.DrmSupportType };
    }
    /**
     * Contains information about a region of the timeline that will cause an event to be raised when the playhead enters or exits it.  In DASH this is the EventStream element.
     */
    interface TimelineRegionInfo {
      /**
       * Identifies the message scheme.
       */
      schemeIdUri: string;
      /**
       * Specifies the value for the region.
       */
      value: string;
      /**
       * The presentation time (in seconds) that the region should start.
       */
      startTime: number;
      /**
       * The presentation time (in seconds) that the region should end.
       */
      endTime: number;
      /**
       * Specifies an identifier for this instance of the region.
       */
      id: string;
      /**
       * The XML element that defines the Event.
       */
      eventElement: Element;
    }
    /**
     * Contains information about an EMSG MP4 box.
     */
    interface EmsgInfo {
      /**
       * Identifies the message scheme.
       */
      schemeIdUri: string;
      /**
       * Specifies the value for the event.
       */
      value: string;
      /**
       * The time that the event starts (in presentation time).
       */
      startTime: number;
      /**
       * The time that the event ends (in presentation time).
       */
      endTime: number;
      /**
       * Provides the timescale, in ticks per second.
       */
      timescale: number;
      /**
       * The offset that the event starts, relative to the start of the segment this is contained in (in units of timescale).
       */
      presentationTimeDelta: number;
      /**
       * The duration of the event (in units of timescale).
       */
      eventDuration: number;
      /**
       * A field identifying this instance of the message.
       */
      id: number;
      /**
       * Body of the message.
       */
      messageData: Uint8Array;
    }
    type DashContentProtectionCallback = (
      p0: Element
    ) => shaka.extern.DrmInfo[] | null;
    interface AdvancedDrmConfiguration {
      /**
       * <i>Defaults to false.</i> <br> True if the application requires the key system to support distinctive identifiers.
       */
      distinctiveIdentifierRequired: boolean;
      /**
       * <i>Defaults to false.</i> <br> True if the application requires the key system to support persistent state, e.g., for persistent license storage.
       */
      persistentStateRequired: boolean;
      /**
       * A key-system-specific string that specifies a required security level for video. <i>Defaults to <code>''</code>, i.e., no specific robustness required.</i>
       */
      videoRobustness: string;
      /**
       * A key-system-specific string that specifies a required security level for audio. <i>Defaults to <code>''</code>, i.e., no specific robustness required.</i>
       */
      audioRobustness: string;
      /**
       * <i>Defaults to null.</i> <br> <i>An empty certificate (<code>byteLength==0</code>) will be treated as <code>null</code>.</i> <br> <i>A certificate will be requested from the license server if required.</i> <br> A key-system-specific server certificate used to encrypt license requests. Its use is optional and is meant as an optimization to avoid a round-trip to request a certificate.
       */
      serverCertificate: Uint8Array;
      /**
       * The server that handles an <code>'individualiation-request'</code>.  If the server isn't given, it will default to the license server.
       */
      individualizationServer: string;
    }
    interface DrmConfiguration {
      /**
       * Retry parameters for license requests.
       */
      retryParameters: shaka.extern.RetryParameters;
      /**
       * <i>Required for all but the clear key CDM.</i> <br> A dictionary which maps key system IDs to their license servers. For example, <code>{'com.widevine.alpha': 'https://example.com/drm'}</code>.
       */
      servers: { [key: string]: string };
      /**
       * <i>Forces the use of the Clear Key CDM.</i> A map of key IDs (hex) to keys (hex).
       */
      clearKeys: { [key: string]: string };
      /**
       * <i>Defaults to false.</i> <br> True to configure drm to delay sending a license request until a user actually starts playing content.
       */
      delayLicenseRequestUntilPlayed: boolean;
      /**
       * <i>Optional.</i> <br> A dictionary which maps key system IDs to advanced DRM configuration for those key systems.
       */
      advanced: { [key: string]: shaka.extern.AdvancedDrmConfiguration };
    }
    interface DashManifestConfiguration {
      /**
       * If given, invoked by a DASH manifest parser to interpret custom or non-standard DRM schemes found in the manifest.  The argument is a ContentProtection node.  Return null if not recognized.
       */
      customScheme: shaka.extern.DashContentProtectionCallback;
      /**
       * A default clock sync URI to be used with live streams which do not contain any clock sync information.  The <code>Date</code> header from this URI will be used to determine the current time.
       */
      clockSyncUri: string;
      /**
       * If true will cause DASH parser to ignore DRM information specified by the manifest and treat it as if it signaled no particular key system and contained no init data. Defaults to false if not provided.
       */
      ignoreDrmInfo: boolean;
      /**
       * If true, xlink-related errors will result in a fallback to the tag's existing contents. If false, xlink-related errors will be propagated to the application and will result in a playback failure. Defaults to false if not provided.
       */
      xlinkFailGracefully: boolean;
      /**
       * A default <code>presentationDelay</code> if <code>suggestedPresentationDelay</code> is missing in the MPEG DASH manifest. This has to be bigger than <code>minBufferTime * 1.5</code>.
       */
      defaultPresentationDelay: number;
      /**
       * If true will cause DASH parser to ignore <code>minBufferTime</code> from manifest. It allows player config to take precedence over manifest for <code>rebufferingGoal</code>. Defaults to <code>false</code> if not provided.
       */
      ignoreMinBufferTime: boolean;
      /**
       * If <code>true</code>, ignore the <code>availabilityStartTime</code> in the manifest and instead use the segments to determine the live edge.  This allows us to play streams that have a lot of drift.  If <code>false</code>, we can't play content where the manifest specifies segments in the future. Defaults to <code>true</code>.
       */
      autoCorrectDrift: boolean;
      /**
       * The maximum number of initial segments to generate for <code>SegmentTemplate</code> with fixed-duration segments.  This is limited to avoid excessive memory consumption with very large <code>timeShiftBufferDepth</code> values.
       */
      initialSegmentLimit: number;
    }
    interface HlsManifestConfiguration {
      /**
       * If <code>true</code>, ignore any errors in a text stream and filter out those streams.
       */
      ignoreTextStreamFailures: boolean;
    }
    interface ManifestConfiguration {
      /**
       * Retry parameters for manifest requests.
       */
      retryParameters: shaka.extern.RetryParameters;
      /**
       * A number, in seconds, that overrides the availability window in the manifest, or <code>NaN</code> if the default value should be used.  This is enforced by the manifest parser, so custom manifest parsers should take care to honor this parameter.
       */
      availabilityWindowOverride: number;
      /**
       * If <code>true</code>, the audio tracks are ignored. Defaults to <code>false</code>.
       */
      disableAudio: boolean;
      /**
       * Advanced parameters used by the DASH manifest parser.
       */
      dash: shaka.extern.DashManifestConfiguration;
      /**
       * Advanced parameters used by the HLS manifest parser.
       */
      hls: shaka.extern.HlsManifestConfiguration;
    }
    /**
     * The StreamingEngine's configuration options.
     */
    interface StreamingConfiguration {
      /**
       * Retry parameters for segment requests.
       */
      retryParameters: shaka.extern.RetryParameters;
      /**
       * A callback to decide what to do on a streaming failure.  Default behavior is to retry on live streams and not on VOD.
       */
      failureCallback: (p0: shaka.util.Error) => void;
      /**
       * The minimum number of seconds of content that the StreamingEngine must buffer before it can begin playback or can continue playback after it has entered into a buffering state (i.e., after it has depleted one more more of its buffers).
       */
      rebufferingGoal: number;
      /**
       * The number of seconds of content that the StreamingEngine will attempt to buffer ahead of the playhead. This value must be greater than or equal to the rebuffering goal.
       */
      bufferingGoal: number;
      /**
       * The maximum number of seconds of content that the StreamingEngine will keep in buffer behind the playhead when it appends a new media segment. The StreamingEngine will evict content to meet this limit.
       */
      bufferBehind: number;
      /**
       * If <code>true</code>, the player will ignore text stream failures and continue playing other streams.
       */
      ignoreTextStreamFailures: boolean;
      /**
       * If <code>true</code>, always stream text tracks, regardless of whether or not they are shown.  This is necessary when using the browser's built-in controls, which are not capable of signaling display state changes back to Shaka Player. Defaults to <code>false</code>.
       */
      alwaysStreamText: boolean;
      /**
       * If <code>true</code>, adjust the start time backwards so it is at the start of a segment. This affects both explicit start times and calculated start time for live streams. This can put us further from the live edge. Defaults to <code>false</code>.
       */
      startAtSegmentBoundary: boolean;
      /**
       * The limit (in seconds) for a gap in the media to be considered "small". Small gaps are jumped automatically without events.  Large gaps result in a Player event and can be jumped.
       */
      smallGapLimit: number;
      /**
       * If <code>true</code>, jump large gaps in addition to small gaps.  A <code>largegap</code> event will be raised first.  Then, if the app doesn't call <code>preventDefault()</code> on the event, the Player will jump the gap.  If <code>false</code>, then the event will be raised, but the gap will not be jumped.
       */
      jumpLargeGaps: boolean;
      /**
       * By default, we will not allow seeking to exactly the duration of a presentation.  This field is the number of seconds before duration we will seek to when the user tries to seek to or start playback at the duration. To disable this behavior, the config can be set to 0.  We recommend using the default value unless you have a good reason not to.
       */
      durationBackoff: number;
      /**
       * If this is <code>true</code>, we will transmux TS content even if not strictly necessary for the assets to be played.  Shaka Player currently only supports CEA 708 captions by transmuxing, so this value is necessary for enabling them on platforms with native TS support like Edge or Chromecast. This value defaults to <code>false</code>.
       */
      forceTransmuxTS: boolean;
      /**
       * The amount of seconds that should be added when repositioning the playhead after falling out of the availability window or seek. This gives the player more time to buffer before falling outside again, but increases the forward jump in the stream skipping more content. This is helpful for lower bandwidth scenarios. Defaults to 5 if not provided.
       */
      safeSeekOffset: number;
      /**
       * When set to <code>true</code>, the stall detector logic will run, skipping forward <code>stallSkip</code> seconds whenever the playhead stops moving for <code>stallThreshold</code> seconds.
       */
      stallEnabled: boolean;
      /**
       * The maximum number of seconds that may elapse without the playhead moving (when playback is expected) before it will be labeled as a stall.
       */
      stallThreshold: number;
      /**
       * The number of seconds that the player will skip forward when a stall has been detected.
       */
      stallSkip: number;
      /**
       * Desktop Safari has both MediaSource and their native HLS implementation. Depending on the application's needs, it may prefer one over the other. Examples: FairPlay is only supported via Safari's native HLS, but it doesn't have an API for selecting specific tracks.
       */
      useNativeHlsOnSafari: boolean;
    }
    interface AbrConfiguration {
      /**
       * If true, enable adaptation by the current AbrManager.  Defaults to true.
       */
      enabled: boolean;
      /**
       * The default bandwidth estimate to use if there is not enough data, in bit/sec.
       */
      defaultBandwidthEstimate: number;
      /**
       * The restrictions to apply to ABR decisions.  These are "soft" restrictions. Any track that fails to meet these restrictions will not be selected automatically, but will still appear in the track list and can still be selected via <code>selectVariantTrack()</code>.  If no tracks meet these restrictions, AbrManager should not fail, but choose a low-res or low-bandwidth variant instead.  It is the responsibiliy of AbrManager implementations to follow these rules and implement this behavior.
       */
      restrictions: shaka.extern.Restrictions;
      /**
       * The minimum amount of time that must pass between switches, in seconds. This keeps us from changing too often and annoying the user.
       */
      switchInterval: number;
      /**
       * The fraction of the estimated bandwidth which we should try to use when upgrading.
       */
      bandwidthUpgradeTarget: number;
      /**
       * The largest fraction of the estimated bandwidth we should use. We should downgrade to avoid this.
       */
      bandwidthDowngradeTarget: number;
    }
    interface OfflineConfiguration {
      /**
       * Called inside <code>store()</code> to determine which tracks to save from a manifest. It is passed an array of Tracks from the manifest and it should return an array of the tracks to store.  This is called for each Period in the manifest (in order).
       */
      trackSelectionCallback: (
        p0: shaka.extern.Track[]
      ) => shaka.extern.Track[];
      /**
       * Called inside <code>store()</code> to give progress info back to the app. It is given the current manifest being stored and the progress of it being stored.
       */
      progressCallback: (p0: shaka.extern.StoredContent, p1: number) => void;
      /**
       * If <code>true</code>, store protected content with a persistent license so that no network is required to view. If <code>false</code>, store protected content without a persistent license.  A network will be required to retrieve a temporary license to view. Defaults to <code>true</code>.
       */
      usePersistentLicense: boolean;
    }
    interface PlayerConfiguration {
      /**
       * DRM configuration and settings.
       */
      drm: shaka.extern.DrmConfiguration;
      /**
       * Manifest configuration and settings.
       */
      manifest: shaka.extern.ManifestConfiguration;
      /**
       * Streaming configuration and settings.
       */
      streaming: shaka.extern.StreamingConfiguration;
      /**
       * A factory to construct an abr manager.
       */
      abrFactory: shaka.extern.AbrManager.Factory;
      /**
       * ABR configuration and settings.
       */
      abr: shaka.extern.AbrConfiguration;
      /**
       * Offline configuration and settings.
       */
      offline: shaka.extern.OfflineConfiguration;
      /**
       * The preferred language to use for audio tracks.  If not given it will use the <code>'main'</code> track. Changing this during playback will not affect the current playback.
       */
      preferredAudioLanguage: string;
      /**
       * The preferred language to use for text tracks.  If a matching text track is found, and the selected audio and text tracks have different languages, the text track will be shown. Changing this during playback will not affect the current playback.
       */
      preferredTextLanguage: string;
      /**
       * The preferred role to use for variants.
       */
      preferredVariantRole: string;
      /**
       * The preferred role to use for text tracks.
       */
      preferredTextRole: string;
      /**
       * The preferred number of audio channels.
       */
      preferredAudioChannelCount: number;
      /**
       * The application restrictions to apply to the tracks.  These are "hard" restrictions.  Any track that fails to meet these restrictions will not appear in the track list.  If no tracks meet these restrictions, playback will fail.
       */
      restrictions: shaka.extern.Restrictions;
      /**
       * Optional playback and seek start time in seconds. Defaults to 0 if not provided.
       */
      playRangeStart: number;
      /**
       * Optional playback and seek end time in seconds. Defaults to the end of the presentation if not provided.
       */
      playRangeEnd: number;
      /**
       * A factory to construct text displayer. Note that, if this is changed during playback, it will cause the text tracks to be reloaded.
       */
      textDisplayFactory: shaka.extern.TextDisplayer.Factory;
    }
    interface LanguageRole {
      /**
       * The language code for the stream.
       */
      language: string;
      /**
       * The role name for the stream. If the stream has no role, <code>role</code> will be <code>''</code>.
       */
      role: string;
    }
    interface CueRegion {
      id: string;
      viewportAnchorX: number;
      viewportAnchorY: number;
      regionAnchorX: number;
      regionAnchorY: number;
      width: number;
      height: number;
      heightUnits: shaka.text.CueRegion.units;
      widthUnits: shaka.text.CueRegion.units;
      viewportAnchorUnits: shaka.text.CueRegion.units;
    }
    interface Cue {
      startTime: number;
      endTime: number;
      payload: string;
      region: shaka.extern.CueRegion;
      position: number;
      positionAlign: shaka.text.Cue.positionAlign;
      size: number;
      textAlign: shaka.text.Cue.textAlign;
      direction: shaka.text.Cue.direction;
      writingMode: shaka.text.Cue.writingMode;
      lineInterpretation: shaka.text.Cue.lineInterpretation;
      line: number;
      lineHeight: string;
      lineAlign: shaka.text.Cue.lineAlign;
      displayAlign: shaka.text.Cue.displayAlign;
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      fontSize: string;
      fontWeight: shaka.text.Cue.fontWeight;
      fontStyle: shaka.text.Cue.fontStyle;
      fontFamily: string;
      textDecoration: shaka.text.Cue.textDecoration[];
      wrapLine: boolean;
      id: string;
      nestedCues: shaka.extern.Cue[];
      spacer: boolean;
    }
    /**
     * An interface for plugins that parse text tracks.
     */
    interface TextParser {
      /**
       * Parse an initialization segment. Some formats do not have init segments so this won't always be called.
       * @param data The data that makes up the init segment.
       */
      parseInit(data: Uint8Array): void;
      /**
       * Parse a media segment and return the cues that make up the segment.
       * @param data The next section of buffer.
       * @param timeContext The time information that should be used to adjust the times values for each cue.
       */
      parseMedia(
        data: Uint8Array,
        timeContext: shaka.extern.TextParser.TimeContext
      ): shaka.extern.Cue[];
    }
    namespace TextParser {
      /**
       * A collection of time offsets used to adjust text cue times.
       */
      interface TimeContext {
        /**
         * The absolute start time of the period in seconds.
         */
        periodStart: number;
        /**
         * The absolute start time of the segment in seconds.
         */
        segmentStart: number;
        /**
         * The absolute end time of the segment in seconds.
         */
        segmentEnd: number;
      }
    }
    interface TextParserPlugin {
      new (): shaka.extern.TextParser;
    }
    /**
     * This should handle displaying the text cues on the page.  This is given the cues to display and told when to start and stop displaying.  This should only display the cues it is given and remove cues when told to.  <p> This should only change whether it is displaying the cues through the <code>setTextVisibility</code> function; the app should not change the text visibility outside the top-level Player methods.  If you really want to control text visibility outside the Player methods, you must set the <code>streaming.alwaysStreamText</code> Player configuration value to <code>true</code>.
     */
    interface TextDisplayer extends shaka.util.IDestroyable {
      destroy(): Promise<void>;
      /**
       * Append given text cues to the list of cues to be displayed.
       * @param cues Text cues to be appended.
       */
      append(cues: shaka.text.Cue[]): void;
      /**
       * Remove all cues that are fully contained by the given time range (relative to the presentation). <code>endTime</code> will be greater to equal to <code>startTime</code>.  <code>remove</code> should only return <code>false</code> if the displayer has been destroyed. If the displayer has not been destroyed <code>remove</code> should return <code>true</code>.
       */
      remove(startTime: number, endTime: number): boolean;
      /**
       * Returns true if text is currently visible.
       */
      isTextVisible(): boolean;
      /**
       * Set text visibility.
       */
      setTextVisibility(on: boolean): void;
    }
    namespace TextDisplayer {
      /**
       * A factory for creating a TextDisplayer.
       */
      interface Factory {
        new (): shaka.extern.TextDisplayer;
      }
    }
  }
}
declare namespace google {
  namespace ima {
    class AdsLoader implements EventTarget {
      constructor(container: google.ima.AdDisplayContainer);
      contentComplete(): void;
      requestAds(request: google.ima.AdsRequest): void;
      addEventListener(): void;
      removeEventListener(): void;
      dispatchEvent(): boolean;
    }
    class AdsManager implements EventTarget {
      start(): void;
      init(width: number, height: number, viewMode: google.ima.ViewMode): void;
      getRemainingTime(): number;
      pause(): void;
      resume(): void;
      getVolume(): void;
      setVolume(volume: number): void;
      resize(
        width: number,
        height: number,
        viewMode: google.ima.ViewMode
      ): void;
      addEventListener(
        params: google.ima.AdEvent.Type | string,
        listener: (event: any) => void
      ): void;
      removeEventListener(): void;
      dispatchEvent(): boolean;
    }
    class AdsManagerLoadedEvent {
      getAdsManager(video: HTMLElement): google.ima.AdsManager;
    }
    namespace AdsManagerLoadedEvent {
      enum Type {
        ADS_MANAGER_LOADED
      }
    }
    class AdDisplayContainer {
      constructor(adContainer: HTMLElement, video: HTMLMediaElement);
      initialize(): void;
    }

    class AdData {
      currentTime: number;
      adError: AdError;
    }
    class AdEvent {
      target: {
        getCurrentAd(): Ad;
      };
      getError(): AdError;
      getAd(): google.ima.Ad;
      getAdData(): AdData;
    }
    namespace AdEvent {
      enum Type {
        CONTENT_PAUSE_REQUESTED,
        CONTENT_RESUME_REQUESTED,
        AD_ERROR,
        PAUSED,
        RESUMED,
        VOLUME_CHANGED,
        VOLUME_MUTED,
        LOADED,
        STARTED,
        COMPLETE,
        IMPRESSION,
        AD_BUFFERING,
        AD_PROGRESS,
        FIRST_QUARTILE,
        MIDPOINT,
        THIRD_QUARTILE,
        ALL_ADS_COMPLETED,
        LOG
      }
    }
    class Ad {
      getDuration(): number;
      isLinear(): boolean;
      isSkippable(): boolean;
      getAdId(): number;
      getAdSystem(): any;
      getAdvertiserName(): string;
      getApiFramework(): any;
      getContentType(): string;
      getCreativeId(): string;
      getTitle(): string;
      getWidth(): string;
      getHeight(): string;
      getVastMediaWidth(): string;
      getVastMediaHeight(): string;
      getVastMediaBitrate(): string;
      getWrapperCreativeIds(): string;
      getWrapperAdIds(): string;
      getWrapperAdSystems(): string;
      getTraffickingParametersString(): string;
      getAdPodInfo(): AdPodInfo;
      getSkipTimeOffset(): string;
      getDealId(): string;
    }
    class AdPodInfo {
      getPodIndex(): number;
      getTimeOffset(): number;
      getTotalAds(): number;
      getAdPosition(): number;
    }
    /**
     * Request for the ad server
     */
    interface AdsRequest {
      adTagUrl: string;
    }
    class AdError {
      getMessage(): string;
      getErrorCode(): string;
      getType(): string;
    }
    class AdErrorEvent {
      getError(): google.ima.AdError;
    }
    namespace AdErrorEvent {
      enum Type {
        AD_ERROR
      }
    }
    enum ViewMode {
      FULLSCREEN,
      NORMAL
    }
  }
}
/**
 * Predefined by generator
 */
declare type MediaKeySystemMediacapability = MediaKeySystemMediaCapability;
