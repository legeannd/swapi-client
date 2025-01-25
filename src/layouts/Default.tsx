import { Outlet } from 'react-router'
import MenuBar from '../components/MenuBar'

export function DefaultLayout() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  )
}