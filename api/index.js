var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
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
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
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
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/sanity/project-details.ts
var projectDetails = () => {
  var _a, _b, _c;
  return {
    projectId: typeof document > "u" ? process.env.SANITY_PROJECT_ID : (_a = window == null ? void 0 : window.ENV) == null ? void 0 : _a.projectId,
    dataset: typeof document > "u" ? process.env.SANITY_DATASET : (_b = window == null ? void 0 : window.ENV) == null ? void 0 : _b.dataset,
    apiVersion: typeof document > "u" ? process.env.SANITY_API_VERSION : (_c = window == null ? void 0 : window.ENV) == null ? void 0 : _c.apiVersion
  };
};

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZYBGIOS5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-UZ4QWBRH.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function meta() {
  return [{ title: "Welcome to the drkweb | drk.wtf" }];
}
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default }
  ];
}
async function loader() {
  return (0, import_node2.json)({ ENV: projectDetails() });
}
function App() {
  let data = (0, import_react3.useLoaderData)(), { pathname } = (0, import_react3.useLocation)(), isStudioRoute = pathname.startsWith("/studio");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      isStudioRoute && typeof document > "u" ? "__STYLES__" : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/til.$slug.$id.tsx
var til_slug_id_exports = {};
__export(til_slug_id_exports, {
  default: () => Component,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react"), import_groq = __toESM(require("groq"));

// app/components/sanity-content.tsx
var import_react4 = require("@portabletext/react"), import_react5 = require("@remix-run/react");

// app/components/sanity-image.tsx
var import_image_url = __toESM(require("@sanity/image-url")), import_asset_utils = require("@sanity/asset-utils");

// app/sanity/config.ts
var import_sanity8 = require("sanity"), import_desk = require("sanity/desk"), import_code_input = require("@sanity/code-input");

// app/sanity/schema/block-content.ts
var import_sanity = require("sanity"), block_content_default = (0, import_sanity.defineType)({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    (0, import_sanity.defineArrayMember)({
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
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
      // hidden if link type is not external
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
      // hidden if link type is not external
    }),
    (0, import_sanity5.defineField)({
      name: "internalLink",
      type: "reference",
      title: "Internal Link",
      hidden: ({ parent }) => (parent == null ? void 0 : parent.linkType) !== "internal",
      // hidden if link type is not internal
      to: [
        { type: "post" }
        // { type: 'page' },
        // other types you may want to link to
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
var config = (0, import_sanity8.defineConfig)({
  ...projectDetails(),
  plugins: [
    (0, import_desk.deskTool)(),
    (0, import_code_input.codeInput)()
    // visionTool({
    //   // Note: These are both optional
    //   defaultApiVersion:
    //     typeof document === 'undefined' ? process.env.SANITY_API_VERSION : window?.ENV?.apiVersion,
    //   defaultDataset: 'main',
    // }),
  ],
  basePath: "/studio",
  schema: {
    types: schemaTypes
  }
});

// app/components/sanity-image.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), SanityImage = function(props) {
  let { value, isInline } = props, { width, height } = (0, import_asset_utils.getImageDimensions)(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "img",
    {
      className: "w-full h-auto not-prose",
      src: (0, import_image_url.default)(projectDetails()).image(value).width(isInline ? 100 : 800).fit("max").auto("format").url(),
      alt: value.alt || "",
      loading: "lazy",
      style: {
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/sanity-image.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

// app/components/sanity-content.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), components = {
  types: {
    image: SanityImage,
    codeBlock: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: props.value.code } }, void 0, !1, {
      fileName: "app/components/sanity-content.tsx",
      lineNumber: 12,
      columnNumber: 27
    }, this)
  },
  marks: {
    link: ({ value, children }) => {
      let href = value != null && value.href ? value.href.replace("https://drk.wtf", "") : "", target = href.startsWith("http") ? "_blank" : void 0;
      return target ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "a",
        {
          href: value == null ? void 0 : value.href,
          target,
          rel: value != null && value.rel ? value.rel : target === "_blank" && "noindex nofollow",
          className: "text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/sanity-content.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: href, rel: value == null ? void 0 : value.rel, children }, void 0, !1, {
        fileName: "app/components/sanity-content.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this);
    }
  }
}, SanityContent = function(props) {
  let { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.PortableText, { value, components }, void 0, !1, {
    fileName: "app/components/sanity-content.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};

// app/sanity/client.ts
var import_client = __toESM(require("@sanity/client"));
var client = new import_client.default({
  ...projectDetails(),
  useCdn: !0
});

// app/routes/til.$slug.$id.tsx
var import_highlight = __toESM(require("highlight.js")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let { slug, id } = params, post = await client.fetch(
    import_groq.default`*[_type == "post" && slug.current == $slug && _id == $id][0]{ title, body }`,
    { slug, id }
  );
  return post ? (post.body = await Promise.all(
    post.body.map(async (block) => block._type !== "codeBlock" ? block : {
      ...block,
      code: `<pre><code class="language-${block.language}">${import_highlight.default.highlight(block.language, block.code).value}</code></pre>`
    })
  ), { post }) : new Response("Not found", { status: 404 });
};
function Component() {
  var _a;
  let { post } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    post != null && post.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: post.title }, void 0, !1, {
      fileName: "app/routes/til.$slug.$id.tsx",
      lineNumber: 39,
      columnNumber: 22
    }, this) : null,
    post != null && post.body && ((_a = post.body) == null ? void 0 : _a.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "prose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SanityContent, { value: post.body }, void 0, !1, {
      fileName: "app/routes/til.$slug.$id.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/til.$slug.$id.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/routes/til.$slug.$id.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/til._index.tsx
var til_index_exports = {};
__export(til_index_exports, {
  default: () => TiLIndexRoute,
  loader: () => loader3
});
var import_react7 = require("@remix-run/react"), import_groq2 = __toESM(require("groq"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader3 = async () => ({ tilPosts: await client.fetch(
  import_groq2.default`*[_type == "post" && "til" in categories[]->title]{ _id, title, slug }`
) });
function TiLIndexRoute() {
  let { tilPosts } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: tilPosts.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `/til/${note.slug.current}/${note._id}`, children: note.title }, void 0, !1, {
      fileName: "app/routes/til._index.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    note.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: note.description }, void 0, !1, {
      fileName: "app/routes/til._index.tsx",
      lineNumber: 23,
      columnNumber: 31
    }, this) : null
  ] }, note.slug, !0, {
    fileName: "app/routes/til._index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/routes/til._index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/til[.rss].tsx
var til_rss_exports = {};
__export(til_rss_exports, {
  loader: () => loader4
});

// app/sanity/queries/all-til-posts.ts
var import_groq3 = __toESM(require("groq")), all_til_posts_default = import_groq3.default`
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

// app/routes/til[.rss].tsx
var import_feed = require("feed"), import_to_html = require("@portabletext/to-html"), import_htm = __toESM(require("htm")), import_vhtml = __toESM(require("vhtml")), html = import_htm.default.bind(import_vhtml.default);
var components2 = {
  types: {
    codeBlock: ({ value }) => {
      let { language, code } = value;
      return html`<pre><code class="language-${language}">${code}</code></pre>`;
    }
  }
}, loader4 = async ({ request }) => {
  let tilPosts = await client.fetch(all_til_posts_default), host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host)
    throw new Error("Could not determine domain URL.");
  let domain = `${host.includes("localhost") ? "http" : "https"}://${host}`, tilUrl = `${domain}/til`, feed = new import_feed.Feed({
    title: "drk.wtf | TIL",
    description: "Today I Learned",
    id: tilUrl,
    link: tilUrl,
    language: "en",
    copyright: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Derek Reynolds`,
    feedLinks: [
      {
        type: "application/rss+xml",
        rel: "self",
        href: tilUrl
      }
    ],
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
      content: (0, import_to_html.toHTML)(post.body, { components: components2 }),
      date: new Date(post.publishedAt),
      author: [
        {
          name: post.author.name,
          email: post.author.email,
          link: post.author.url
        }
      ]
    });
  });
  let rssString = feed.rss2();
  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString))
    }
  });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader5
});
var import_react8 = require("@remix-run/react");

// app/sanity/queries/home-page.ts
var import_groq4 = __toESM(require("groq")), home_page_default = import_groq4.default`
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

// app/routes/_index.tsx
var import_radash = require("radash"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader5 = async () => ({
  ...await client.fetch(home_page_default)
}), ExperienceItem = ({ title, href, startYear, endYear, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: title }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      href && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "href", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "a",
          {
            href,
            target: "_blank",
            className: "text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
            children: href
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 21,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-gray-400 time", children: startYear === endYear ? startYear : `${startYear}\u2013${endYear}` }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  children
] }, void 0, !0, {
  fileName: "app/routes/_index.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this);
function Index() {
  var _a;
  let { author, globalSettings, workExperience } = (0, import_react8.useLoaderData)(), [currentExperience, previousExperience] = (0, import_radash.fork)(workExperience, (e) => e.isCurrent);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "sr-only h-card", href: "https://drk.wtf", rel: "me", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: author.imageUrl, alt: "" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      "Derek Reynolds"
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-2xl mb-8 mast-grid [&>p:first-of-type]:mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "/", children: "drk.wtf" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SanityContent, { value: (_a = globalSettings[0]) == null ? void 0 : _a.aboutMe }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid mb-5 experience-grid md:grid-cols-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-4 experience md:col-start-2 [&>article:last-of-type]:mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-gray-600 text-md", children: "Currently" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      currentExperience.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        ExperienceItem,
        {
          title: item.title,
          href: item.url ?? "",
          startYear: new Date(item.startDate).getFullYear(),
          endYear: item.endDate ? new Date(item.endDate).getFullYear() : "Present",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SanityContent, { value: item.body }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        },
        item.title,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 15
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-gray-600 text-md", children: "Previously" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      previousExperience.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        ExperienceItem,
        {
          title: item.title,
          href: item.url ?? "",
          startYear: new Date(item.startDate).getFullYear(),
          endYear: item.endDate ? new Date(item.endDate).getFullYear() : "Present",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SanityContent, { value: item.body }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        },
        item.title,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 15
        },
        this
      )),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "a",
        {
          href: "https://www.linkedin.com/in/derek-reynolds-11a806132/",
          target: "_blank",
          className: "block text-blue-600 underline hover:text-blue-800 visited:text-purple-600",
          children: [
            "Linkedin ",
            ">>"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 85,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("footer", { children: [
      "\xA9 Derek Reynolds ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/til.tsx
var til_exports = {};
__export(til_exports, {
  default: () => Til,
  links: () => links2
});
var import_react9 = require("@remix-run/react");

// node_modules/.pnpm/highlight.js@11.7.0/node_modules/highlight.js/styles/night-owl.css
var night_owl_default = "/build/_assets/night-owl-BZHFFEZL.css";

// app/routes/til.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function links2() {
  return [{ rel: "stylesheet", href: night_owl_default }];
}
function Til() {
  let location = (0, import_react9.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container pt-10 pb-10 mx-auto prose", children: [
    location.pathname !== "/til" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { to: "/til", className: "block mb-10", children: "\u2190 \u{1F914} TIL" }, void 0, !1, {
      fileName: "app/routes/til.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Link, { to: "/", className: "block mb-10", children: "\u2190 \u{1F3E0} Home" }, void 0, !1, {
      fileName: "app/routes/til.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/til.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/til.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1f529693", entry: { module: "/build/entry.client-PM2QXKZ5.js", imports: ["/build/_shared/chunk-ZENPPSXS.js", "/build/_shared/chunk-4GMKH5IF.js", "/build/_shared/chunk-FGKG2OV2.js", "/build/_shared/chunk-7WKJ3XDM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SY7CXRTS.js", imports: ["/build/_shared/chunk-FTWOJKZM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-52JCYJTQ.js", imports: ["/build/_shared/chunk-22SS5HLD.js", "/build/_shared/chunk-NRIXGPA6.js", "/build/_shared/chunk-ZTFIAQPS.js", "/build/_shared/chunk-Q66ZPK2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til": { id: "routes/til", parentId: "root", path: "til", index: void 0, caseSensitive: void 0, module: "/build/routes/til-CVLVO4RV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til.$slug.$id": { id: "routes/til.$slug.$id", parentId: "routes/til", path: ":slug/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/til.$slug.$id-2SL5VKGA.js", imports: ["/build/_shared/chunk-NCTGUZPV.js", "/build/_shared/chunk-22SS5HLD.js", "/build/_shared/chunk-NRIXGPA6.js", "/build/_shared/chunk-FTWOJKZM.js", "/build/_shared/chunk-ZTFIAQPS.js", "/build/_shared/chunk-Q66ZPK2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til._index": { id: "routes/til._index", parentId: "routes/til", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/til._index-DED2KDNG.js", imports: ["/build/_shared/chunk-NCTGUZPV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/til[.rss]": { id: "routes/til[.rss]", parentId: "root", path: "til.rss", index: void 0, caseSensitive: void 0, module: "/build/routes/til[.rss]-5B56UYK3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-1F529693.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/til.$slug.$id": {
    id: "routes/til.$slug.$id",
    parentId: "routes/til",
    path: ":slug/:id",
    index: void 0,
    caseSensitive: void 0,
    module: til_slug_id_exports
  },
  "routes/til._index": {
    id: "routes/til._index",
    parentId: "routes/til",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: til_index_exports
  },
  "routes/til[.rss]": {
    id: "routes/til[.rss]",
    parentId: "root",
    path: "til.rss",
    index: void 0,
    caseSensitive: void 0,
    module: til_rss_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/til": {
    id: "routes/til",
    parentId: "root",
    path: "til",
    index: void 0,
    caseSensitive: void 0,
    module: til_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
