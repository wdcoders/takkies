import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='re-sidebar'>
			<div className='re-sidebar-header'></div>
			<div className='re-sidebar-auth'>
				<div className='re-sidebar-auth-img'></div>
				<div className='re-sidebar-auth-text'>
					<h4>Admin</h4>
					<p>Administrator</p>
				</div>
			</div>
			<div className='re-sidebar-navbar'>
				<ul className='re-sidebar-navbar-nav'>
					<li>
						<Link to='/'>
							<i className='ri-dashboard-line ri-xl'></i>Dashboard
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i className='ri-dashboard-line ri-xl'></i>Table
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i className='ri-dashboard-line ri-xl'></i>Blank
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i className='ri-dashboard-line ri-xl'></i>Dropdown
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
