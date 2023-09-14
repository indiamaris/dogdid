/** @format */

import EventGroupBlock from '../../components/slytlesBlocks/blockEventGroup';
import EventDietIcons from '../../components/createEvents/eventsIcons';

import PageLayout from '../../components/pageLayout/pageLayout';

const Events = () => {
	return (
		<>
			<PageLayout
				pageName={'Dog Did'}
				children={''}
				pageDescription={''}
			/>

			<EventGroupBlock
				className='bg-info bg-gradient bg-opacity-10'
				groupName={'Diet'}>
				<EventDietIcons />
			</EventGroupBlock>
			<EventGroupBlock
				className='bg-success bg-gradient bg-opacity-10'
				groupName={'Health'}>
				<EventDietIcons />
			</EventGroupBlock>
			<EventGroupBlock
				className='bg-warning bg-gradient bg-opacity-10'
				groupName={'Ohter'}>
				<EventDietIcons />
			</EventGroupBlock>
		</>
	);
};

export default Events;

