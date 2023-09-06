/** @format */
interface Props {
	pageDescription: string;
}

const PageDescription = ({ pageDescription }:Props) => {
	return (
			<p className="text-muted" >{pageDescription}</p>
	);
};

export default PageDescription;

