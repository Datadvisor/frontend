import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

type FormType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	passwordVerif?: string;
};

export default function RegisterForm() {
	const [formContent, setFormContent] = useState<FormType>({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordVerif: '',
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
		if (
			formContent.firstName === '' ||
			formContent.lastName === '' ||
			formContent.email === '' ||
			formContent.password !== formContent.passwordVerif
		) {
			toast.error('Passwords are not identical', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}

		try {
			await axios.post(
				'http://localhost:3001/users',
				{
					firstName: formContent.firstName,
					lastName: formContent.lastName,
					email: formContent.email,
					password: formContent.password,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			toast.success('Account created!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setFormContent({
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				passwordVerif: '',
			});
		} catch (error: any) {
			toast.error(error.response.data ? error.response.data.error.message : 'Error with server', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<>
			<div className="flex h-screen">
				<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<div>
							<h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign up now!</h2>
							<p className="mt-2 text-sm text-gray-600">
								It will only take{' '}
								<span className="font-medium text-indigo-600 hover:text-indigo-500">
									a few seconds !
								</span>
							</p>
						</div>

						<div className="mt-8">
							<div className="mt-6">
								<form onSubmit={onClick} method="POST" className="space-y-6">
									<div className={'flex space-x-4'}>
										<div>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-gray-700"
											>
												Last Name
											</label>
											<div className="mt-1">
												<input
													id="lastName"
													name="lastName"
													type="text"
													value={formContent.lastName}
													onChange={onChange}
													required
													className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="firstName"
												className="block text-sm font-medium text-gray-700"
											>
												First Name
											</label>
											<div className="mt-1">
												<input
													id="firstName"
													name="firstName"
													type="text"
													value={formContent.firstName}
													onChange={onChange}
													required
													className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												/>
											</div>
										</div>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700">
											E-mail
										</label>
										<div className="mt-1">
											<input
												id="email"
												name="email"
												type="email"
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
												value={formContent.password}
												onChange={onChange}
												autoComplete="current-password"
												required
												className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											/>
										</div>
									</div>

									<div className="space-y-1">
										<label
											htmlFor="passwordVerif"
											className="block text-sm font-medium text-gray-700"
										>
											Verify Password
										</label>
										<div className="mt-1">
											<input
												id="passwordVerif"
												name="passwordVerif"
												type="password"
												value={formContent.passwordVerif}
												onChange={onChange}
												autoComplete="current-password"
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
											<Link href="/forgot_password">
												<a className="font-medium text-indigo-600 hover:text-indigo-500">
													Forgot your password?
												</a>
											</Link>
										</div>
									</div>

									<div>
										<button
											type="submit"
											className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Create your account
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
		</>
	);
}
