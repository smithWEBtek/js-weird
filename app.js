function b(){
  console.log(myVar)
}

function a(){
  let myVar = "inner 2";
  b();
}

let myVar = "global 1";
a();
