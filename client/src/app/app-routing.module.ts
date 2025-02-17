import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => 
    import('../app/pages/home/home.module').then((x) => x.HomeModule),
  },

  { path: 'services', loadChildren: () => 
    import('./pages/services/services.module').then((x) => x.ServicesModule),
  },

  { path: 'news', loadChildren: () => 
    import('../app/pages/news/news.module').then((x) => x.NewsModule),
  },

  { path: 'contact', loadChildren: () => 
    import('../app/pages/contact/contact.module').then((x) => x.ContactModule),
  },
  
  {
    path: 'faq', loadChildren: () =>
    import('../app/pages/faq/faq.module').then((x) => x.FaqModule),
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
