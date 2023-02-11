import { Link, Outlet, useLocation } from "@remix-run/react";
import codeSyntaxStyles from 'highlight.js/styles/night-owl.css'

export function links() {
  return [{ rel: 'stylesheet', href: codeSyntaxStyles }]
}

export default function Til() {
  const location = useLocation()

  return (
    <div className="container pt-10 pb-10 mx-auto prose">
      {location.pathname !== '/til' ? (
        <Link to="/til" className="block mb-10">
          ← 🤔 TIL
        </Link>
      ) : null}
      <Outlet />
    </div>
  )
}
