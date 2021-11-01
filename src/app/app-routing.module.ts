import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailsComponent } from './admin/edit-details/edit-details.component';
import { AuthGuard } from './admin/auth/auth.guard';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
    { path: '',component: MainComponent},
    // {path: 'admin',component: LoginComponent,canActivate: [AuthGuard]},
    {path: 'edit-details', component: EditDetailsComponent, canActivate: [AuthGuard]},
    {
        path: 'auth',
        loadChildren: () => import('./admin/auth/auth.module').then((m) => m.AuthModule),
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}