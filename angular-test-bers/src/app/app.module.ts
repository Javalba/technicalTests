import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';

import { TabsWrapperComponent } from './components/tabs/tabs-wrapper/tabs-wrapper.component';
import { Tab1Component } from './components/tabs/tab1/tab1.component';
import { Tab2Component } from './components/tabs/tab2/tab2.component';
import { TestWrapperComponent } from './components/test-wrapper/test-wrapper.component';

//Services
import { TabService } from './services/tab.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TestWrapperComponent,
    TabsWrapperComponent,
    Tab2Component,
    Tab1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
