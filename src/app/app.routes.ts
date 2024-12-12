import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
// import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CourseListComponent } from './admin/course-list/course-list.component';
import { LecturerNavbarComponent } from './lecturer/lecturer-navbar/lecturer-navbar.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { LecturerProfileComponent } from './lecturer/lecturer-profile/lecturer-profile.component';

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
        component: ToolbarComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'form',
                component: FormComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'evaluate',
                component: EvaluationComponent
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    },
    {
        path: 'admin',
        component: AdminNavbarComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'course-list',
                component: CourseListComponent
            },
            {
                path: 'user-list',
                component: UserListComponent
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    },
    {
        path: 'lecturer',
        component: LecturerNavbarComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'reports',
                component: ReportsComponent
            },
            {
                path: 'lecturer-profile',
                component: LecturerProfileComponent
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            }
            
        ]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
