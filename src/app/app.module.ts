import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoundComponent } from './component/found';
import { NotFoundComponent } from './component/not-found';
import { ApiService } from './service/api.service';

import { AppRoutingModule } from './route/app.routes';
@NgModule({
  declarations: [
    AppComponent, FoundComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
