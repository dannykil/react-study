import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  useParams
} from "/build/_shared/chunk-NQ57SQPO.js";
import {
  createHotContext
} from "/build/_shared/chunk-KZCHLYM4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/articles.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles.$id.jsx"
  );
  import.meta.hot.lastModified = "1698977291063.934";
}
function Article() {
  _s();
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "\uAC8C\uC2DC\uAE00 ID: ",
    params.id
  ] }, void 0, true, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_s(Article, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
  return [useParams];
});
_c = Article;
var _c;
$RefreshReg$(_c, "Article");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Article as default
};
//# sourceMappingURL=/build/routes/articles.$id-LK63GX24.js.map
