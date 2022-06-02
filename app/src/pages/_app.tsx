import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { UserContextProvider } from '../context/user/userContext';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserContextProvider>
				<Component {...pageProps} />
				<ToastContainer />
			</UserContextProvider>
		</>
	);
}

export default App;
