import { Injectable } from '@angular/core';
import { Logging } from './logging';

@Injectable({
  providedIn: 'root',
})
export class CustomLogging extends Logging {
  constructor() {
    super();
    console.log('CustomLogging service initialized');
  }

  override log(message: string): void {
    console.log(`[CUSTOM LOG] ${new Date().toISOString()}: ${message}`);
  }
}
