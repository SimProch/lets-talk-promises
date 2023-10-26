async function getMyValueAsync() {
  return 20;
}

async function myFunction() {
  const a = await getMyValueAsync();
  console.log(a);
}

(async () => {
  console.log("First log");
  myFunction(); // Second log - 20
  console.log("Second log");
})();
