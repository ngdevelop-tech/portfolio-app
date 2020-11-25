import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit {

  repos$ = this.githubService.getRepos('ngdevelop-tech');

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
