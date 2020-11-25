import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'github-projects', component: GithubProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
