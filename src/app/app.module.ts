import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './features/auth/auth.module';
import { LayoutModule } from './features/layout/layout.module';
import { ProfileModule } from './features/profile/profile.module';
import { BoardsModule } from './features/boards/boards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    LayoutModule,
    ProfileModule,
    BoardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
