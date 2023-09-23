import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  sampleArr = [
    { id: 1, name: 'coat', image: window.origin + '/assets/images/coat.jpg', price: 1000 },
    { id: 2, name: 'Kurthi', image: window.origin + '/assets/images/kurthi.jpg', price: 1500 },
    { id: 3, name: 'Saree', image: window.origin + '/assets/images/saree.jpg', price: 3000 },
    { id: 4, name: 'Tops', image: window.origin + '/assets/images/tops.jpg', price: 5000 },
  ]

  constructor(){
    console.log(this.sampleArr);
  }

}

