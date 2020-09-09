import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'

const DefaultPage = () => (
  <div>
    <h1>Default</h1>
    <p>Hey Default Page</p>
  </div>
)

const FirstPage = () => (
  <div>
    <h1>First</h1>
    <p>Hey First Page</p>
  </div>
)

const NoMatch = () => (
  <div>
    <h1>Not found</h1>
    <p>404 page</p>
  </div>
)

const Routes = () => {
  return(
    <div>
    <Link to="/">Home</Link>
    <Link to="/page1">Page1</Link>
      <Switch>
        <Route exact path="/" component={DefaultPage} />
        <Route path="/page1" component={FirstPage} />
        <Route component={NoMatch} />
      </Switch>
  </div>
  )
}

export default Routes