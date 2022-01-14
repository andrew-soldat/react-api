import Main from '../components/pages/Main';
import Posts from '../components/pages/Posts';
import Photos from '../components/pages/Photos';
import Error from '../components/pages/Error';
import PostIdPage from '../components/pages/PostIdPage';
import Login from '../components/pages/Login';

export const publicRoutes = [
	{ component: Main, path: '/', exact: true },
	{ component: Posts, path: '/posts', exact: true },
	{ component: Photos, path: '/photos', exact: true },
	{ component: PostIdPage, path: '/posts/:id', exact: true },
	{ component: Error, path: '/error', exact: true },
	// { component: Login, path: '/login', exact: true },
]

export const privateRoutes = [
	{ component: Main, path: '/', exact: true },
	{ component: Login, path: '/login', exact: true },
	{ component: Error, path: '/error', exact: true },
]
