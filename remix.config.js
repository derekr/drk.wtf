/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
  ignoredRouteFiles: [".*"],
  mdx: async (filename) => {
    const [rehypeRewrite] = await Promise.all([
      import("rehype-rewrite").then((mod) => console.log(mod) || mod.default),
    ]);

    return {
      rehypePlugins: [
        [
          rehypeRewrite,
          {
            rewrite: (node) => {
              if (node && node.tagName === "a") {
                node.properties.href = node.properties.href.replace(".md", "");
              }
            },
          },
        ],
      ],
    };
  },
};
