/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockCheckInput = ({ children }: Props) => {
	return (
		<div className='form-check text-start d-flex justify-content-between mx-5 px-5 mb-4'>
			{children}
		</div>
	);
};

export default BlockCheckInput;

