import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 z-10 w-64 h-screen bg-slate-50">
      <strong className="text-3xl font-bold">
        <span className="font-black text-rose-700">HR</span>net
      </strong>
      <nav className="flex flex-col gap-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/employees">Employees</NavLink>
      </nav>
    </aside>
  )
}

export default SideBar
