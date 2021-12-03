import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Name } from './name.pipe';
import { Sort } from './sort.pipe';



@NgModule({
  declarations: [Name, Sort],
  imports: [
    CommonModule
  ],
  exports: [Name, Sort],
})
export class PipesModule { }
