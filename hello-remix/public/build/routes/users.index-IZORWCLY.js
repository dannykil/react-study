import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NQ57SQPO.js";
import {
  createHotContext
} from "/build/_shared/chunk-KZCHLYM4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/users.index.js
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/users.index.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/users.index.js"
  );
  import.meta.hot.lastModified = "1698983513922.2822";
}
function Users() {
  _s();
  const users = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Users" }, void 0, false, {
      fileName: "app/routes/users.index.js",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/users/${user.id}`, children: user.username }, void 0, false, {
      fileName: "app/routes/users.index.js",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, user.id, false, {
      fileName: "app/routes/users.index.js",
      lineNumber: 35,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/users.index.js",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/users.index.js",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Users, "wjvgEjf3DMWx2Q4Hr7fiL6VKBtw=", false, function() {
  return [useLoaderData];
});
_c = Users;
var _c;
$RefreshReg$(_c, "Users");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Users as default
};
//# sourceMappingURL=/build/routes/users.index-IZORWCLY.js.map
