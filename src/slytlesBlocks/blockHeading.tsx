/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockHeading = ({ children }: Props) => {
	return <div className='p-4 mb-4 text-center'>{children} </div>;
};

export default BlockHeading;

