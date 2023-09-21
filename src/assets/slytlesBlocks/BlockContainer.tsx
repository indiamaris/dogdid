/** @format */

import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	pageName?: string;
}

const BlockContainer = ({ pageName, children }: Props) => {
	const spacingForPages =
		pageName?.toLowerCase() === 'dog log' ? 'text-center m-2 p-3' : 'm-2';
	return <div className={`  ${spacingForPages}`}>{children}</div>;
};

export default BlockContainer;

