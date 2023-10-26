const giveMePromise = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};

(async () => {
  const promise1 = await giveMePromise();
  const promise2 = await giveMePromise();
  const promise3 = await giveMePromise();
  const promise4 = await giveMePromise();
  const promise5 = await giveMePromise();
  const promise6 = await giveMePromise();
  const promise7 = await giveMePromise();
  const promise8 = await giveMePromise();
  const promise9 = await giveMePromise();
  const promise10 = await giveMePromise();
  console.log('hit after 1 sec')
})();
