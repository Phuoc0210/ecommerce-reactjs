import MainLayout from '@/components/Layout/MainLayout/MainLayout';
import AuthLayout from '@/components/Layout/AuthLayout/AuthLayout';
import HomePageLayout from '@/components/Layout/HomePageLayout/HomePageLayout';
import HomePage from '@/pages/HomePage/HomePage';
import About from '@/pages/About/About';
import Shop from '@/pages/Shop/Shop';
import Contact from '@/pages/Contact/Contact';
import Login from '@/pages/User/Login/Login';
import SignUp from '@/pages/User/SignUp/SignUp';
import Reset from '@/pages/User/Reset/Reset';

const publicRoute = [
  { path: '/', component: HomePage, layout: HomePageLayout },
  { path: '/home', component: HomePage, layout: HomePageLayout },
  { path: '/about', component: About, layout: MainLayout },
  { path: '/shop', component: Shop, layout: MainLayout },
  { path: '/contact', component: Contact, layout: MainLayout },
  { path: '/login', component: Login, layout: MainLayout },
  { path: '/register', component: SignUp, layout: MainLayout },
  { path: '/forgot', component: Reset, layout: MainLayout },
];

const privateRoute = [];
export { publicRoute, privateRoute };
