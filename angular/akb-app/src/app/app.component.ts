import {Component, OnInit} from '@angular/core';
import {TestService} from "./test.service";
import {Greet} from "./greet";

@Component({
  selector: 'akb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'akb-app';
  greet: Greet = {
    id: 0,
    content: ""
};

  constructor(private test:TestService) {}

  ngOnInit() {
    this.test.testCall().subscribe((data: Greet) => this.greet = { ...data });
  }
}
