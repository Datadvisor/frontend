import { Fragment, useContext, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	BookmarkAltIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	SupportIcon,
	XIcon,
	SearchIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { UserContext } from '../../context/user/userContext';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const solutions = [
	{
		name: 'Idefix, notre traqueur',
		description: 'Chercher des informations publiques sur vous gratuitement !',
		href: '#',
		icon: SearchIcon,
	},
	{
		name: 'Panoramix, le rapporteur',
		description: 'Obtenez des rapports personnalisés de votre présence tous les X temps.',
		href: '#',
		icon: CursorClickIcon,
	},
	{
		name: 'Suivix, le mensuel',
		description: 'Notre newsletter des infos importantes et bonnes pratiques.',
		href: '#',
		icon: ShieldCheckIcon,
	},
];
const callsToAction = [
	{ name: 'Voir une demo', href: '#', icon: PlayIcon },
	{ name: 'Nous contacter', href: '#', icon: PhoneIcon },
];
const resources = [
	{
		name: 'Contactez nous',
		description: "Besoin d'assistance, envie de faire un partenariat ?",
		href: 'contact',
		icon: SupportIcon,
	},
	{
		name: 'Guide utilisateur',
		description: 'Tout ce que vous devez savoir sur Datadvisor.',
		href: '#',
		icon: BookmarkAltIcon,
	},
	{
		name: 'Protection des données',
		description: 'Nos règles en matière de RGPD, votre sécurité et notre priorité.',
		href: '#',
		icon: ShieldCheckIcon,
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	const userContext = useContext(UserContext);

	useEffect(() => {
		if (userContext.logUser) userContext.logUser();
	}, []);

	return (
		<Popover className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex items-center justify-start lg:w-0 lg:flex-1">
						<Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" width={70} height={70} />
						<a href="/">
							<span className="sr-only">Datadvisor</span>
							<h1 className={'text-3xl font-extrabold text-indigo-600'}>Datadvisor</h1>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden md:flex space-x-10">
						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-gray-900' : 'text-gray-500',
											'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
										)}
									>
										<span>Solutions</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-gray-600' : 'text-gray-400',
												'ml-2 h-5 w-5 group-hover:text-gray-500',
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
											<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{solutions.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
														>
															<item.icon
																className="flex-shrink-0 h-6 w-6 text-indigo-600"
																aria-hidden="true"
															/>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	{item.name}
																</p>
																<p className="mt-1 text-sm text-gray-500">
																	{item.description}
																</p>
															</div>
														</a>
													))}
												</div>
												<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
													{callsToAction.map((item) => (
														<div key={item.name} className="flow-root">
															<a
																href={item.href}
																className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
															>
																<item.icon
																	className="flex-shrink-0 h-6 w-6 text-gray-400"
																	aria-hidden="true"
																/>
																<span className="ml-3">{item.name}</span>
															</a>
														</div>
													))}
												</div>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>

						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Prix
						</a>

						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-gray-900' : 'text-gray-500',
											'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
										)}
									>
										<span>Autre</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-gray-600' : 'text-gray-400',
												'ml-2 h-5 w-5 group-hover:text-gray-500',
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
											<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{resources.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
														>
															<item.icon
																className="flex-shrink-0 h-6 w-6 text-indigo-600"
																aria-hidden="true"
															/>
															<div className="ml-4">
																<p className="text-base font-medium text-gray-900">
																	{item.name}
																</p>
																<p className="mt-1 text-sm text-gray-500">
																	{item.description}
																</p>
															</div>
														</a>
													))}
												</div>
												<div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-5" />
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
					</Popover.Group>
					{userContext.user ? (
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<a
								href="/login"
								className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{userContext.user.firstName}
							</a>
						</div>
					) : (
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<a
								href="/login"
								className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Sign in
							</a>
							<a
								href="/register"
								className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Sign up
							</a>
						</div>
					)}
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<h1 className={'text-3xl font-extrabold text-indigo-600'}>Datadvisor</h1>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<item.icon
												className="flex-shrink-0 h-6 w-6 text-indigo-600"
												aria-hidden="true"
											/>
											<span className="ml-3 text-base font-medium text-gray-900">
												{item.name}
											</span>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div className="grid grid-cols-2 gap-y-4 gap-x-8">
								<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
									Prix
								</a>

								{resources.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-base font-medium text-gray-900 hover:text-gray-700"
									>
										{item.name}
									</a>
								))}
							</div>
							{userContext.user ? (
								<div>
									<a
										href="/register"
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
									>
										{userContext.user.firstName}
									</a>
								</div>
							) : (
								<div>
									<a
										href="/register"
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Sign up
									</a>
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										Déjà membre?{' '}
										<a href="/login" className="text-indigo-600 hover:text-indigo-500">
											Sign in
										</a>
									</p>
								</div>
							)}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
