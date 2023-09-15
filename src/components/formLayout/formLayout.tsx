/** @format */

import BlockContainer from '../slytlesBlocks/BlockContainer';
import BlockDescription from '../slytlesBlocks/blockDescription';
import BlockHeading from '../slytlesBlocks/blockHeading';
import BlockBtn from '../btn/blockBtn';
import Btn from '../btn/btn';
import Heading from '../pageLayout/heading/heading';
import PageDescription from '../pageLayout/pageDescription/pageDescription';
import UserCredentials from './userCredentialsInput';

interface Props {
	pageName: string;
	description: string;

	// onClick?: MouseEvent<HTMLElement>;
	// onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FormLayout = ({ pageName, description }: Props) => {
	return (
		<BlockContainer>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>
			<BlockDescription pageName={pageName}>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						event.persist();
						console.log(event);
					}}>
					<PageDescription
						children={description}
						pageName={pageName}></PageDescription>
					<UserCredentials />

					<BlockBtn>
						<Btn type='submit'>{pageName}</Btn>
					</BlockBtn>
				</form>
			</BlockDescription>
		</BlockContainer>
	);
};

export default FormLayout;

