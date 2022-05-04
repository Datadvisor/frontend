import NavBar from '../components/layout/navBar';
import Hero from '../components/landing/hero';
import Features from '../components/landing/features';
import Team from '../components/landing/team';
import Footer from '../components/layout/footer';

const LandingPage = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Features />
			<Team />
			<Footer />
		</>
	);
};

export default LandingPage;
