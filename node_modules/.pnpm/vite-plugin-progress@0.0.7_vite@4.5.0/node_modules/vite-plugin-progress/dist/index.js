var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => viteProgressBar
});
module.exports = __toCommonJS(src_exports);
var import_picocolors = __toESM(require("picocolors"));
var import_progress = __toESM(require("progress"));
var import_rd = __toESM(require("rd"));

// src/cache.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var dirPath = import_path.default.join(process.cwd(), "node_modules", ".progress");
var filePath = import_path.default.join(dirPath, "index.json");
var isFileExists = import_fs.default.existsSync(filePath) || false;
var isDirExists = import_fs.default.existsSync(dirPath) || false;
var getCacheData = () => {
  if (!isFileExists)
    return {
      cacheTransformCount: 0,
      cacheChunkCount: 0
    };
  return JSON.parse(import_fs.default.readFileSync(filePath, "utf8"));
};
var setCacheData = (data) => {
  !isDirExists && import_fs.default.mkdirSync(dirPath);
  import_fs.default.writeFileSync(filePath, JSON.stringify(data));
};

// src/index.ts
function viteProgressBar(options) {
  const { cacheTransformCount, cacheChunkCount } = getCacheData();
  let bar;
  const stream = (options == null ? void 0 : options.stream) || process.stderr;
  let outDir;
  let transformCount = 0;
  let chunkCount = 0;
  let transformed = 0;
  let fileCount = 0;
  let lastPercent = 0;
  let percent = 0;
  let errInfo;
  return {
    name: "vite-plugin-progress",
    enforce: "pre",
    apply: "build",
    config(config, { command }) {
      var _a;
      if (command === "build") {
        config.logLevel = "silent";
        outDir = ((_a = config.build) == null ? void 0 : _a.outDir) || "dist";
        options = __spreadValues({
          width: 40,
          complete: "\u2588",
          incomplete: "\u2591"
        }, options);
        options.total = (options == null ? void 0 : options.total) || 100;
        const transforming = isFileExists ? `${import_picocolors.default.magenta("Transforms:")} :transformCur/:transformTotal | ` : "";
        const chunks = isFileExists ? `${import_picocolors.default.magenta("Chunks:")} :chunkCur/:chunkTotal | ` : "";
        const barText = `${import_picocolors.default.cyan(`[:bar]`)}`;
        const barFormat = options.format || `${import_picocolors.default.green("Building")} ${barText} :percent | ${transforming}${chunks}Time: :elapseds`;
        delete options.format;
        bar = new import_progress.default(barFormat, options);
        if (!isFileExists) {
          const readDir = import_rd.default.readSync(options.srcDir || "src");
          const reg = /\.(vue|ts|js|jsx|tsx|css|scss||sass|styl|less)$/gi;
          readDir.forEach((item) => reg.test(item) && fileCount++);
        }
      }
    },
    transform(code, id) {
      transformCount++;
      if (!isFileExists) {
        const reg = /node_modules/gi;
        if (!reg.test(id) && percent < 0.25) {
          transformed++;
          percent = +(transformed / (fileCount * 2)).toFixed(2);
          percent < 0.8 && (lastPercent = percent);
        }
        if (percent >= 0.25 && lastPercent <= 0.65) {
          lastPercent = +(lastPercent + 1e-3).toFixed(4);
        }
      }
      if (isFileExists)
        runCachedData();
      bar.update(lastPercent, {
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: 0
      });
      return {
        code,
        map: null
      };
    },
    renderChunk() {
      chunkCount++;
      if (lastPercent <= 0.95)
        isFileExists ? runCachedData() : lastPercent = +(lastPercent + 5e-3).toFixed(4);
      bar.update(lastPercent, {
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: chunkCount
      });
      return null;
    },
    buildEnd(err) {
      errInfo = err;
    },
    closeBundle() {
      if (!errInfo) {
        bar.update(1);
        bar.terminate();
        setCacheData({
          cacheTransformCount: transformCount,
          cacheChunkCount: chunkCount
        });
        stream.write(`${import_picocolors.default.cyan(import_picocolors.default.bold(`Build successful. Please see ${outDir} directory`))}`);
        stream.write("\n");
        stream.write("\n");
      } else {
        stream.write("\n");
        stream.write(`${import_picocolors.default.red(import_picocolors.default.bold(`Build failed. Please check the error message`))}`);
        stream.write("\n");
        stream.write("\n");
      }
    }
  };
  function runCachedData() {
    if (transformCount === 1) {
      stream.write("\n");
      bar.tick({
        transformTotal: cacheTransformCount,
        transformCur: transformCount,
        chunkTotal: cacheChunkCount,
        chunkCur: 0
      });
    }
    transformed++;
    percent = lastPercent = +(transformed / (cacheTransformCount + cacheChunkCount)).toFixed(4);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
