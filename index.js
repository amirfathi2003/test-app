console.log("hello");

function stars(rows) {
  for (row = 1; row <= rows; row++) {
    pattern = "";
    for (i = 0; i < +row; i++) {
      pattern += "*";
    }
  }
  console.log(pattern);
}

console.log("hello world");
