import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { 
        path: 'admin', 
        children: [ 
            { path: 'login', component: LoginComponent }, 
            { path: 'product', component: ManageProductComponent }, 
            { path: '', component: DashboardComponent } 
        ]
    }
];
