import { Component, OnInit } from '@angular/core';
import { Country } from '../Model/Country';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css']
})
export class FirstComponentsComponent implements OnInit {

  constructor() { }
  country : Country = {
      id : 1,
      name : 'India'
  };

  ngOnChanges() {
    alert("On Change call Before Init Call ");
  }

  ngOnInit() {
    alert("On Init");
  }

  ngDoCheck() {
    console.log("After ngOnInit Call ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("After ngDoCheck Call then ngAfterContent Init Call");
  }

  ngAfterContentChecked(){
    console.log("After ngAfterContentInit");
  }
}
