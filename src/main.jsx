import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, Routes, MemoryRouter } from 'react-router-dom'

import { store } from './state/store'
import { Provider } from 'react-redux'

import Login from './pages/login'
import Choose from './pages/choose'


import './styles/index.css';
import Loader from './components/loader'
import Dashboard from './pages/dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <MemoryRouter>
      <Loader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
  </Provider>,
)
