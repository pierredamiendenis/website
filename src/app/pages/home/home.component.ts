import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dark = true;

  private dataSubscription: Subscription;

  constructor(private serviceTheme: ThemeService) { }

  ngOnInit() {
    AOS.init();

    this.dataSubscription = this.serviceTheme.themeSubject.subscribe((data:any) => {
      console.log(data);
      this.dark = data;
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
