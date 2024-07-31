import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angluar_project';
  servers=[{name:'Mohit', age:'21'},
    {name:'Anish', age:'21'},
    {name:'Om', age:'21'}
  ]
}
