import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Error404 } from './pages/404'
import { Commands } from './pages/Commands'
import { Credits } from './pages/Credits/index'
import { Welcome } from './pages/Welcome'

import { Fonts } from './styles/fonts'
import { GlobalStyles } from './styles/globals'

import { Normalize } from './styles/normalize'

const ROOT_ELEMENT = 'app'

ReactDOM.render(
  <BrowserRouter>
    <Fonts />
    <Normalize />
    <GlobalStyles />
    <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/home' element={<App />} />
      <Route exact path='/commands' element={<Commands />} />
      <Route exact path='/credits' element={<Credits />} />
      <Route exact path='*' element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById(ROOT_ELEMENT)
)
