import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logging {
  constructor() {
    console.log('Logging service initialized');
  }

  log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
  }
}
