/*
let newArray = [3, 11, 5, 7, 3, 15, 9];
let r = newArray[0];

for(let i = 0; i < newArray.length; i++){
  if(newArray[i] < r){
    r = newArray[i];
  }
}

console.log(r);
*/

/*
let a = [11, 2, 48, 9, 61, 5, 78, 8];
let b = a[0];

for(let i = 0; i < a.length; i++){
  if(i % 2 == 0){
    if(a[i] < b){
      b = a[i];
    }
  }
}

console.log(b);
*/

/*
let newArr = [15, 1, 54, -5, 56, -52, 65, 5];

for(let i = 0; i < newArr.length; i++){
  for(let j = 0; j < newArr.length; j++){
    if(newArr[j] > newArr[j + 1]){
      let a = newArr[j + 1];
      newArr[j + 1] = newArr[j];
      newArr[j] = a;
    }
  }
}

console.log(newArr);
*/

/*
let newArr = [17, 6, 10, 25, 13, 20];
let evenArray = [];
let oddArray= [];

for(let i = 0; i < newArr.length; i++){
  if(newArr[i] % 2 == 0){
    evenArray[evenArray.length] = newArr[i];
  } else{
    oddArray[oddArray.length] = newArr[i];
  }
}

for(let j = 0; j < evenArray.length; j++){
  for(let k = 0; k < evenArray.length; k++){
    if(evenArray[k] < evenArray[k + 1]){
      let a = evenArray[k + 1];
      evenArray[k + 1] = evenArray[k];
      evenArray[k] = a;
    }
  }
}

for(let j = 0; j < oddArray.length; j++){
  for(let k = 0; k < oddArray.length; k++){
    if(oddArray[k] < oddArray[k + 1]){
      let a = oddArray[k + 1];
      oddArray[k + 1] = oddArray[k];
      oddArray[k] = a;
    }
  }
}

let y = 0;
let z = 0;

for(let x = 0; x < newArr.length; x++){
  if(x % 2 == 0){
    newArr[x] = evenArray[y];
    y++;
  } else{
    newArr[x] = oddArray[z];
    z++;
  }
}

console.log(newArr);
*/