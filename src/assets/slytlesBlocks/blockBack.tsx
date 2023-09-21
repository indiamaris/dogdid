/** @format */

import { ReactNode } from 'react';

/** @format */
interface Props {
	children: ReactNode;
}
const BlockBack = ({ children }: Props) => {
	return (

			<div className='d-flex align-items-end my-4'>{children}</div>
	
	);
};

export default BlockBack;

