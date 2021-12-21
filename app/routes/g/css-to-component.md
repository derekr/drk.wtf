I'm fairly certain this has been attempted, and I've seen it, but am having a difficult time tracking anything down.

tl;dr given CSS as an input, output components – initially React.

Bonus points if it can be driven by [AVO 🥑 — A BEM Dialect Using Data Attributes (chan.dev)](https://chan.dev/posts/avo-a-bem-dialect-using-data-attributes/).

```css
[data-avatar] {
  color: 'red';
}
```

```jsx
const Avatar = ({ as: Element, children, ...props }) => {
  return children ? <Element {...props}>{children}</Element> : <Element {...props} />
}
```

Potential parsers:
[fb55/css-what: a CSS selector parser (github.com)](https://github.com/fb55/css-what#readme)
For testing? [fb55/css-select: a CSS selector compiler & engine (github.com)](https://github.com/fb55/css-select)
[servo/rust-cssparser: Rust implementation of CSS Syntax Level 3 (github.com)](https://github.com/servo/rust-cssparser)
