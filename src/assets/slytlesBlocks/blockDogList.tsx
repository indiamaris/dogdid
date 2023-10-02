/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const BlockDogList = ({ children }: Props) => {
	return (
		<div className='col-12   d-flex justify-content-center  flex-wrap mt-4'>
			{children}
		</div>
	);
};

export default BlockDogList;

