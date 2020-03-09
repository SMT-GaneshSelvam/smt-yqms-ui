import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Toggle fullscreen
    $("#test").click(function (e) {
      e.preventDefault();

      var $this = $(this);
      console.log($this);
      console.log($this.hasClass('fa fa-500px'));
      if ($this.children('i').hasClass('glyphicon-resize-full')) {
        $this.children('i').removeClass('glyphicon-resize-full');
        $this.children('i').addClass('glyphicon-resize-small');
      }
      else if ($this.children('i').hasClass('glyphicon-resize-small')) {
        $this.children('i').removeClass('glyphicon-resize-small');
        $this.children('i').addClass('glyphicon-resize-full');
      }
      $(this).closest('.panel').toggleClass('panel-fullscreen');
    });

  }

}
