import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));

// pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile/'));
const Error404 = React.lazy(() => import('../pages/other/Error404'));
const Error500 = React.lazy(() => import('../pages/other/Error500'));

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			// if (!isUserAuthenticated()) {
			// not logged in so redirect to login page with the return url
			return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
			// }

			// const loggedInUser = getLoggedInUser();
			// check if route is restricted by role
			// if (roles && roles.indexOf(loggedInUser.role) === -1) {
			// role not authorised so redirect to home page
			// return <Redirect to={{ pathname: '/' }} />;
			// }

			// authorised so return component
			// return <Component {...props} />;
		}}
	/>
);

// root routes
const rootRoute = {
	path: '/',
	exact: true,
	component: () => <Redirect to="/dashboard" />,
	route: PrivateRoute
};

// dashboards
const dashboardRoutes = {
	path: '/dashboard',
	name: 'Dashboard',
	icon: FeatherIcon.Home,
	header: 'Navigation',
	badge: {
		variant: 'success',
		text: '1'
	},
	component: Dashboard,
	roles: [ 'Admin' ],
	route: PrivateRoute
};

// pages
const pagesRoutes = {
	path: '/pages',
	name: 'Pages',
	header: 'Custom',
	icon: FeatherIcon.FileText,
	children: [
		{
			path: '/pages/starter',
			name: 'Starter',
			component: Starter,
			route: PrivateRoute,
			roles: [ 'Admin' ]
		},
		{
			path: '/pages/profile',
			name: 'Profile',
			component: Profile,
			route: PrivateRoute,
			roles: [ 'Admin' ]
		},
		{
			path: '/pages/error-404',
			name: 'Error 404',
			component: Error404,
			route: Route
		},
		{
			path: '/pages/error-500',
			name: 'Error 500',
			component: Error500,
			route: Route
		}
	]
};

// auth
const authRoutes = {
	path: '/account',
	name: 'Auth',
	children: [
		{
			path: '/account/login',
			name: 'Login',
			component: Login,
			route: Route
		},
		{
			path: '/account/logout',
			name: 'Logout',
			component: Logout,
			route: Route
		},
		{
			path: '/account/register',
			name: 'Register',
			component: Register,
			route: Route
		},
		{
			path: '/account/confirm',
			name: 'Confirm',
			component: Confirm,
			route: Route
		},
		{
			path: '/account/forget-password',
			name: 'Forget Password',
			component: ForgetPassword,
			route: Route
		}
	]
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
	let flatRoutes = [];

	routes = routes || [];
	routes.forEach((item) => {
		flatRoutes.push(item);

		if (typeof item.children !== 'undefined') {
			flatRoutes = [ ...flatRoutes, ...flattenRoutes(item.children) ];
		}
	});
	return flatRoutes;
};

// All routes
const allRoutes = [ rootRoute, dashboardRoutes, pagesRoutes, authRoutes ];

const authProtectedRoutes = [ dashboardRoutes, pagesRoutes ];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };
