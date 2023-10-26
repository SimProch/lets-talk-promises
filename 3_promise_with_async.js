// fulfilled
(async () => {
  const promise1 = new Promise((resolve, reject) => resolve(20));

  async function createFulfilledPromise(val) {
    return val;
  }

  const promise2 = createFulfilledPromise(20);
  console.log(promise1);
  console.log(promise2);
})();

// rejected
(async () => {
  const promise = new Promise((resolve, reject) => reject());
  try {
    await promise;
  } catch (e) {
    console.log(e);
  }

  async function createPromise() {
    throw undefined;
  }

  try {
    const promise = await createPromise();
  } catch (e) {
    console.log(e);
  }
})();
