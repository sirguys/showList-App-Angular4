import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  private apiURL = 'http://www.anop72.info/api/seed.json'
  data: Array<any>; 

  constructor(private http: Http) {
    console.log('Hi Guys')
    this.getData()
    this.getImages()
  }

  getData() {
    return this.http.get(this.apiURL)
        .map((res: Response) => res.json())
  }

  getImages() {
    this.getData().subscribe(data => this.data = data )
  }
}
