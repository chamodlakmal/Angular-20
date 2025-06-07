import { Injectable } from '@angular/core';
import { interval, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  public data$ = interval(1000).pipe(share());
  constructor() {
    console.log('Data service initialized');
  }
}
