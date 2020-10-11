import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Concesionario2SharedModule } from 'app/shared/shared.module';
import { Concesionario2CoreModule } from 'app/core/core.module';
import { Concesionario2AppRoutingModule } from './app-routing.module';
import { Concesionario2HomeModule } from './home/home.module';
import { Concesionario2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    Concesionario2SharedModule,
    Concesionario2CoreModule,
    Concesionario2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Concesionario2EntityModule,
    Concesionario2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Concesionario2AppModule {}
