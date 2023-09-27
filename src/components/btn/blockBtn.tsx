/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockBtn = ({ children }: Props) => {
	return (
		<div className=' d-grid gap-5 d-xxl-block mx-auto mt-5 px-4 '>
			{children}
		</div>
	);
};

export default BlockBtn;

