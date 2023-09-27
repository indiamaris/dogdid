/** @format */

import { Link } from 'react-router-dom';

const BackHome = () => {
	return (
		<div className='w-25'>
			<Link to='/'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20%'
					height='100%'
					fill='#2D6EFD'
					className='bi bi-house-heart-fill'
					viewBox='0 0 16 16'>
					<path d='M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z' />
					<path d='m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z' />
				</svg>
			</Link>
		</div>
	);
};

export default BackHome;

