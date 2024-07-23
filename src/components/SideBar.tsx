import { Users } from 'lucide-react'
import { NavLink, NavLinkRenderProps } from 'react-router-dom'

const SideBar = () => {
  const menu = [
    {
      title: 'Employees',
      path: '/employees',
      icon: <Users strokeWidth={1.5} />,
    },
  ]

  return (
    <aside className="fixed top-0 left-0 z-10 flex flex-col items-center h-screen gap-8 p-8 border-r-2 w-72 border-slate-100">
      <strong className="text-3xl font-bold">
        <span className="font-black text-red-400">HR</span>net
      </strong>
      <nav className="flex flex-col w-full gap-4">
        {menu.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }: NavLinkRenderProps) => {
              const classes =
                'flex items-center gap-4 p-4 text-lg font-semibold hover:bg-red-200 rounded-xl text-black'
              return isActive
                ? `${classes} bg-red-300 hover:bg-red-300 text-black`
                : classes
            }}
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default SideBar
