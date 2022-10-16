var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/.pnpm/remix@1.7.2/node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/remix@1.7.2/node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/styles/night-owl.css
var require_night_owl = __commonJS({
  "node_modules/.pnpm/highlight.js@11.6.0/node_modules/highlight.js/styles/night-owl.css"(exports, module2) {
    module2.exports = "/build/_assets/night-owl-E5Q6RSIX.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 11,
    columnNumber: 33
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react = require("@remix-run/react"), import_server_runtime = require("@remix-run/server-runtime"), import_react2 = require("@remix-run/react");

// app/sanity/config.ts
var import_sanity8 = require("sanity"), import_desk = require("sanity/desk"), import_code_input = require("@sanity/code-input"), import_vision = require("@sanity/vision");

// app/sanity/schema/block-content.ts
var import_sanity = require("sanity"), block_content_default = (0, import_sanity.defineType)({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    (0, import_sanity.defineArrayMember)({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              },
              {
                title: "REL",
                name: "rel",
                type: "string"
              }
            ]
          }
        ]
      }
    }),
    (0, import_sanity.defineArrayMember)({
      name: "codeBlock",
      title: "Code Block",
      type: "code",
      options: {
        theme: "solarized_dark",
        language: "js",
        languageAlternatives: [
          { title: "YAML", value: "yaml" },
          { title: "Javascript", value: "js" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "Rust", value: "rust", mode: "rust" },
          { title: "SASS", value: "sass" }
        ]
      }
    }),
    (0, import_sanity.defineArrayMember)({
      type: "image",
      options: { hotspot: !0 }
    })
  ]
});

// app/sanity/schema/category.ts
var import_sanity2 = require("sanity"), category_default = (0, import_sanity2.defineType)({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    (0, import_sanity2.defineField)({
      name: "title",
      title: "Title",
      type: "string"
    }),
    (0, import_sanity2.defineField)({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
});

// app/sanity/schema/post.ts
var import_sanity3 = require("sanity"), post_default = (0, import_sanity3.defineType)({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    (0, import_sanity3.defineField)({
      name: "title",
      title: "Title",
      type: "string"
    }),
    (0, import_sanity3.defineField)({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    (0, import_sanity3.defineField)({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    }),
    (0, import_sanity3.defineField)({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: !0
      }
    }),
    (0, import_sanity3.defineField)({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    }),
    (0, import_sanity3.defineField)({
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }),
    (0, import_sanity3.defineField)({
      name: "body",
      title: "Body",
      type: "blockContent"
    })
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      let { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    }
  }
});

// app/sanity/schema/author.ts
var import_sanity4 = require("sanity"), author_default = (0, import_sanity4.defineType)({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    (0, import_sanity4.defineField)({
      name: "name",
      title: "Name",
      type: "string"
    }),
    (0, import_sanity4.defineField)({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    }),
    (0, import_sanity4.defineField)({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: !0
      }
    }),
    (0, import_sanity4.defineField)({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
});

// app/sanity/schema/link.ts
var import_sanity5 = require("sanity"), link_default = (0, import_sanity5.defineType)({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    (0, import_sanity5.defineField)({
      title: "Select the type of link",
      description: "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to other pages in the SANITY database.",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" }
        ],
        layout: "radio"
      }
    }),
    (0, import_sanity5.defineField)({
      title: "URL",
      name: "href",
      type: "url",
      hidden: ({ parent }) => (parent == null ? void 0 : parent.linkType) !== "external",
      validation: (Rule) => Rule.uri({
        allowRelative: !0,
        scheme: ["https", "http", "mailto", "tel"]
      })
    }),
    (0, import_sanity5.defineField)({
      title: "Open in new tab?",
      name: "blank",
      description: "Read https://css-tricks.com/use-target_blank/",
      type: "boolean",
      hidden: ({ parent }) => (parent == null ? void 0 : parent.linkType) !== "external"
    }),
    (0, import_sanity5.defineField)({
      name: "internalLink",
      type: "reference",
      title: "Internal Link",
      hidden: ({ parent }) => (parent == null ? void 0 : parent.linkType) !== "internal",
      to: [
        { type: "post" }
      ]
    })
  ]
});

// app/sanity/schema/global-settings.ts
var import_sanity6 = require("sanity"), global_settings_default = (0, import_sanity6.defineType)({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    (0, import_sanity6.defineField)({
      name: "siteTitle",
      title: "Site Title",
      type: "string"
    }),
    (0, import_sanity6.defineField)({
      name: "aboutMe",
      title: "About Me",
      type: "blockContent"
    })
  ]
});

// app/sanity/schema/work-experience.ts
var import_sanity7 = require("sanity"), work_experience_default = (0, import_sanity7.defineType)({
  name: "cv.experience",
  title: "Work Experience",
  type: "document",
  fields: [
    (0, import_sanity7.defineField)({
      name: "title",
      title: "Title",
      type: "string"
    }),
    (0, import_sanity7.defineField)({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    (0, import_sanity7.defineField)({
      name: "url",
      title: "URL",
      type: "url"
    }),
    (0, import_sanity7.defineField)({
      name: "isCurrent",
      title: "Curretnly Working Here",
      type: "boolean"
    }),
    (0, import_sanity7.defineField)({
      name: "startDate",
      title: "Published at",
      type: "date"
    }),
    (0, import_sanity7.defineField)({
      name: "endDate",
      title: "Published at",
      type: "date"
    }),
    (0, import_sanity7.defineField)({
      name: "body",
      title: "Body",
      type: "blockContent"
    })
  ]
});

// app/sanity/schema/index.ts
var schemaTypes = [
  post_default,
  author_default,
  category_default,
  block_content_default,
  global_settings_default,
  link_default,
  work_experience_default
];

// app/sanity/config.ts
var projectDetails = () => {
  var _a2, _b, _c;
  return {
    projectId: typeof document > "u" ? process.env.SANITY_PROJECT_ID : (_a2 = window == null ? void 0 : window.ENV) == null ? void 0 : _a2.projectId,
    dataset: typeof document > "u" ? process.env.SANITY_DATASET : (_b = window == null ? void 0 : window.ENV) == null ? void 0 : _b.dataset,
    apiVersion: typeof document > "u" ? process.env.SANITY_API_VERSION : (_c = window == null ? void 0 : window.ENV) == null ? void 0 : _c.apiVersion
  };
}, _a, config = (0, import_sanity8.createConfig)({
  ...projectDetails(),
  plugins: [
    (0, import_desk.deskTool)(),
    (0, import_code_input.codeInput)(),
    (0, import_vision.visionTool)({
      defaultApiVersion: typeof document > "u" ? process.env.SANITY_API_VERSION : (_a = window == null ? void 0 : window.ENV) == null ? void 0 : _a.apiVersion,
      defaultDataset: "main"
    })
  ],
  basePath: "/studio",
  schema: {
    types: schemaTypes
  }
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OWWKKAFD.css";

// app/styles/global.css
var global_default = "/build/_assets/global-ILO253AF.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({ title: "Welcome to the drkweb | drk.wtf" });
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default }
  ];
}
async function loader() {
  return (0, import_server_runtime.json)({ ENV: projectDetails() });
}
function App() {
  let data = (0, import_react2.useLoaderData)(), { pathname } = (0, import_react2.useLocation)(), isStudioRoute = pathname.startsWith("/studio");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          isStudioRoute && typeof document > "u" ? "__STYLES__" : null
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "p-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 52
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/til[.]rss.tsx
var til_rss_exports = {};
__export(til_rss_exports, {
  loader: () => loader2
});

// app/sanity/queries/all-til-posts.ts
var import_groq = __toESM(require("groq")), all_til_posts_default = import_groq.default`
*[
  _type == "post" && "til" in categories[]->title
]{
  _id, 
  title,
  body, 
  slug, 
  piblishedAt,
  author->
}
`;

// app/sanity/client.ts
var import_client = __toESM(require("@sanity/client"));
var client = new import_client.default({
  ...projectDetails(),
  useCdn: !0
});

// app/routes/til[.]rss.tsx
var import_feed = require("feed"), import_to_html = require("@portabletext/to-html");
var loader2 = async ({
  request
}) => {
  let tilPosts = await client.fetch(all_til_posts_default), host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host)
    throw new Error("Could not determine domain URL.");
  let domain = `${host.includes("localhost") ? "http" : "https"}://${host}`, tilUrl = `${domain}/til`, feed = new import_feed.Feed({
    title: "TIL",
    description: "Today I Learned",
    id: tilUrl,
    link: tilUrl,
    language: "en",
    copyright: `\xA9 ${new Date().getFullYear()} Derek Reynolds`,
    feedLinks: [{
      type: "application/rss+xml",
      rel: "self",
      href: tilUrl
    }],
    author: {
      name: "Derek Reynolds",
      email: "derekr@me.com",
      link: domain
    }
  });
  tilPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${tilUrl}/${post.slug.current}`,
      link: `${tilUrl}/${post.slug.current}`,
      description: "TIL post",
      content: (0, import_to_html.toHTML)(post.body),
      date: new Date(post.publishedAt),
      author: [{
        name: post.author.name,
        email: post.author.email,
        link: post.author.url
      }]
    });
  });
  let rssString = feed.rss2();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(
        Buffer.byteLength(rssString)
      )
    }
  });
};

// app/routes/studio/*.tsx
var __exports = {};
__export(__exports, {
  default: () => StudioPage,
  links: () => links2
});
var import_remix_utils = require("remix-utils"), import_sanity9 = require("sanity");

// app/styles/studio.css
var studio_default = "/build/_assets/studio-XTBJLGKN.css";

// app/routes/studio/*.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: studio_default }];
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_utils.ClientOnly, {
    children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_sanity9.Studio, {
      config
    }, void 0, !1, {
      fileName: "app/routes/studio/*.tsx",
      lineNumber: 14,
      columnNumber: 29
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/studio/*.tsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3
});
var import_remix2 = __toESM(require_dist());

// app/components/sanity-content.tsx
var import_react3 = require("@portabletext/react"), import_react4 = require("@remix-run/react");

// app/components/sanity-image.tsx
var import_image_url = __toESM(require("@sanity/image-url")), import_asset_utils = require("@sanity/asset-utils");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SanityImage = function(props) {
  let { value, isInline } = props, { width, height } = (0, import_asset_utils.getImageDimensions)(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
    className: "w-full h-auto not-prose",
    src: (0, import_image_url.default)(projectDetails()).image(value).width(isInline ? 100 : 800).fit("max").auto("format").url(),
    alt: value.alt || "",
    loading: "lazy",
    style: {
      display: isInline ? "inline-block" : "block",
      aspectRatio: width / height
    }
  }, void 0, !1, {
    fileName: "app/components/sanity-image.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/components/sanity-content.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), components = {
  types: {
    image: SanityImage,
    codeBlock: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      dangerouslySetInnerHTML: { __html: props.value.code }
    }, void 0, !1, {
      fileName: "app/components/sanity-content.tsx",
      lineNumber: 12,
      columnNumber: 27
    }, this)
  },
  marks: {
    link: ({ value, children }) => {
      let href = value != null && value.href ? value.href.replace("https://drk.wtf", "") : "", target = href.startsWith("http") ? "_blank" : void 0;
      return target ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        href: value == null ? void 0 : value.href,
        target,
        rel: value != null && value.rel ? value.rel : target === "_blank" && "noindex nofollow",
        className: "text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
        children
      }, void 0, !1, {
        fileName: "app/components/sanity-content.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
        to: href,
        rel: value == null ? void 0 : value.rel,
        children
      }, void 0, !1, {
        fileName: "app/components/sanity-content.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this);
    }
  }
}, SanityContent = function(props) {
  let { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.PortableText, {
    value,
    components
  }, void 0, !1, {
    fileName: "app/components/sanity-content.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};

// app/sanity/queries/home-page.ts
var import_groq2 = __toESM(require("groq")), home_page_default = import_groq2.default`
{
  "globalSettings": *[_type == "globalSettings"]{ aboutMe },
  "author": *[_type == "author"][0]{ "imageUrl": image.asset->url },
  "workExperience": *[_type == "cv.experience"]{ 
    title,
    url,
    startDate,
    endDate,
    isCurrent,
    body
  } | order(startDate desc),
}
`;

// app/routes/index.tsx
var import_radash = require("radash"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async () => ({
  ...await client.fetch(home_page_default)
}), ExperienceItem = ({ title, href, startYear, endYear, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mb-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
              children: title
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 17,
              columnNumber: 9
            }, this),
            href && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "href",
              children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href,
                  target: "_blank",
                  className: "text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
                  children: href
                }, void 0, !1, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 21,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-sm text-gray-400 time",
          children: startYear === endYear ? startYear : `${startYear}\u2013${endYear}`
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    children
  ]
}, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this);
function Index() {
  var _a2;
  let { author, globalSettings, workExperience } = (0, import_remix2.useLoaderData)(), [currentExperience, previousExperience] = (0, import_radash.fork)(workExperience, (e) => e.isCurrent);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
        className: "sr-only h-card",
        href: "https://drk.wtf",
        rel: "me",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: author.imageUrl,
            alt: ""
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          "Derek Reynolds"
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-2xl mb-8 mast-grid [&>p:first-of-type]:mb-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-lg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "/",
              children: "drk.wtf"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, {
            value: (_a2 = globalSettings[0]) == null ? void 0 : _a2.aboutMe
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid mb-5 experience-grid md:grid-cols-3",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "space-y-4 experience md:col-start-2 [&>article:last-of-type]:mb-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-gray-600 text-md",
              children: "Currently"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            currentExperience.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceItem, {
              title: item.title,
              href: item.url ?? "",
              startYear: new Date(item.startDate).getFullYear(),
              endYear: item.endDate ? new Date(item.endDate).getFullYear() : "Present",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, {
                value: item.body
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, item.title, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-gray-600 text-md",
              children: "Previously"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            previousExperience.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExperienceItem, {
              title: item.title,
              href: item.url ?? "",
              startYear: new Date(item.startDate).getFullYear(),
              endYear: item.endDate ? new Date(item.endDate).getFullYear() : "Present",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, {
                value: item.body
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 81,
                columnNumber: 17
              }, this)
            }, item.title, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://www.linkedin.com/in/derek-reynolds-11a806132/",
              target: "_blank",
              className: "block text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
              children: [
                "Linkedin ",
                ">>"
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: [
          "\xA9 Derek Reynolds ",
          new Date().getFullYear()
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/til.tsx
var til_exports = {};
__export(til_exports, {
  default: () => Til,
  links: () => links3
});
var import_remix3 = __toESM(require_dist()), import_night_owl = __toESM(require_night_owl()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links3() {
  return [{ rel: "stylesheet", href: import_night_owl.default }];
}
function Til() {
  let location = (0, import_remix3.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container pt-10 pb-10 mx-auto prose",
    children: [
      location.pathname !== "/til" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Link, {
        to: "/til",
        className: "block mb-10",
        children: "\u2190 \u{1F914} TIL"
      }, void 0, !1, {
        fileName: "app/routes/til.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Outlet, {}, void 0, !1, {
        fileName: "app/routes/til.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        dangerouslySetInnerHTML: {
          __html: `
// Page load (you could wrap this in a DOM ready if the script is loaded early).
hashchange()

// When URL changes.
window.addEventListener('hashchange', hashchange)

// When on the URL already, perhaps after scrolling, and clicking again, which
// doesn\u2019t emit \`hashchange\`.
document.addEventListener(
  'click',
  (event) => {
    if (
      event.target &&
      event.target instanceof HTMLAnchorElement &&
      event.target.href === location.href &&
      location.hash.length > 1
    ) {
      setTimeout(() => {
        if (!event.defaultPrevented) {
          hashchange()
        }
      })
    }
  },
  false
)

function hashchange() {
  /** @type {string|undefined} */
  let hash

  try {
    hash = decodeURIComponent(location.hash.slice(1)).toLowerCase()
  } catch {
    return
  }

  const name = 'user-content-' + hash
  const target = document.getElementById(name) || document.getElementsByName(name)[0]

  if (target) {
    setTimeout(() => {
      target.scrollIntoView()
    }, 0)
  }
}
`
        }
      }, void 0, !1, {
        fileName: "app/routes/til.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/til.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/til/$slug.$id.tsx
var slug_id_exports = {};
__export(slug_id_exports, {
  default: () => TiLIndexRoute,
  loader: () => loader4
});
var import_react5 = require("@remix-run/react"), import_groq3 = __toESM(require("groq")), shiki = __toESM(require("shiki"));
var fs = __toESM(require("fs/promises")), import_path = require("path"), import_nord = __toESM(require("shiki/themes/nord.json")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var loader4 = async ({ params }) => {
  let { slug, id } = params, post = await client.fetch(
    import_groq3.default`*[_type == "post" && slug.current == $slug && _id == $id][0]{ title, body }`,
    { slug, id }
  );
  return post ? (post.body = await Promise.all(
    post.body.map(async (block) => block._type !== "codeBlock" ? block : ((await shiki.getHighlighter({})).loadTheme(import_nord.default), {
      ...block,
      code
    }))
  ), { post }) : new Response("Not found", { status: 404 });
};
function TiLIndexRoute() {
  var _a2;
  let { post } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      post != null && post.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: post.title
      }, void 0, !1, {
        fileName: "app/routes/til/$slug.$id.tsx",
        lineNumber: 78,
        columnNumber: 22
      }, this) : null,
      (post == null ? void 0 : post.body) && ((_a2 = post.body) == null ? void 0 : _a2.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "prose",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, {
          value: post.body
        }, void 0, !1, {
          fileName: "app/routes/til/$slug.$id.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/til/$slug.$id.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this) : null
    ]
  }, void 0, !0, {
    fileName: "app/routes/til/$slug.$id.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/routes/til/index.tsx
var til_exports2 = {};
__export(til_exports2, {
  default: () => TiLIndexRoute2,
  loader: () => loader5
});
var import_react6 = require("@remix-run/react"), import_groq4 = __toESM(require("groq"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader5 = async () => ({ tilPosts: await client.fetch(
  import_groq4.default`*[_type == "post" && "til" in categories[]->title]{ _id, title, slug }`
) });
function TiLIndexRoute2() {
  let { tilPosts } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    children: tilPosts.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
          to: `/til/${note.slug.current}/${note._id}`,
          children: note.title
        }, void 0, !1, {
          fileName: "app/routes/til/index.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        note.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: note.description
        }, void 0, !1, {
          fileName: "app/routes/til/index.tsx",
          lineNumber: 23,
          columnNumber: 31
        }, this) : null
      ]
    }, note.slug, !0, {
      fileName: "app/routes/til/index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/til/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/g.tsx
var g_exports = {};
__export(g_exports, {
  default: () => Garden,
  links: () => links4
});
var import_remix4 = __toESM(require_dist()), import_night_owl2 = __toESM(require_night_owl()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links4() {
  return [{ rel: "stylesheet", href: import_night_owl2.default }];
}
function Garden() {
  let location = (0, import_remix4.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container pt-10 pb-10 mx-auto prose",
    children: [
      location.pathname !== "/g" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix4.Link, {
        to: "/g",
        children: "\u2190 \u{1F331} garden"
      }, void 0, !1, {
        fileName: "app/routes/g.tsx",
        lineNumber: 13,
        columnNumber: 37
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/g.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        dangerouslySetInnerHTML: {
          __html: `
// Page load (you could wrap this in a DOM ready if the script is loaded early).
hashchange()

// When URL changes.
window.addEventListener('hashchange', hashchange)

// When on the URL already, perhaps after scrolling, and clicking again, which
// doesn\u2019t emit \`hashchange\`.
document.addEventListener(
  'click',
  (event) => {
    if (
      event.target &&
      event.target instanceof HTMLAnchorElement &&
      event.target.href === location.href &&
      location.hash.length > 1
    ) {
      setTimeout(() => {
        if (!event.defaultPrevented) {
          hashchange()
        }
      })
    }
  },
  false
)

function hashchange() {
  /** @type {string|undefined} */
  let hash

  try {
    hash = decodeURIComponent(location.hash.slice(1)).toLowerCase()
  } catch {
    return
  }

  const name = 'user-content-' + hash
  const target = document.getElementById(name) || document.getElementsByName(name)[0]

  if (target) {
    setTimeout(() => {
      target.scrollIntoView()
    }, 0)
  }
}
`
        }
      }, void 0, !1, {
        fileName: "app/routes/g.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/g.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// mdx:routes/g/digital-garden-with-obsidian-and-remix.md
var digital_garden_with_obsidian_and_remix_exports = {};
__export(digital_garden_with_obsidian_and_remix_exports, {
  default: () => digital_garden_with_obsidian_and_remix_default,
  filename: () => filename,
  headers: () => headers,
  meta: () => meta2
});
var import_react7 = __toESM(require("react"));
function MDXContent(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span",
    ul: "ul",
    li: "li",
    strong: "strong"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(_components.h1, {
    id: "user-content-digital-garden-with-obsidian-and-remix"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#digital-garden-with-obsidian-and-remix"
  }, "Digital Garden with Obsidian and Remix")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Whenever I go to update my personal site I usually start by reviewing the previous update. Sure enough it's usually from December of the previous year. So I find myself here again excited to try out a couple new technologies (", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "tools/remix"
  }, "remix"), ") and tools using this site as my laboratory."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Firstly I really want to have a digital garden to consistantly cultivate. I've always had a difficult time sticking with different tools that operate in a way that I enjoy. Notion feels a bit too heavy and I hate not having the data locally and worse ultiamtely owned by a vendor. I was Obsidian curious and have enjoyed some of the office hour videos by ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "people/bencodezen"
  }, "bencodezen"), ". After about a year of keeping tabs it seems like there's a lot there that I really appreciate. The extensibility via plugins and themes. Data is stored as flat markdown files (though in a particular Obsidian falvor). The community surrounding it is full of hackers/DIYers with lots of neat tools like ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "tools/obsidian-export"
  }, "obsidian-export"), ". Primarily it's an almost perfect balance of lightweight editing and feature richness that I really appreciate."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Secondly the other technology I've been keeping tabs on this last year is ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "tools/remix"
  }, "remix"), " (https://remix.run). Remix is a refreshing new web framework that similar to Obsidian strikes a nice balance between leightweight editing and extensibility via thoughtful APIs that build on top of existing web platform APIs and concepts. It allows me to use tools I've been deveoping a skillset for the past 5 years (React primarily) while building websites in a way that I want (server side rendering, simple form submissions\u2026\xA0you know like the good old days!). Building a robus web experience hasn't felt this frictionless in a long time. I'm also opting to use a web framework instead of simpling exporting/building the markdown because I plan on experimenting and building in richer features and tooling for myself to use."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "OK\u2026\xA0Enough context setting. My main goal for this note is capturing the setup in case I want to do this again or keep up with how the setup might change."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-setting-up-remix"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#setting-up-remix"
  }, "Setting up Remix")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Going to setup Remix first because I'm keeping my Obsidian vault (more on that later) in the site repo."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-bash"
  }, `npx create-remix@latest
`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# choose Remix App Server"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "cd"), ` [whatever you named the project]
npm run dev
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "https://remix.run/docs/en/v1/tutorials/blog"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "The scaffolding of this initial project willd depend on when/how the setup command is run. I chose Vercel for my deployment paltform."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "We should be able to run the dev command and access our site at localhost:3000."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "I also set this up as a git repo by running:"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-csharp"
  }, "git ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "init"), `
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-setting-up-obsidian"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#setting-up-obsidian"
  }, "Setting up Obsidian")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Download the latest version of Obsidian at their website https://obsidian.md. It will ask to open and existing vault or create a new one. I created a new vault in the root of my my repo (next to remix's ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "app"), " directory) named ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "garden"), ". You can put it inside the routes directory, but may hit issues with remix trying to parse the ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, ".obsidian"), " directory as a route. This may no longer be an issue with https://github.com/remix-run/remix/pull/988. Created a few sample notes to test out some of Obsidian's key features like backlinks and reference embeds. Not necessary, but I also installed the Minimal Theme https://github.com/kepano/obsidian-minimal."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-exporting-obsidian-to-remix"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#exporting-obsidian-to-remix"
  }, "Exporting Obsidian to Remix")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Now that I have some markdown I need to by able to serve it from my Remix site. Luckily Remix has first class support for ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "tools/mdx"
  }, "mdx"), " (https://mdxjs.com) so I'm going with an approach of copying the markdown files from Obsidian to my ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "app/routes"), " folder. Obsidian doesn't have a bulk export feature as of yet (it's on their roadmap), but luckily someone has authored a great tool ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "tools/obsidian-export"
  }, "obsidian-export"), " that we can leverage. It also will handle compiling backlinks and reference embeds automatically for us."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "For installation I already had rust installed and opted to use the crates package manger, but you could download a pre-built binary as well. Check thir repo for more info https://github.com/zoni/obsidian-export."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-arduino"
  }, `brew install rust
cargo install obsidian-`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), `
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Once installed you can runt he command to export from ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "garden"), " in to your ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "app/routes"), " directory."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-arduino"
  }, "obsidian-", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), ` garden/ app/routes/g
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Now you can navigate to any of your markdown compiled pages via http://localhost:3000/g/some-page. However! You may notice that your links to other markdown pages (typically backlinks) are broken. By default the compiled links contain the ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, ".md"), " extension. We'll need to strip those. Otherwise things should be working fairly well. The only other snag I hit was markdown files containing html using ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "class"), " instead of ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "className"), " because you know\u2026\xA0MDX. There's a fix for that too!"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-configuring-remix"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#configuring-remix"
  }, "Configuring Remix")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Remix allows customizing the MDX pipeline via ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "https://remix.run/docs/en/v1/guides/mdx#advanced-configuration"
  }, "rehype and remark plugins"), ". I've opted to use a ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "https://github.com/rehypejs/rehype/blob/main/doc/plugins"
  }, "few plugins"), ":"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react7.default.createElement(_components.li, null, /* @__PURE__ */ import_react7.default.createElement(_components.strong, null, "rehypeReact"), " \u2013\xA0For addressing the class vs className warning."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.li, null, /* @__PURE__ */ import_react7.default.createElement(_components.strong, null, "rehypeSanitize"), " \u2013\xA0I plan on using other plugins in Obsidian and possible rehype/remark and think it's helpful to sanitize any generated html."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.li, null, /* @__PURE__ */ import_react7.default.createElement(_components.strong, null, "rehypeRewrite"), " \u2013\xA0For striping the ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, ".md"), " extension."), `
`), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-csharp"
  }, "npm ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "add"), ` rehype-rewrite rehype-react rehype-sanitize
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "And my ", /* @__PURE__ */ import_react7.default.createElement(_components.code, null, "remix.config.js"), " file looks like this:"), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-javascript"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "React"), " = ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-built_in"
  }, "require"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'react'"), `)

`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-comment"
  }, `/**
 * `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-doctag"
  }, "@type"), " {", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-type"
  }, "import('@remix-run/dev/config').AppConfig"), `}
 */`), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-variable language_"
  }, "module"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "exports"), ` = {
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "appDirectory"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'app'"), `,
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "assetsBuildDirectory"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'public/build'"), `,
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "publicPath"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'/build/'"), `,
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "serverBuildDirectory"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'api/_build'"), `,
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "ignoredRouteFiles"), ": [", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'.*'"), `],
  `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "mdx"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "async"), ` (filename) => {
    `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " [rehypeRewrite, rehypeReact, rehypeSanitize] = ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "await"), " ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Promise"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "all"), `([
      `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "import"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'rehype-rewrite'"), ").", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "then"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-params"
  }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "default"), `),
      `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "import"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'rehype-react'"), ").", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "then"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-params"
  }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "default"), `),
      `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "import"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'rehype-sanitize'"), ").", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "then"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-params"
  }, "mod"), ") =>"), " mod.", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "default"), `),
    ])

    `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), ` {
      `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rehypePlugins"), `: [
        [
          rehypeRewrite,
          {
            `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "rewrite"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-function"
  }, "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-params"
  }, "node"), ") =>"), ` {
              `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "if"), " (node && node.", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "tagName"), " === ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'a'"), `) {
                node.`, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "properties"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "href"), " = node.", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "properties"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "href"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "replace"), "(", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'.md'"), ", ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-string"
  }, "''"), `)
              }
            },
          },
        ],
        [rehypeReact, { `, /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "createElement"), ": ", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "React"), ".", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-property"
  }, "createElement"), ` }],
        rehypeSanitize,
      ],
    }
  },
}
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-workflow"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#workflow"
  }, "Workflow")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Right now I'm opting for a more manual workflow instead of incorporating watching and exporting on change. Doesn't seem necessary at this point and Obsidian is constantly saving which may make live reload problematic. Anyway as I'm authoring or whenever I feel the need I'll run the export command while remix dev is running in a separate process."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-arduino"
  }, `npm run dev
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.pre, null, /* @__PURE__ */ import_react7.default.createElement(_components.code, {
    className: "hljs language-arduino"
  }, "obsidian-", /* @__PURE__ */ import_react7.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), ` garden/ app/routes/g
`)), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "The exporitng should cause remix to live reload or you can manually refresh as needed."), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.h2, {
    id: "user-content-long-term"
  }, /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: "#long-term"
  }, "Long-term")), `
`, /* @__PURE__ */ import_react7.default.createElement(_components.p, null, "Unsure if this is the setup I'll stick with, but works great for now. I'm hoping Obsidian's first class exporting will negate the need for a 3rd party tool (even if it is great!). I left out creating an index page for the garden or a way to find them, but the cool thing about this approach is once exported in to a Remix project you can leverage their recommended approach which is documented here ", /* @__PURE__ */ import_react7.default.createElement(_components.a, {
    href: ""
  }, "https://remix.run/docs/en/v1.0.6/guides/mdx#example-blog-usage"), "."));
  return MDXLayout ? /* @__PURE__ */ import_react7.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var digital_garden_with_obsidian_and_remix_default = MDXContent, filename = "digital-garden-with-obsidian-and-remix.md", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/tools/obsidian-export.md
var obsidian_export_exports = {};
__export(obsidian_export_exports, {
  default: () => obsidian_export_default,
  filename: () => filename2,
  headers: () => headers2,
  meta: () => meta3
});
var import_react8 = __toESM(require("react"));
function MDXContent2(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(_components.p, null, /* @__PURE__ */ import_react8.default.createElement(_components.a, {
    href: ""
  }, "https://github.com/zoni/obsidian-export")));
  return MDXLayout ? /* @__PURE__ */ import_react8.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var obsidian_export_default = MDXContent2, filename2 = "obsidian-export.md", headers2 = typeof attributes < "u" && attributes.headers, meta3 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/digital-garden-notes.md
var digital_garden_notes_exports = {};
__export(digital_garden_notes_exports, {
  default: () => digital_garden_notes_default,
  filename: () => filename3,
  headers: () => headers3,
  meta: () => meta4
});
var import_react9 = __toESM(require("react"));
function MDXContent3(props = {}) {
  let _components = Object.assign({
    ul: "ul",
    li: "li",
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "RSS Feed on specific posts so you can subscribe to updates?"), `
`), `
`, /* @__PURE__ */ import_react9.default.createElement(_components.p, null, /* @__PURE__ */ import_react9.default.createElement(_components.a, {
    href: "other-note"
  }, "other-note")), `
`, /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "#digital-garden"));
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var digital_garden_notes_default = MDXContent3, filename3 = "digital-garden-notes.md", headers3 = typeof attributes < "u" && attributes.headers, meta4 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/projects/work-at-diy.md
var work_at_diy_exports = {};
__export(work_at_diy_exports, {
  default: () => work_at_diy_default,
  filename: () => filename4,
  headers: () => headers4,
  meta: () => meta5
});
var import_react10 = __toESM(require("react"));
function MDXContent4(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    code: "code",
    img: "img"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(_components.h1, {
    id: "user-content-diy"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#diy"
  }, "DIY")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org",
    title: "DIY"
  }, "DIY"), ` is a community of kids learning skills and sharing what
they make. Designing and building for kids is a fun and challenging task \u2013 it helped
working with a team that are all still kids at heart. I enjoyed coming up with
solutions that were engaging, but worked within constraints put forth by
things like `, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "http://www.coppa.org",
    title: "Children's Online Privacy Protection Act"
  }, "COPPA"), "."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `In addition to working on the website proper and other services I built internal
tools like a Skills admin site for our curators and a playground for designers to
sketch new web components with our type and base css pre-loaded.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-tools-and-technologies"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#tools-and-technologies"
  }, "Tools and Technologies")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "NodeJS"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "NPM"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Browserify"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "MySQL"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Redis"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "jQuery"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Transloadit"), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "AWS"), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-skills"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#skills"
  }, "Skills")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Kids could browse a ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org/skills",
    title: "DIY \u2013 Skills"
  }, "wide breadth of Skills"), ` and get a glimpse in to all
sorts of interests they may not have known they had. If they are signed in a
list of skills in progress could encourage completion earning a patch as
a result. Clientside sorting and grouping made it really easy to navigate the
100+ skills on the page. Any new skills would have a `, /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "new"), ` label on their card and
that would bubble up to the category navigation to the left. New and noteworthy
skills would display at the top in a banner with a random skill on each page
load.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868795/9fa188c2-a263-11e4-8659-0e51e7fd4933.png",
    alt: "Skills Page"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Designed by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "ryan"
  }, "Ryan Brock")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "I implemented the serverside and clientside."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-to-dos"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#to-dos"
  }, "To-Do's")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "After launching ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org/membership",
    title: "DIY Membership"
  }, "Extra Awesome"), ` we had some room to work on a non-roadmap project.
I chose adding support for bookmarking challenges. Kids on the site had asked for the
feature before and I always saw the activities you could do on DIY were asyncrhonous
so a feature like To-Do's would be pretty beneficial.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `On each Challenge detail view a To-Do button would appear as long as you haven't
completed the challenge already. Tapping the button would add the challenge
to your To-Do list in your portfolio.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "/assets/projects/diy/images/todo-button.gif",
    alt: "To-Do Button"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868810/bd96fdd0-a263-11e4-9642-23e378b60967.png",
    alt: "To-Do List"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `Each To-Do item sports time and cost metadata meters. The color of the meter
will change depending on how many dots are filled increasing the scannability
of To-Do's that might be cheap and quick or expensive and difficult depending
on what you're looking for.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Button and To-Do Card designed by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/brocklesocks",
    title: "Ryan's Twitter"
  }, "Ryan Brock"), "."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "I implemented the serverside and clientside."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-portfolio"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#portfolio"
  }, "Portfolio")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "One of the last projects I worked on was a refresh of the ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org/drk",
    title: "drk on DIY"
  }, "Portfolio"), `.
It was a much needed facelift and a preparation to support new features we had
on the roadmap such as custom avatars.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `In the previous iteration you couldn't view your entire skill grid. With this
update you can now scroll through your entire skill history. The grid was built
using an `, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://github.com/substack/hex-grid",
    title: "skill-grid on Github"
  }, "awesome module by Substack"), " with some ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://github.com/diy/skill-hex-grid",
    title: "diy/skill-hex-grid on Github"
  }, "additional tweaks"), ` to meet the
intended visual design.`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "/assets/projects/diy/images/skill-grid.gif",
    alt: "Skill Grid"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868815/c8397862-a263-11e4-9a1d-568bade27097.png",
    alt: "Portfolio Projects"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868811/bdd49582-a263-11e4-9cb6-3d62e6152778.png",
    alt: "Portfolio Followers"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-insights"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#insights"
  }, "Insights")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `A part of the Extra Awesome offerings is access to your insights on your portfolio
as well as your parent's dashboard. We hired `, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/riblah",
    title: "Ri's Twitter"
  }, "Ri Liu"), ` for a data viz residency to
help craft the d3 visualization and I helped put all the pieces together. We
opened sourced two of the graphs used to make up Insights: `, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://github.com/diy/donutchart",
    title: "diy/donutchart"
  }, "donutchart"), ` and
`, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://github.com/diy/radarchart",
    title: "diy/radarchart"
  }, "radarchart"), "."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868805/b888ac8a-a263-11e4-880f-6a3b0efc2829.png",
    alt: "Insights Progress"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, /* @__PURE__ */ import_react10.default.createElement(_components.img, {
    src: "https://cloud.githubusercontent.com/assets/22249/5868806/b8a64d08-a263-11e4-8f93-1035b52db608.png",
    alt: "Insights Journey"
  })), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Designed by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/hrtlym",
    title: "Hartley's Twitter"
  }, "Hartley Miller")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Data plumbing by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/mousecastle",
    title: "Jack's Twitter"
  }, "Jack Perkins"), " and Myself."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "d3 work by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/riblah",
    title: "Ri's Twitter"
  }, "Ri Liu"), "."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "I did the clientside plumbing."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-join-flow"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#join-flow"
  }, "Join Flow")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.p, null, `We never got around to making all of DIY mobile friendly, but it was important
to get the `, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org/join",
    title: "DIY Join"
  }, "Join flow"), ` in shape as many of the kids and parents needing to verify
accounts were using mobile devices.`), `
`, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Designed by ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://twitter.com/hrtlym",
    title: "Hartley's Twitter"
  }, "Hartley Miller")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "I implemented serverside and clientside for both mobile and desktop experiences."), `
`), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.h2, {
    id: "user-content-noteworthy"
  }, /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "#noteworthy"
  }, "Noteworthy")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Launched a membership offering called ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://diy.org/membership",
    title: "DIY Membership"
  }, "Extra Awesome")), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Started a weekly Show and Smell for staff to share work and whatever as a way to wind down on Friday afternoons."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Managed services in AWS and web deployments."), `
`, /* @__PURE__ */ import_react10.default.createElement(_components.li, null, "Worked on extra ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "https://github.com/derekr/diy-client-example",
    title: "Getting started w/ diy-client"
  }, "documentation and walkthroughs"), " to help kids work with the ", /* @__PURE__ */ import_react10.default.createElement(_components.a, {
    href: "http://docs.diy.org",
    title: "DIY API Docs"
  }, "DIY API"), "."), `
`));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var work_at_diy_default = MDXContent4, filename4 = "work-at-diy.md", headers4 = typeof attributes < "u" && attributes.headers, meta5 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/people/josh-comeau.md
var josh_comeau_exports = {};
__export(josh_comeau_exports, {
  default: () => josh_comeau_default,
  filename: () => filename5,
  headers: () => headers5,
  meta: () => meta6
});
var import_react11 = __toESM(require("react"));
function MDXContent5(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, {
    href: ""
  }, "https://twitter.com/JoshWComeau")), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.p, null, /* @__PURE__ */ import_react11.default.createElement(_components.a, {
    href: ""
  }, "https://www.joshwcomeau.com"), `
`, /* @__PURE__ */ import_react11.default.createElement(_components.a, {
    href: ""
  }, "https://www.joshwcomeau.com/css/custom-css-reset/")));
  return MDXLayout ? /* @__PURE__ */ import_react11.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var josh_comeau_default = MDXContent5, filename5 = "josh-comeau.md", headers5 = typeof attributes < "u" && attributes.headers, meta6 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/people/bencodezen.md
var bencodezen_exports = {};
__export(bencodezen_exports, {
  default: () => bencodezen_default,
  filename: () => filename6,
  headers: () => headers6,
  meta: () => meta7
});
var import_react12 = __toESM(require("react"));
function MDXContent6(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, {
    href: "https://twitter.com/bencodezen?lang=en"
  }, "Ben Hong's Twitter \u2013\xA0bencodezen")));
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var bencodezen_default = MDXContent6, filename6 = "bencodezen.md", headers6 = typeof attributes < "u" && attributes.headers, meta7 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/css-to-component.md
var css_to_component_exports = {};
__export(css_to_component_exports, {
  default: () => css_to_component_default,
  filename: () => filename7,
  headers: () => headers7,
  meta: () => meta8
});
var import_react13 = __toESM(require("react"));
function MDXContent7(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "I'm fairly certain this has been attempted, and I've seen it, but am having a difficult time tracking anything down."), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "tl;dr given CSS as an input, output components \u2013 initially React."), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Bonus points if it can be driven by ", /* @__PURE__ */ import_react13.default.createElement(_components.a, {
    href: "https://chan.dev/posts/avo-a-bem-dialect-using-data-attributes/"
  }, "AVO \u{1F951} \u2014\xA0A BEM Dialect Using Data Attributes (chan.dev)"), "."), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.pre, null, /* @__PURE__ */ import_react13.default.createElement(_components.code, {
    className: "hljs language-css"
  }, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-selector-attr"
  }, "[data-avatar]"), ` {
  `, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-attribute"
  }, "color"), ": ", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'red'"), `;
}
`)), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.pre, null, /* @__PURE__ */ import_react13.default.createElement(_components.code, {
    className: "hljs language-javascript"
  }, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "Avatar"), " = (", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-params"
  }, "{ ", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "as"), ": Element, children, ...props }"), `) => {
  `, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), " children ? ", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Element"), " {", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "...props"), "}>"), "{children}", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Element"), ">")), " : ", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Element"), " {", /* @__PURE__ */ import_react13.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "...props"), "} />")), `
}
`)), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.p, null, `Potential parsers:
`, /* @__PURE__ */ import_react13.default.createElement(_components.a, {
    href: "https://github.com/fb55/css-what#readme"
  }, "fb55/css-what: a CSS selector parser (github.com)"), `
For testing? `, /* @__PURE__ */ import_react13.default.createElement(_components.a, {
    href: "https://github.com/fb55/css-select"
  }, "fb55/css-select: a CSS selector compiler & engine (github.com)"), `
`, /* @__PURE__ */ import_react13.default.createElement(_components.a, {
    href: "https://github.com/servo/rust-cssparser"
  }, "servo/rust-cssparser: Rust implementation of CSS Syntax Level 3 (github.com)")));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var css_to_component_default = MDXContent7, filename7 = "css-to-component.md", headers7 = typeof attributes < "u" && attributes.headers, meta8 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/tools/obsidian.md
var obsidian_exports = {};
__export(obsidian_exports, {
  default: () => obsidian_default,
  filename: () => filename8,
  headers: () => headers8,
  meta: () => meta9
});
var import_react14 = __toESM(require("react"));
function MDXContent8(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.a, {
    href: ""
  }, "https://obsidian.md")), `
`, /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.a, {
    href: ""
  }, "https://github.com/kepano/obsidian-minimal")));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var obsidian_default = MDXContent8, filename8 = "obsidian.md", headers8 = typeof attributes < "u" && attributes.headers, meta9 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/drk-wtf-todos.md
var drk_wtf_todos_exports = {};
__export(drk_wtf_todos_exports, {
  default: () => drk_wtf_todos_default,
  filename: () => filename9,
  headers: () => headers9,
  meta: () => meta10
});
var import_react15 = __toESM(require("react"));
function MDXContent9(props = {}) {
  let _components = Object.assign({
    ul: "ul",
    li: "li",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react15.default.createElement(_components.li, null, "Use css reset from ", /* @__PURE__ */ import_react15.default.createElement(_components.a, {
    href: "people/josh-comeau"
  }, "josh-comeau"), " https://www.joshwcomeau.com/css/custom-css-reset/"), `
`, /* @__PURE__ */ import_react15.default.createElement(_components.li, null, "~~Auto format (prettier) markdown in /g/ and garden-manifest (make these NPM scripts)~~"), `
`));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var drk_wtf_todos_default = MDXContent9, filename9 = "drk-wtf-todos.md", headers9 = typeof attributes < "u" && attributes.headers, meta10 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/people/wwwjim.md
var wwwjim_exports = {};
__export(wwwjim_exports, {
  default: () => wwwjim_default,
  filename: () => filename10,
  headers: () => headers10,
  meta: () => meta11
});
var import_react16 = __toESM(require("react"));
function MDXContent10(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.p, null, /* @__PURE__ */ import_react16.default.createElement(_components.a, {
    href: ""
  }, "https://jimmyl.ee"), `
`, /* @__PURE__ */ import_react16.default.createElement(_components.a, {
    href: ""
  }, "https://twitter.com/wwwjim")));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var wwwjim_default = MDXContent10, filename10 = "wwwjim.md", headers10 = typeof attributes < "u" && attributes.headers, meta11 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/the-fox-team.md
var the_fox_team_exports = {};
__export(the_fox_team_exports, {
  default: () => the_fox_team_default,
  filename: () => filename11,
  headers: () => headers11,
  meta: () => meta12
});
var import_react17 = __toESM(require("react"));
function MDXContent11(props = {}) {
  let _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, {
    id: "user-content-fox-team"
  }, /* @__PURE__ */ import_react17.default.createElement(_components.a, {
    href: "#fox-team"
  }, "Fox Team")), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, `Earlier on at Patreon we didn't have a lot of structure like most early stage startups. No real division in teams, folks kinda floated from one project to the next. As we grew and started ramping up hiring we were just establishing an engineering management team. Much of it was folks with no previous management experience (cue "this is fine" gif). The biggest pain point was we all were still expected (possibly a self-imposed expectation to a certain extent) to still contribute a lot of code. This left little time for planning and being more strategic. To be fair though it's a shared responsibility and our product planning wasn't very mature either.`), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "As more people ramped up we needed teams and projects to place them, but since we were hiring a bunch and didn't have enough resources to plan work we needed a way to buffer new hires before long-term assignment. We repurposed a team that ", /* @__PURE__ */ import_react17.default.createElement(_components.a, {
    href: "people/wwwjim"
  }, "wwwjim"), " had started \u2013\xA0The Fox Team, a reference to Metal Gear Solid/Kojima \u2013\xA0to be a place where new engineers could learn the codebase, get warmed up while product and eng sorted out what work should be prioritized."), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.h2, {
    id: "user-content-what-should-they-do"
  }, /* @__PURE__ */ import_react17.default.createElement(_components.a, {
    href: "#what-should-they-do"
  }, "What should they do?")), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "This team was maybe a bandaid for organizational issues and shortcomings (or this is just growth ya know that's chill too), but served a purpose nonetheless."), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Fix small bugs and UX paper cuts"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Start to learn our product development process"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Build some comradery with other folks on the rotation"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Start to learn a breadth of the product"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, 'Find areas of interest to help influence "longterm" placement (shit was always changing)'), `
`), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Tired of trying to organize these thoughts so just brain dumping now:"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "We had 2 fixed memebrs or 3 if you count me as an EM/Hiring Manager and coordinating a lot of this, a PM and an Eng Lead who helped with the more technical mentorship and process management for new hires (running sprints etc). Together the PM and EL worked with Customer Support to prioritize work. Could never get full alignment here, but it mostly worked I think."), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Where possible we'd have more than one new hire in rotation which lasted about a month. The team served as a vehicle for new engineer cohorts so they could onboard closely and share notes since they're doing similar work. After about a week or two of general onboarding and fixing bugs there was usually a medium sized project that ideally didn't need much guidance. This rarely was the case and there was usually a lot of back and forth, projects running over or maybe even dropped (shocker!)."), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "In the meantime engineering management worked out who would go where after rotation with consideration:"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "What team project needs engineering talent?"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Does the existing skillset of the person match the needs of the project or team? How well?"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "What/how does the person want to grow (do they want to learn more front end? are they interested in systems)"), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Could we line them up with an area of the product they're interested in after learning more during rotation"), `
`), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "I'd say most of the time the worked well and people enjoyed the space to learn more about the product and codebase. Some folks want to jump right in to a meaty project or team instead so they may have found less value. We didn't do a lot of follow up other than general onboarding engagement serveys and didn't track how effective the team was in terms of that, but we were closing bugs, shipping helpful projects (mostly internal tooling) and having fun while doing it. Other things came from that team like defining the bug submission/lifecycle process and getting intimate with the types of issues users were hitting."), `
`, /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Personally I really loved that team. It felt scrapy and not perfect, but seeing new engineers get excited about their wrap up project and where they might want to focus on post rotation was really rad."));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var the_fox_team_default = MDXContent11, filename11 = "the-fox-team.md", headers11 = typeof attributes < "u" && attributes.headers, meta12 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/tools/vercel.md
var vercel_exports = {};
__export(vercel_exports, {
  default: () => vercel_default,
  filename: () => filename12,
  headers: () => headers12,
  meta: () => meta13
});
var import_react18 = __toESM(require("react"));
function MDXContent12(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(_components.p, null, /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: ""
  }, "http://vercel.com")));
  return MDXLayout ? /* @__PURE__ */ import_react18.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var vercel_default = MDXContent12, filename12 = "vercel.md", headers12 = typeof attributes < "u" && attributes.headers, meta13 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/josh-comeau.md
var josh_comeau_exports2 = {};
__export(josh_comeau_exports2, {
  default: () => josh_comeau_default2,
  filename: () => filename13,
  headers: () => headers13,
  meta: () => meta14
});
var import_react19 = __toESM(require("react"));
function MDXContent13(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: ""
  }, "https://twitter.com/JoshWComeau")), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: ""
  }, "https://www.joshwcomeau.com"), `
`, /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: ""
  }, "https://www.joshwcomeau.com/css/custom-css-reset/")));
  return MDXLayout ? /* @__PURE__ */ import_react19.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var josh_comeau_default2 = MDXContent13, filename13 = "josh-comeau.md", headers13 = typeof attributes < "u" && attributes.headers, meta14 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/tools/remix.md
var remix_exports = {};
__export(remix_exports, {
  default: () => remix_default,
  filename: () => filename14,
  headers: () => headers14,
  meta: () => meta15
});
var import_react20 = __toESM(require("react"));
function MDXContent14(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(_components.p, null, /* @__PURE__ */ import_react20.default.createElement(_components.a, {
    href: ""
  }, "https://remix.run")));
  return MDXLayout ? /* @__PURE__ */ import_react20.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var remix_default = MDXContent14, filename14 = "remix.md", headers14 = typeof attributes < "u" && attributes.headers, meta15 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/other-note.md
var other_note_exports = {};
__export(other_note_exports, {
  default: () => other_note_default,
  filename: () => filename15,
  headers: () => headers15,
  meta: () => meta16
});
var import_react21 = __toESM(require("react"));
function MDXContent15(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(_components.p, null, /* @__PURE__ */ import_react21.default.createElement(_components.a, {
    href: "digital-garden-notes"
  }, "digital-garden-notes")), `
`, /* @__PURE__ */ import_react21.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react21.default.createElement(_components.li, null, "RSS Feed on specific posts so you can subscribe to updates?"), `
`), `
`, /* @__PURE__ */ import_react21.default.createElement(_components.p, null, /* @__PURE__ */ import_react21.default.createElement(_components.a, {
    href: "other-note"
  }, "other-note")), `
`, /* @__PURE__ */ import_react21.default.createElement(_components.p, null, "#digital-garden"));
  return MDXLayout ? /* @__PURE__ */ import_react21.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var other_note_default = MDXContent15, filename15 = "other-note.md", headers15 = typeof attributes < "u" && attributes.headers, meta16 = typeof attributes < "u" && attributes.meta;

// mdx:routes/g/tools/mdx.md
var mdx_exports = {};
__export(mdx_exports, {
  default: () => mdx_default,
  filename: () => filename16,
  headers: () => headers16,
  meta: () => meta17
});
var import_react22 = __toESM(require("react"));
function MDXContent16(props = {}) {
  let _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement(_components.p, null, /* @__PURE__ */ import_react22.default.createElement(_components.a, {
    href: ""
  }, "https://mdxjs.com")));
  return MDXLayout ? /* @__PURE__ */ import_react22.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var mdx_default = MDXContent16, filename16 = "mdx.md", headers16 = typeof attributes < "u" && attributes.headers, meta17 = typeof attributes < "u" && attributes.meta;

// app/routes/g/index.tsx
var g_exports2 = {};
__export(g_exports2, {
  default: () => Index2,
  loader: () => loader6
});
var import_remix5 = __toESM(require_dist());

// garden-manifest.json
var garden_manifest_default = [{ slug: "css-to-component", path: "/g/css-to-component", file: "app/routes/g/css-to-component.md" }, { slug: "digital-garden-notes", path: "/g/digital-garden-notes", file: "app/routes/g/digital-garden-notes.md" }, { slug: "digital-garden-with-obsidian-and-remix", path: "/g/digital-garden-with-obsidian-and-remix", file: "app/routes/g/digital-garden-with-obsidian-and-remix.md" }, { slug: "drk-wtf-todos", path: "/g/drk-wtf-todos", file: "app/routes/g/drk-wtf-todos.md" }, { slug: "josh-comeau", path: "/g/josh-comeau", file: "app/routes/g/josh-comeau.md" }, { slug: "other-note", path: "/g/other-note", file: "app/routes/g/other-note.md" }, { slug: "bencodezen", path: "/g/people/bencodezen", file: "app/routes/g/people/bencodezen.md" }, { slug: "josh-comeau", path: "/g/people/josh-comeau", file: "app/routes/g/people/josh-comeau.md" }, { slug: "wwwjim", path: "/g/people/wwwjim", file: "app/routes/g/people/wwwjim.md" }, { slug: "work-at-diy", path: "/g/projects/work-at-diy", file: "app/routes/g/projects/work-at-diy.md" }, { slug: "the-fox-team", path: "/g/the-fox-team", file: "app/routes/g/the-fox-team.md" }, { slug: "mdx", path: "/g/tools/mdx", file: "app/routes/g/tools/mdx.md" }, { slug: "obsidian-export", path: "/g/tools/obsidian-export", file: "app/routes/g/tools/obsidian-export.md" }, { slug: "obsidian", path: "/g/tools/obsidian", file: "app/routes/g/tools/obsidian.md" }, { slug: "remix", path: "/g/tools/remix", file: "app/routes/g/tools/remix.md" }, { slug: "vercel", path: "/g/tools/vercel", file: "app/routes/g/tools/vercel.md" }];

// app/routes/g/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function loader6() {
  return garden_manifest_default;
}
function Index2() {
  let manifest = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    children: manifest.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix5.Link, {
          to: note.path,
          children: note.slug
        }, void 0, !1, {
          fileName: "app/routes/g/index.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        note.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: note.description
        }, void 0, !1, {
          fileName: "app/routes/g/index.tsx",
          lineNumber: 21,
          columnNumber: 31
        }, this) : null
      ]
    }, note.slug, !0, {
      fileName: "app/routes/g/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/g/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b27f79e1", entry: { module: "/build/entry.client-MZWXDEV3.js", imports: ["/build/_shared/chunk-NWFLE6AG.js", "/build/_shared/chunk-SYCK5J32.js", "/build/_shared/chunk-EVUINLJZ.js", "/build/_shared/chunk-RFFJ3GMM.js", "/build/_shared/chunk-KCHAACDT.js", "/build/_shared/chunk-O7YBTOWT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KP6R75YC.js", imports: ["/build/_shared/chunk-F7BNCRYB.js", "/build/_shared/chunk-LEVKY4Z3.js", "/build/_shared/chunk-72GIW4R5.js", "/build/_shared/chunk-UKIKZ6YM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g": { id: "routes/g", parentId: "root", path: "g", index: void 0, caseSensitive: void 0, module: "/build/routes/g-BFNY3FMT.js", imports: ["/build/_shared/chunk-UHK7CCPZ.js", "/build/_shared/chunk-7CFH7SN6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/css-to-component": { id: "routes/g/css-to-component", parentId: "routes/g", path: "css-to-component", index: void 0, caseSensitive: void 0, module: "/build/routes/g/css-to-component-EOAPMOFZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/digital-garden-notes": { id: "routes/g/digital-garden-notes", parentId: "routes/g", path: "digital-garden-notes", index: void 0, caseSensitive: void 0, module: "/build/routes/g/digital-garden-notes-OJ7IZYO7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/digital-garden-with-obsidian-and-remix": { id: "routes/g/digital-garden-with-obsidian-and-remix", parentId: "routes/g", path: "digital-garden-with-obsidian-and-remix", index: void 0, caseSensitive: void 0, module: "/build/routes/g/digital-garden-with-obsidian-and-remix-VO7Q5NA4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/drk-wtf-todos": { id: "routes/g/drk-wtf-todos", parentId: "routes/g", path: "drk-wtf-todos", index: void 0, caseSensitive: void 0, module: "/build/routes/g/drk-wtf-todos-UJKCOTMQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/index": { id: "routes/g/index", parentId: "routes/g", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/g/index-HTJZFX6S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/josh-comeau": { id: "routes/g/josh-comeau", parentId: "routes/g", path: "josh-comeau", index: void 0, caseSensitive: void 0, module: "/build/routes/g/josh-comeau-CRKDQ6BI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/other-note": { id: "routes/g/other-note", parentId: "routes/g", path: "other-note", index: void 0, caseSensitive: void 0, module: "/build/routes/g/other-note-SNUBJ4J2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/people/bencodezen": { id: "routes/g/people/bencodezen", parentId: "routes/g", path: "people/bencodezen", index: void 0, caseSensitive: void 0, module: "/build/routes/g/people/bencodezen-OCTIL55X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/people/josh-comeau": { id: "routes/g/people/josh-comeau", parentId: "routes/g", path: "people/josh-comeau", index: void 0, caseSensitive: void 0, module: "/build/routes/g/people/josh-comeau-3CDPDAQE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/people/wwwjim": { id: "routes/g/people/wwwjim", parentId: "routes/g", path: "people/wwwjim", index: void 0, caseSensitive: void 0, module: "/build/routes/g/people/wwwjim-KM3VW5JU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/projects/work-at-diy": { id: "routes/g/projects/work-at-diy", parentId: "routes/g", path: "projects/work-at-diy", index: void 0, caseSensitive: void 0, module: "/build/routes/g/projects/work-at-diy-BRHPA2JW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/the-fox-team": { id: "routes/g/the-fox-team", parentId: "routes/g", path: "the-fox-team", index: void 0, caseSensitive: void 0, module: "/build/routes/g/the-fox-team-HXZGWKK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/tools/mdx": { id: "routes/g/tools/mdx", parentId: "routes/g", path: "tools/mdx", index: void 0, caseSensitive: void 0, module: "/build/routes/g/tools/mdx-7763YPSE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/tools/obsidian": { id: "routes/g/tools/obsidian", parentId: "routes/g", path: "tools/obsidian", index: void 0, caseSensitive: void 0, module: "/build/routes/g/tools/obsidian-BP7DMH55.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/tools/obsidian-export": { id: "routes/g/tools/obsidian-export", parentId: "routes/g", path: "tools/obsidian-export", index: void 0, caseSensitive: void 0, module: "/build/routes/g/tools/obsidian-export-HXBFSCZE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/tools/remix": { id: "routes/g/tools/remix", parentId: "routes/g", path: "tools/remix", index: void 0, caseSensitive: void 0, module: "/build/routes/g/tools/remix-GJYPRK5H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/g/tools/vercel": { id: "routes/g/tools/vercel", parentId: "routes/g", path: "tools/vercel", index: void 0, caseSensitive: void 0, module: "/build/routes/g/tools/vercel-MUUEIUBL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-TMYNPX5R.js", imports: ["/build/_shared/chunk-7CFH7SN6.js", "/build/_shared/chunk-K2GNH3KL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/studio/*": { id: "routes/studio/*", parentId: "root", path: "studio/*", index: void 0, caseSensitive: void 0, module: "/build/routes/studio/*-HIPSOIUC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til": { id: "routes/til", parentId: "root", path: "til", index: void 0, caseSensitive: void 0, module: "/build/routes/til-LX3KT4Y4.js", imports: ["/build/_shared/chunk-UHK7CCPZ.js", "/build/_shared/chunk-7CFH7SN6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til/$slug.$id": { id: "routes/til/$slug.$id", parentId: "routes/til", path: ":slug/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/til/$slug.$id-OVC2EMOC.js", imports: ["/build/_shared/chunk-K2GNH3KL.js", "/build/_shared/chunk-F7BNCRYB.js", "/build/_shared/chunk-LEVKY4Z3.js", "/build/_shared/chunk-72GIW4R5.js", "/build/_shared/chunk-UKIKZ6YM.js", "/build/_shared/chunk-PJXH4CQX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til/index": { id: "routes/til/index", parentId: "routes/til", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/til/index-7ZMQDQRG.js", imports: ["/build/_shared/chunk-PJXH4CQX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til[.]rss": { id: "routes/til[.]rss", parentId: "root", path: "til.rss", index: void 0, caseSensitive: void 0, module: "/build/routes/til[.]rss-KXSGUYBV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B27F79E1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/til[.]rss": {
    id: "routes/til[.]rss",
    parentId: "root",
    path: "til.rss",
    index: void 0,
    caseSensitive: void 0,
    module: til_rss_exports
  },
  "routes/studio/*": {
    id: "routes/studio/*",
    parentId: "root",
    path: "studio/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/til": {
    id: "routes/til",
    parentId: "root",
    path: "til",
    index: void 0,
    caseSensitive: void 0,
    module: til_exports
  },
  "routes/til/$slug.$id": {
    id: "routes/til/$slug.$id",
    parentId: "routes/til",
    path: ":slug/:id",
    index: void 0,
    caseSensitive: void 0,
    module: slug_id_exports
  },
  "routes/til/index": {
    id: "routes/til/index",
    parentId: "routes/til",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: til_exports2
  },
  "routes/g": {
    id: "routes/g",
    parentId: "root",
    path: "g",
    index: void 0,
    caseSensitive: void 0,
    module: g_exports
  },
  "routes/g/digital-garden-with-obsidian-and-remix": {
    id: "routes/g/digital-garden-with-obsidian-and-remix",
    parentId: "routes/g",
    path: "digital-garden-with-obsidian-and-remix",
    index: void 0,
    caseSensitive: void 0,
    module: digital_garden_with_obsidian_and_remix_exports
  },
  "routes/g/tools/obsidian-export": {
    id: "routes/g/tools/obsidian-export",
    parentId: "routes/g",
    path: "tools/obsidian-export",
    index: void 0,
    caseSensitive: void 0,
    module: obsidian_export_exports
  },
  "routes/g/digital-garden-notes": {
    id: "routes/g/digital-garden-notes",
    parentId: "routes/g",
    path: "digital-garden-notes",
    index: void 0,
    caseSensitive: void 0,
    module: digital_garden_notes_exports
  },
  "routes/g/projects/work-at-diy": {
    id: "routes/g/projects/work-at-diy",
    parentId: "routes/g",
    path: "projects/work-at-diy",
    index: void 0,
    caseSensitive: void 0,
    module: work_at_diy_exports
  },
  "routes/g/people/josh-comeau": {
    id: "routes/g/people/josh-comeau",
    parentId: "routes/g",
    path: "people/josh-comeau",
    index: void 0,
    caseSensitive: void 0,
    module: josh_comeau_exports
  },
  "routes/g/people/bencodezen": {
    id: "routes/g/people/bencodezen",
    parentId: "routes/g",
    path: "people/bencodezen",
    index: void 0,
    caseSensitive: void 0,
    module: bencodezen_exports
  },
  "routes/g/css-to-component": {
    id: "routes/g/css-to-component",
    parentId: "routes/g",
    path: "css-to-component",
    index: void 0,
    caseSensitive: void 0,
    module: css_to_component_exports
  },
  "routes/g/tools/obsidian": {
    id: "routes/g/tools/obsidian",
    parentId: "routes/g",
    path: "tools/obsidian",
    index: void 0,
    caseSensitive: void 0,
    module: obsidian_exports
  },
  "routes/g/drk-wtf-todos": {
    id: "routes/g/drk-wtf-todos",
    parentId: "routes/g",
    path: "drk-wtf-todos",
    index: void 0,
    caseSensitive: void 0,
    module: drk_wtf_todos_exports
  },
  "routes/g/people/wwwjim": {
    id: "routes/g/people/wwwjim",
    parentId: "routes/g",
    path: "people/wwwjim",
    index: void 0,
    caseSensitive: void 0,
    module: wwwjim_exports
  },
  "routes/g/the-fox-team": {
    id: "routes/g/the-fox-team",
    parentId: "routes/g",
    path: "the-fox-team",
    index: void 0,
    caseSensitive: void 0,
    module: the_fox_team_exports
  },
  "routes/g/tools/vercel": {
    id: "routes/g/tools/vercel",
    parentId: "routes/g",
    path: "tools/vercel",
    index: void 0,
    caseSensitive: void 0,
    module: vercel_exports
  },
  "routes/g/josh-comeau": {
    id: "routes/g/josh-comeau",
    parentId: "routes/g",
    path: "josh-comeau",
    index: void 0,
    caseSensitive: void 0,
    module: josh_comeau_exports2
  },
  "routes/g/tools/remix": {
    id: "routes/g/tools/remix",
    parentId: "routes/g",
    path: "tools/remix",
    index: void 0,
    caseSensitive: void 0,
    module: remix_exports
  },
  "routes/g/other-note": {
    id: "routes/g/other-note",
    parentId: "routes/g",
    path: "other-note",
    index: void 0,
    caseSensitive: void 0,
    module: other_note_exports
  },
  "routes/g/tools/mdx": {
    id: "routes/g/tools/mdx",
    parentId: "routes/g",
    path: "tools/mdx",
    index: void 0,
    caseSensitive: void 0,
    module: mdx_exports
  },
  "routes/g/index": {
    id: "routes/g/index",
    parentId: "routes/g",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: g_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
