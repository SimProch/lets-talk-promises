function getMyValueSync() {
  return 20;
}

function myFunction() {
  const a = getMyValueSync();
  console.log(a);
}

console.log("First log");
myFunction(); // Second log - 20
console.log("Third log");
