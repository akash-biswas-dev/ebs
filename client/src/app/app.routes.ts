import { Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.page';
import { SignIn } from '../pages/sign-in/sign-in.component';
import { SignUp } from '../pages/sign-up/sign-up.component';
import { DashBoardPage } from '../pages/dashboard/dashboard.page';
import { AuthPage } from '../pages/auth/auth.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: 'sign-in',
        component: SignIn,
      },
      {
        path: 'sign-up',
        component: SignUp,
      },
      {
        path: '',
        redirectTo: '/auth/sign-in',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashBoardPage,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
