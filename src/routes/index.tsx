import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Login from '../pages/Login'

const Router: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
    </Switch>
);

export default Router;