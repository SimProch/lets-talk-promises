const giveMePromise = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};

const existingPromise = giveMePromise().then(() => {
  const promise = giveMePromise().then(() => {
    const promise = giveMePromise().then(() => {
      const promise = giveMePromise().then(() => {
        const promise = giveMePromise().then(() => {
          const promise = giveMePromise().then(() => {
            const promise = giveMePromise().then(() => {
              const promise = giveMePromise().then(() => {
                const promise = giveMePromise().then(() => {
                  const promise = giveMePromise().then(() => {
                    console.log("hit after 1 sec");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
