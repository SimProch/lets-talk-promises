function getMyValueAsync() {
  return 20;
}

function myFunction() {
  const a = getMyValueAsync();
  console.log(a);
}

console.log("First log");
myFunction(); // Second log - 20
console.log("Third log");
