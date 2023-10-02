/** @format */

import GroupEventBlock from '../../assets/slytlesBlocks/blockEventGroup';
import EventDietIcons from '../../components/createEvents/eventsIcons';

const Events = () => {
	return (
		<>
			<GroupEventBlock
				className='bg-info  '
				groupName={'Diet'}>
				<EventDietIcons />
			</GroupEventBlock>

			<GroupEventBlock
				className='bg-success'
				groupName={'Health'}>
				<EventDietIcons />
			</GroupEventBlock>
			<GroupEventBlock
				className='bg-warning'
				groupName={'Ohter'}>
				<EventDietIcons />
			</GroupEventBlock>
		</>
	);
};

export default Events;

