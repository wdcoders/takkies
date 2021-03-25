import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	return (
		<div className='re-wrapper'>
			<Sidebar />
			<div className='re-wrapper-right'>
				<Header />
				<div className='re-wrapper-content'>{children}</div>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
