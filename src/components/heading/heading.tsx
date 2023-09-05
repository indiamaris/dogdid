interface Props {
	pageName:string
}
const Heading = ({ pageName }:Props) => {
	return  <h1 className='text-center pt-5 fs-2'>{pageName}</h1>
}
export default Heading;


