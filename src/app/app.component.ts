import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  dark = true;

  private dataSubscription: Subscription;

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

}
