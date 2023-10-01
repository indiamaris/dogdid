/** @format */

import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
import Input from '../../components/inputs/input';
import { UseFormRegister } from 'react-hook-form';
import { NewPackRequest } from '../../interfaces/interfaces';
export interface newPackProps {
	index: number;
	prefix: string;
	register: UseFormRegister<NewPackRequest>;
}

const CreatePet = ({ index, register }: newPackProps) => {
	return (
		<>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputName'
					placeholder='petname'
					label='	PetName'
					{...register(`pets.${index}.name`)}
				/>
			</BlockFormControl>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputPetName'
					placeholder='petbreed'
					label='	PetName'
					{...register(`pets.${index}.breed`)}
				/>
			</BlockFormControl>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputColor'
					placeholder='petcolor'
					label='	Petcolor'
					{...register(`pets.${index}.color`)}
				/>
			</BlockFormControl>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputBirthDate'
					placeholder='petBirthDate'
					label='PetBirthDate'
					{...register(`pets.${index}.birthDate`)}
				/>
			</BlockFormControl>
		</>
	);
};

export default CreatePet;

