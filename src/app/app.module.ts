import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NavigationComponent } from './components/navigation/navigation.component';
import { XiaomircsComponent } from './components/xiaomircs/xiaomircs.component';
import { GooglercsComponent } from './components/googlercs/googlercs.component';
import { CampaignlogsComponent } from './components/campaignlogs/campaignlogs.component';




@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavigationComponent,
        XiaomircsComponent,
        GooglercsComponent,
        CampaignlogsComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }