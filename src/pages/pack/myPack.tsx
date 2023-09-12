/** @format */
import { Link } from 'react-router-dom';
const PackTemplate = ({ pack_name, pack_pic }) => {
	return (
		<div className='col'>
			<div className='card mb-4 rounded-3 shadow-sm border-primary'>
				<div className='card-header py-3 text-bg-primary border-primary'>
					<h4 className='my-0 fw-normal'>
						<b>Pack: </b>
						{pack_name}
					</h4>
				</div>
				<div className='card-body col p-1 d-flex flex-column position-static'>
					<div className=' col p-4 d-flex flex-column position-static '>
						<img
							className='card-text mb-auto'
							src={pack_pic}
							alt='pack_pic'
						/>
					</div>
					<Link to='/dog_logs'>
						<div className='w-100 btn btn-lg btn-primary'>
							<b>Enter</b>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PackTemplate;

