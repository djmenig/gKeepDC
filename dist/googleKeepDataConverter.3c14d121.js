// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"n0fw4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5e0263af3c14d121";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kTBnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jszip = require("jszip");
var _jszipDefault = parcelHelpers.interopDefault(_jszip);
//handle form and file input
const form = document.getElementById('fileForm');
form.addEventListener('submit', async (event)=>{
    event.preventDefault(); // Prevent the default form submission
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select a file.");
        return;
    }
    if (file.type !== 'application/zip') {
        alert("Please select a zip file.");
        return;
    }
    await processFile(file);
});
//process zip file
async function processFile(file) {
    try {
        const zip = await (0, _jszipDefault.default).loadAsync(file);
        await manageData(zip.files); // Pass the files to your data management function
    } catch (error) {
        console.error("Error processing file:", error);
        alert("Error processing file. See console for details.");
    }
}
//process data from zip file and collect .md files into a new zip
async function manageData(files) {
    const outputZip = new (0, _jszipDefault.default)();
    for(const filename in files){
        if (!Object.prototype.hasOwnProperty.call(files, filename)) continue;
        const file = files[filename];
        if (!filename.endsWith('.json')) continue; // Skip non-JSON files
        try {
            const jsonData = JSON.parse(await file.async("string"));
            const markdownContent = convertToMarkdown(jsonData);
            //const mdFilename = filename.replace('.json', '.md');
            const safeTitle = (jsonData.title || "untitled").replace(/[\/\\?%*:|"<>]/g, "_") // Replace illegal filename characters
            .trim();
            const mdFilename = `${safeTitle}.md`;
            outputZip.file(mdFilename, markdownContent);
        } catch (error) {
            console.error(`Error processing ${filename}:`, error);
            alert(`Error processing ${filename}. See console for details.`);
        }
    }
    // Generate the zip and prompt download
    outputZip.generateAsync({
        type: "blob"
    }).then(function(content) {
        downloadZip(content, "takeout_converted2markdown.zip");
    });
}
//convert data to markdown
function convertToMarkdown(jsonData) {
    let markdown = "";
    // Add labels if present
    if (jsonData.labels && Array.isArray(jsonData.labels)) {
        const labelNames = jsonData.labels.map((label)=>label.name).join(", ");
        markdown += `#[[${labelNames}]]\n\n`;
    }
    // Add formatted date if present
    if (jsonData.userEditedTimestampUsec) {
        const date = new Date(jsonData.createdTimestampUsec / 1000);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        markdown += `(${date.toLocaleDateString(undefined, options)})\n\n`;
    }
    // Add textContent if present
    if (jsonData.textContent) markdown += jsonData.textContent.replace(/\n/g, "  \n") + "\n\n";
    // Add listContent as mardown list
    if (jsonData.listContent && Array.isArray(jsonData.listContent)) {
        jsonData.listContent.forEach((item)=>{
            if (item.text) markdown += `- ${item.text}\n`;
        });
        markdown += `\n`;
    }
    return markdown;
}
//download zip file
function downloadZip(blob, filename) {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.download = filename;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

},{"jszip":"fhdYz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fhdYz":[function(require,module,exports,__globalThis) {
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var Buffer = require("f7295d6075386111").Buffer;
var global = arguments[3];
var process = require("cf30dbb97a1d82ba");
!function(e) {
    module.exports = e();
}(function() {
    return (function s(a, o, h) {
        function u(r, e) {
            if (!o[r]) {
                if (!a[r]) {
                    var t = undefined;
                    if (!e && t) return t(r, !0);
                    if (l) return l(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n;
                }
                var i = o[r] = {
                    exports: {}
                };
                a[r][0].call(i.exports, function(e) {
                    var t = a[r][1][e];
                    return u(t || e);
                }, i, i.exports, s, a, o, h);
            }
            return o[r].exports;
        }
        for(var l = undefined, e = 0; e < h.length; e++)u(h[e]);
        return u;
    })({
        1: [
            function(e, t, r) {
                "use strict";
                var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                r.encode = function(e) {
                    for(var t, r, n, i, s, a, o, h = [], u = 0, l = e.length, f = l, c = "string" !== d.getTypeOf(e); u < e.length;)f = l - u, n = c ? (t = e[u++], r = u < l ? e[u++] : 0, u < l ? e[u++] : 0) : (t = e.charCodeAt(u++), r = u < l ? e.charCodeAt(u++) : 0, u < l ? e.charCodeAt(u++) : 0), i = t >> 2, s = (3 & t) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
                    return h.join("");
                }, r.decode = function(e) {
                    var t, r, n, i, s, a, o = 0, h = 0, u = "data:";
                    if (e.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
                    var l, f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                    if (e.charAt(e.length - 1) === p.charAt(64) && f--, e.charAt(e.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for(l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e.length;)t = p.indexOf(e.charAt(o++)) << 2 | (i = p.indexOf(e.charAt(o++))) >> 4, r = (15 & i) << 4 | (s = p.indexOf(e.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e.charAt(o++))), l[h++] = t, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = n);
                    return l;
                };
            },
            {
                "./support": 30,
                "./utils": 32
            }
        ],
        2: [
            function(e, t, r) {
                "use strict";
                var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
                function o(e, t, r, n, i) {
                    this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = i;
                }
                o.prototype = {
                    getContentWorker: function() {
                        var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t = this;
                        return e.on("end", function() {
                            if (this.streamInfo.data_length !== t.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                        }), e;
                    },
                    getCompressedWorker: function() {
                        return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                    }
                }, o.createWorkerFrom = function(e, t, r) {
                    return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t);
                }, t.exports = o;
            },
            {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }
        ],
        3: [
            function(e, t, r) {
                "use strict";
                var n = e("./stream/GenericWorker");
                r.STORE = {
                    magic: "\0\0",
                    compressWorker: function() {
                        return new n("STORE compression");
                    },
                    uncompressWorker: function() {
                        return new n("STORE decompression");
                    }
                }, r.DEFLATE = e("./flate");
            },
            {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }
        ],
        4: [
            function(e, t, r) {
                "use strict";
                var n = e("./utils");
                var o = function() {
                    for(var e, t = [], r = 0; r < 256; r++){
                        e = r;
                        for(var n = 0; n < 8; n++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        t[r] = e;
                    }
                    return t;
                }();
                t.exports = function(e, t) {
                    return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function(e, t, r, n) {
                        var i = o, s = n + r;
                        e ^= -1;
                        for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t[a])];
                        return -1 ^ e;
                    }(0 | t, e, e.length, 0) : function(e, t, r, n) {
                        var i = o, s = n + r;
                        e ^= -1;
                        for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t.charCodeAt(a))];
                        return -1 ^ e;
                    }(0 | t, e, e.length, 0) : 0;
                };
            },
            {
                "./utils": 32
            }
        ],
        5: [
            function(e, t, r) {
                "use strict";
                r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
            },
            {}
        ],
        6: [
            function(e, t, r) {
                "use strict";
                var n = null;
                n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = {
                    Promise: n
                };
            },
            {
                lie: 37
            }
        ],
        7: [
            function(e, t, r) {
                "use strict";
                var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
                function h(e, t) {
                    a.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
                }
                r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e) {
                    this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e.data), !1);
                }, h.prototype.flush = function() {
                    a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
                }, h.prototype.cleanUp = function() {
                    a.prototype.cleanUp.call(this), this._pako = null;
                }, h.prototype._createPako = function() {
                    this._pako = new i[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var t = this;
                    this._pako.onData = function(e) {
                        t.push({
                            data: e,
                            meta: t.meta
                        });
                    };
                }, r.compressWorker = function(e) {
                    return new h("Deflate", e);
                }, r.uncompressWorker = function() {
                    return new h("Inflate", {});
                };
            },
            {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }
        ],
        8: [
            function(e, t, r) {
                "use strict";
                function A(e, t) {
                    var r, n = "";
                    for(r = 0; r < t; r++)n += String.fromCharCode(255 & e), e >>>= 8;
                    return n;
                }
                function n(e, t, r, n, i, s) {
                    var a, o, h = e.file, u = e.compression, l = s !== O.utf8encode, f = I.transformTo("string", s(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = {
                        crc32: 0,
                        compressedSize: 0,
                        uncompressedSize: 0
                    };
                    t && !r || (x.crc32 = e.crc32, x.compressedSize = e.compressedSize, x.uncompressedSize = e.uncompressedSize);
                    var S = 0;
                    t && (S |= 8), l || !_ && !g || (S |= 2048);
                    var z = 0, C = 0;
                    w && (z |= 16), "UNIX" === i ? (C = 798, z |= function(e, t) {
                        var r = e;
                        return e || (r = t ? 16893 : 33204), (65535 & r) << 16;
                    }(h.unixPermissions, w)) : (C = 20, z |= function(e) {
                        return 63 & (e || 0);
                    }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
                    var E = "";
                    return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
                        fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                        dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n, 4) + f + b + p
                    };
                }
                var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
                function s(e, t, r, n) {
                    i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r, this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
                }
                I.inherits(s, i), s.prototype.push = function(e) {
                    var t = e.meta.percent || 0, r = this.entriesCount, n = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, i.prototype.push.call(this, {
                        data: e.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: r ? (t + 100 * (r - n - 1)) / r : 100
                        }
                    }));
                }, s.prototype.openedSource = function(e) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
                    var t = this.streamFiles && !e.file.dir;
                    if (t) {
                        var r = n(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: r.fileRecord,
                            meta: {
                                percent: 0
                            }
                        });
                    } else this.accumulate = !0;
                }, s.prototype.closedSource = function(e) {
                    this.accumulate = !1;
                    var t = this.streamFiles && !e.file.dir, r = n(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if (this.dirRecords.push(r.dirRecord), t) this.push({
                        data: function(e) {
                            return R.DATA_DESCRIPTOR + A(e.crc32, 4) + A(e.compressedSize, 4) + A(e.uncompressedSize, 4);
                        }(e),
                        meta: {
                            percent: 100
                        }
                    });
                    else for(this.push({
                        data: r.fileRecord,
                        meta: {
                            percent: 0
                        }
                    }); this.contentBuffer.length;)this.push(this.contentBuffer.shift());
                    this.currentFile = null;
                }, s.prototype.flush = function() {
                    for(var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)this.push({
                        data: this.dirRecords[t],
                        meta: {
                            percent: 100
                        }
                    });
                    var r = this.bytesWritten - e, n = function(e, t, r, n, i) {
                        var s = I.transformTo("string", i(n));
                        return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e, 2) + A(e, 2) + A(t, 4) + A(r, 4) + A(s.length, 2) + s;
                    }(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
                    this.push({
                        data: n,
                        meta: {
                            percent: 100
                        }
                    });
                }, s.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
                }, s.prototype.registerPrevious = function(e) {
                    this._sources.push(e);
                    var t = this;
                    return e.on("data", function(e) {
                        t.processChunk(e);
                    }), e.on("end", function() {
                        t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
                    }), e.on("error", function(e) {
                        t.error(e);
                    }), this;
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
                }, s.prototype.error = function(e) {
                    var t = this._sources;
                    if (!i.prototype.error.call(this, e)) return !1;
                    for(var r = 0; r < t.length; r++)try {
                        t[r].error(e);
                    } catch (e) {}
                    return !0;
                }, s.prototype.lock = function() {
                    i.prototype.lock.call(this);
                    for(var e = this._sources, t = 0; t < e.length; t++)e[t].lock();
                }, t.exports = s;
            },
            {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }
        ],
        9: [
            function(e, t, r) {
                "use strict";
                var u = e("../compressions"), n = e("./ZipFileWorker");
                r.generateWorker = function(e, a, t) {
                    var o = new n(a.streamFiles, t, a.platform, a.encodeFileName), h = 0;
                    try {
                        e.forEach(function(e, t) {
                            h++;
                            var r = function(e, t) {
                                var r = e || t, n = u[r];
                                if (!n) throw new Error(r + " is not a valid compression method !");
                                return n;
                            }(t.options.compression, a.compression), n = t.options.compressionOptions || a.compressionOptions || {}, i = t.dir, s = t.date;
                            t._compressWorker(r, n).withStreamInfo("file", {
                                name: e,
                                dir: i,
                                date: s,
                                comment: t.comment || "",
                                unixPermissions: t.unixPermissions,
                                dosPermissions: t.dosPermissions
                            }).pipe(o);
                        }), o.entriesCount = h;
                    } catch (e) {
                        o.error(e);
                    }
                    return o;
                };
            },
            {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }
        ],
        10: [
            function(e, t, r) {
                "use strict";
                function n() {
                    if (!(this instanceof n)) return new n;
                    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var e = new n;
                        for(var t in this)"function" != typeof this[t] && (e[t] = this[t]);
                        return e;
                    };
                }
                (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e, t) {
                    return (new n).loadAsync(e, t);
                }, n.external = e("./external"), t.exports = n;
            },
            {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }
        ],
        11: [
            function(e, t, r) {
                "use strict";
                var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
                function f(n) {
                    return new i.Promise(function(e, t) {
                        var r = n.decompressed.getContentWorker().pipe(new a);
                        r.on("error", function(e) {
                            t(e);
                        }).on("end", function() {
                            r.streamInfo.crc32 !== n.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : e();
                        }).resume();
                    });
                }
                t.exports = function(e, o) {
                    var h = this;
                    return o = u.extend(o || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: n.utf8decode
                    }), l.isNode && l.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e, !0, o.optimizedBinaryString, o.base64).then(function(e) {
                        var t = new s(o);
                        return t.load(e), t;
                    }).then(function(e) {
                        var t = [
                            i.Promise.resolve(e)
                        ], r = e.files;
                        if (o.checkCRC32) for(var n = 0; n < r.length; n++)t.push(f(r[n]));
                        return i.Promise.all(t);
                    }).then(function(e) {
                        for(var t = e.shift(), r = t.files, n = 0; n < r.length; n++){
                            var i = r[n], s = i.fileNameStr, a = u.resolve(i.fileNameStr);
                            h.file(a, i.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: i.date,
                                dir: i.dir,
                                comment: i.fileCommentStr.length ? i.fileCommentStr : null,
                                unixPermissions: i.unixPermissions,
                                dosPermissions: i.dosPermissions,
                                createFolders: o.createFolders
                            }), i.dir || (h.file(a).unsafeOriginalName = s);
                        }
                        return t.zipComment.length && (h.comment = t.zipComment), h;
                    });
                };
            },
            {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }
        ],
        12: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("../stream/GenericWorker");
                function s(e, t) {
                    i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
                }
                n.inherits(s, i), s.prototype._bindStream = function(e) {
                    var t = this;
                    (this._stream = e).pause(), e.on("data", function(e) {
                        t.push({
                            data: e,
                            meta: {
                                percent: 0
                            }
                        });
                    }).on("error", function(e) {
                        t.isPaused ? this.generatedError = e : t.error(e);
                    }).on("end", function() {
                        t.isPaused ? t._upstreamEnded = !0 : t.end();
                    });
                }, s.prototype.pause = function() {
                    return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
                }, t.exports = s;
            },
            {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }
        ],
        13: [
            function(e, t, r) {
                "use strict";
                var i = e("readable-stream").Readable;
                function n(e, t, r) {
                    i.call(this, t), this._helper = e;
                    var n = this;
                    e.on("data", function(e, t) {
                        n.push(e) || n._helper.pause(), r && r(t);
                    }).on("error", function(e) {
                        n.emit("error", e);
                    }).on("end", function() {
                        n.push(null);
                    });
                }
                e("../utils").inherits(n, i), n.prototype._read = function() {
                    this._helper.resume();
                }, t.exports = n;
            },
            {
                "../utils": 32,
                "readable-stream": 16
            }
        ],
        14: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    isNode: "undefined" != typeof Buffer,
                    newBufferFrom: function(e, t) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
                        if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
                        return new Buffer(e, t);
                    },
                    allocBuffer: function(e) {
                        if (Buffer.alloc) return Buffer.alloc(e);
                        var t = new Buffer(e);
                        return t.fill(0), t;
                    },
                    isBuffer: function(e) {
                        return Buffer.isBuffer(e);
                    },
                    isStream: function(e) {
                        return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume;
                    }
                };
            },
            {}
        ],
        15: [
            function(e, t, r) {
                "use strict";
                function s(e, t, r) {
                    var n, i = u.getTypeOf(t), s = u.extend(r || {}, f);
                    s.date = s.date || new Date, null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = g(e)), s.createFolders && (n = _(e)) && b.call(this, n, !0);
                    var a = "string" === i && !1 === s.binary && !1 === s.base64;
                    r && void 0 !== r.binary || (s.binary = !a), (t instanceof c && 0 === t.uncompressedSize || s.dir || !t || 0 === t.length) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
                    var o = null;
                    o = t instanceof c || t instanceof l ? t : p.isNode && p.isStream(t) ? new m(e, t) : u.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
                    var h = new d(e, o, s);
                    this.files[e] = h;
                }
                var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e) {
                    "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                    var t = e.lastIndexOf("/");
                    return 0 < t ? e.substring(0, t) : "";
                }, g = function(e) {
                    return "/" !== e.slice(-1) && (e += "/"), e;
                }, b = function(e, t) {
                    return t = void 0 !== t ? t : f.createFolders, e = g(e), this.files[e] || s.call(this, e, null, {
                        dir: !0,
                        createFolders: t
                    }), this.files[e];
                };
                function h(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e);
                }
                var n = {
                    load: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    forEach: function(e) {
                        var t, r, n;
                        for(t in this.files)n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n);
                    },
                    filter: function(r) {
                        var n = [];
                        return this.forEach(function(e, t) {
                            r(e, t) && n.push(t);
                        }), n;
                    },
                    file: function(e, t, r) {
                        if (1 !== arguments.length) return e = this.root + e, s.call(this, e, t, r), this;
                        if (h(e)) {
                            var n = e;
                            return this.filter(function(e, t) {
                                return !t.dir && n.test(e);
                            });
                        }
                        var i = this.files[this.root + e];
                        return i && !i.dir ? i : null;
                    },
                    folder: function(r) {
                        if (!r) return this;
                        if (h(r)) return this.filter(function(e, t) {
                            return t.dir && r.test(e);
                        });
                        var e = this.root + r, t = b.call(this, e), n = this.clone();
                        return n.root = t.name, n;
                    },
                    remove: function(r) {
                        r = this.root + r;
                        var e = this.files[r];
                        if (e || ("/" !== r.slice(-1) && (r += "/"), e = this.files[r]), e && !e.dir) delete this.files[r];
                        else for(var t = this.filter(function(e, t) {
                            return t.name.slice(0, r.length) === r;
                        }), n = 0; n < t.length; n++)delete this.files[t[n].name];
                        return this;
                    },
                    generate: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    generateInternalStream: function(e) {
                        var t, r = {};
                        try {
                            if ((r = u.extend(e || {}, {
                                streamFiles: !1,
                                compression: "STORE",
                                compressionOptions: null,
                                type: "",
                                platform: "DOS",
                                comment: null,
                                mimeType: "application/zip",
                                encodeFileName: i.utf8encode
                            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
                            u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
                            var n = r.comment || this.comment || "";
                            t = o.generateWorker(this, r, n);
                        } catch (e) {
                            (t = new l("error")).error(e);
                        }
                        return new a(t, r.type || "string", r.mimeType);
                    },
                    generateAsync: function(e, t) {
                        return this.generateInternalStream(e).accumulate(t);
                    },
                    generateNodeStream: function(e, t) {
                        return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
                    }
                };
                t.exports = n;
            },
            {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }
        ],
        16: [
            function(e, t, r) {
                "use strict";
                t.exports = e("stream");
            },
            {
                stream: void 0
            }
        ],
        17: [
            function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                    n.call(this, e);
                    for(var t = 0; t < this.data.length; t++)e[t] = 255 & e[t];
                }
                e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                    return this.data[this.zero + e];
                }, i.prototype.lastIndexOfSignature = function(e) {
                    for(var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s)if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i) return s - this.zero;
                    return -1;
                }, i.prototype.readAndCheckSignature = function(e) {
                    var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.readData(4);
                    return t === s[0] && r === s[1] && n === s[2] && i === s[3];
                }, i.prototype.readData = function(e) {
                    if (this.checkOffset(e), 0 === e) return [];
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        18: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils");
                function i(e) {
                    this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
                }
                i.prototype = {
                    checkOffset: function(e) {
                        this.checkIndex(this.index + e);
                    },
                    checkIndex: function(e) {
                        if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
                    },
                    setIndex: function(e) {
                        this.checkIndex(e), this.index = e;
                    },
                    skip: function(e) {
                        this.setIndex(this.index + e);
                    },
                    byteAt: function() {},
                    readInt: function(e) {
                        var t, r = 0;
                        for(this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)r = (r << 8) + this.byteAt(t);
                        return this.index += e, r;
                    },
                    readString: function(e) {
                        return n.transformTo("string", this.readData(e));
                    },
                    readData: function() {},
                    lastIndexOfSignature: function() {},
                    readAndCheckSignature: function() {},
                    readDate: function() {
                        var e = this.readInt(4);
                        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
                    }
                }, t.exports = i;
            },
            {
                "../utils": 32
            }
        ],
        19: [
            function(e, t, r) {
                "use strict";
                var n = e("./Uint8ArrayReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }
        ],
        20: [
            function(e, t, r) {
                "use strict";
                var n = e("./DataReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.byteAt = function(e) {
                    return this.data.charCodeAt(this.zero + e);
                }, i.prototype.lastIndexOfSignature = function(e) {
                    return this.data.lastIndexOf(e) - this.zero;
                }, i.prototype.readAndCheckSignature = function(e) {
                    return e === this.readData(4);
                }, i.prototype.readData = function(e) {
                    this.checkOffset(e);
                    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        21: [
            function(e, t, r) {
                "use strict";
                var n = e("./ArrayReader");
                function i(e) {
                    n.call(this, e);
                }
                e("../utils").inherits(i, n), i.prototype.readData = function(e) {
                    if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
                    var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                    return this.index += e, t;
                }, t.exports = i;
            },
            {
                "../utils": 32,
                "./ArrayReader": 17
            }
        ],
        22: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
                t.exports = function(e) {
                    var t = n.getTypeOf(e);
                    return n.checkSupport(t), "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new h(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e);
                };
            },
            {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }
        ],
        23: [
            function(e, t, r) {
                "use strict";
                r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
            },
            {}
        ],
        24: [
            function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"), i = e("../utils");
                function s(e) {
                    n.call(this, "ConvertWorker to " + e), this.destType = e;
                }
                i.inherits(s, n), s.prototype.processChunk = function(e) {
                    this.push({
                        data: i.transformTo(this.destType, e.data),
                        meta: e.meta
                    });
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        25: [
            function(e, t, r) {
                "use strict";
                var n = e("./GenericWorker"), i = e("../crc32");
                function s() {
                    n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                }
                e("../utils").inherits(s, n), s.prototype.processChunk = function(e) {
                    this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
                }, t.exports = s;
            },
            {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        26: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("./GenericWorker");
                function s(e) {
                    i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
                }
                n.inherits(s, i), s.prototype.processChunk = function(e) {
                    if (e) {
                        var t = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = t + e.data.length;
                    }
                    i.prototype.processChunk.call(this, e);
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        27: [
            function(e, t, r) {
                "use strict";
                var n = e("../utils"), i = e("./GenericWorker");
                function s(e) {
                    i.call(this, "DataWorker");
                    var t = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
                        t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = n.getTypeOf(e), t.isPaused || t._tickAndRepeat();
                    }, function(e) {
                        t.error(e);
                    });
                }
                n.inherits(s, i), s.prototype.cleanUp = function() {
                    i.prototype.cleanUp.call(this), this.data = null;
                }, s.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
                }, s.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
                }, s.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var e = null, t = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch(this.type){
                        case "string":
                            e = this.data.substring(this.index, t);
                            break;
                        case "uint8array":
                            e = this.data.subarray(this.index, t);
                            break;
                        case "array":
                        case "nodebuffer":
                            e = this.data.slice(this.index, t);
                    }
                    return this.index = t, this.push({
                        data: e,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    });
                }, t.exports = s;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        28: [
            function(e, t, r) {
                "use strict";
                function n(e) {
                    this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null;
                }
                n.prototype = {
                    push: function(e) {
                        this.emit("data", e);
                    },
                    end: function() {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0;
                        } catch (e) {
                            this.emit("error", e);
                        }
                        return !0;
                    },
                    error: function(e) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
                    },
                    on: function(e, t) {
                        return this._listeners[e].push(t), this;
                    },
                    cleanUp: function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
                    },
                    emit: function(e, t) {
                        if (this._listeners[e]) for(var r = 0; r < this._listeners[e].length; r++)this._listeners[e][r].call(this, t);
                    },
                    pipe: function(e) {
                        return e.registerPrevious(this);
                    },
                    registerPrevious: function(e) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
                        var t = this;
                        return e.on("data", function(e) {
                            t.processChunk(e);
                        }), e.on("end", function() {
                            t.end();
                        }), e.on("error", function(e) {
                            t.error(e);
                        }), this;
                    },
                    pause: function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
                    },
                    resume: function() {
                        if (!this.isPaused || this.isFinished) return !1;
                        var e = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
                    },
                    flush: function() {},
                    processChunk: function(e) {
                        this.push(e);
                    },
                    withStreamInfo: function(e, t) {
                        return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
                    },
                    mergeStreamInfo: function() {
                        for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
                    },
                    lock: function() {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock();
                    },
                    toString: function() {
                        var e = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + e : e;
                    }
                }, t.exports = n;
            },
            {}
        ],
        29: [
            function(e, t, r) {
                "use strict";
                var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
                if (n.nodestream) try {
                    o = e("../nodejs/NodejsStreamOutputAdapter");
                } catch (e) {}
                function l(e, o) {
                    return new a.Promise(function(t, r) {
                        var n = [], i = e._internalType, s = e._outputType, a = e._mimeType;
                        e.on("data", function(e, t) {
                            n.push(e), o && o(t);
                        }).on("error", function(e) {
                            n = [], r(e);
                        }).on("end", function() {
                            try {
                                var e = function(e, t, r) {
                                    switch(e){
                                        case "blob":
                                            return h.newBlob(h.transformTo("arraybuffer", t), r);
                                        case "base64":
                                            return u.encode(t);
                                        default:
                                            return h.transformTo(e, t);
                                    }
                                }(s, function(e, t) {
                                    var r, n = 0, i = null, s = 0;
                                    for(r = 0; r < t.length; r++)s += t[r].length;
                                    switch(e){
                                        case "string":
                                            return t.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], t);
                                        case "uint8array":
                                            for(i = new Uint8Array(s), r = 0; r < t.length; r++)i.set(t[r], n), n += t[r].length;
                                            return i;
                                        case "nodebuffer":
                                            return Buffer.concat(t);
                                        default:
                                            throw new Error("concat : unsupported type '" + e + "'");
                                    }
                                }(i, n), a);
                                t(e);
                            } catch (e) {
                                r(e);
                            }
                            n = [];
                        }).resume();
                    });
                }
                function f(e, t, r) {
                    var n = t;
                    switch(t){
                        case "blob":
                        case "arraybuffer":
                            n = "uint8array";
                            break;
                        case "base64":
                            n = "string";
                    }
                    try {
                        this._internalType = n, this._outputType = t, this._mimeType = r, h.checkSupport(n), this._worker = e.pipe(new i(n)), e.lock();
                    } catch (e) {
                        this._worker = new s("error"), this._worker.error(e);
                    }
                }
                f.prototype = {
                    accumulate: function(e) {
                        return l(this, e);
                    },
                    on: function(e, t) {
                        var r = this;
                        return "data" === e ? this._worker.on(e, function(e) {
                            t.call(r, e.data, e.meta);
                        }) : this._worker.on(e, function() {
                            h.delay(t, arguments, r);
                        }), this;
                    },
                    resume: function() {
                        return h.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function() {
                        return this._worker.pause(), this;
                    },
                    toNodejsStream: function(e) {
                        if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
                        return new o(this, {
                            objectMode: "nodebuffer" !== this._outputType
                        }, e);
                    }
                }, t.exports = f;
            },
            {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }
        ],
        30: [
            function(e, t, r) {
                "use strict";
                if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;
                else {
                    var n = new ArrayBuffer(0);
                    try {
                        r.blob = 0 === new Blob([
                            n
                        ], {
                            type: "application/zip"
                        }).size;
                    } catch (e) {
                        try {
                            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
                        } catch (e) {
                            r.blob = !1;
                        }
                    }
                }
                try {
                    r.nodestream = !!e("readable-stream").Readable;
                } catch (e) {
                    r.nodestream = !1;
                }
            },
            {
                "readable-stream": 16
            }
        ],
        31: [
            function(e, t, s) {
                "use strict";
                for(var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++)u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
                u[254] = u[254] = 1;
                function a() {
                    n.call(this, "utf-8 decode"), this.leftOver = null;
                }
                function l() {
                    n.call(this, "utf-8 encode");
                }
                s.utf8encode = function(e) {
                    return h.nodebuffer ? r.newBufferFrom(e, "utf-8") : function(e) {
                        var t, r, n, i, s, a = e.length, o = 0;
                        for(i = 0; i < a; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                        for(t = h.uint8array ? new Uint8Array(o) : new Array(o), i = s = 0; s < o; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                        return t;
                    }(e);
                }, s.utf8decode = function(e) {
                    return h.nodebuffer ? o.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
                        var t, r, n, i, s = e.length, a = new Array(2 * s);
                        for(t = r = 0; t < s;)if ((n = e[t++]) < 128) a[r++] = n;
                        else if (4 < (i = u[n])) a[r++] = 65533, t += i - 1;
                        else {
                            for(n &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;)n = n << 6 | 63 & e[t++], i--;
                            1 < i ? a[r++] = 65533 : n < 65536 ? a[r++] = n : (n -= 65536, a[r++] = 55296 | n >> 10 & 1023, a[r++] = 56320 | 1023 & n);
                        }
                        return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
                    }(e = o.transformTo(h.uint8array ? "uint8array" : "array", e));
                }, o.inherits(a, n), a.prototype.processChunk = function(e) {
                    var t = o.transformTo(h.uint8array ? "uint8array" : "array", e.data);
                    if (this.leftOver && this.leftOver.length) {
                        if (h.uint8array) {
                            var r = t;
                            (t = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), t.set(r, this.leftOver.length);
                        } else t = this.leftOver.concat(t);
                        this.leftOver = null;
                    }
                    var n = function(e, t) {
                        var r;
                        for((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);)r--;
                        return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
                    }(t), i = t;
                    n !== t.length && (h.uint8array ? (i = t.subarray(0, n), this.leftOver = t.subarray(n, t.length)) : (i = t.slice(0, n), this.leftOver = t.slice(n, t.length))), this.push({
                        data: s.utf8decode(i),
                        meta: e.meta
                    });
                }, a.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: s.utf8decode(this.leftOver),
                        meta: {}
                    }), this.leftOver = null);
                }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e) {
                    this.push({
                        data: s.utf8encode(e.data),
                        meta: e.meta
                    });
                }, s.Utf8EncodeWorker = l;
            },
            {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }
        ],
        32: [
            function(e, t, a) {
                "use strict";
                var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
                function n(e) {
                    return e;
                }
                function l(e, t) {
                    for(var r = 0; r < e.length; ++r)t[r] = 255 & e.charCodeAt(r);
                    return t;
                }
                e("setimmediate"), a.newBlob = function(t, r) {
                    a.checkSupport("blob");
                    try {
                        return new Blob([
                            t
                        ], {
                            type: r
                        });
                    } catch (e) {
                        try {
                            var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return n.append(t), n.getBlob(r);
                        } catch (e) {
                            throw new Error("Bug : can't construct the Blob.");
                        }
                    }
                };
                var i = {
                    stringifyByChunk: function(e, t, r) {
                        var n = [], i = 0, s = e.length;
                        if (s <= r) return String.fromCharCode.apply(null, e);
                        for(; i < s;)"array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))), i += r;
                        return n.join("");
                    },
                    stringifyByChar: function(e) {
                        for(var t = "", r = 0; r < e.length; r++)t += String.fromCharCode(e[r]);
                        return t;
                    },
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
                            } catch (e) {
                                return !1;
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
                            } catch (e) {
                                return !1;
                            }
                        }()
                    }
                };
                function s(e) {
                    var t = 65536, r = a.getTypeOf(e), n = !0;
                    if ("uint8array" === r ? n = i.applyCanBeUsed.uint8array : "nodebuffer" === r && (n = i.applyCanBeUsed.nodebuffer), n) for(; 1 < t;)try {
                        return i.stringifyByChunk(e, r, t);
                    } catch (e) {
                        t = Math.floor(t / 2);
                    }
                    return i.stringifyByChar(e);
                }
                function f(e, t) {
                    for(var r = 0; r < e.length; r++)t[r] = e[r];
                    return t;
                }
                a.applyFromCharCode = s;
                var c = {};
                c.string = {
                    string: n,
                    array: function(e) {
                        return l(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return c.string.uint8array(e).buffer;
                    },
                    uint8array: function(e) {
                        return l(e, new Uint8Array(e.length));
                    },
                    nodebuffer: function(e) {
                        return l(e, r.allocBuffer(e.length));
                    }
                }, c.array = {
                    string: s,
                    array: n,
                    arraybuffer: function(e) {
                        return new Uint8Array(e).buffer;
                    },
                    uint8array: function(e) {
                        return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                        return r.newBufferFrom(e);
                    }
                }, c.arraybuffer = {
                    string: function(e) {
                        return s(new Uint8Array(e));
                    },
                    array: function(e) {
                        return f(new Uint8Array(e), new Array(e.byteLength));
                    },
                    arraybuffer: n,
                    uint8array: function(e) {
                        return new Uint8Array(e);
                    },
                    nodebuffer: function(e) {
                        return r.newBufferFrom(new Uint8Array(e));
                    }
                }, c.uint8array = {
                    string: s,
                    array: function(e) {
                        return f(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return e.buffer;
                    },
                    uint8array: n,
                    nodebuffer: function(e) {
                        return r.newBufferFrom(e);
                    }
                }, c.nodebuffer = {
                    string: s,
                    array: function(e) {
                        return f(e, new Array(e.length));
                    },
                    arraybuffer: function(e) {
                        return c.nodebuffer.uint8array(e).buffer;
                    },
                    uint8array: function(e) {
                        return f(e, new Uint8Array(e.length));
                    },
                    nodebuffer: n
                }, a.transformTo = function(e, t) {
                    if (t = t || "", !e) return t;
                    a.checkSupport(e);
                    var r = a.getTypeOf(t);
                    return c[r][e](t);
                }, a.resolve = function(e) {
                    for(var t = e.split("/"), r = [], n = 0; n < t.length; n++){
                        var i = t[n];
                        "." === i || "" === i && 0 !== n && n !== t.length - 1 || (".." === i ? r.pop() : r.push(i));
                    }
                    return r.join("/");
                }, a.getTypeOf = function(e) {
                    return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : o.nodebuffer && r.isBuffer(e) ? "nodebuffer" : o.uint8array && e instanceof Uint8Array ? "uint8array" : o.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
                }, a.checkSupport = function(e) {
                    if (!o[e.toLowerCase()]) throw new Error(e + " is not supported by this platform");
                }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e) {
                    var t, r, n = "";
                    for(r = 0; r < (e || "").length; r++)n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
                    return n;
                }, a.delay = function(e, t, r) {
                    setImmediate(function() {
                        e.apply(r || null, t || []);
                    });
                }, a.inherits = function(e, t) {
                    function r() {}
                    r.prototype = t.prototype, e.prototype = new r;
                }, a.extend = function() {
                    var e, t, r = {};
                    for(e = 0; e < arguments.length; e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
                    return r;
                }, a.prepareContent = function(r, e, n, i, s) {
                    return u.Promise.resolve(e).then(function(n) {
                        return o.blob && (n instanceof Blob || -1 !== [
                            "[object File]",
                            "[object Blob]"
                        ].indexOf(Object.prototype.toString.call(n))) && "undefined" != typeof FileReader ? new u.Promise(function(t, r) {
                            var e = new FileReader;
                            e.onload = function(e) {
                                t(e.target.result);
                            }, e.onerror = function(e) {
                                r(e.target.error);
                            }, e.readAsArrayBuffer(n);
                        }) : n;
                    }).then(function(e) {
                        var t = a.getTypeOf(e);
                        return t ? ("arraybuffer" === t ? e = a.transformTo("uint8array", e) : "string" === t && (s ? e = h.decode(e) : n && !0 !== i && (e = function(e) {
                            return l(e, o.uint8array ? new Uint8Array(e.length) : new Array(e.length));
                        }(e))), e) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                    });
                };
            },
            {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                setimmediate: 54
            }
        ],
        33: [
            function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
                function h(e) {
                    this.files = [], this.loadOptions = e;
                }
                h.prototype = {
                    checkSignature: function(e) {
                        if (!this.reader.readAndCheckSignature(e)) {
                            this.reader.index -= 4;
                            var t = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
                        }
                    },
                    isSignature: function(e, t) {
                        var r = this.reader.index;
                        this.reader.setIndex(e);
                        var n = this.reader.readString(4) === t;
                        return this.reader.setIndex(r), n;
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var e = this.reader.readData(this.zipCommentLength), t = o.uint8array ? "uint8array" : "array", r = i.transformTo(t, e);
                        this.zipComment = this.loadOptions.decodeFileName(r);
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for(var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;)e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
                            id: e,
                            length: t,
                            value: r
                        };
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
                    },
                    readLocalFiles: function() {
                        var e, t;
                        for(e = 0; e < this.files.length; e++)t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
                    },
                    readCentralDir: function() {
                        var e;
                        for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e = new a({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
                        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                    },
                    readEndOfCentral: function() {
                        var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                        if (e < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
                        this.reader.setIndex(e);
                        var t = e;
                        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if (this.reader.setIndex(e), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                        }
                        var r = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
                        var n = t - r;
                        if (0 < n) this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
                        else if (n < 0) throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
                    },
                    prepareReader: function(e) {
                        this.reader = n(e);
                    },
                    load: function(e) {
                        this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                    }
                }, t.exports = h;
            },
            {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utils": 32,
                "./zipEntry": 34
            }
        ],
        34: [
            function(e, t, r) {
                "use strict";
                var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
                function l(e, t) {
                    this.options = e, this.loadOptions = t;
                }
                l.prototype = {
                    isEncrypted: function() {
                        return 1 == (1 & this.bitFlag);
                    },
                    useUTF8: function() {
                        return 2048 == (2048 & this.bitFlag);
                    },
                    readLocalPart: function(e) {
                        var t, r;
                        if (e.skip(22), this.fileNameLength = e.readInt(2), r = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if (null === (t = function(e) {
                            for(var t in h)if (Object.prototype.hasOwnProperty.call(h, t) && h[t].magic === e) return h[t];
                            return null;
                        }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
                        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
                    },
                    readCentralPart: function(e) {
                        this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
                        var t = e.readInt(2);
                        if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
                    },
                    processAttributes: function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var e = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function() {
                        if (this.extraFields[1]) {
                            var e = n(this.extraFields[1].value);
                            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
                        }
                    },
                    readExtraFields: function(e) {
                        var t, r, n, i = e.index + this.extraFieldsLength;
                        for(this.extraFields || (this.extraFields = {}); e.index + 4 < i;)t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
                            id: t,
                            length: r,
                            value: n
                        };
                        e.setIndex(i);
                    },
                    handleUTF8: function() {
                        var e = u.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
                        else {
                            var t = this.findExtraFieldUnicodePath();
                            if (null !== t) this.fileNameStr = t;
                            else {
                                var r = s.transformTo(e, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(r);
                            }
                            var n = this.findExtraFieldUnicodeComment();
                            if (null !== n) this.fileCommentStr = n;
                            else {
                                var i = s.transformTo(e, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(i);
                            }
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var e = this.extraFields[28789];
                        if (e) {
                            var t = n(e.value);
                            return 1 !== t.readInt(1) ? null : a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
                        }
                        return null;
                    },
                    findExtraFieldUnicodeComment: function() {
                        var e = this.extraFields[25461];
                        if (e) {
                            var t = n(e.value);
                            return 1 !== t.readInt(1) ? null : a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5));
                        }
                        return null;
                    }
                }, t.exports = l;
            },
            {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }
        ],
        35: [
            function(e, t, r) {
                "use strict";
                function n(e, t, r) {
                    this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
                        compression: r.compression,
                        compressionOptions: r.compressionOptions
                    };
                }
                var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
                n.prototype = {
                    internalStream: function(e) {
                        var t = null, r = "string";
                        try {
                            if (!e) throw new Error("No output type specified.");
                            var n = "string" === (r = e.toLowerCase()) || "text" === r;
                            "binarystring" !== r && "text" !== r || (r = "string"), t = this._decompressWorker();
                            var i = !this._dataBinary;
                            i && !n && (t = t.pipe(new a.Utf8EncodeWorker)), !i && n && (t = t.pipe(new a.Utf8DecodeWorker));
                        } catch (e) {
                            (t = new h("error")).error(e);
                        }
                        return new s(t, r, "");
                    },
                    async: function(e, t) {
                        return this.internalStream(e).accumulate(t);
                    },
                    nodeStream: function(e, t) {
                        return this.internalStream(e || "nodebuffer").toNodejsStream(t);
                    },
                    _compressWorker: function(e, t) {
                        if (this._data instanceof o && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
                        var r = this._decompressWorker();
                        return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker)), o.createWorkerFrom(r, e, t);
                    },
                    _decompressWorker: function() {
                        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
                    }
                };
                for(var u = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer"
                ], l = function() {
                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                }, f = 0; f < u.length; f++)n.prototype[u[f]] = l;
                t.exports = n;
            },
            {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }
        ],
        36: [
            function(e, l, t) {
                (function(t) {
                    "use strict";
                    var r, n, e = t.MutationObserver || t.WebKitMutationObserver;
                    if (e) {
                        var i = 0, s = new e(u), a = t.document.createTextNode("");
                        s.observe(a, {
                            characterData: !0
                        }), r = function() {
                            a.data = i = ++i % 2;
                        };
                    } else if (t.setImmediate || void 0 === t.MessageChannel) r = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                        var e = t.document.createElement("script");
                        e.onreadystatechange = function() {
                            u(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
                        }, t.document.documentElement.appendChild(e);
                    } : function() {
                        setTimeout(u, 0);
                    };
                    else {
                        var o = new t.MessageChannel;
                        o.port1.onmessage = u, r = function() {
                            o.port2.postMessage(0);
                        };
                    }
                    var h = [];
                    function u() {
                        var e, t;
                        n = !0;
                        for(var r = h.length; r;){
                            for(t = h, h = [], e = -1; ++e < r;)t[e]();
                            r = h.length;
                        }
                        n = !1;
                    }
                    l.exports = function(e) {
                        1 !== h.push(e) || n || r();
                    };
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ],
        37: [
            function(e, t, r) {
                "use strict";
                var i = e("immediate");
                function u() {}
                var l = {}, s = [
                    "REJECTED"
                ], a = [
                    "FULFILLED"
                ], n = [
                    "PENDING"
                ];
                function o(e) {
                    if ("function" != typeof e) throw new TypeError("resolver must be a function");
                    this.state = n, this.queue = [], this.outcome = void 0, e !== u && d(this, e);
                }
                function h(e, t, r) {
                    this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
                }
                function f(t, r, n) {
                    i(function() {
                        var e;
                        try {
                            e = r(n);
                        } catch (e) {
                            return l.reject(t, e);
                        }
                        e === t ? l.reject(t, new TypeError("Cannot resolve promise with itself")) : l.resolve(t, e);
                    });
                }
                function c(e) {
                    var t = e && e.then;
                    if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                        t.apply(e, arguments);
                    };
                }
                function d(t, e) {
                    var r = !1;
                    function n(e) {
                        r || (r = !0, l.reject(t, e));
                    }
                    function i(e) {
                        r || (r = !0, l.resolve(t, e));
                    }
                    var s = p(function() {
                        e(i, n);
                    });
                    "error" === s.status && n(s.value);
                }
                function p(e, t) {
                    var r = {};
                    try {
                        r.value = e(t), r.status = "success";
                    } catch (e) {
                        r.status = "error", r.value = e;
                    }
                    return r;
                }
                (t.exports = o).prototype.finally = function(t) {
                    if ("function" != typeof t) return this;
                    var r = this.constructor;
                    return this.then(function(e) {
                        return r.resolve(t()).then(function() {
                            return e;
                        });
                    }, function(e) {
                        return r.resolve(t()).then(function() {
                            throw e;
                        });
                    });
                }, o.prototype.catch = function(e) {
                    return this.then(null, e);
                }, o.prototype.then = function(e, t) {
                    if ("function" != typeof e && this.state === a || "function" != typeof t && this.state === s) return this;
                    var r = new this.constructor(u);
                    this.state !== n ? f(r, this.state === a ? e : t, this.outcome) : this.queue.push(new h(r, e, t));
                    return r;
                }, h.prototype.callFulfilled = function(e) {
                    l.resolve(this.promise, e);
                }, h.prototype.otherCallFulfilled = function(e) {
                    f(this.promise, this.onFulfilled, e);
                }, h.prototype.callRejected = function(e) {
                    l.reject(this.promise, e);
                }, h.prototype.otherCallRejected = function(e) {
                    f(this.promise, this.onRejected, e);
                }, l.resolve = function(e, t) {
                    var r = p(c, t);
                    if ("error" === r.status) return l.reject(e, r.value);
                    var n = r.value;
                    if (n) d(e, n);
                    else {
                        e.state = a, e.outcome = t;
                        for(var i = -1, s = e.queue.length; ++i < s;)e.queue[i].callFulfilled(t);
                    }
                    return e;
                }, l.reject = function(e, t) {
                    e.state = s, e.outcome = t;
                    for(var r = -1, n = e.queue.length; ++r < n;)e.queue[r].callRejected(t);
                    return e;
                }, o.resolve = function(e) {
                    if (e instanceof this) return e;
                    return l.resolve(new this(u), e);
                }, o.reject = function(e) {
                    var t = new this(u);
                    return l.reject(t, e);
                }, o.all = function(e) {
                    var r = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var n = e.length, i = !1;
                    if (!n) return this.resolve([]);
                    var s = new Array(n), a = 0, t = -1, o = new this(u);
                    for(; ++t < n;)h(e[t], t);
                    return o;
                    function h(e, t) {
                        r.resolve(e).then(function(e) {
                            s[t] = e, ++a !== n || i || (i = !0, l.resolve(o, s));
                        }, function(e) {
                            i || (i = !0, l.reject(o, e));
                        });
                    }
                }, o.race = function(e) {
                    var t = this;
                    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                    var r = e.length, n = !1;
                    if (!r) return this.resolve([]);
                    var i = -1, s = new this(u);
                    for(; ++i < r;)a = e[i], t.resolve(a).then(function(e) {
                        n || (n = !0, l.resolve(s, e));
                    }, function(e) {
                        n || (n = !0, l.reject(s, e));
                    });
                    var a;
                    return s;
                };
            },
            {
                immediate: 36
            }
        ],
        38: [
            function(e, t, r) {
                "use strict";
                var n = {};
                (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
            },
            {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }
        ],
        39: [
            function(e, t, r) {
                "use strict";
                var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
                function p(e) {
                    if (!(this instanceof p)) return new p(e);
                    this.options = o.assign({
                        level: f,
                        method: d,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: c,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
                    var r = a.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                    if (r !== l) throw new Error(i[r]);
                    if (t.header && a.deflateSetHeader(this.strm, t.header), t.dictionary) {
                        var n;
                        if (n = "string" == typeof t.dictionary ? h.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary, (r = a.deflateSetDictionary(this.strm, n)) !== l) throw new Error(i[r]);
                        this._dict_set = !0;
                    }
                }
                function n(e, t) {
                    var r = new p(t);
                    if (r.push(e, !0), r.err) throw r.msg || i[r.err];
                    return r.result;
                }
                p.prototype.push = function(e, t) {
                    var r, n, i = this.strm, s = this.options.chunkSize;
                    if (this.ended) return !1;
                    n = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? i.input = h.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? i.input = new Uint8Array(e) : i.input = e, i.next_in = 0, i.avail_in = i.input.length;
                    do {
                        if (0 === i.avail_out && (i.output = new o.Buf8(s), i.next_out = 0, i.avail_out = s), 1 !== (r = a.deflate(i, n)) && r !== l) return this.onEnd(r), this.ended = !0, false;
                        0 !== i.avail_out && (0 !== i.avail_in || 4 !== n && 2 !== n) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i.output, i.next_out))) : this.onData(o.shrinkBuf(i.output, i.next_out)));
                    }while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
                    return 4 === n ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== n || (this.onEnd(l), i.avail_out = 0, true);
                }, p.prototype.onData = function(e) {
                    this.chunks.push(e);
                }, p.prototype.onEnd = function(e) {
                    e === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
                }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0, n(e, t);
                }, r.gzip = function(e, t) {
                    return (t = t || {}).gzip = !0, n(e, t);
                };
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        40: [
            function(e, t, r) {
                "use strict";
                var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
                function a(e) {
                    if (!(this instanceof a)) return new a(e);
                    this.options = d.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, e || {});
                    var t = this.options;
                    t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i, this.strm.avail_out = 0;
                    var r = c.inflateInit2(this.strm, t.windowBits);
                    if (r !== m.Z_OK) throw new Error(n[r]);
                    this.header = new s, c.inflateGetHeader(this.strm, this.header);
                }
                function o(e, t) {
                    var r = new a(t);
                    if (r.push(e, !0), r.err) throw r.msg || n[r.err];
                    return r.result;
                }
                a.prototype.push = function(e, t) {
                    var r, n, i, s, a, o, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = !1;
                    if (this.ended) return !1;
                    n = t === ~~t ? t : !0 === t ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e ? h.input = p.binstring2buf(e) : "[object ArrayBuffer]" === _.call(e) ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
                    do {
                        if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = c.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), this.ended = !0, false;
                        h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || n !== m.Z_FINISH && n !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i = p.utf8border(h.output, h.next_out), s = h.next_out - i, a = p.buf2string(h.output, i), h.next_out = s, h.avail_out = u - s, s && d.arraySet(h.output, h.output, i, s, 0), this.onData(a)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
                    }while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
                    return r === m.Z_STREAM_END && (n = m.Z_FINISH), n === m.Z_FINISH ? (r = c.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : n !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), h.avail_out = 0, true);
                }, a.prototype.onData = function(e) {
                    this.chunks.push(e);
                }, a.prototype.onEnd = function(e) {
                    e === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
                }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e, t) {
                    return (t = t || {}).raw = !0, o(e, t);
                }, r.ungzip = o;
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        41: [
            function(e, t, r) {
                "use strict";
                var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                r.assign = function(e) {
                    for(var t = Array.prototype.slice.call(arguments, 1); t.length;){
                        var r = t.shift();
                        if (r) {
                            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
                            for(var n in r)r.hasOwnProperty(n) && (e[n] = r[n]);
                        }
                    }
                    return e;
                }, r.shrinkBuf = function(e, t) {
                    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
                };
                var i = {
                    arraySet: function(e, t, r, n, i) {
                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                        else for(var s = 0; s < n; s++)e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                        var t, r, n, i, s, a;
                        for(t = n = 0, r = e.length; t < r; t++)n += e[t].length;
                        for(a = new Uint8Array(n), t = i = 0, r = e.length; t < r; t++)s = e[t], a.set(s, i), i += s.length;
                        return a;
                    }
                }, s = {
                    arraySet: function(e, t, r, n, i) {
                        for(var s = 0; s < n; s++)e[i + s] = t[r + s];
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e);
                    }
                };
                r.setTyped = function(e) {
                    e ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
                }, r.setTyped(n);
            },
            {}
        ],
        42: [
            function(e, t, r) {
                "use strict";
                var h = e("./common"), i = !0, s = !0;
                try {
                    String.fromCharCode.apply(null, [
                        0
                    ]);
                } catch (e) {
                    i = !1;
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (e) {
                    s = !1;
                }
                for(var u = new h.Buf8(256), n = 0; n < 256; n++)u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
                function l(e, t) {
                    if (t < 65537 && (e.subarray && s || !e.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e, t));
                    for(var r = "", n = 0; n < t; n++)r += String.fromCharCode(e[n]);
                    return r;
                }
                u[254] = u[254] = 1, r.string2buf = function(e) {
                    var t, r, n, i, s, a = e.length, o = 0;
                    for(i = 0; i < a; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                    for(t = new h.Buf8(o), i = s = 0; s < o; i++)55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < a && 56320 == (64512 & (n = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320), i++), r < 128 ? t[s++] = r : (r < 2048 ? t[s++] = 192 | r >>> 6 : (r < 65536 ? t[s++] = 224 | r >>> 12 : (t[s++] = 240 | r >>> 18, t[s++] = 128 | r >>> 12 & 63), t[s++] = 128 | r >>> 6 & 63), t[s++] = 128 | 63 & r);
                    return t;
                }, r.buf2binstring = function(e) {
                    return l(e, e.length);
                }, r.binstring2buf = function(e) {
                    for(var t = new h.Buf8(e.length), r = 0, n = t.length; r < n; r++)t[r] = e.charCodeAt(r);
                    return t;
                }, r.buf2string = function(e, t) {
                    var r, n, i, s, a = t || e.length, o = new Array(2 * a);
                    for(r = n = 0; r < a;)if ((i = e[r++]) < 128) o[n++] = i;
                    else if (4 < (s = u[i])) o[n++] = 65533, r += s - 1;
                    else {
                        for(i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;)i = i << 6 | 63 & e[r++], s--;
                        1 < s ? o[n++] = 65533 : i < 65536 ? o[n++] = i : (i -= 65536, o[n++] = 55296 | i >> 10 & 1023, o[n++] = 56320 | 1023 & i);
                    }
                    return l(o, n);
                }, r.utf8border = function(e, t) {
                    var r;
                    for((t = t || e.length) > e.length && (t = e.length), r = t - 1; 0 <= r && 128 == (192 & e[r]);)r--;
                    return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
                };
            },
            {
                "./common": 41
            }
        ],
        43: [
            function(e, t, r) {
                "use strict";
                t.exports = function(e, t, r, n) {
                    for(var i = 65535 & e | 0, s = e >>> 16 & 65535 | 0, a = 0; 0 !== r;){
                        for(r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0, --a;);
                        i %= 65521, s %= 65521;
                    }
                    return i | s << 16 | 0;
                };
            },
            {}
        ],
        44: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                };
            },
            {}
        ],
        45: [
            function(e, t, r) {
                "use strict";
                var o = function() {
                    for(var e, t = [], r = 0; r < 256; r++){
                        e = r;
                        for(var n = 0; n < 8; n++)e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        t[r] = e;
                    }
                    return t;
                }();
                t.exports = function(e, t, r, n) {
                    var i = o, s = n + r;
                    e ^= -1;
                    for(var a = n; a < s; a++)e = e >>> 8 ^ i[255 & (e ^ t[a])];
                    return -1 ^ e;
                };
            },
            {}
        ],
        46: [
            function(e, t, r) {
                "use strict";
                var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
                function R(e, t) {
                    return e.msg = n[t], t;
                }
                function T(e) {
                    return (e << 1) - (4 < e ? 9 : 0);
                }
                function D(e) {
                    for(var t = e.length; 0 <= --t;)e[t] = 0;
                }
                function F(e) {
                    var t = e.state, r = t.pending;
                    r > e.avail_out && (r = e.avail_out), 0 !== r && (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, 0 === t.pending && (t.pending_out = 0));
                }
                function N(e, t) {
                    u._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
                }
                function U(e, t) {
                    e.pending_buf[e.pending++] = t;
                }
                function P(e, t) {
                    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
                }
                function L(e, t) {
                    var r, n, i = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match, h = e.strstart > e.w_size - z ? e.strstart - (e.w_size - z) : 0, u = e.window, l = e.w_mask, f = e.prev, c = e.strstart + S, d = u[s + a - 1], p = u[s + a];
                    e.prev_length >= e.good_match && (i >>= 2), o > e.lookahead && (o = e.lookahead);
                    do if (u[(r = t) + a] === p && u[r + a - 1] === d && u[r] === u[s] && u[++r] === u[s + 1]) {
                        s += 2, r++;
                        do ;
                        while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < c);
                        if (n = S - (c - s), s = c - S, a < n) {
                            if (e.match_start = t, o <= (a = n)) break;
                            d = u[s + a - 1], p = u[s + a];
                        }
                    }
                    while ((t = f[t & l]) > h && 0 != --i);
                    return a <= e.lookahead ? a : e.lookahead;
                }
                function j(e) {
                    var t, r, n, i, s, a, o, h, u, l, f = e.w_size;
                    do {
                        if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= f + (f - z)) {
                            for(c.arraySet(e.window, e.window, f, f, 0), e.match_start -= f, e.strstart -= f, e.block_start -= f, t = r = e.hash_size; n = e.head[--t], e.head[t] = f <= n ? n - f : 0, --r;);
                            for(t = r = f; n = e.prev[--t], e.prev[t] = f <= n ? n - f : 0, --r;);
                            i += f;
                        }
                        if (0 === e.strm.avail_in) break;
                        if (a = e.strm, o = e.window, h = e.strstart + e.lookahead, u = i, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, c.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = d(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), e.lookahead += r, e.lookahead + e.insert >= x) for(s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + x - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < x)););
                    }while (e.lookahead < z && 0 !== e.strm.avail_in);
                }
                function Z(e, t) {
                    for(var r, n;;){
                        if (e.lookahead < z) {
                            if (j(e), e.lookahead < z && t === l) return A;
                            if (0 === e.lookahead) break;
                        }
                        if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== r && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r)), e.match_length >= x) {
                            if (n = u._tr_tally(e, e.strstart - e.match_start, e.match_length - x), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= x) {
                                for(e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
                                e.strstart++;
                            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                        } else n = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                        if (n && (N(e, !1), 0 === e.strm.avail_out)) return A;
                    }
                    return e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                }
                function W(e, t) {
                    for(var r, n, i;;){
                        if (e.lookahead < z) {
                            if (j(e), e.lookahead < z && t === l) return A;
                            if (0 === e.lookahead) break;
                        }
                        if (r = 0, e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = x - 1, 0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - z && (e.match_length = L(e, r), e.match_length <= 5 && (1 === e.strategy || e.match_length === x && 4096 < e.strstart - e.match_start) && (e.match_length = x - 1)), e.prev_length >= x && e.match_length <= e.prev_length) {
                            for(i = e.strstart + e.lookahead - x, n = u._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
                            if (e.match_available = 0, e.match_length = x - 1, e.strstart++, n && (N(e, !1), 0 === e.strm.avail_out)) return A;
                        } else if (e.match_available) {
                            if ((n = u._tr_tally(e, 0, e.window[e.strstart - 1])) && N(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return A;
                        } else e.match_available = 1, e.strstart++, e.lookahead--;
                    }
                    return e.match_available && (n = u._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < x - 1 ? e.strstart : x - 1, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                }
                function M(e, t, r, n, i) {
                    this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = i;
                }
                function H() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                }
                function G(e) {
                    var t;
                    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = i, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? C : E, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = l, u._tr_init(t), m) : R(e, _);
                }
                function K(e) {
                    var t = G(e);
                    return t === m && function(e) {
                        e.window_size = 2 * e.w_size, D(e.head), e.max_lazy_match = h[e.level].max_lazy, e.good_match = h[e.level].good_length, e.nice_match = h[e.level].nice_length, e.max_chain_length = h[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = x - 1, e.match_available = 0, e.ins_h = 0;
                    }(e.state), t;
                }
                function Y(e, t, r, n, i, s) {
                    if (!e) return _;
                    var a = 1;
                    if (t === g && (t = 6), n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16), i < 1 || y < i || r !== v || n < 8 || 15 < n || t < 0 || 9 < t || s < 0 || b < s) return R(e, _);
                    8 === n && (n = 9);
                    var o = new H;
                    return (e.state = o).strm = e, o.wrap = a, o.gzhead = null, o.w_bits = n, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = i + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new c.Buf8(2 * o.w_size), o.head = new c.Buf16(o.hash_size), o.prev = new c.Buf16(o.w_size), o.lit_bufsize = 1 << i + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new c.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = t, o.strategy = s, o.method = r, K(e);
                }
                h = [
                    new M(0, 0, 0, 0, function(e, t) {
                        var r = 65535;
                        for(r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;){
                            if (e.lookahead <= 1) {
                                if (j(e), 0 === e.lookahead && t === l) return A;
                                if (0 === e.lookahead) break;
                            }
                            e.strstart += e.lookahead, e.lookahead = 0;
                            var n = e.block_start + r;
                            if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, N(e, !1), 0 === e.strm.avail_out)) return A;
                            if (e.strstart - e.block_start >= e.w_size - z && (N(e, !1), 0 === e.strm.avail_out)) return A;
                        }
                        return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : (e.strstart > e.block_start && (N(e, !1), e.strm.avail_out), A);
                    }),
                    new M(4, 4, 8, 4, Z),
                    new M(4, 5, 16, 8, Z),
                    new M(4, 6, 32, 32, Z),
                    new M(4, 4, 16, 16, W),
                    new M(8, 16, 32, 32, W),
                    new M(8, 16, 128, 128, W),
                    new M(8, 32, 128, 256, W),
                    new M(32, 128, 258, 1024, W),
                    new M(32, 258, 258, 4096, W)
                ], r.deflateInit = function(e, t) {
                    return Y(e, t, v, 15, 8, 0);
                }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e, t) {
                    return e && e.state ? 2 !== e.state.wrap ? _ : (e.state.gzhead = t, m) : _;
                }, r.deflate = function(e, t) {
                    var r, n, i, s;
                    if (!e || !e.state || 5 < t || t < 0) return e ? R(e, _) : _;
                    if (n = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === n.status && t !== f) return R(e, 0 === e.avail_out ? -5 : _);
                    if (n.strm = e, r = n.last_flush, n.last_flush = t, n.status === C) {
                        if (2 === n.wrap) e.adler = 0, U(n, 31), U(n, 139), U(n, 8), n.gzhead ? (U(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), U(n, 255 & n.gzhead.time), U(n, n.gzhead.time >> 8 & 255), U(n, n.gzhead.time >> 16 & 255), U(n, n.gzhead.time >> 24 & 255), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (U(n, 255 & n.gzhead.extra.length), U(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = p(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 0), U(n, 9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0), U(n, 3), n.status = E);
                        else {
                            var a = v + (n.w_bits - 8 << 4) << 8;
                            a |= (2 <= n.strategy || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (a |= 32), a += 31 - a % 31, n.status = E, P(n, a), 0 !== n.strstart && (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), e.adler = 1;
                        }
                    }
                    if (69 === n.status) {
                        if (n.gzhead.extra) {
                            for(i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending !== n.pending_buf_size));)U(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73);
                        } else n.status = 73;
                    }
                    if (73 === n.status) {
                        if (n.gzhead.name) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                    s = 1;
                                    break;
                                }
                                s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, U(n, s);
                            }while (0 !== s);
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.gzindex = 0, n.status = 91);
                        } else n.status = 91;
                    }
                    if (91 === n.status) {
                        if (n.gzhead.comment) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), F(e), i = n.pending, n.pending === n.pending_buf_size)) {
                                    s = 1;
                                    break;
                                }
                                s = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, U(n, s);
                            }while (0 !== s);
                            n.gzhead.hcrc && n.pending > i && (e.adler = p(e.adler, n.pending_buf, n.pending - i, i)), 0 === s && (n.status = 103);
                        } else n.status = 103;
                    }
                    if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && F(e), n.pending + 2 <= n.pending_buf_size && (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), e.adler = 0, n.status = E)) : n.status = E), 0 !== n.pending) {
                        if (F(e), 0 === e.avail_out) return n.last_flush = -1, m;
                    } else if (0 === e.avail_in && T(t) <= T(r) && t !== f) return R(e, -5);
                    if (666 === n.status && 0 !== e.avail_in) return R(e, -5);
                    if (0 !== e.avail_in || 0 !== n.lookahead || t !== l && 666 !== n.status) {
                        var o = 2 === n.strategy ? function(e, t) {
                            for(var r;;){
                                if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
                                    if (t === l) return A;
                                    break;
                                }
                                if (e.match_length = 0, r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (N(e, !1), 0 === e.strm.avail_out)) return A;
                            }
                            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                        }(n, t) : 3 === n.strategy ? function(e, t) {
                            for(var r, n, i, s, a = e.window;;){
                                if (e.lookahead <= S) {
                                    if (j(e), e.lookahead <= S && t === l) return A;
                                    if (0 === e.lookahead) break;
                                }
                                if (e.match_length = 0, e.lookahead >= x && 0 < e.strstart && (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] && n === a[++i]) {
                                    s = e.strstart + S;
                                    do ;
                                    while (n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && n === a[++i] && i < s);
                                    e.match_length = S - (s - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
                                }
                                if (e.match_length >= x ? (r = u._tr_tally(e, 1, e.match_length - x), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = u._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (N(e, !1), 0 === e.strm.avail_out)) return A;
                            }
                            return e.insert = 0, t === f ? (N(e, !0), 0 === e.strm.avail_out ? O : B) : e.last_lit && (N(e, !1), 0 === e.strm.avail_out) ? A : I;
                        }(n, t) : h[n.level].func(n, t);
                        if (o !== O && o !== B || (n.status = 666), o === A || o === O) return 0 === e.avail_out && (n.last_flush = -1), m;
                        if (o === I && (1 === t ? u._tr_align(n) : 5 !== t && (u._tr_stored_block(n, 0, 0, !1), 3 === t && (D(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), F(e), 0 === e.avail_out)) return n.last_flush = -1, m;
                    }
                    return t !== f ? m : n.wrap <= 0 ? 1 : (2 === n.wrap ? (U(n, 255 & e.adler), U(n, e.adler >> 8 & 255), U(n, e.adler >> 16 & 255), U(n, e.adler >> 24 & 255), U(n, 255 & e.total_in), U(n, e.total_in >> 8 & 255), U(n, e.total_in >> 16 & 255), U(n, e.total_in >> 24 & 255)) : (P(n, e.adler >>> 16), P(n, 65535 & e.adler)), F(e), 0 < n.wrap && (n.wrap = -n.wrap), 0 !== n.pending ? m : 1);
                }, r.deflateEnd = function(e) {
                    var t;
                    return e && e.state ? (t = e.state.status) !== C && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== E && 666 !== t ? R(e, _) : (e.state = null, t === E ? R(e, -3) : m) : _;
                }, r.deflateSetDictionary = function(e, t) {
                    var r, n, i, s, a, o, h, u, l = t.length;
                    if (!e || !e.state) return _;
                    if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;
                    for(1 === s && (e.adler = d(e.adler, t, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new c.Buf8(r.w_size), c.arraySet(u, t, l - r.w_size, r.w_size, 0), t = u, l = r.w_size), a = e.avail_in, o = e.next_in, h = e.input, e.avail_in = l, e.next_in = 0, e.input = t, j(r); r.lookahead >= x;){
                        for(n = r.strstart, i = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + x - 1]) & r.hash_mask, r.prev[n & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = n, n++, --i;);
                        r.strstart = n, r.lookahead = x - 1, j(r);
                    }
                    return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, e.next_in = o, e.input = h, e.avail_in = a, r.wrap = s, m;
                }, r.deflateInfo = "pako deflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }
        ],
        47: [
            function(e, t, r) {
                "use strict";
                t.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
                };
            },
            {}
        ],
        48: [
            function(e, t, r) {
                "use strict";
                t.exports = function(e, t) {
                    var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
                    r = e.state, n = e.next_in, z = e.input, i = n + (e.avail_in - 5), s = e.next_out, C = e.output, a = s - (t - e.avail_out), o = s + (e.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, c = r.window, d = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
                    e: do {
                        p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
                        t: for(;;){
                            if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
                            else {
                                if (!(16 & y)) {
                                    if (0 == (64 & y)) {
                                        v = m[(65535 & v) + (d & (1 << y) - 1)];
                                        continue t;
                                    }
                                    if (32 & y) {
                                        r.mode = 12;
                                        break e;
                                    }
                                    e.msg = "invalid literal/length code", r.mode = 30;
                                    break e;
                                }
                                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                                r: for(;;){
                                    if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                                        if (0 == (64 & y)) {
                                            v = _[(65535 & v) + (d & (1 << y) - 1)];
                                            continue r;
                                        }
                                        e.msg = "invalid distance code", r.mode = 30;
                                        break e;
                                    }
                                    if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                                        e.msg = "invalid distance too far back", r.mode = 30;
                                        break e;
                                    }
                                    if (d >>>= y, p -= y, (y = s - a) < k) {
                                        if (l < (y = k - y) && r.sane) {
                                            e.msg = "invalid distance too far back", r.mode = 30;
                                            break e;
                                        }
                                        if (S = c, (x = 0) === f) {
                                            if (x += u - y, y < w) {
                                                for(w -= y; C[s++] = c[x++], --y;);
                                                x = s - k, S = C;
                                            }
                                        } else if (f < y) {
                                            if (x += u + f - y, (y -= f) < w) {
                                                for(w -= y; C[s++] = c[x++], --y;);
                                                if (x = 0, f < w) {
                                                    for(w -= y = f; C[s++] = c[x++], --y;);
                                                    x = s - k, S = C;
                                                }
                                            }
                                        } else if (x += f - y, y < w) {
                                            for(w -= y; C[s++] = c[x++], --y;);
                                            x = s - k, S = C;
                                        }
                                        for(; 2 < w;)C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                                        w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                                    } else {
                                        for(x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););
                                        w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    }while (n < i && s < o);
                    n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e.next_in = n, e.next_out = s, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = d, r.bits = p;
                };
            },
            {}
        ],
        49: [
            function(e, t, r) {
                "use strict";
                var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
                function L(e) {
                    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
                }
                function s() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                }
                function a(e) {
                    var t;
                    return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = P, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new I.Buf32(n), t.distcode = t.distdyn = new I.Buf32(i), t.sane = 1, t.back = -1, N) : U;
                }
                function o(e) {
                    var t;
                    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, a(e)) : U;
                }
                function h(e, t) {
                    var r, n;
                    return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? U : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, o(e))) : U;
                }
                function u(e, t) {
                    var r, n;
                    return e ? (n = new s, (e.state = n).window = null, (r = h(e, t)) !== N && (e.state = null), r) : U;
                }
                var l, f, c = !0;
                function j(e) {
                    if (c) {
                        var t;
                        for(l = new I.Buf32(512), f = new I.Buf32(32), t = 0; t < 144;)e.lens[t++] = 8;
                        for(; t < 256;)e.lens[t++] = 9;
                        for(; t < 280;)e.lens[t++] = 7;
                        for(; t < 288;)e.lens[t++] = 8;
                        for(T(D, e.lens, 0, 288, l, 0, e.work, {
                            bits: 9
                        }), t = 0; t < 32;)e.lens[t++] = 5;
                        T(F, e.lens, 0, 32, f, 0, e.work, {
                            bits: 5
                        }), c = !1;
                    }
                    e.lencode = l, e.lenbits = 9, e.distcode = f, e.distbits = 5;
                }
                function Z(e, t, r, n) {
                    var i, s = e.state;
                    return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), n >= s.wsize ? (I.arraySet(s.window, t, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (n < (i = s.wsize - s.wnext) && (i = n), I.arraySet(s.window, t, r - n, i, s.wnext), (n -= i) ? (I.arraySet(s.window, t, r - n, n, 0), s.wnext = n, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
                }
                r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e) {
                    return u(e, 15);
                }, r.inflateInit2 = u, r.inflate = function(e, t) {
                    var r, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [
                        16,
                        17,
                        18,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15
                    ];
                    if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return U;
                    12 === (r = e.state).mode && (r.mode = 13), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, f = o, c = h, x = N;
                    e: for(;;)switch(r.mode){
                        case P:
                            if (0 === r.wrap) {
                                r.mode = 13;
                                break;
                            }
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (2 & r.wrap && 35615 === u) {
                                E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
                                break;
                            }
                            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                                e.msg = "incorrect header check", r.mode = 30;
                                break;
                            }
                            if (8 != (15 & u)) {
                                e.msg = "unknown compression method", r.mode = 30;
                                break;
                            }
                            if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;
                            else if (k > r.wbits) {
                                e.msg = "invalid window size", r.mode = 30;
                                break;
                            }
                            r.dmax = 1 << k, e.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
                            break;
                        case 2:
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (r.flags = u, 8 != (255 & r.flags)) {
                                e.msg = "unknown compression method", r.mode = 30;
                                break;
                            }
                            if (57344 & r.flags) {
                                e.msg = "unknown header flags set", r.mode = 30;
                                break;
                            }
                            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;
                        case 3:
                            for(; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;
                        case 4:
                            for(; l < 16;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;
                        case 5:
                            if (1024 & r.flags) {
                                for(; l < 16;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
                            } else r.head && (r.head.extra = null);
                            r.mode = 6;
                        case 6:
                            if (1024 & r.flags && (o < (d = r.length) && (d = o), d && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, n, s, d, k)), 512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, r.length -= d), r.length)) break e;
                            r.length = 0, r.mode = 7;
                        case 7:
                            if (2048 & r.flags) {
                                if (0 === o) break e;
                                for(d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && d < o;);
                                if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
                            } else r.head && (r.head.name = null);
                            r.length = 0, r.mode = 8;
                        case 8:
                            if (4096 & r.flags) {
                                if (0 === o) break e;
                                for(d = 0; k = n[s + d++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && d < o;);
                                if (512 & r.flags && (r.check = B(r.check, n, d, s)), o -= d, s += d, k) break e;
                            } else r.head && (r.head.comment = null);
                            r.mode = 9;
                        case 9:
                            if (512 & r.flags) {
                                for(; l < 16;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (u !== (65535 & r.check)) {
                                    e.msg = "header crc mismatch", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = 12;
                            break;
                        case 10:
                            for(; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            e.adler = r.check = L(u), l = u = 0, r.mode = 11;
                        case 11:
                            if (0 === r.havedict) return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, 2;
                            e.adler = r.check = 1, r.mode = 12;
                        case 12:
                            if (5 === t || 6 === t) break e;
                        case 13:
                            if (r.last) {
                                u >>>= 7 & l, l -= 7 & l, r.mode = 27;
                                break;
                            }
                            for(; l < 3;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            switch(r.last = 1 & u, l -= 1, 3 & (u >>>= 1)){
                                case 0:
                                    r.mode = 14;
                                    break;
                                case 1:
                                    if (j(r), r.mode = 20, 6 !== t) break;
                                    u >>>= 2, l -= 2;
                                    break e;
                                case 2:
                                    r.mode = 17;
                                    break;
                                case 3:
                                    e.msg = "invalid block type", r.mode = 30;
                            }
                            u >>>= 2, l -= 2;
                            break;
                        case 14:
                            for(u >>>= 7 & l, l -= 7 & l; l < 32;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if ((65535 & u) != (u >>> 16 ^ 65535)) {
                                e.msg = "invalid stored block lengths", r.mode = 30;
                                break;
                            }
                            if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === t) break e;
                        case 15:
                            r.mode = 16;
                        case 16:
                            if (d = r.length) {
                                if (o < d && (d = o), h < d && (d = h), 0 === d) break e;
                                I.arraySet(i, n, s, d, a), o -= d, s += d, h -= d, a += d, r.length -= d;
                                break;
                            }
                            r.mode = 12;
                            break;
                        case 17:
                            for(; l < 14;){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
                                e.msg = "too many length or distance symbols", r.mode = 30;
                                break;
                            }
                            r.have = 0, r.mode = 18;
                        case 18:
                            for(; r.have < r.ncode;){
                                for(; l < 3;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
                            }
                            for(; r.have < 19;)r.lens[A[r.have++]] = 0;
                            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
                                bits: r.lenbits
                            }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                e.msg = "invalid code lengths set", r.mode = 30;
                                break;
                            }
                            r.have = 0, r.mode = 19;
                        case 19:
                            for(; r.have < r.nlen + r.ndist;){
                                for(; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;
                                else {
                                    if (16 === b) {
                                        for(z = _ + 2; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        if (u >>>= _, l -= _, 0 === r.have) {
                                            e.msg = "invalid bit length repeat", r.mode = 30;
                                            break;
                                        }
                                        k = r.lens[r.have - 1], d = 3 + (3 & u), u >>>= 2, l -= 2;
                                    } else if (17 === b) {
                                        for(z = _ + 3; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        l -= _, k = 0, d = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                                    } else {
                                        for(z = _ + 7; l < z;){
                                            if (0 === o) break e;
                                            o--, u += n[s++] << l, l += 8;
                                        }
                                        l -= _, k = 0, d = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                                    }
                                    if (r.have + d > r.nlen + r.ndist) {
                                        e.msg = "invalid bit length repeat", r.mode = 30;
                                        break;
                                    }
                                    for(; d--;)r.lens[r.have++] = k;
                                }
                            }
                            if (30 === r.mode) break;
                            if (0 === r.lens[256]) {
                                e.msg = "invalid code -- missing end-of-block", r.mode = 30;
                                break;
                            }
                            if (r.lenbits = 9, S = {
                                bits: r.lenbits
                            }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
                                e.msg = "invalid literal/lengths set", r.mode = 30;
                                break;
                            }
                            if (r.distbits = 6, r.distcode = r.distdyn, S = {
                                bits: r.distbits
                            }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
                                e.msg = "invalid distances set", r.mode = 30;
                                break;
                            }
                            if (r.mode = 20, 6 === t) break e;
                        case 20:
                            r.mode = 21;
                        case 21:
                            if (6 <= o && 258 <= h) {
                                e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, R(e, c), a = e.next_out, i = e.output, h = e.avail_out, s = e.next_in, n = e.input, o = e.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
                                break;
                            }
                            for(r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (g && 0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                u >>>= v, l -= v, r.back += v;
                            }
                            if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
                                r.mode = 26;
                                break;
                            }
                            if (32 & g) {
                                r.back = -1, r.mode = 12;
                                break;
                            }
                            if (64 & g) {
                                e.msg = "invalid literal/length code", r.mode = 30;
                                break;
                            }
                            r.extra = 15 & g, r.mode = 22;
                        case 22:
                            if (r.extra) {
                                for(z = r.extra; l < z;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                            }
                            r.was = r.length, r.mode = 23;
                        case 23:
                            for(; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);){
                                if (0 === o) break e;
                                o--, u += n[s++] << l, l += 8;
                            }
                            if (0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                u >>>= v, l -= v, r.back += v;
                            }
                            if (u >>>= _, l -= _, r.back += _, 64 & g) {
                                e.msg = "invalid distance code", r.mode = 30;
                                break;
                            }
                            r.offset = b, r.extra = 15 & g, r.mode = 24;
                        case 24:
                            if (r.extra) {
                                for(z = r.extra; l < z;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
                            }
                            if (r.offset > r.dmax) {
                                e.msg = "invalid distance too far back", r.mode = 30;
                                break;
                            }
                            r.mode = 25;
                        case 25:
                            if (0 === h) break e;
                            if (d = c - h, r.offset > d) {
                                if ((d = r.offset - d) > r.whave && r.sane) {
                                    e.msg = "invalid distance too far back", r.mode = 30;
                                    break;
                                }
                                p = d > r.wnext ? (d -= r.wnext, r.wsize - d) : r.wnext - d, d > r.length && (d = r.length), m = r.window;
                            } else m = i, p = a - r.offset, d = r.length;
                            for(h < d && (d = h), h -= d, r.length -= d; i[a++] = m[p++], --d;);
                            0 === r.length && (r.mode = 21);
                            break;
                        case 26:
                            if (0 === h) break e;
                            i[a++] = r.length, h--, r.mode = 21;
                            break;
                        case 27:
                            if (r.wrap) {
                                for(; l < 32;){
                                    if (0 === o) break e;
                                    o--, u |= n[s++] << l, l += 8;
                                }
                                if (c -= h, e.total_out += c, r.total += c, c && (e.adler = r.check = r.flags ? B(r.check, i, c, a - c) : O(r.check, i, c, a - c)), c = h, (r.flags ? u : L(u)) !== r.check) {
                                    e.msg = "incorrect data check", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.mode = 28;
                        case 28:
                            if (r.wrap && r.flags) {
                                for(; l < 32;){
                                    if (0 === o) break e;
                                    o--, u += n[s++] << l, l += 8;
                                }
                                if (u !== (4294967295 & r.total)) {
                                    e.msg = "incorrect length check", r.mode = 30;
                                    break;
                                }
                                l = u = 0;
                            }
                            r.mode = 29;
                        case 29:
                            x = 1;
                            break e;
                        case 30:
                            x = -3;
                            break e;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return U;
                    }
                    return e.next_out = a, e.avail_out = h, e.next_in = s, e.avail_in = o, r.hold = u, r.bits = l, (r.wsize || c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && Z(e, e.output, e.next_out, c - e.avail_out) ? (r.mode = 31, -4) : (f -= e.avail_in, c -= e.avail_out, e.total_in += f, e.total_out += c, r.total += c, r.wrap && c && (e.adler = r.check = r.flags ? B(r.check, i, c, e.next_out - c) : O(r.check, i, c, e.next_out - c)), e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === c || 4 === t) && x === N && (x = -5), x);
                }, r.inflateEnd = function(e) {
                    if (!e || !e.state) return U;
                    var t = e.state;
                    return t.window && (t.window = null), e.state = null, N;
                }, r.inflateGetHeader = function(e, t) {
                    var r;
                    return e && e.state ? 0 == (2 & (r = e.state).wrap) ? U : ((r.head = t).done = !1, N) : U;
                }, r.inflateSetDictionary = function(e, t) {
                    var r, n = t.length;
                    return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, t, n, 0) !== r.check ? -3 : Z(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
                }, r.inflateInfo = "pako inflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }
        ],
        50: [
            function(e, t, r) {
                "use strict";
                var D = e("../utils/common"), F = [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    13,
                    15,
                    17,
                    19,
                    23,
                    27,
                    31,
                    35,
                    43,
                    51,
                    59,
                    67,
                    83,
                    99,
                    115,
                    131,
                    163,
                    195,
                    227,
                    258,
                    0,
                    0
                ], N = [
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    17,
                    17,
                    18,
                    18,
                    18,
                    18,
                    19,
                    19,
                    19,
                    19,
                    20,
                    20,
                    20,
                    20,
                    21,
                    21,
                    21,
                    21,
                    16,
                    72,
                    78
                ], U = [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9,
                    13,
                    17,
                    25,
                    33,
                    49,
                    65,
                    97,
                    129,
                    193,
                    257,
                    385,
                    513,
                    769,
                    1025,
                    1537,
                    2049,
                    3073,
                    4097,
                    6145,
                    8193,
                    12289,
                    16385,
                    24577,
                    0,
                    0
                ], P = [
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    18,
                    18,
                    19,
                    19,
                    20,
                    20,
                    21,
                    21,
                    22,
                    22,
                    23,
                    23,
                    24,
                    24,
                    25,
                    25,
                    26,
                    26,
                    27,
                    27,
                    28,
                    28,
                    29,
                    29,
                    64,
                    64
                ];
                t.exports = function(e, t, r, n, i, s, a, o) {
                    var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
                    for(b = 0; b <= 15; b++)O[b] = 0;
                    for(v = 0; v < n; v++)O[t[r + v]]++;
                    for(k = g, w = 15; 1 <= w && 0 === O[w]; w--);
                    if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
                    for(y = 1; y < w && 0 === O[y]; y++);
                    for(k < y && (k = y), b = z = 1; b <= 15; b++)if (z <<= 1, (z -= O[b]) < 0) return -1;
                    if (0 < z && (0 === e || 1 !== w)) return -1;
                    for(B[1] = 0, b = 1; b < 15; b++)B[b + 1] = B[b] + O[b];
                    for(v = 0; v < n; v++)0 !== t[r + v] && (a[B[t[r + v]]++] = v);
                    if (d = 0 === e ? (A = R = a, 19) : 1 === e ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                    for(;;){
                        for(p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
                        for(h = 1 << b - 1; E & h;)h >>= 1;
                        if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                            if (b === w) break;
                            b = t[r + a[v]];
                        }
                        if (k < b && (E & f) !== l) {
                            for(0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);)x++, z <<= 1;
                            if (C += 1 << x, 1 === e && 852 < C || 2 === e && 592 < C) return 1;
                            i[l = E & f] = k << 24 | x << 16 | c - s | 0;
                        }
                    }
                    return 0 !== E && (i[c + E] = b - S << 24 | 4194304), o.bits = k, 0;
                };
            },
            {
                "../utils/common": 41
            }
        ],
        51: [
            function(e, t, r) {
                "use strict";
                t.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                };
            },
            {}
        ],
        52: [
            function(e, t, r) {
                "use strict";
                var i = e("../utils/common"), o = 0, h = 1;
                function n(e) {
                    for(var t = e.length; 0 <= --t;)e[t] = 0;
                }
                var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0
                ], k = [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13
                ], x = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    3,
                    7
                ], S = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                ], z = new Array(2 * (l + 2));
                n(z);
                var C = new Array(2 * f);
                n(C);
                var E = new Array(512);
                n(E);
                var A = new Array(256);
                n(A);
                var I = new Array(a);
                n(I);
                var O, B, R, T = new Array(f);
                function D(e, t, r, n, i) {
                    this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = i, this.has_stree = e && e.length;
                }
                function F(e, t) {
                    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
                }
                function N(e) {
                    return e < 256 ? E[e] : E[256 + (e >>> 7)];
                }
                function U(e, t) {
                    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
                }
                function P(e, t, r) {
                    e.bi_valid > d - r ? (e.bi_buf |= t << e.bi_valid & 65535, U(e, e.bi_buf), e.bi_buf = t >> d - e.bi_valid, e.bi_valid += r - d) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
                }
                function L(e, t, r) {
                    P(e, r[2 * t], r[2 * t + 1]);
                }
                function j(e, t) {
                    for(var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;);
                    return r >>> 1;
                }
                function Z(e, t, r) {
                    var n, i, s = new Array(g + 1), a = 0;
                    for(n = 1; n <= g; n++)s[n] = a = a + r[n - 1] << 1;
                    for(i = 0; i <= t; i++){
                        var o = e[2 * i + 1];
                        0 !== o && (e[2 * i] = j(s[o]++, o));
                    }
                }
                function W(e) {
                    var t;
                    for(t = 0; t < l; t++)e.dyn_ltree[2 * t] = 0;
                    for(t = 0; t < f; t++)e.dyn_dtree[2 * t] = 0;
                    for(t = 0; t < c; t++)e.bl_tree[2 * t] = 0;
                    e.dyn_ltree[2 * m] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
                }
                function M(e) {
                    8 < e.bi_valid ? U(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
                }
                function H(e, t, r, n) {
                    var i = 2 * t, s = 2 * r;
                    return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r];
                }
                function G(e, t, r) {
                    for(var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && H(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !H(t, n, e.heap[i], e.depth));)e.heap[r] = e.heap[i], r = i, i <<= 1;
                    e.heap[r] = n;
                }
                function K(e, t, r) {
                    var n, i, s, a, o = 0;
                    if (0 !== e.last_lit) for(; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1], i = e.pending_buf[e.l_buf + o], o++, 0 === n ? L(e, i, t) : (L(e, (s = A[i]) + u + 1, t), 0 !== (a = w[s]) && P(e, i -= I[s], a), L(e, s = N(--n), r), 0 !== (a = k[s]) && P(e, n -= T[s], a)), o < e.last_lit;);
                    L(e, m, t);
                }
                function Y(e, t) {
                    var r, n, i, s = t.dyn_tree, a = t.stat_desc.static_tree, o = t.stat_desc.has_stree, h = t.stat_desc.elems, u = -1;
                    for(e.heap_len = 0, e.heap_max = _, r = 0; r < h; r++)0 !== s[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : s[2 * r + 1] = 0;
                    for(; e.heap_len < 2;)s[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, o && (e.static_len -= a[2 * i + 1]);
                    for(t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--)G(e, s, r);
                    for(i = h; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, s, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, s[2 * i] = s[2 * r] + s[2 * n], e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, s[2 * r + 1] = s[2 * n + 1] = i, e.heap[1] = i++, G(e, s, 1), 2 <= e.heap_len;);
                    e.heap[--e.heap_max] = e.heap[1], function(e, t) {
                        var r, n, i, s, a, o, h = t.dyn_tree, u = t.max_code, l = t.stat_desc.static_tree, f = t.stat_desc.has_stree, c = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, m = 0;
                        for(s = 0; s <= g; s++)e.bl_count[s] = 0;
                        for(h[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < _; r++)p < (s = h[2 * h[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * n + 1] = s, u < n || (e.bl_count[s]++, a = 0, d <= n && (a = c[n - d]), o = h[2 * n], e.opt_len += o * (s + a), f && (e.static_len += o * (l[2 * n + 1] + a)));
                        if (0 !== m) {
                            do {
                                for(s = p - 1; 0 === e.bl_count[s];)s--;
                                e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[p]--, m -= 2;
                            }while (0 < m);
                            for(s = p; 0 !== s; s--)for(n = e.bl_count[s]; 0 !== n;)u < (i = e.heap[--r]) || (h[2 * i + 1] !== s && (e.opt_len += (s - h[2 * i + 1]) * h[2 * i], h[2 * i + 1] = s), n--);
                        }
                    }(e, t), Z(s, u, e.bl_count);
                }
                function X(e, t, r) {
                    var n, i, s = -1, a = t[1], o = 0, h = 7, u = 4;
                    for(0 === a && (h = 138, u = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)i = a, a = t[2 * (n + 1) + 1], ++o < h && i === a || (o < u ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++, e.bl_tree[2 * b]++) : o <= 10 ? e.bl_tree[2 * v]++ : e.bl_tree[2 * y]++, s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4));
                }
                function V(e, t, r) {
                    var n, i, s = -1, a = t[1], o = 0, h = 7, u = 4;
                    for(0 === a && (h = 138, u = 3), n = 0; n <= r; n++)if (i = a, a = t[2 * (n + 1) + 1], !(++o < h && i === a)) {
                        if (o < u) for(; L(e, i, e.bl_tree), 0 != --o;);
                        else 0 !== i ? (i !== s && (L(e, i, e.bl_tree), o--), L(e, b, e.bl_tree), P(e, o - 3, 2)) : o <= 10 ? (L(e, v, e.bl_tree), P(e, o - 3, 3)) : (L(e, y, e.bl_tree), P(e, o - 11, 7));
                        s = i, u = (o = 0) === a ? (h = 138, 3) : i === a ? (h = 6, 3) : (h = 7, 4);
                    }
                }
                n(T);
                var q = !1;
                function J(e, t, r, n) {
                    P(e, (s << 1) + (n ? 1 : 0), 3), function(e, t, r, n) {
                        M(e), n && (U(e, r), U(e, ~r)), i.arraySet(e.pending_buf, e.window, t, r, e.pending), e.pending += r;
                    }(e, t, r, !0);
                }
                r._tr_init = function(e) {
                    q || (function() {
                        var e, t, r, n, i, s = new Array(g + 1);
                        for(n = r = 0; n < a - 1; n++)for(I[n] = r, e = 0; e < 1 << w[n]; e++)A[r++] = n;
                        for(A[r - 1] = n, n = i = 0; n < 16; n++)for(T[n] = i, e = 0; e < 1 << k[n]; e++)E[i++] = n;
                        for(i >>= 7; n < f; n++)for(T[n] = i << 7, e = 0; e < 1 << k[n] - 7; e++)E[256 + i++] = n;
                        for(t = 0; t <= g; t++)s[t] = 0;
                        for(e = 0; e <= 143;)z[2 * e + 1] = 8, e++, s[8]++;
                        for(; e <= 255;)z[2 * e + 1] = 9, e++, s[9]++;
                        for(; e <= 279;)z[2 * e + 1] = 7, e++, s[7]++;
                        for(; e <= 287;)z[2 * e + 1] = 8, e++, s[8]++;
                        for(Z(z, l + 1, s), e = 0; e < f; e++)C[2 * e + 1] = 5, C[2 * e] = j(e, 5);
                        O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
                    }(), q = !0), e.l_desc = new F(e.dyn_ltree, O), e.d_desc = new F(e.dyn_dtree, B), e.bl_desc = new F(e.bl_tree, R), e.bi_buf = 0, e.bi_valid = 0, W(e);
                }, r._tr_stored_block = J, r._tr_flush_block = function(e, t, r, n) {
                    var i, s, a = 0;
                    0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                        var t, r = 4093624447;
                        for(t = 0; t <= 31; t++, r >>>= 1)if (1 & r && 0 !== e.dyn_ltree[2 * t]) return o;
                        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return h;
                        for(t = 32; t < u; t++)if (0 !== e.dyn_ltree[2 * t]) return h;
                        return o;
                    }(e)), Y(e, e.l_desc), Y(e, e.d_desc), a = function(e) {
                        var t;
                        for(X(e, e.dyn_ltree, e.l_desc.max_code), X(e, e.dyn_dtree, e.d_desc.max_code), Y(e, e.bl_desc), t = c - 1; 3 <= t && 0 === e.bl_tree[2 * S[t] + 1]; t--);
                        return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
                    }(e), i = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = r + 5, r + 4 <= i && -1 !== t ? J(e, t, r, n) : 4 === e.strategy || s === i ? (P(e, 2 + (n ? 1 : 0), 3), K(e, z, C)) : (P(e, 4 + (n ? 1 : 0), 3), function(e, t, r, n) {
                        var i;
                        for(P(e, t - 257, 5), P(e, r - 1, 5), P(e, n - 4, 4), i = 0; i < n; i++)P(e, e.bl_tree[2 * S[i] + 1], 3);
                        V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1);
                    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), K(e, e.dyn_ltree, e.dyn_dtree)), W(e), n && M(e);
                }, r._tr_tally = function(e, t, r) {
                    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (A[r] + u + 1)]++, e.dyn_dtree[2 * N(t)]++), e.last_lit === e.lit_bufsize - 1;
                }, r._tr_align = function(e) {
                    P(e, 2, 3), L(e, m, z), function(e) {
                        16 === e.bi_valid ? (U(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
                    }(e);
                };
            },
            {
                "../utils/common": 41
            }
        ],
        53: [
            function(e, t, r) {
                "use strict";
                t.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                };
            },
            {}
        ],
        54: [
            function(e, t, r) {
                (function(e) {
                    !function(r, n) {
                        "use strict";
                        if (!r.setImmediate) {
                            var i, s, t, a, o = 1, h = {}, u = !1, l = r.document, e = Object.getPrototypeOf && Object.getPrototypeOf(r);
                            e = e && e.setTimeout ? e : r, i = "[object process]" === ({}).toString.call(r.process) ? function(e) {
                                process.nextTick(function() {
                                    c(e);
                                });
                            } : function() {
                                if (r.postMessage && !r.importScripts) {
                                    var e = !0, t = r.onmessage;
                                    return r.onmessage = function() {
                                        e = !1;
                                    }, r.postMessage("", "*"), r.onmessage = t, e;
                                }
                            }() ? (a = "setImmediate$" + Math.random() + "$", r.addEventListener ? r.addEventListener("message", d, !1) : r.attachEvent("onmessage", d), function(e) {
                                r.postMessage(a + e, "*");
                            }) : r.MessageChannel ? ((t = new MessageChannel).port1.onmessage = function(e) {
                                c(e.data);
                            }, function(e) {
                                t.port2.postMessage(e);
                            }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e) {
                                var t = l.createElement("script");
                                t.onreadystatechange = function() {
                                    c(e), t.onreadystatechange = null, s.removeChild(t), t = null;
                                }, s.appendChild(t);
                            }) : function(e) {
                                setTimeout(c, 0, e);
                            }, e.setImmediate = function(e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for(var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)t[r] = arguments[r + 1];
                                var n = {
                                    callback: e,
                                    args: t
                                };
                                return h[o] = n, i(o), o++;
                            }, e.clearImmediate = f;
                        }
                        function f(e) {
                            delete h[e];
                        }
                        function c(e) {
                            if (u) setTimeout(c, 0, e);
                            else {
                                var t = h[e];
                                if (t) {
                                    u = !0;
                                    try {
                                        !function(e) {
                                            var t = e.callback, r = e.args;
                                            switch(r.length){
                                                case 0:
                                                    t();
                                                    break;
                                                case 1:
                                                    t(r[0]);
                                                    break;
                                                case 2:
                                                    t(r[0], r[1]);
                                                    break;
                                                case 3:
                                                    t(r[0], r[1], r[2]);
                                                    break;
                                                default:
                                                    t.apply(n, r);
                                            }
                                        }(t);
                                    } finally{
                                        f(e), u = !1;
                                    }
                                }
                            }
                        }
                        function d(e) {
                            e.source === r && "string" == typeof e.data && 0 === e.data.indexOf(a) && c(+e.data.slice(a.length));
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self);
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
            },
            {}
        ]
    }, {}, [
        10
    ])(10);
});

},{"f7295d6075386111":"bCaf4","cf30dbb97a1d82ba":"euskh"}],"bCaf4":[function(require,module,exports,__globalThis) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"9c62938f1dccc73c":"9I2RJ","aceacb6a4531a9d2":"geXY6"}],"9I2RJ":[function(require,module,exports,__globalThis) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

},{}],"geXY6":[function(require,module,exports,__globalThis) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"euskh":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["n0fw4","kTBnD"], "kTBnD", "parcelRequired413", {})

//# sourceMappingURL=googleKeepDataConverter.3c14d121.js.map
