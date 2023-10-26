(async () => {
  const myPendingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
  const myFulfilledPromise = new Promise((resolve, reject) => resolve());
  await myFulfilledPromise;
  try {
    const myRejectedPromise = new Promise((resolve, reject) => reject());
    await myRejectedPromise;
  } catch (e) {
    console.log(e);
  }
})();
