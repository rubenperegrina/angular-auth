import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    OverlayModule,
    SharedModule
  ]
})
export class LayoutModule { }
