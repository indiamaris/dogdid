/** @format */
import 'bootstrap/dist/css/bootstrap.css';
import Input from '../inputs/input';
import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
const NewDog = () => {
	return (
		<>
			<BlockFormControl>
				<Input
					type={'text'}
					className={'form-control'}
					id={'newdogname'}
					label={'Insert dog name'}
					placeholder={'dogname'}
				/>
			</BlockFormControl>

			<BlockFormControl>
				<Input
					type={'text'}
					className={'form-control'}
					id={'newdogbreed'}
					label={'Insert Dog Breed'}
					placeholder={'newdogbreed'}
				/>
			</BlockFormControl>
			<BlockFormControl>
				<Input
					type={'text'}
					className={'form-control'}
					id={'newDogBirthday'}
					label={'Insert  Dog Birthday'}
					placeholder={'newDogBirthday'}
				/>
			</BlockFormControl>
		</>
	);
};

export default NewDog;

