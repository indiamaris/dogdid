/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockContainer = ({ children }: Props) => {
	return <div className='p-4 text-center'>{children}</div>;
};

export default BlockContainer;



