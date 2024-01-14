import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { CopyrightComponent } from '../components/copyright/copyright.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    TopnavComponent,
    CopyrightComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TopnavComponent,
    CopyrightComponent,
  ]
})
export class SharedModule { }
