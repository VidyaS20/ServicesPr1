import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component1Component } from './component1/component1.component';
import { UserManualService } from './services/userManual.service';
import { ChannelsComponent } from './channels/channels.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp8Component } from './comp8/comp8.component';
import { Comp9Component } from './comp9/comp9.component';
import { Comp10Component } from './comp10/comp10.component';
import { Comp11Component } from './comp11/comp11.component';
import { Comp12Component } from './comp12/comp12.component';
import { Comp13Component } from './comp13/comp13.component';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Component3Component,
    Component4Component,
    Component1Component,
    ChannelsComponent,
    JsonplaceholderComponent,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    Comp10Component,
    Comp11Component,
    Comp12Component,
    Comp13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserManualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
