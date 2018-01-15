import { Component, Input } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { User } from './app.module'

//import { AppComponent } from './app.component' 

import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-brand',
  templateUrl: './Branding.component.html',
  styleUrls: ['./Branding.component.css']
})

export class BrandingComponent {
  title = 'Brand-app';
  whoWeAre = [];
  weWouldLike = [];
  weDontWant = [];
  userDetails = [];

  @Input() user: any;
   

  constructor(private http: Http) { }
  private _httpHeaders: Headers;
  public get httpHeaders(): Headers {
    this._httpHeaders = new Headers({
      'Content-Type': 'application/json',
      'dataType': 'json',
      'crossDomain': 'true',
      //'Accept': 'application/json',

    });
    return this._httpHeaders;
  }

  lists = {
    'voice': [
      'inspirational', 'casual', 'sexy', 'professional', 'urban', 'heart-felt', 'understated', 'mysterious', 'empowering', 'fun', 'friendly', 'approchable', 'comforting', 'coaching', 'candid', 'irreverent', 'academic', 'wordly', 'sarcastic', 'honest', 'elite', 'masculine', 'feminine', 'confident', 'wise', 'smart', 'country', 'diplomatic', 'clever', 'humorous', 'witty', 'aggressive', 'chill', 'loud', 'quite', 'energetic', 'exclusive', 'defiant', 'slang', 'hip'
    ],
    'style': [
      'natural', 'current', 'formal', 'casual', 'hip', 'classic', 'traditional', 'elegant', 'urban', 'sexy', 'timeless', 'premium', 'modern', 'simple', 'trendy', 'minimal', 'clean', 'elite', 'original', 'ornate', 'funky', 'eclectic', 'chic', 'grunge', 'sleek', 'preppy', 'cool', 'rustic', 'outdoorsy', 'bold', 'loud', 'retro'
    ],
    'behaviour': [
      'hightouch', 'ironic', 'authentic', 'selective', 'responsive', 'conscientous', 'visionary', 'eco-friendly', 'patriotic', 'community minded', 'green', 'conservative', 'liberal', 'thought leader', 'aggresive', 'health conscious', 'charitable', 'source local', 'rebel', 'adventurous', 'quirky', 'cutting edge'
    ]
  }

  addDropItem(event, destinationList) {
    if (!destinationList.includes(event)) //&& !this.whoWeAre.includes(event) && !this.weWouldLike.includes(event) && !this.weDontWant.includes(event))
      destinationList.push(event);
  }

  getClass(item) {
    if (this.lists['voice'].includes(item))
      return 'voice-tile'
    if (this.lists['style'].includes(item))
      return 'style-tile'
    if (this.lists['behaviour'].includes(item))
      return 'behaviour-tile'
  }

  OnSubmit() {
    //let loggedInUser: { username: string } = { username: user.userName }
    let body = {
      whoWeAre: this.whoWeAre,
      weWouldLike: this.weWouldLike,
      weDontWant: this.weDontWant,
      userDetails: this.user 
    };

    console.log(body);

    //console.log(this.whoWeAre);
    //console.log(this.weWouldLike);
    //console.log(this.weDontWant);
    var httpHeaders = this.httpHeaders;

    this.http.post("http://localhost:60358/api/BrandingController",
      JSON.stringify(body), { headers: httpHeaders }).map((response: Response) => <boolean>response.json()).subscribe(response => {
        alert("Your data submitted")
      });
  }

  OnReset() {
    this.whoWeAre.length = 0;
    this.weWouldLike.length = 0;
    this.weDontWant.length = 0;
    console.log(this.whoWeAre);
    console.log(this.weWouldLike);
    console.log(this.weDontWant);

  }

  releaseDrop(event, itemsToDrop) {
    let index = itemsToDrop.indexOf(event);
    if (index >= 0) {
      itemsToDrop.splice(index, 1);
    }
  }
}
