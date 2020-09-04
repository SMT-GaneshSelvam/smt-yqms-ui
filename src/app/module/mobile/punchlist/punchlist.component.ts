import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-punchlist',
  templateUrl: './punchlist.component.html',
  styleUrls: ['./punchlist.component.scss']
})
export class PunchlistComponent implements OnInit {

  constructor( private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
