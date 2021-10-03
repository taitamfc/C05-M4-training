import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* To use Pipe and other */
import { CommonModule } from '@angular/common';

/* To use Form - template driven form*/
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Hello Component*/
import { HelloComponent } from './hello/hello.component';
/* Binding*/
import { BindingComponent } from './binding/binding.component';
import { EventComponent } from './event/event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
/* Directive*/
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

/* Template variable*/
import { TemplateVariableComponent } from './template-variable/template-variable.component';

/* Input, Output*/
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

/* Form*/
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';

import { FormDataDrivenComponent } from './form-data-driven/form-data-driven.component';
import { FormDataDrivenBuilderComponent } from './form-data-driven-builder/form-data-driven-builder.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BindingComponent,
    EventComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    TemplateVariableComponent,
    InputComponent,
    OutputComponent,
    FormTemplateDrivenComponent,
    FormDataDrivenComponent,
    FormDataDrivenBuilderComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
