import { Routes, RouterModule } from '@angular/router';
import { CampaignlogsComponent } from './components/campaignlogs/campaignlogs.component';
import { GooglercsComponent } from './components/googlercs/googlercs.component';
import { XiaomircsComponent } from './components/xiaomircs/xiaomircs.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: XiaomircsComponent, canActivate: [AuthGuard] },
    { path: 'xiaomircs', component: XiaomircsComponent, canActivate: [AuthGuard] },
    { path: 'googlercs', component: GooglercsComponent, canActivate: [AuthGuard] },
    { path: 'campaignlogs', component: CampaignlogsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);