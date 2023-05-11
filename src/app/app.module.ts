import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './features/auth/auth.module';
import { SharedModule } from './features/shared/shared.module';
import { HttpAdapter } from './adapters/http-adapter.interface';
import { HttpClientAdapter } from './adapters/http-client-adapter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{ provide: HttpAdapter, useClass: HttpClientAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
