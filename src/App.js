import React from 'react'
import Header from './/component/Header'
import Home from './component/Home'
import Pages from './component/Pages'
import Users from './component/Users'
import Travel from './component/Travel'
import Blog from './component/Blog'
import Elements from './component/Elements'
import Shop from './component/Shop'
import Login from './component/Login'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
     return (
          <Router>
            <Header/>
           <Switch>
             <Route path="/login" component={Login}  />
             <Route path="/home" component={Home}   />
             <Route path="/" component={Users}  exact  />
             <Route path="/pages" component={Pages} />
             <Route path="/travel" component={Travel} />
             <Route path="/blog" component={Blog} />
             <Route path="/elements" component={Elements} />
             <Route path="/shop" component={Shop} />
           </Switch>
        </Router>
     )
      
    
}

export default App

