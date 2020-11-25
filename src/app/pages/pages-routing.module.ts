import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { GithubRepoDetailsComponent } from './github-repo-details/github-repo-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'github-repos', component: GithubProjectsComponent},
  {path: 'github-repos/:repo', component: GithubRepoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
