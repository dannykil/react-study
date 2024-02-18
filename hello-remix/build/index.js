var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/stories.index.js
var stories_index_exports = {};
__export(stories_index_exports, {
  action: () => action,
  default: () => Stories,
  loader: () => loader
});
import { json, redirect } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  Form,
  unstable_useViewTransitionState
} from "@remix-run/react";

// app/lib/api.js
import axios from "axios";
async function getUsers() {
  return (await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  )).data;
}
async function getUser(id) {
  return (await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )).data;
}
async function getStories() {
  return (await axios.get("http://localhost:4000/stories")).data;
}
async function getStory(id) {
  return (await axios.get(`http://localhost:4000/stories/${id}`)).data;
}
async function createStory({ title, body }) {
  return (await axios.post("http://localhost:4000/stories", {
    title,
    body
  })).data;
}

// app/routes/stories.index.js
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var loader = async () => {
  let stories = await getStories();
  return json(stories);
};
async function action({ request }) {
  let formData = await request.formData(), title = formData.get("title"), body = formData.get("body"), story = await createStory({ title, body });
  return redirect(`/stories/${story.id}`);
}
function Stories() {
  let stories = useLoaderData(), transition = unstable_useViewTransitionState();
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "Stories" }, void 0, !1, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("ul", { children: stories.map((story) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: `/stories/${story.id}`, children: story.title }, void 0, !1, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, story.id, !1, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 34,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Form, { method: "post", children: /* @__PURE__ */ jsxDEV3(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: 320
        },
        children: [
          /* @__PURE__ */ jsxDEV3("input", { type: "text", name: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." }, void 0, !1, {
            fileName: "app/routes/stories.index.js",
            lineNumber: 48,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV3("textarea", { name: "body", placeholder: "\uC774\uC57C\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694..." }, void 0, !1, {
            fileName: "app/routes/stories.index.js",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV3("button", { type: "submit", children: transition.state === "submitting" ? "\uB4F1\uB85D \uC911..." : "\uB4F1\uB85D" }, void 0, !1, {
            fileName: "app/routes/stories.index.js",
            lineNumber: 50,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/stories.index.js",
        lineNumber: 40,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/stories.index.js",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stories.index.js",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/articles.$id.jsx
var articles_id_exports = {};
__export(articles_id_exports, {
  default: () => Article
});
import { useParams } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Article() {
  let params = useParams();
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    "\uAC8C\uC2DC\uAE00 ID: ",
    params.id
  ] }, void 0, !0, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/routes/stories.$id.jsx
var stories_id_exports = {};
__export(stories_id_exports, {
  default: () => Story,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  let { id } = params, data = await getStory(id);
  return json2(data);
};
function Story() {
  let story = useLoaderData2();
  return /* @__PURE__ */ jsxDEV5("div", { children: [
    /* @__PURE__ */ jsxDEV5("h1", { children: story.title }, void 0, !1, {
      fileName: "app/routes/stories.$id.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: story.body }, void 0, !1, {
      fileName: "app/routes/stories.$id.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/stories.$id.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/users.index.js
var users_index_exports = {};
__export(users_index_exports, {
  default: () => Users,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var loader3 = async () => {
  let data = await getUsers();
  return json3(data);
};
function Users() {
  let users = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6("h1", { children: "Users" }, void 0, !1, {
      fileName: "app/routes/users.index.js",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("ul", { children: users.map((user) => /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6(Link2, { to: `/users/${user.id}`, children: user.username }, void 0, !1, {
      fileName: "app/routes/users.index.js",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, user.id, !1, {
      fileName: "app/routes/users.index.js",
      lineNumber: 18,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/users.index.js",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users.index.js",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/users.$id.jsx
var users_id_exports = {};
__export(users_id_exports, {
  default: () => User,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var loader4 = async ({ params }) => {
  let { id } = params, user = await getUser(id);
  return json4(user);
};
function User() {
  let user = useLoaderData4();
  return /* @__PURE__ */ jsxDEV7("div", { children: [
    /* @__PURE__ */ jsxDEV7("h2", { children: user.username }, void 0, !1, {
      fileName: "app/routes/users.$id.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("code", { style: { whiteSpace: "pre" }, children: JSON.stringify(user, null, 2) }, void 0, !1, {
      fileName: "app/routes/users.$id.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users.$id.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/articles.jsx
var articles_exports = {};
__export(articles_exports, {
  default: () => Articles
});
import { Link as Link3, Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Articles() {
  return /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("hr", {}, void 0, !1, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("ul", { children: [
      /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(Link3, { to: "/articles/1", children: "\uAC8C\uC2DC\uAE00 1" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(Link3, { to: "/articles/1", children: "\uAC8C\uC2DC\uAE00 2" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(Link3, { to: "/articles/1", children: "\uAC8C\uC2DC\uAE00 3" }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/articles.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV9("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ jsxDEV9("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("ul", { children: [
      /* @__PURE__ */ jsxDEV9("li", { children: /* @__PURE__ */ jsxDEV9(Link4, { to: "/about", children: "about" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("li", { children: /* @__PURE__ */ jsxDEV9(Link4, { to: "/articles/1", children: "articles" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV10("div", { children: "\uC624! \uB9AC\uBBF9\uC2A4! \uD558\uC774~" }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PBSZYMUN.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-NQ57SQPO.js", "/build/_shared/chunk-KZCHLYM4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DBBPFPWB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VCF4SSBX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-GSBNBYVY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/articles": { id: "routes/articles", parentId: "root", path: "articles", index: void 0, caseSensitive: void 0, module: "/build/routes/articles-J5UT7RWB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/articles.$id": { id: "routes/articles.$id", parentId: "routes/articles", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.$id-LK63GX24.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/stories.$id": { id: "routes/stories.$id", parentId: "root", path: "stories/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/stories.$id-MZ5R6WZ7.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/stories.index": { id: "routes/stories.index", parentId: "root", path: "stories/index", index: void 0, caseSensitive: void 0, module: "/build/routes/stories.index-GSJV7FDX.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/users.$id": { id: "routes/users.$id", parentId: "root", path: "users/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/users.$id-XC26YWG6.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/users.index": { id: "routes/users.index", parentId: "root", path: "users/index", index: void 0, caseSensitive: void 0, module: "/build/routes/users.index-IZORWCLY.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "bce4c255", hmr: { runtime: "/build/_shared/chunk-KZCHLYM4.js", timestamp: 1698986426243 }, url: "/build/manifest-BCE4C255.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stories.index": {
    id: "routes/stories.index",
    parentId: "root",
    path: "stories/index",
    index: void 0,
    caseSensitive: void 0,
    module: stories_index_exports
  },
  "routes/articles.$id": {
    id: "routes/articles.$id",
    parentId: "routes/articles",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: articles_id_exports
  },
  "routes/stories.$id": {
    id: "routes/stories.$id",
    parentId: "root",
    path: "stories/:id",
    index: void 0,
    caseSensitive: void 0,
    module: stories_id_exports
  },
  "routes/users.index": {
    id: "routes/users.index",
    parentId: "root",
    path: "users/index",
    index: void 0,
    caseSensitive: void 0,
    module: users_index_exports
  },
  "routes/users.$id": {
    id: "routes/users.$id",
    parentId: "root",
    path: "users/:id",
    index: void 0,
    caseSensitive: void 0,
    module: users_id_exports
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: articles_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
