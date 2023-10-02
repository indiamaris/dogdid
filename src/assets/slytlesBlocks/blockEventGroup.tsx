/** @format */

import { ReactNode } from 'react';
import BlockContainer from './BlockContainer';

interface Props {
	groupName: string;
	groupId?: string;
	groupIcon?: string;
	children: ReactNode;
	className: string;
}
const GroupEventBlock = ({
	children,
	groupName,
	className,
	groupIcon,
	groupId,
}: Props) => {
	return (
		<BlockContainer>
			<div className='text-center '>
				<div> {groupName}</div>

				<div className={` bg-gradient bg-opacity-10 card  ${className}`}>
					{children}
				</div>
			</div>
		</BlockContainer>
	);
};

export default GroupEventBlock;


