import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';


export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </HashRouter>
    )
};
