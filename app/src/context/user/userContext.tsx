import React, { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * This interface represent the User context Content
 * user: the user object return by the api
 * error: errors return by the api on a call
 * logUser: try to catch information on the user using cookies
 * setError: setter for Error
 * setUser: setter for User
 */
export interface UserContextInterface {
	user: any;
	error: any;
	logUser?: () => void;
	setUser?: (value: any) => void;
	setError?: (value: any) => void;
}

/**
 * This methods allow you to track and get cookies in the browser
 * @param name of the searched cookie
 */
export const getCookie = (name: string): string | null => {
	const nameLenPlus = name.length + 1;
	return (
		document.cookie
			.split(';')
			.map((c) => c.trim())
			.filter((cookie) => {
				return cookie.substring(0, nameLenPlus) === `${name}=`;
			})
			.map((cookie) => {
				return decodeURIComponent(cookie.substring(nameLenPlus));
			})[0] || null
	);
};

export const UserContextContent: UserContextInterface = {
	user: null,
	error: null,
};

/**
 * This is the UserContext to use in pages
 */
export const UserContext = createContext<UserContextInterface>(UserContextContent);

/**
 * This is the context provider wrapped around the react application
 */
export const UserContextProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState(UserContextContent.user);
	const [error, setError] = useState(UserContextContent.error);

	const logUser = async () => {
		try {
			const res = await axios.get('http://localhost:3001/users/me', {
				withCredentials: true,
			});
			setUser(res.data);
			setError(null);
		} catch (err: any) {
			console.log(err);
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				logUser,
				error,
				setError,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
