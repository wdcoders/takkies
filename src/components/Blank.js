import React from 'react';

const Blank = () => {
	return (
		<div className='re-page'>
			<div className='re-page-breadcrumb'></div>
			<div className='re-panel'>
				<div className='re-panel-header'>
					<h4>Blank Page</h4>
					<div className='re-panel-buttons'>
						<button type='button' className='btn btn-primary'>
							Add Element
						</button>
					</div>
				</div>
				<div className='re-panel-body'></div>
				<div className='re-panel-footer'></div>
			</div>
		</div>
	);
};

export default Blank;
