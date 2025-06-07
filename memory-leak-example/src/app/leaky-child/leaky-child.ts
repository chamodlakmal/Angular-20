import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leaky-child',
  imports: [],
  templateUrl: './leaky-child.html',
  styleUrl: './leaky-child.css',
})
export class LeakyChild implements OnInit, OnDestroy {
  dataService = inject(Data);
  private subscription!: Subscription;

  ngOnInit(): void {
    console.log('LeakyChild component initialized');
    this.subscription = this.dataService.data$.subscribe((value) => {
      console.log('Data received in LeakyChild:', value);
    });
  }

  ngOnDestroy(): void {
    console.log('LeakyChild component destroyed');
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Subscription to data service unsubscribed');
    } else {
      console.warn('No subscription to unsubscribe');
    }
  }
}
