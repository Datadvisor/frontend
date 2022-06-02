import { useState } from 'react';
import { CheckCircleIcon, XIcon } from '@heroicons/react/outline';

/**
 * This Type represent the contact form
 */
type FormType = {
	'first-name': string;
	'last-name': string;
	email: string;
	company: string;
	phone: string;
	'how-can-we-help': string;
	topic: string;
};

/**
 * This function is used to represent the Contact's page
 * @constructor
 */
export default function ContactForm() {
	/**
	 * Contain the users contact information
	 */
	const [formContent, setFormContent] = useState<FormType>({
		'first-name': '',
		'last-name': '',
		email: '',
		company: '',
		phone: '',
		'how-can-we-help': '',
		topic: 'other',
	});

	/**
	 * Contain every error related for each field of the form
	 */
	const [errorsContent, setErrorsContent] = useState<FormType>({
		'first-name': '',
		'last-name': '',
		email: '',
		company: '',
		phone: '',
		'how-can-we-help': '',
		topic: 'other',
	});

	/**
	 * This allows to display the confirmation of the sended mail
	 */
	const [formSended, setFormSended] = useState<boolean>(false);

	/**
	 * Call this function whenever you want to check if there is error on each field of the FormContent content
	 */
	const updateErrors = () => {
		const formState: FormType = {
			'first-name': '',
			'last-name': '',
			email: '',
			company: '',
			phone: '',
			'how-can-we-help': '',
			topic: 'other',
		};
		if (formContent['first-name'] === '') formState['first-name'] = 'Content can not be empty';
		else formState['first-name'] = '';
		if (formContent['last-name'] === '') formState['last-name'] = 'Content can not be empty';
		else formState['last-name'] = '';
		if (formContent.email === '') formState.email = 'Content can not be empty';
		else formState.email = '';
		if (formContent['how-can-we-help'] === '') formState['how-can-we-help'] = 'Content can not be empty';
		else formState['how-can-we-help'] = '';
		setErrorsContent(formState);
	};

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
	const onClick = (e: any) => {
		e.preventDefault();
		updateErrors();
		if (
			formContent['first-name'] === '' ||
			formContent['last-name'] === '' ||
			formContent.email === '' ||
			formContent['how-can-we-help'] === ''
		) {
			console.log('failed');
			return;
		}
		setFormSended(true);
	};

	return (
		<div className="bg-white">
			<main>
				{/* Header */}
				<div className="py-24 bg-gray-50 sm:py-32">
					<div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
						<h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
							Contact Datadvisor
						</h1>
						<p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
							Our team will be happy to answer your questions or discuss with you a potential partnership with your project
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="relative bg-white">
					<div className="lg:absolute lg:inset-0">
						<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<img
								className="h-56 w-full object-cover lg:absolute lg:h-full"
								src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
								alt=""
							/>
						</div>
					</div>
					<div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
						<div className="lg:pr-8">
							<div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
								<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
									What would you like

								</h2>
								<p className="mt-4 text-lg text-gray-500 sm:mt-3">
									Our team cares deeply about our customer service/corporate relationship. It is in the DNA of our workflow that collaboration is a key step towards success
								</p>
								<form
									action="#"
									method="POST"
									className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
								>
									<div>
										<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
											First Name
										</label>
										<div className="mt-1">
											<input
												value={formContent['first-name']}
												onChange={onChange}
												required
												type="text"
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
											/>
										</div>
										{errorsContent['first-name'] && (
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-red-700"
											>
												{errorsContent['first-name']}
											</label>
										)}
									</div>
									<div>
										<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
											Last Name
										</label>
										<div className="mt-1">
											<input
												value={formContent['last-name']}
												onChange={onChange}
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
											/>
											{errorsContent['last-name'] && (
												<label
													htmlFor="last-name"
													className="block text-sm font-medium text-red-700"
												>
													{errorsContent['last-name']}
												</label>
											)}
										</div>
									</div>
									<div className="sm:col-span-2">
										<label htmlFor="email" className="block text-sm font-medium text-gray-700">
											Email
										</label>
										<div className="mt-1">
											<input
												value={formContent.email}
												onChange={onChange}
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
											/>
											{errorsContent.email && (
												<label
													htmlFor="email"
													className="block text-sm font-medium text-red-700"
												>
													{errorsContent.email}
												</label>
											)}
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="flex justify-between">
											<label
												htmlFor="company"
												className="block text-sm font-medium text-gray-700"
											>
												Compagny
											</label>
											<span id="company-description" className="text-sm text-gray-500">
												Optional
											</span>
										</div>

										<div className="mt-1">
											<input
												value={formContent.company}
												onChange={onChange}
												type="text"
												name="company"
												id="company"
												autoComplete="organization"
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="flex justify-between">
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
												Tel
											</label>
											<span id="phone-description" className="text-sm text-gray-500">
												Optional
											</span>
										</div>
										<div className="mt-1">
											<input
												value={formContent.phone}
												onChange={onChange}
												type="text"
												name="phone"
												id="phone"
												autoComplete="tel"
												aria-describedby="phone-description"
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="flex justify-between">
											<label
												htmlFor="how-can-we-help"
												className="block text-sm font-medium text-gray-700"
											>
												Tel us
											</label>
											<span id="how-can-we-help-description" className="text-sm text-gray-500">
												Max. 500 chars.
											</span>
										</div>
										<div className="mt-1">
											<textarea
												value={formContent['how-can-we-help']}
												onChange={onChange}
												id="how-can-we-help"
												name="how-can-we-help"
												aria-describedby="how-can-we-help-description"
												rows={4}
												maxLength={500}
												className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
											/>
											{errorsContent['how-can-we-help'] && (
												<label
													htmlFor="how-can-we-help"
													className="block text-sm font-medium text-red-700"
												>
													{errorsContent['how-can-we-help']}
												</label>
											)}
										</div>
									</div>
									<fieldset className="sm:col-span-2">
										<legend className="block text-sm font-medium text-gray-700">Sujet</legend>
										<div className="mt-4 grid grid-cols-1 gap-y-4">
											<div className="flex items-center">
												<input
													onChange={onChange}
													id="topic-partenaire"
													name="topic"
													defaultValue="partenaire"
													type="radio"
													className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
												/>
												<label htmlFor="topic-partenaire" className="ml-3">
													<span className="block text-sm text-gray-700">Partneship</span>
												</label>
											</div>
											<div className="flex items-center">
												<input
													onChange={onChange}
													id="topic-question"
													name="topic"
													defaultValue="question"
													type="radio"
													className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
												/>
												<label htmlFor="topic-question" className="ml-3">
													<span className="block text-sm text-gray-700">Question</span>
												</label>
											</div>
											<div className="flex items-center">
												<input
													onChange={onChange}
													id="topic-help"
													name="topic"
													defaultValue="help"
													type="radio"
													className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
												/>
												<label htmlFor="topic-help" className="ml-3">
													<span className="block text-sm text-gray-700">Help</span>
												</label>
											</div>
											<div className="flex items-center">
												<input
													onChange={onChange}
													id="topic-other"
													name="topic"
													defaultValue="other"
													type="radio"
													className="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300"
													defaultChecked={true}
												/>
												<label htmlFor="topic-other" className="ml-3">
													<span className="block text-sm text-gray-700">Other</span>
												</label>
											</div>
										</div>
									</fieldset>
									<div className="text-right sm:col-span-2">
										<button
											type="submit"
											onClick={onClick}
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grape-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500"
										>
											Send
										</button>
										{formSended && (
											<div className="mt-6 rounded-md bg-green-50 p-4 transition-all     animate-pulse">
												<div className="flex">
													<div className="flex-shrink-0">
														<CheckCircleIcon
															className="h-5 w-5 text-green-400"
															aria-hidden="true"
														/>
													</div>
													<div className="ml-3">
														<p className="text-sm font-medium text-green-800">
															Request successfuly sended
														</p>
													</div>
													<div className="ml-auto pl-3">
														<div className="-mx-1.5 -my-1.5">
															<button
																type="button"
																onClick={() => setFormSended(false)}
																className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
															>
																<span className="sr-only">Close</span>
																<XIcon className="h-5 w-5" aria-hidden="true" />
															</button>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
