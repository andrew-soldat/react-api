import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useIsAuth } from '../isAuthContext';
import { publicRoutes, privateRoutes } from '../router/index';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	const isAuth = useIsAuth()

	// if (isAuth.isLoading) {
	// 	return <Loader />
	// }

	return (
		<div className="page" style={{marginBottom: 20}}>
			{isAuth.isAuth
				? 
				<Switch>
					{publicRoutes.map(route =>
						<Route key={route.path} component={route.component} path={route.path} exact={route.exact} />
					)}
					<Redirect to="/posts"/>
				</Switch>
				:
				<Switch>
					{privateRoutes.map(route =>
						<Route key={route.path} component={route.component} path={route.path} exact={route.exact} />
					)}
					<Redirect to="/login"/>
				</Switch>
			}
      </div>
	)
}

export default AppRouter