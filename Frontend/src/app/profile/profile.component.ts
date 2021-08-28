import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  content?: string;

  constructor(private token: TokenStorageService, private auth: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.auth.getUserBoard().subscribe(
      data => {
        this.content = data;
        console.log(this.content);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
