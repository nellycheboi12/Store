import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import {MessagesComponent } from './components/messages/messages.component';

import { AppRoutingModule } from './app-routing.module'
import { ModalModule } from 'ngx-bootstrap';
import { UserService } from './services/user.service';
import { OrderService } from './services/order.service';
import { MessageService } from './services/message.service'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        UserComponent,
        OrderComponent,
        MessagesComponent
    ],
    // create a single instance of the following service and make them available to any class that asks for it
    providers: [UserService, OrderService, MessageService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        MarkdownModule.forRoot(),
        ModalModule.forRoot(),

    ]
})
export class AppModuleShared {
}
