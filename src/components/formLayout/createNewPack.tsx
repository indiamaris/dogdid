/** @format */

import BlockCheckInput from '../../assets/slytlesBlocks/blockCheckInput';
import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
import Input from '../inputs/input';
import CreatePet from '../../pages/newPack/pet';
import { NewPackRequest } from '../../interfaces/interfaces';
import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';

export interface newPackProps {
	control: Control<NewPackRequest, any>;
	register: UseFormRegister<NewPackRequest>;
}

const CreateNewPack = ({ control, register }: newPackProps) => {
	const { fields, append } = useFieldArray({
		name: 'pets',
		control,
	});

	const handleClick = () =>
		append({
			name: '',
			breed: '',
			color: '',
			birthDate: new Date().toISOString(),
		});
	return (
		<>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputName'
					placeholder='packname'
					label='	packName'
					{...register('name')}
				/>
			</BlockFormControl>
			{fields.map((item, index) => (
				<BlockFormControl key={item.id}>
					<CreatePet
						register={register}
						index={index}
					/>
				</BlockFormControl>
			))}

			<BlockFormControl>
				<button
					type='button'
					onClick={handleClick}>
					+
				</button>
			</BlockFormControl>
			<BlockCheckInput>
				<Input
					type='checkbox'
					className='naosei'
					id='flexCheckDefault'
					placeholder='rememberme'
					label='	Remember me'
				/>
			</BlockCheckInput>
			{console.log(register)}
		</>
	);
};

export default CreateNewPack;

