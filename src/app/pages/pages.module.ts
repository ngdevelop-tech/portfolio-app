import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { GithubRepoDetailsComponent } from './github-repo-details/github-repo-details.component';


@NgModule({
  declarations: [HomeComponent, GithubProjectsComponent, GithubRepoDetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
