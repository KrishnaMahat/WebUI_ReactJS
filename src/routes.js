import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))
const Blog = React.lazy(() => import('./views/blog/Blog'))
const Mcq = React.lazy(() => import('./views/mcq/Mcq'))
const Discuss = React.lazy(() => import('./views/discuss/Discuss'))
const Notes = React.lazy(() => import('./views/notes/Notes'))
const Login = React.lazy(() => import('./views/login/Login'))
const Register = React.lazy(() => import('./views/register/Register'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', element: Home },
  { path: '/blog', name: 'Blog', element: Blog },
  { path: '/mcq', name: 'Mcq', element: Mcq },
  { path: '/discuss', name: 'Discuss', element: Discuss },
  { path: '/notes', name: 'Notes', element: Notes },
  { path: '/login', name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Register },
  { path: '/charts', name: 'Charts', element: Charts },
]

export default routes
