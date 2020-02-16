import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
 constructor() { }
 @Input() test1;

  //myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    //alert("Button is clicked");
    //console.log(this.test);
  //}
  ngOnInit() {
  }

}
