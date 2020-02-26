import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "smt";

  ngOnInit() {
    $("#sidebar").toggleClass("active");
    $(".custom_li").click(function(e) {
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
