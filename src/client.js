import React from 'react'
import { render } from 'react-dom'
import { Router, match, browserHistory as history } from 'react-router'
import routes from './routes'

match({ routes, history }, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps}>
      {routes}
    </Router>,
    document.getElementById('content')
  )
})