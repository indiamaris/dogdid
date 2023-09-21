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
				<div> {groupName}</div>

				<div className={`card  ${className}`}>{children}</div>
			</div>
		</BlockContainer>
	);
};

export default EventGroupBlock;









