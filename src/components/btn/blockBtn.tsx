/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockBtn = ({ children }: Props) => {
	return (

			<div className=' d-grid gap-2 d-md-block mx-auto col-10 mt-4'>
				{children}
		
		</div>
	);
};

export default BlockBtn;

