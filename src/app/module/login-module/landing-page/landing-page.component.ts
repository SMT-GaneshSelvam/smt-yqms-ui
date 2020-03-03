import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  page: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }


  title = "smt";

  ngAfterViewInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.page = this.activatedRoute.firstChild.snapshot.data[0].PageName
    });


  }


  ngOnInit() {

    $("#sidebar").toggleClass("active");
    $(".custom_li").click(function (e) {
      e.preventDefault();
      $(this)
        .siblings()
        .removeClass("active");
      $(this).addClass("active");
    });

  }

  customToggle() {
    $("#sidebar").toggleClass("active");
  }

}
