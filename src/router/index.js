import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

function Router(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    );
}

export default Router;