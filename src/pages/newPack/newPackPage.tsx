/** @format */

import { useForm } from 'react-hook-form';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import CreateNewPack from '../../components/formLayout/createNewPack';
import FormLayout from '../../components/formLayout/formLayout';
import PageLayout from '../../components/pageLayout/pageLayout';
import { NewPackRequest } from '../../interfaces/interfaces';
import { createPack } from '../../service/userService';

const pageName = ' New Pack';
const description = 'Plase choose a name for your brand new pack';
const NewPackPage = () => {
	const { register, handleSubmit, control } = useForm<NewPackRequest>();

	const onSubmit = (data: NewPackRequest) => createPack(data);
	return (
		<BlockContainer>
			<PageLayout
				pageName={pageName}
				description={description}
			/>

			<FormLayout
				pageName={pageName}
				onSubmit={handleSubmit(onSubmit)}>
				<CreateNewPack
					control={control}
					register={register}
				/>
			</FormLayout>
		</BlockContainer>
	);
};

export default NewPackPage;

