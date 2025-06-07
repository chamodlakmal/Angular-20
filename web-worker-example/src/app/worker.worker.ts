/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  //console.log('Worker received message:', data);
  //const result = heavyMatrixMultiplication(data);
  //console.log('Worker sending result:', result.length);
  //postMessage(result);
  //console.log('Worker received message:', data);
  //try {
  //  if (data.action === 'multiplyMatrix') {
  //    const result = heavyMatrixMultiplication(data.size);
  //    console.log('Worker sending result:', result.length);
  //    postMessage({
  //      status: 'success',
  //      length: result.length,
  //      error: null,
  //    });
  //  }
  //} catch (error) {
  //  console.error('Error in worker:', error);
  //  postMessage({ status: 'error', length: 0, error: 'error occured' });
  //}
  throw new Error('Worker is not implemented yet');
});

export function heavyMatrixMultiplication(size: number = 1000): number[][] {
  console.time('Matrix multiplication');

  // Create two random matrices
  const matrixA = createRandomMatrix(size);
  const matrixB = createRandomMatrix(size);
  const result = new Array(size).fill(0).map(() => new Array(size).fill(0));

  // Perform matrix multiplication (O(n³) operation)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let sum = 0;
      for (let k = 0; k < size; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  console.timeEnd('Matrix multiplication');
  return result;

  function createRandomMatrix(size: number): number[][] {
    return new Array(size)
      .fill(0)
      .map(() => new Array(size).fill(0).map(() => Math.random()));
  }
}
