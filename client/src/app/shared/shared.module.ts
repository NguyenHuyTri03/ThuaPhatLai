import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { CopyrightComponent } from '../components/copyright/copyright.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [    
    TopnavComponent,
    CopyrightComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TopnavComponent,
    CopyrightComponent,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
