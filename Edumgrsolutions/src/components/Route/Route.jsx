import React from 'react'
import { Router, Route } from 'react-router-dom'
import Feature from '../Feature'

const Route = () => {
  return (
      <Router>
        <Route path='/feature' element={<Feature/>}>
            <Feature/>
        </Route>
      </Router>
    )
}

export default Route