/** @format */

import { useParams } from 'react-router-dom';
import BlockContainer from '../../../assets/slytlesBlocks/BlockContainer';

import PetList from './petsList';
import usePack from '../../../hooks/usePack';
import Events from '../../events/events';
import BlockBtn from '../../../components/btn/blockBtn';
import PageDescription from '../../../components/pageLayout/pageDescription/pageDescription';
import BtnLg from '../../../components/btn/btn_lg';
import FormLayout from '../../../components/formLayout/formLayout';

import { useForm } from 'react-hook-form';
import { UserCredentials } from '../../../interfaces/interfaces';
import { Pet } from '../../../interfaces/interfaces';
interface Props{

}
const PackPage = () => {
	const { register, handleSubmit } = useForm<Props>({
		defaultValues: { checkbox: [] },
	});
	const onSubmit = (pet.id) => console.log(pet.id);
	const { id } = useParams();
	// essas exclamacao significa que EU SEI QUE o id sempre chegara ateh aqui.
	const { data, error, isLoading } = usePack(id!);
	if (isLoading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;
	const pageName = data.name;

	return (
		<>
			<BlockContainer>
				<PageDescription pageName={pageName}>
					Welcome to {pageName} pack
				</PageDescription>
				<BlockBtn>
					<FormLayout
						pageName={'PackPage'}
						onSubmit={handleSubmit(onSubmit)}>
						<BlockBtn>
							<BtnLg className='btn-warning'>
								Click to select <strong>ALL</strong> dogs
							</BtnLg>
							<PetList
								id={id!}
								register={register}
							/>

							{/* <Events /> */}

							<BtnLg className='btn-success'>
								<strong>Finish</strong>
							</BtnLg>
						</BlockBtn>
					</FormLayout>
				</BlockBtn>
			</BlockContainer>
		</>
	);
};

export default PackPage;

