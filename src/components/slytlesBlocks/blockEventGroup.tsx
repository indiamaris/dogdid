/** @format */

import BlockContainer from './BlockContainer';

interface Props {
	groupName: string;
	groupId?: string;
	groupIcon?: string;
	children: string;
}
const EventGroupBlock = ({
	children,
	groupName,
	groupIcon,
	groupId,
}: Props) => {
	return (
		<BlockContainer>
			<div>
				{groupName}
				<div className='card '>
					<div className='my-0 fw-normal'>{children}</div>
				</div>
			</div>
		</BlockContainer>
	);
};

export default EventGroupBlock;



