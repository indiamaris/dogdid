/** @format */

import BlockContainer from './BlockContainer';

interface Props {
	groupName: string;
	groupId?: string;
	groupIcon?: string;
	children: string;
	className:string
}
const EventGroupBlock = ({
	children,
	groupName,
	className,
	groupIcon,
	groupId,
}: Props) => {
	return (
		<BlockContainer>
			<div>
				{groupName}
				<div className={`card ${className}`}>
					<div className='my-0 fw-normal'>{children}</div>
				</div>
			</div>
		</BlockContainer>
	);
};

export default EventGroupBlock;





