import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  title = '';
  titleSub$: Subscription;

  constructor(private router: Router) {
    this.titleSub$ = this.getAttributes()
      .subscribe( ({title}) => {
        this.title = title;
        document.title = ` AdminPro - ${title}`;
      });
   }

  ngOnInit(): void {
  }

  getAttributes(){
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild  === null ),
      map( (event: ActivationEnd) => event.snapshot.data ),
    );
  }

  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

}
