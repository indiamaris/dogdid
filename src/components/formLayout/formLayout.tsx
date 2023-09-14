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
	onClick?: React.MouseEvent<HTMLElement>;
	// onClick?: MouseEvent<HTMLElement>;
	// onClick?: MouseEventHandler<HTMLButtonElement>;
}

const FormLayout = ({ pageName, description, onClick }: Props) => {
	return (
		<BlockContainer>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>
			<BlockDescription pageName={pageName}>
				<form>
					<PageDescription
						children={description}
						pageName={pageName}></PageDescription>
					<UserCredentials />
					<BlockBtn>
						<Btn
							type='submit'
							onClick={onClick}>
							{pageName}
						</Btn>
					</BlockBtn>
				</form>
			</BlockDescription>
		</BlockContainer>
	);
};

export default FormLayout;

