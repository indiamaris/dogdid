/** @format */

import { ReactNode } from 'react';

/** @format */
interface Props {
	children: ReactNode;
}
const BlockBack = ({ children }: Props) => {
	return (

		<div
			className='d-flex justify-items-center my-4 pt-5'
		>{children}</div>
	
	);
};

export default BlockBack;

