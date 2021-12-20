import { Outlet } from 'remix'

export default function Garden() {
  return (
    <div className="prose container mx-auto pt-10 pb-10">
      <Outlet />
    </div>
  )
}
