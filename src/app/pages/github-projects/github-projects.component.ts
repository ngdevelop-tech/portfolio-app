import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { GHRepo } from 'src/app/models/github.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit {

  userName: string = 'ngdevelop-tech';

  repos$: Observable<GHRepo[]>;

  constructor(private transferStateService: TransferStateService,
    private githubService: GithubService,
    private router: Router) {

    this.repos$ = this.transferStateService.useScullyTransferState<GHRepo[]>('ghRepos', this.githubService.getRepos(this.userName));
  
  }

  ngOnInit(): void {
  }

}
