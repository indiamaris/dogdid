/** @format */

import Btn from '../../components/btn/btn';

const HomeBtns = () => {
	return (
		<>
			<div
				className='
			d-flex flex-column
			justify-content-center
			// justify-content-around
			m-2 '>
				<div className='m-2'>
					<Btn name={'Login'} />
				</div>
				<div className='m-2'>
					<Btn name={'Sign Up'} />
				</div>
			</div>
		</>
	);
};

export default HomeBtns;







