import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs$ = this.scullyService.allRoutes$.pipe(
              map(routes => routes.filter(r=> r.route.startsWith('/blog/')))
           );

  constructor(private scullyService: ScullyRoutesService) {

  }
  ngOnInit(): void {
  }

}
