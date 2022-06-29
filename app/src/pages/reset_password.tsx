import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import ResetAsset from '../components/reset/resetAsset';
import PasswordInput from '../components/reset/passwordInput';
import SubmittButton from '../components/reset/submittButton';
import HeaderReset from '../components/reset/headerReset'
import logo from '../../public/logo.png';
import Link from 'next/link';

export default function Reset() {
	const [password, setPassword] = useState('password');
	const [confirm, setConfirm] = useState('confirm');
	const handleChangePass = (e: { target: { value: SetStateAction<string> } }) => {
		setPassword(e.target.value);
	};
	const handleChangeConfirm = (e: { target: { value: SetStateAction<string> } }) => {
		setConfirm(e.target.value);
	};
	function handleClick() {
		if (password === confirm) return alert('Confirmed Password');
		return alert('password not confirmed');
	}
	return (
		<div className="bg-gray-100 relative mx-auto h-full flex flex-row">
			<div className="p-12 2xl:w-3/12 h-screen bg-white rounded-lg shadow-md lg:shadow-lg">
				<Image src={logo} alt="Logo" className="h-8 w-auto sm:h-10" width={70} height={70} />
				<HeaderReset title="Reset your Password" subtitle="clean your data accross the web"/>
				<form className="mt-8 space-y-6">
					<PasswordInput label="New password" handleChangePass={handleChangePass}/>
					<PasswordInput label="confirm new password" handleChangePass={handleChangeConfirm}/>
					<SubmittButton label="RESET YOUR PASSWORD" onClick={handleClick}/>
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
