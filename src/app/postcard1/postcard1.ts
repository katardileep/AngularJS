import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postcard1',
  templateUrl: './postcard1.html',
  styleUrls: ['./postcard1.css']
})
export class Postcard1Component implements OnInit {

  constructor() { }
  @Input() test1;

  ngOnInit() {
  }

}
