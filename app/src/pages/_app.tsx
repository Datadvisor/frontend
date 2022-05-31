import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default App;
