import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  useLoaderData,
  useViewTransitionState
} from "/build/_shared/chunk-NQ57SQPO.js";
import {
  createHotContext
} from "/build/_shared/chunk-KZCHLYM4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/stories.index.js
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/stories.index.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/stories.index.js"
  );
  import.meta.hot.lastModified = "1698986425756.2693";
}
function Stories() {
  _s();
  const stories = useLoaderData();
  const transition = useViewTransitionState();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Stories" }, void 0, false, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/stories/${story.id}`, children: story.title }, void 0, false, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, story.id, false, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 49,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: 320
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." }, void 0, false, {
        fileName: "app/routes/stories.index.js",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "body", placeholder: "\uC774\uC57C\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694..." }, void 0, false, {
        fileName: "app/routes/stories.index.js",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: transition.state === "submitting" ? "\uB4F1\uB85D \uC911..." : "\uB4F1\uB85D" }, void 0, false, {
        fileName: "app/routes/stories.index.js",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stories.index.js",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Stories, "DEgaWHBNoKZLGiLbGGdASh8cBis=", false, function() {
  return [useLoaderData];
});
_c = Stories;
var _c;
$RefreshReg$(_c, "Stories");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Stories as default
};
//# sourceMappingURL=/build/routes/stories.index-GSJV7FDX.js.map
