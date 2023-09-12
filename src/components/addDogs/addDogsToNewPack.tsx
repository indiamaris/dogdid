/** @format */

import PageLayout from '../pageLayout';
import BlockContainer from '../../slytlesBlocks/BlockContainer';
import AddDogBtns from './addDogsBtn';
import NewDog from './newDog';
const pageDescription = 'Lets add dogs to your pack';
const pageName = 'Add Dog';
const AddDogs = () => {
	return (
		<BlockContainer>
			<PageLayout
				pageName={pageName}
				children={''}
				pageDescription={pageDescription}
			/>
			<NewDog />
			<AddDogBtns />
		</BlockContainer>
	);
};

export default AddDogs;

