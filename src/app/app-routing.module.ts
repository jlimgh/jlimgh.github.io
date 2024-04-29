import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'home',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  { 
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
