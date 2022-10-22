import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="sk-chasing-dots">
    <div className="sk-child sk-dot1"></div>
    <div className="sk-child sk-dot2"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/login/Login'))
const Register = React.lazy(() => import('./views/register/Register'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route exact path="/login" name="Login Page" element={<Login />} /> */}
            {/* <Route exact path="/register" name="Register Page" element={<Register />} /> */}

            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
