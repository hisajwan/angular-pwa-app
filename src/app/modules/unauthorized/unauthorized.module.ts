import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedRoutingModule } from './unauthorized-routing/unauthorized-routing.module';
import { UnauthorizedMainComponent } from './screens';

@NgModule({
  declarations: [UnauthorizedMainComponent],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
