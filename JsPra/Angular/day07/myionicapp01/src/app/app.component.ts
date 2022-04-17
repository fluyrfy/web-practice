import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  doQuit() {
    this.alertController
      .create({
        header: '確認退出',
        message: '您確認要退出嗎？',
        buttons: ['確認', '取消'],
      })
      .then((myAlert) => {
        myAlert.present();
      });
  }

  @ViewChild('myInfinite', { static: true })
  private myInfinite: IonInfiniteScroll;

  private list = [
    8323, 3241, 2832, 9830, 8883, 9475, 7294, 8923, 7498, 1834, 1, 2, 3, 4, 5,
    6, 7, 8, 9,
  ];
  loadData() {
    console.log('正在加載更多數據...');
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        let n = Math.random() * 9000;
        this.list.push(n);
      }
      this.myInfinite.complete();
    }, 3000);
  }
  @ViewChild('myAd', { static: true })
  private myAd: IonSlides;

  ngOnInit() {
    // this.myAd.startAutoplay();
  }
  doClick() {
    console.log('列表項被點擊');
  }

  constructor(private alertController: AlertController) {}
}
