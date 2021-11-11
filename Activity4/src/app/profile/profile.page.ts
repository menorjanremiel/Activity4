import { Component, OnInit } from '@angular/core';
import { Profile, profile} from '../profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = profile  ;
  constructor() { }

  ngOnInit() {
  }

}
