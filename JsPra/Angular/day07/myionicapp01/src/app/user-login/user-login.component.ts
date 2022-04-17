import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  private uname = '';
  private upwd = '';

  constructor(
    private http: HttpClient,
    private url: UrlService,
    private router: Router,
    private nav: NavController
  ) {}

  ngOnInit() {}

  doLogin() {
    const addr = this.url.loginApi;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    let body = `uname=${this.uname}&upwd=${this.upwd}`;
    const that = this;
    // console.log(this.uname, this.upwd);
    this.http.post(addr, body, { headers }).subscribe((res: any) => {
      // console.log(res);
      if (res.code == 200) {
        that.router.navigate(['/index']);
      }
    });
  }
  goBack() {
    this.nav.back();
  }
}
