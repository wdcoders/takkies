import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import 'antd/dist/antd.css';
import './App.css';
import './assets/css/takkies.min.css';

import Dashboard from './components/Dashboard';
import Layout from './components/Layout/Layout';
import Blank from './components/Blank';

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route exact path='/blank' component={Blank} />
					</Switch>
				</Layout>
			</Router>
		</>
	);
}

export default App;
