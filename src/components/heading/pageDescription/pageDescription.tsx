/** @format */
interface Props {
	pageDescription: string;
}

const PageDescription = ({ pageDescription }:Props) => {
	return (
			<p className="fs-6 text-muted" >{pageDescription}</p>
	);
};

export default PageDescription;

