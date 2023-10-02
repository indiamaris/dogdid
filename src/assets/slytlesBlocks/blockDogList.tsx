/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const BlockDogList = ({ children }: Props) => {
	return (
		<div
			className='col-12 row-2
		card
		   d-flex flex-row justify-content-start align-items-center  flex-sm-wrap ms-3
		   bg-info bg-gradient bg-opacity-10 '>
			{children}
		</div>
	);
};

export default BlockDogList;


