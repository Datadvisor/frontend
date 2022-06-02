const people = [
	{
		name: 'Anthoni Marie',
		role: 'Chief director executive',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C5603AQHQ1pwbSFzSig/profile-displayphoto-shrink_400_400/0/1640647614267?e=1654732800&v=beta&t=v0GleiijOw5fT2yGZgqzXgnQYYX8yz6_kulIpV7Lcco',
		bio: "Anthony is a business expert. Founder of the AM company, he is the right man to manage the team",
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/anthoni-marie/',
	},
	{
		name: 'Lorenzo Carneli',
		role: 'Chief technical executive',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C4E03AQElZnuUxgz74A/profile-displayphoto-shrink_400_400/0/1583949853800?e=1654732800&v=beta&t=Y-7g4Eh1vcuSsjUp__KT6N5jt2kUOpfzcorRCknk1c8',
		bio: "Lorenzo's knowledge in DevOps is for the evolution of Datadvisor. He provides us with the right environments for the development to run smoothly.",
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/lorenzo-carneli/',
	},
	{
		name: 'Roman Gascoin',
		role: 'Front-end Master',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C5603AQGDofprelvp6A/profile-displayphoto-shrink_400_400/0/1611764720103?e=1654732800&v=beta&t=g9aimC3uUiNTPamHeb8ZVoBoUvJjEaIAd9_ccEjmU2g',
		bio: 'Pitcher and entrepreneur in his spare time, Roman takes care of most of the front-end part of the project. From Dotenv to Ethers, nothing escapes him.',
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/rgascoin/',
	},
	{
		name: 'Brice Toffolon',
		role: 'Data Manager',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C5603AQFuP71p65aUEQ/profile-displayphoto-shrink_400_400/0/1638489105871?e=1654732800&v=beta&t=Rw4izEV6QCmNxZ5HvM6JxBt73EKmOxU8tqf5NUuyOJo',
		bio: "The wizard of the group. It is thanks to Brice that Dogmatix knows where to look for information from our users on the Internet.",
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/brice-toffolon/',
	},
	{
		name: 'Veronia Mikhail',
		role: 'Mobile Application & Design',
		imageUrl:
			'https://media-exp2.licdn.com/dms/image/C5603AQFzkermh0Q63g/profile-displayphoto-shrink_400_400/0/1626883161188?e=1659571200&v=beta&t=T0GLW7hG9BMclxz9dQLkyNd3x88T1sQAfpzh1rNlHTY',
		bio: 'As a mobile designer and developer, Veronia is a valuable asset to the group.',
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/veronia-mikhail/',
	},
	{
		name: 'Thomas Michel',
		role: 'Mobile Application & Design',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C4E03AQGBCxvJx4mueA/profile-displayphoto-shrink_400_400/0/1616066740304?e=1654732800&v=beta&t=jnZ4uCsPzTqjcz7pb_dN0vkx5tuzOXesocgchcX8ljE',
		bio: "Thomas works hand in hand with Veronia to provide users with the most enjoyable experience possible.",
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/pr0m3th3us/',
	},
	{
		name: 'Baptiste Dessert',
		role: 'Front-end',
		imageUrl:
			'https://media-exp1.licdn.com/dms/image/C560BAQEogO0_6QTmdg/company-logo_200_200/0/1594123399589?e=2147483647&v=beta&t=1Hmzh9dMnXr0NoXBJM9_rk5oHUuTHRH7iTUecF_C_Oo',
		bio: "The Swiss Army knife of the team, Baptiste is versatile and can offer his skills on several aspects of the project.",
		twitterUrl: '#',
		linkedinUrl: 'https://www.linkedin.com/in/pr0m3th3us/',
	},
	// More people...
];

export default function Team() {
	return (
		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
					<div className="space-y-5 sm:space-y-4">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Crew</h2>
						<p className="text-xl text-gray-500">
							Datadvisor is composed of a team of passionate developers who take the respect of private data to heart.
						</p>
					</div>
					<div className="lg:col-span-2">
						<ul
							role="list"
							className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
						>
							{people.map((person) => (
								<li key={person.name}>
									<div className="space-y-4">
										<div className="aspect-w-3 aspect-h-2">
											<img
												className="object-cover shadow-lg rounded-lg"
												src={person.imageUrl}
												alt=""
											/>
										</div>
										<div className="text-lg leading-6 font-medium space-y-1">
											<h3>{person.name}</h3>
											<p className="text-indigo-600">{person.role}</p>
										</div>
										<div className="text-lg">
											<p className="text-gray-500">{person.bio}</p>
										</div>

										<ul role="list" className="flex space-x-5">
											<li>
												<a
													href={person.twitterUrl}
													className="text-gray-400 hover:text-gray-500"
												>
													<span className="sr-only">Twitter</span>
													<svg
														className="w-5 h-5"
														aria-hidden="true"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
													</svg>
												</a>
											</li>
											<li>
												<a
													href={person.linkedinUrl}
													className="text-gray-400 hover:text-gray-500"
												>
													<span className="sr-only">LinkedIn</span>
													<svg
														className="w-5 h-5"
														aria-hidden="true"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
															clipRule="evenodd"
														/>
													</svg>
												</a>
											</li>
										</ul>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
