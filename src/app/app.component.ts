import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'indigo';
  public imagesUrl;
  public imageUrl;
  // places =["Delhi","Bombay","Ahemdabad"]
 
ngOnInit() {
    this.imagesUrl = [
    '../../assets/t1.jpg',
    '../../assets/t2.jpg',
    '../../assets/t3.jpg',
    '../../assets/t4.jpg',
    '../../assets/t9.jpg',
    '../../assets/t6.jpg',
    ];
    this.imageUrl = [
      '../../assets/t4.jpg',
      '../../assets/t9.jpg',
      '../../assets/t6.jpg',
      '../../assets/t7.jpg',
      '../../assets/t8.jpg',
      '../../assets/t9.jpg',
      '../../assets/t1.jpg',
      ];

      
}

}