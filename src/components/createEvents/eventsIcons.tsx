/** @format */

import { MdWaterDrop } from 'react-icons/md';
import { TbDogBowl } from 'react-icons/tb';
import { BiBone } from 'react-icons/bi';
import IconBlock from '../../pages/iconBlock';
const water = (
	<h1>
		<MdWaterDrop />
	</h1>
);
const food = (
	<h1>
		<TbDogBowl />
	</h1>
);

const treat = (
	<h1>
		<BiBone />
	</h1>
);
const EventDietIcons = () => {
	return (
		<div
			className='
			w-100 d-flex p-4
			flex-row justify-content-between flex-fill'>
			<IconBlock
				icon={water}
				name={'Water'}
			/>
			<IconBlock
				icon={food}
				name={'Food'}
			/>
			<IconBlock
				icon={treat}
				name={'Treat'}
			/>
		</div>
	);
};

export default EventDietIcons;


