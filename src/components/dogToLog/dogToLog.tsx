/** @format */

import Header from '../../home/heading/title/title';
import React from 'react';

const DogsLog = () => {
	const page_name = ' EventsLogs ';
	return (
		<>
			<div>
				<Header app_name={page_name} />
			</div>

			<div classNameName='display-8 d-flex justify-content-center mb-5'>
				<p>
					Choose dogs to start <strong>DogLogging</strong> !
				</p>
			</div>

			{/* aqui coemca de fato a tabela */}

			<div classNameName='lists d-flex flex-column justify-content-end '>
				<div classNameName='col-12  d-flex justify-content-center '>
					<button
						type='button'
						disabled={false}
						className='col-11 btn btn-lg btn-primary '>
						Click here to select <strong>ALL</strong> dogs in that
						pack
					</button>
				</div>

				<div classNameName='display-8 d-flex justify-content-center mt-5'>
					<p>
						Or click on the dogs name above to choose{' '}
						<strong>one by one</strong> !
					</p>
				</div>
				<div className='col-12   d-flex justify-content-center  flex-wrap mt-4'>
					<div
						type='button'
						className='col-2 btn btn-lg btn-outline-primary m-3'>
						Amarela
					</div>

					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Noam
					</button>
					<button
						type='button'
						disabled={false}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Pipoca
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Juliana
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={false}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						enabled={true}
						className='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
					<button
						type='button'
						disabled={true}
						classNameName='col-2 btn btn-lg btn-outline-primary m-3 '>
						Margarida
					</button>
				</div>
			</div>
		</>
	);
};

export default DogsLog;

