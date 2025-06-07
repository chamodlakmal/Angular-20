import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { heavyMatrixMultiplication } from './worker.worker';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected title = 'web-worker-example';
  length = signal(0);

  private worker!: Worker;

  ngOnInit(): void {
    this.worker = new Worker(new URL('./worker.worker', import.meta.url));

    //this.worker.onmessage = ({ data }) => {
    //  console.log('Message from worker:', data);
    //  if (data.status === 'error') {
    //    console.error('Error in worker:', data.error);
    //    this.length.set(0);
    //  } else {
    //    this.length.set(data.length);
    //  }
    //};

    this.worker.onerror = (error) => {
      console.error('Worker error:', error);
      this.length.set(0);
    };
  }

  ngOnDestroy(): void {
    if (this.worker) {
      this.worker.terminate();
    }
  }

  multiplyMatrix() {
    //const primes = this.findPrimes(10000000);
    //this.primeLength.set(primes.length);

    //const result = this.heavyMatrixMultiplication(1000);
    //this.length.set(result.length);
    this.worker.postMessage({
      action: 'multiplyMatrix',
      size: 100000000,
    });
    //const result = heavyMatrixMultiplication(1000);
    //this.length.set(result.length);
  }

  findPrimes(max: number): number[] {
    const sieve = new Array(max).fill(true);
    const primes: number[] = [];

    sieve[0] = sieve[1] = false;

    for (let i = 2; i < max; i++) {
      if (sieve[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          sieve[j] = false;
        }
      }
    }

    return primes;
  }
}
