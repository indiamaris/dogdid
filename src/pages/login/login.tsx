/** @format */

import Btn from '../../components/btn/btn';
import Heading from '../../components/heading/heading';
const pageName = 'Login';

const Login = () => {
	return (
		<>
			<div className='m-4'>
				<div className='p-2 text-center'>
					<Heading pageName={'Login'} />
				</div>
				<div
					className='
		container pt-5'>
					<form>
						<h1 className='h3 mb-4 fw-normal'> Please sign in:</h1>

						<div className='form-floating mb-4'>
							<input
								type='email'
								className='form-control'
								id='floatingInput'
								placeholder='name@example.com'
							/>
							<label htmlFor='floatingInput mb-5'>
								Email address
							</label>
						</div>
						<div className='form-floating'>
							<input
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
							/>
							<label htmlFor='floatingPassword'>Password</label>
						</div>

						<div className='form-check text-start my-3'>
							<input
								className='form-check-input'
								type='checkbox'
								value='remember-me'
								id='flexCheckDefault'
							/>
							<label
								className='form-check-label mb-5'
								htmlFor='flexCheckDefault'>
								Remember me
							</label>
						</div>
						<Btn type='submit'>Submit</Btn>

						<p className='mt-5 mb-3 text-body-secondary'>
							©Indiamaris
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;

