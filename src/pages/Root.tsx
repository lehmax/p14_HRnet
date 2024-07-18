import { Outlet } from 'react-router-dom'

import SideBar from '../components/SideBar'

const Root = () => {
  return (
    <>
      <SideBar />
      <main className="h-screen p-12 sm:ml-72 bg-slate-50">
        <div className="flex flex-col gap-8 p-10 bg-white border rounded-md border-slate-100">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Root
