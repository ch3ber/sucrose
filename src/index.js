import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Commands } from './pages/Commands'
import { Credits } from './pages/Credits'
import { Welcome } from './pages/Welcome'
import './styles/index.scss'

const ROOT_ELEMENT = 'app'

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/home' element={<App />} />
      <Route exact path='/commands' element={<Commands />} />
      <Route exact path='/credits' element={<Credits />} />

    </Routes>
  </BrowserRouter>
  , document.getElementById(ROOT_ELEMENT)
)
