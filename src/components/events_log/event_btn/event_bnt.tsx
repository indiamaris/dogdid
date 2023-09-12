/** @format */

const EventBtn = ({name_event,icon_event}) => {
	return (
		<button className=' col-6 d-flex flex-column'>
			<img
				className='card-text mb-auto'
				src={icon_event}
				alt='icon_event'
			/>
			{name_event}
		</button>
	);
};

export default EventBtn;
