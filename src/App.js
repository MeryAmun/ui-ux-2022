import './App.css'
import './index.css'

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './containers'
import { Brand, Cta, Navbar } from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import React from 'react'

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Header} />

          <Route exact path='/wgpt3' component={WhatGPT3} />
          <Route exact path='/features' component={Features} />
          <Route exact path='/possibility' component={Possibility} />

          <Route exact path='/blog' component={Blog} />
        </Switch>
        <Brand />
        <Cta />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
