import React, { useState, useEffect } from 'react';
import { useIsAuth } from '../../isAuthContext';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Inputs/Input';


const Login = () => {
	const isAuth = useIsAuth()

	const signIn = (e) => {
		e.preventDefault();
		isAuth.toggleIsAuth(true)
		localStorage.setItem("auth", 'true');
	}

   return (
      <div className="posts">
			<div className="container">
				<form onSubmit={signIn} className="login-wrapper">
					<div className="title">Sign in React Api</div>
					<Input placeholder="Enter login" type="text" />
					<Input placeholder="Enter password" type="password" />
					<Button>Sign in</Button>
				</form>
			</div>
      </div>
   );
}

export default Login;
