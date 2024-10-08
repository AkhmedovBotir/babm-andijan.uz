import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Goals, Home, Life, NoPage, Organizational, Press, Staff } from './pages'

export default function App() {
  const router = [
    {
      id: 1,
      path: '/',
      name: 'Home',
      component: <Home />
    },
    {
      id: 2,
      path: '/about',
      name: 'About',
      component: <About />
    },
    {
      id: 3,
      path: '/life',
      name: 'Life',
      component: <Life />
    },
    {
      id: 4,
      path: '/press',
      name: 'Press',
      component: <Press />
    },
    {
      id: 5,
      path: '/contact',
      name: 'Contact',
      component: <Contact />
    },
    {
      id: 6,
      path: '/*',
      name: 'NoPage',
      component: <NoPage />
    },
    {
      id: 7,
      path: "/about/goals",
      name: "Goals",
      component: <Goals />
    },
    {
      id: 8,
      path: "/about/organizational",
      name: "Organizational",
      component: <Organizational />
    },
    {
      id: 9,
      path: "/about/staff",
      name: "Staff",
      component: <Staff />
    }
  ]
  return (
    <BrowserRouter>
      <Routes>
        {
          router.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}
