import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ListarModule { }
