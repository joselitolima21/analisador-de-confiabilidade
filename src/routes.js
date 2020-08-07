import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main';
import Teste from './pages/Teste';


export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/teste' exact component={Teste}/>
            </Switch>
        </HashRouter>
    )
};
