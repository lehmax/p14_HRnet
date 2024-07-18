import { Outlet } from 'react-router-dom'

import SideBar from '../components/SideBar'

const Root = () => {
  return (
    <>
      <SideBar />
      <main className="p-4 sm:ml-64">
        <Outlet />
      </main>
    </>
  )
}

export default Root
