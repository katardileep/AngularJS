import { Component, OnInit, Input } from '@angular/core';
import { PostserviceService } from './../postservice.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  public test = [];
  constructor(private postservice: PostserviceService) { }
  ngOnInit() {
    this.test=this.postservice.Postcard;
  }
}
