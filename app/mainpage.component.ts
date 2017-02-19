import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/models/user'
import 'rxjs/add/operator/map'


@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.html',

})

export class MainpageComponent implements OnInit {

users: User [];

name2 = 'Steve';


    constructor(private http: Http){}
     ngOnInit(){
       //grab data
       this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZS8dJi7uYfRGp_-X9dHDvHA3Qbivm1Kg&channelId=UCk0YDYCWGbnY1MJw4XureeQ&part=snippet,id&order=date&maxResults=20')
       .map(res => res.json().items)
       .subscribe(users => this.users = users);

     }
}
