/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockFormControl = ({ children }: Props) => {
	return (
		<div className='form-floating mb-4'>
			{children}
		</div>
	);
};

export default BlockFormControl;


