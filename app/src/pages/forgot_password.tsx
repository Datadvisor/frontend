import Image from 'next/image';
import ResetAsset from '../components/reset/resetAsset';
import SubmittButton from '../components/reset/submittButton';
import HeaderReset from '../components/reset/headerReset';
import EmailInput from '../components/reset/emailInput';
import { SetStateAction, useState } from 'react';
import logo from '../../public/logo.png';
import Link from 'next/link';

export default function Forgot() {
	const [mail, setMail] = useState('E-mail');
	const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
		setMail(e.target.value);
	};
	function handleClick() {
		return window.location.href="/reset_password";
	}
	return (
		<div className="bg-gray-100 relative mx-auto h-full flex flex-row">
			<div className="p-12 2xl:w-3/12 h-screen bg-white rounded-lg shadow-md lg:shadow-lg">
				<Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" width={70} height={70} />
				<HeaderReset title="Reset your Password" subtitle="clean your data accross the web"/>
				<form className="mt-8 space-y-6">
					<EmailInput email="E-mail" handleChange={handleChange}/>
					<a href="/reset_password"
						type="submit"
						className=" whitespace-nowrap justify-center px-20 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-505"
					>
						RESET YOUR PASSWORD
					</a>
				</form>
				<div className="text-sm">
					<Link href="/login">
						<a className="font-medium text-indigo-600 hover:text-indigo-500">
							go back to login
						</a>
					</Link>
				</div>
			</div>
			<div className="p-60">
				<ResetAsset/>
			</div>
		</div>
	);
}
