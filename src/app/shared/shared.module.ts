import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NgbModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
