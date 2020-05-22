import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Historico from './pages/Historico';
import Login from './pages/Login';
import Caio from './pages/Caio';
import Paula from './pages/Paula';
import Soter from './pages/Soter';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/historico" component={Historico} />
                <Route path="/caio" component={Caio} />
                <Route path="/paula" component={Paula} />
                <Route path="/soter" component={Soter} />
            </Switch>
        </BrowserRouter>
    );
}
