import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { AnimateDirective } from './directives/animate.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NavbarComponent, NavListComponent, AnimateDirective],
  exports: [
    NavbarComponent,
    AnimateDirective,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
})
export class SharedModule {}
