import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { ParticlesModule } from 'angular-particle';

import {MatStepperModule} from '@angular/material/stepper';

import {StepsModule} from 'primeng/steps';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import {
  MatIconModule,
} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardSkillComponent } from './components/card-skill/card-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ParticlesModule,
    MatStepperModule,
    StepsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
