import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { DefaultLayout } from './layouts/Default'
import Characters from './pages/Characters'
import Films from './pages/Films'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/Films" element={<Films />} />
      </Route>
    </Routes>
  )
}