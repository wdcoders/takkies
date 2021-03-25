import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='re-header'>
			<div className='re-header-bar'>
				<i className='ri-menu-line ri-xl'></i>
			</div>
			<div className='re-header-navbar'>
				<ul className='re-header-navbar-nav'>
					<li>
						<Link to=''>
							<i className='ri-notification-line ri-xl'></i>
						</Link>
					</li>
					<li>
						<Link to=''>
							<i className='ri-user-4-fill ri-xl'></i>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
