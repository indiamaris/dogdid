/** @format */

import EventBtn from '../event_btn/event_bnt';

const EventTemplate = ({ event_group_name, events }) => {
	return (
		<div className='card-body col-6 p-2 d-flex flex-column position-static align-items-center '>
			<h4 className='my-0 fw-normal col-6'>{event_group_name}</h4>
			
			{events.map((event) => {
				return (<EventBtn
					key={event.name_event}
					icon_event={event.icon_event}
					name_event={event.name_event}
				/>)
			})}
		</div>
	);
};

export default EventTemplate;

