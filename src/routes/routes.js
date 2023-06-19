import config from '../config/index';

// Pages
import { lazy } from 'react';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import NavbarLayout from '../layout/NavbarLayout/NavbarLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Default = lazy(() => import('../pages/Default/Default'));
const Premium = lazy(() => import('../pages/Premium/Premium'));
const Youtube = lazy(() => import('../pages/Youtube/Youtube'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.default, component: Default, layout: NavbarLayout },
    { path: config.routes.premium, component: Premium, layout: NavbarLayout },
    { path: config.routes.youtube, component: Youtube, layout: NavbarLayout },
    { path: config.routes.notFound, component: NotFound, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
