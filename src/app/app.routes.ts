import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'form',
                component: FormComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            },
            {
                path: 'evaluate',
                component: EvaluationComponent
            }
        ]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
