import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  dark = true;

  constructor(private serviceTheme: ThemeService) { }

  ngOnInit() {
    this.dataSubscription = this.serviceTheme.themeSubject.subscribe((data:any) => {
      console.log(data);
      this.dark = data;
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  changeTheme() {
    this.serviceTheme.changeTheme();
  }

}
