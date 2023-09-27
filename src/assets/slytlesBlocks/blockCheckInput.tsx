/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockCheckInput = ({ children }: Props) => {
	return (
		<div className='w-50 '>
			<div className='w-25 '>
				<div className='form-check text-start d-flex justify-content-between p-0 display-6 fs-3'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default BlockCheckInput;






