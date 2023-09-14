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

			<EventGroupBlock groupName={'Diet'}>
				<EventDietIcons />
			</EventGroupBlock>
			<EventGroupBlock groupName={'Health'}>
				<EventDietIcons />
			</EventGroupBlock>
			<EventGroupBlock groupName={'Ohter'}>
				<EventDietIcons />
			</EventGroupBlock>
		</>
	);
};

export default Events;

