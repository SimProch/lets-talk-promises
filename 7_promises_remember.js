const existingPromise = new Promise((resolve, reject) =>
  setTimeout(reject, 1500)
);

const giveMePromise = () => existingPromise;
const inTry = async (promise) => {
  try {
    await promise;
  } catch (e) {
    console.log(e);
  }
};
(async () => {
  await inTry(giveMePromise());
  await inTry(giveMePromise());
  await giveMePromise()
})();
