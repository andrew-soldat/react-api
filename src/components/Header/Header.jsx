import React from 'react'
import { NavLink } from 'react-router-dom'
import { useIsAuth } from '../../isAuthContext';
import Button from '../UI/Buttons/Button';

const Header = () => {
	const isAuth = useIsAuth()
	const logout = () => {
		isAuth.toggleIsAuth(false)
		localStorage.removeItem('auth')
	}
	
	return (
      <header className="header">
			<div className="container">
				<nav className="header__nav">
					<ul className="header__list">
						<li>
							<NavLink exact to="/" className="header__link">Main</NavLink>
						</li>
						<li>
							<NavLink exact to="/posts" className="header__link">Post</NavLink>
						</li>
						<li>
							<NavLink exact to="/photos" className="header__link">Photos</NavLink>
						</li>
						{isAuth.isAuth
							? <li>
									<Button onClick={logout}>Log out</Button>
								</li>
							: <li>
									<NavLink exact to="/login" className="header__link">Sign in</NavLink>
								</li>
						}
					</ul>
					</nav>
				</div>
		</header>
);
}

export default Header;