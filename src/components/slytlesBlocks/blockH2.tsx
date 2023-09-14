/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockH2 = ({ children }: Props) => {
	return (
		<div
			className='className='
			m-4
			mt-5>
			{children}
		</div>
	);
};

export default BlockH2;

