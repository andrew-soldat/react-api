import React, { useState, useContext, useEffect } from 'react';

const AuthContext = React.createContext();

export const useIsAuth = () => {
	return useContext(AuthContext);
}

export const IsAuthProvider = ({ children }) => {
	let [isAuth, setIsAuth] = useState(false);
	let [isLoading, setIsLoading] = useState(true);
	const toggleIsAuth = (value) => setIsAuth(value);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
			setIsLoading(false)
		}
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth: isAuth,
			toggleIsAuth,
			isLoading: isLoading
		}}>
			{ children }
		</AuthContext.Provider>
	);
}