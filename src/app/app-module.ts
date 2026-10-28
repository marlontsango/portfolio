import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Projects } from './pages/projects/projects';
import { SharedModule } from './shared/shared.module';
import { ThemeToggle } from './layout/theme-toggle/theme-toggle';
import { CommonModule } from '@angular/common';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

@NgModule({
  declarations: [App, Projects, ThemeToggle, Header, Footer, Home],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [BrowserModule, AppRoutingModule, SharedModule, CommonModule, About, Contact],
  providers: [provideBrowserGlobalErrorListeners()],
  exports: [ThemeToggle],
  bootstrap: [App],
})
export class AppModule {}
