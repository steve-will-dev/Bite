import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.html',

})

export class MainpageComponent implements OnInit {

    constructor(private http: Http){}
     ngOnInit(){
       //grab data
       this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZS8dJi7uYfRGp_-X9dHDvHA3Qbivm1Kg&channelId=UCk0YDYCWGbnY1MJw4XureeQ&part=snippet,id&order=date&maxResults=20')
       .subscribe(data => {
         console.log(data.json());
         
       });

     }
}
