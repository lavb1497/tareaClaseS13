import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PipesPipe } from '../pipes.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    PipesPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    PipesPipe
  ]
})
export class PagesModule { }
