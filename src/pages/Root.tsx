import { Outlet } from 'react-router-dom'

import SideBar from '../components/SideBar'

const Root = () => {
  return (
    <>
      <SideBar />
      <main className="min-h-screen p-12 h-fit sm:ml-72 bg-gray-50">
        <div className="flex flex-col gap-8 p-10 bg-white border border-gray-100 rounded-md max-w-[600px]">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Root
