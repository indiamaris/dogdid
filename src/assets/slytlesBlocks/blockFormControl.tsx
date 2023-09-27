/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockFormControl = ({ children }: Props) => {
	return (
		<div
			className=' mb-4 p-2
display-6 fs-3 text-muted
	  '>
			{children}
		</div>
	);
};

export default BlockFormControl;

