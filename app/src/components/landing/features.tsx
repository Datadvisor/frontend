/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, GlobeAltIcon, ShieldExclamationIcon, ScaleIcon } from '@heroicons/react/outline';

const features = [
	{
		name: 'Idefix',
		description: 'Search for public information about you for free!',
		icon: GlobeAltIcon,
	},
	{
		name: 'Panoramix',
		description: 'Get customized reports of your presence every X time.',
		icon: ShieldExclamationIcon,
	},
	{
		name: 'Suivix',
		description: 'Our newsletter with important information and best practices.',
		icon: CalendarIcon,
	},
	{
		name: 'Antiquitix',
		description: 'Get our RGPD management tips to ensure that your unwanted data is deleted',
		icon: ScaleIcon,
	},
];

export default function Features() {
	return (
		<div className="py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Datadvisor</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						How can we help you?
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						We have various tools to ensure your anonymity on the web. Try some for free right now.
					</p>
				</div>

				<div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{features.map((feature) => (
							<div key={feature.name} className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<feature.icon className="h-6 w-6" aria-hidden="true" />
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
