/** @format */

import Header from '../../home/heading/title/title';
import React from 'react';
import EventTemplate from './event_template/event_template';
import Diet from './diet_event_log/diet_event_log';
const EventsLog = () => {
	const page_name = ' Events Logs ';
	const event_group = ['Diet', 'Outdoor', 'Health'];

	// const event_icon_diet =
	return (
		<>
			<div>
				<Header app_name={page_name} />
			</div>

			<div className='display-8 d-flex justify-content-center mb-5'>
				<p>
					Choose events to <strong>Logging</strong> !
				</p>
			</div>

			{/* here is the cards */}
			<div className='d-flex align-items-center m-4 '>
				<div className=' row row-cols-1 row-cols-md-3 mb-3 text-center'>
					<Diet />
				</div>
			</div>

			{/* aqui coemca de fato a tabela */}
		</>
	);
};

export default EventsLog;

