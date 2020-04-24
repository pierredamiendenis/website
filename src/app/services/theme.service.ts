import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeSubject = new Subject<any>();

  dark = false;

  constructor() { this.emitAppareilSubject() }

  emitAppareilSubject() {
    this.themeSubject.next(this.dark);
  }

  changeTheme() {
    this.dark = !this.dark;
    this.emitAppareilSubject();
  }

  getCurrentTheme () {
    return this.dark;
  }



}
