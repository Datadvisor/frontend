import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

type FormType = {
	email: string;
	password: string;
};

import logo from '../../../public/logo.png';

import google_logo from '../../../public/google_logo.png';

const LoginForm = () => {
	const [formContent, setFormContent] = useState<FormType>({
		email: '',
		password: '',
	});

	/**
	 * It Allows changing FormContent dynamically
	 */
	const onChange = (e: any) => {
		setFormContent({
			...formContent,
			[e.target.name as keyof typeof formContent]: e.target.value,
		});
	};

	/**
	 * This Function is trigger whenever the user Press the Submit Button
	 */
	const onClick = async (e: any) => {
		e.preventDefault();

		try {
			await axios.post(
				'http://localhost:3001/auth/signin',
				{
					email: formContent.email,
					password: formContent.password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			toast.success("You're logged in !", {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setFormContent({
				email: '',
				password: '',
			});
		} catch (error: any) {
			toast.error(
				error && error.response && error.response.data && error.response.data.error
					? error.response.data.error.message
					: 'Error with server',
				{
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				},
			);
		}
	};

	return (
		<div className="min-h-full flex">
			<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<Image src={logo} alt="Logo" className="h-auto w-auto" />
						<h1 className={'text-3xl font-extrabold text-indigo-600'}>Sign in to your account</h1>
					</div>

					<div className="mt-8">
						<div>
							<div>
								<p className="text-sm font-medium text-gray-700">Sign in with</p>

								<div className="mt-1">
									<div>
										<a
											href="#"
											className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
										>
											<span className="sr-only">Se connecter in with Google</span>
											<Image src={google_logo} alt="Google Logo" />
										</a>
									</div>
								</div>
							</div>

							<div className="mt-6 relative">
								<div className="absolute inset-0 flex items-center" aria-hidden="true">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">Or continue with</span>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<form onSubmit={onClick} method="POST" className="space-y-6">
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										Email address
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											value={formContent.email}
											onChange={onChange}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label htmlFor="password" className="block text-sm font-medium text-gray-700">
										Password
									</label>
									<div className="mt-1">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											value={formContent.password}
											onChange={onChange}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<input
											id="remember-me"
											name="remember-me"
											type="checkbox"
											className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
										/>
										<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
											Remember me
										</label>
									</div>

									<div className="text-sm">
										<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
											Forgot your password?
										</a>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block relative w-0 flex-1">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
					alt=""
				/>
			</div>
		</div>
	);
};

export default LoginForm;
