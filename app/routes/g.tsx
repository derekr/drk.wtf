import { Outlet, Link, useLocation } from 'remix'
import codeSyntaxStyles from 'highlight.js/styles/night-owl.css'

export function links() {
  return [{ rel: 'stylesheet', href: codeSyntaxStyles }]
}

export default function Garden() {
  const location = useLocation()

  return (
    <div className="container pt-10 pb-10 mx-auto prose">
      {location.pathname !== '/g' ? <Link to="/g">← 🌱 garden</Link> : null}
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `
// Page load (you could wrap this in a DOM ready if the script is loaded early).
hashchange()

// When URL changes.
window.addEventListener('hashchange', hashchange)

// When on the URL already, perhaps after scrolling, and clicking again, which
// doesn’t emit \`hashchange\`.
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
`,
        }}
      />
    </div>
  )
}
