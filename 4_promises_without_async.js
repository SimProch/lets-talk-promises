const myPendingPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 500);
});
console.log(myPendingPromise);
const myFulfilledPromise = new Promise((resolve, reject) => resolve());
myFulfilledPromise.then((val) => {
  console.log(myFulfilledPromise);
  const myRejectedPromise = new Promise((resolve, reject) => reject());
  myRejectedPromise.catch((e) => {
    console.log(e);
  });
});
