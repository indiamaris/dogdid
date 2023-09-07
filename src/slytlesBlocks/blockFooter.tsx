/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const BlockFooter = ({ children }: Props) => {
	return <div className='mb-footer'>{children}</div>;
};

export default BlockFooter;

