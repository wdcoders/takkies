import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = () => import('./components/Dashboard');

const Routes = (
	<Switch>
		<Route exact path='/' component={Dashboard} />
	</Switch>
);

export default Routes;
