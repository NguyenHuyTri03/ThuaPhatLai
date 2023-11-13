import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
  ]
})
export class NewsModule { }
