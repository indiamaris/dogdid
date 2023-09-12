/** @format */

interface Props {
	pageName: string;
	children: string;

}

const PageDescription = ({ children, pageName }: Props) => {
	const alignment =
		pageName.toLowerCase() !== 'dog log' ? 'text-start fs-3' : 'text-muted';

	return <p className={` ${alignment} `}>{children}</p>;
};
export default PageDescription;

