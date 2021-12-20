# Digital Garden with Obsidian and Remix

Whenever I go to update my personal site I usually start by reviewing the previous update. Sure enough it's usually from December of the previous year. So I find myself here again excited to try out a couple new technologies ([[remix]]) and tools using this site as my laboratory.

Firstly I really want to have a digital garden to consistantly cultivate. I've always had a difficult time sticking with different tools that operate in a way that I enjoy. Notion feels a bit too heavy and I hate not having the data locally and worse ultiamtely owned by a vendor. I was Obsidian curious and have enjoyed some of the office hour videos by [[bencodezen]]. After about a year of keeping tabs it seems like there's a lot there that I really appreciate. The extensibility via plugins and themes. Data is stored as flat markdown files (though in a particular Obsidian falvor). The community surrounding it is full of hackers/DIYers with lots of neat tools like [[obsidian-export]]. Primarily it's an almost perfect balance of lightweight editing and feature richness that I really appreciate.

Secondly the other technology I've been keeping tabs on this last year is [[remix]] (https://remix.run). Remix is a refreshing new web framework that similar to Obsidian strikes a nice balance between leightweight editing and extensibility via thoughtful APIs that build on top of existing web platform APIs and concepts. It allows me to use tools I've been deveoping a skillset for the past 5 years (React primarily) while building websites in a way that I want (server side rendering, simple form submissions… you know like the good old days!). Building a robus web experience hasn't felt this frictionless in a long time. I'm also opting to use a web framework instead of simpling exporting/building the markdown because I plan on experimenting and building in richer features and tooling for myself to use.

OK… Enough context setting. My main goal for this note is capturing the setup in case I want to do this again or keep up with how the setup might change.

## Setting up Remix

Going to setup Remix first because I'm keeping my Obsidian vault (more on that later) in the site repo.

```sh
npx create-remix@latest
# choose Remix App Server
cd [whatever you named the project]
npm run dev
```

https://remix.run/docs/en/v1/tutorials/blog

The scaffolding of this initial project willd depend on when/how the setup command is run. I chose Vercel for my deployment paltform.

We should be able to run the dev command and access our site at localhost:3000.

I also set this up as a git repo by running:

```sh
git init
```

## Setting up Obsidian

Download the latest version of Obsidian at their website https://obsidian.md. It will ask to open and existing vault or create a new one. I created a new vault in the root of my my repo (next to remix's `app` directory) named `garden`. Created a few sample notes to test out some of Obsidian's key features like backlinks and reference embeds. Not necessary, but I also installed the Minimal Theme https://github.com/kepano/obsidian-minimal.

## Exporting Obsidian to Remix

Now that I have some markdown I need to by able to serve it from my Remix site. Luckily Remix has first class support for [[mdx]] (https://mdxjs.com) so I'm going with an approach of copying the markdown files from Obsidian to my `app/routes` folder. Obsidian doesn't have a bulk export feature as of yet (it's on their roadmap), but luckily someone has authored a great tool [[obsidian-export]] that we can leverage. It also will handle compiling backlinks and reference embeds automatically for us.

For installation I already had rust installed and opted to use the crates package manger, but you could download a pre-built binary as well. Check thir repo for more info https://github.com/zoni/obsidian-export.

```sh
brew install rust
cargo install obsidian-export
```

Once installed you can runt he command to export from `garden` in to your `app/routes` directory.

```sh
obsidian-export garden/ app/routes/g
```

Now you can navigate to any of your markdown compiled pages via http://localhost:3000/g/some-page. However! You may notice that your links to other markdown pages (typically backlinks) are broken. By default the compiled links contain the `.md` extension. We'll need to strip those. Otherwise things should be working fairly well. The only other snag I hit was markdown files containing html using `class` instead of `className` because you know… MDX. There's a fix for that too!

## Configuring Remix

Remix allows customizing the MDX pipeline via [rehype and remark plugins](https://remix.run/docs/en/v1/guides/mdx#advanced-configuration). I've opted to use a [few plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md):

- **rehypeReact** – For addressing the class vs className warning.
- **rehypeSanitize** – I plan on using other plugins in Obsidian and possible rehype/remark and think it's helpful to sanitize any generated html.
- **rehypeRewrite** – For striping the `.md` extension.

```sh
npm add rehype-rewrite rehype-react rehype-sanitize
```

And my `remix.config.js` file looks like this:

```js
const React = require('react')

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
  ignoredRouteFiles: ['.*'],
  mdx: async (filename) => {
    const [rehypeRewrite, rehypeReact, rehypeSanitize] = await Promise.all([
      import('rehype-rewrite').then((mod) => mod.default),
      import('rehype-react').then((mod) => mod.default),
      import('rehype-sanitize').then((mod) => mod.default),
    ])

    return {
      rehypePlugins: [
        [
          rehypeRewrite,
          {
            rewrite: (node) => {
              if (node && node.tagName === 'a') {
                node.properties.href = node.properties.href.replace('.md', '')
              }
            },
          },
        ],
        [rehypeReact, { createElement: React.createElement }],
        rehypeSanitize,
      ],
    }
  },
}
```

## Workflow

Right now I'm opting for a more manual workflow instead of incorporating watching and exporting on change. Doesn't seem necessary at this point and Obsidian is constantly saving which may make live reload problematic. Anyway as I'm authoring or whenever I feel the need I'll run the export command while remix dev is running in a separate process.

```sh
npm run dev
```

```sh
obsidian-export garden/ app/routes/g
```

The exporitng should cause remix to live reload or you can manually refresh as needed.

## Long-term

Unsure if this is the setup I'll stick with, but works great for now. I'm hoping Obsidian's first class exporting will negate the need for a 3rd party tool (even if it is great!). I left out creating an index page for the garden or a way to find them, but the cool thing about this approach is once exported in to a Remix project you can leverage their recommended approach which is documented here https://remix.run/docs/en/v1.0.6/guides/mdx#example-blog-usage.