// Problem #153

/*
let arr = [7, 10, 5, 3, 2];
let sortArr = [];
let count = 0;

for(let i = arr.length - 1; i >= 0; i--){
  if(arr[i] % 2 == 0){
    sortArr[sortArr.length] = i;
    count++;
  }
}

console.log(sortArr, `c: ${count}`);
*/

// Problem #154

/*
let arr = [7, 10, 5, 3, 2];
let sortArr = [];
let k = 2;

for(let i = 0; i < arr.length; i++){
  for(let j = i; j % k == 0; j++){
    sortArr[sortArr.length] = arr[i];
  }
}

console.log(sortArr);
*/

// Problem #155

/*
let arr = [1, 2, 3];
let sortArr = [];

for(let i = 0; i < arr.length; i++){
  for(let j = i; j % 2 == 0; j++){
    sortArr[sortArr.length] = arr[i];
  }
}

console.log(sortArr);
*/

// Problem #156

/*
let arr = [1, 2, 3, 10, -4, true];
let sortArr = [];

for(let i = arr.length - 1; i >= 0; i--){
  for(let j = i; j % 2 != 0; j++){
    sortArr[sortArr.length] = arr[i];
  }
}

console.log(sortArr);
*/

// Probelm #157

/*
let arr = [7, 10, 5, 3, 2];
let sortArr = [];
let oddArr = [];

for(let i = 0; i < arr.length; i++){
  if(i % 2 == 0){
    sortArr[sortArr.length] = arr[i];
  } else{
    oddArr[oddArr.length] = arr[i];
  }
}

for(let i = 0; i < oddArr.length; i++){
  sortArr[sortArr.length] = oddArr[i];
}

console.log(sortArr);
*/

// Problem #158

/*
let arr = [7, 10, 3, 2];
let sortArr = [];
let n = arr.length;

for(let i = 0; i < arr.length; i++){
  for(let j = i; j % 2 == 0; j++){
    sortArr[sortArr.length] = arr[j];
  }
  for(let k = i; k % 2 != 0; k++){
    sortArr[sortArr.length] = arr[n-k];
  }
}

console.log(sortArr);
*/

// Problem #159

/*
let arr = [2, 4, 12, 1];
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] < arr[arr.length - 1]){
    count = arr[i];
    break;
  }
}

if(count != 0){
  console.log(count);
} else{
  console.log("Mavjud emas!");
}
*/

// Problem #160

/*
let arr = [2, 4, 12];
let count = 0;

for(let i = arr.length - 1; i >= 0; i--){
  if(arr[i] < arr[arr.length - 1] && arr[i] > arr[0]){
    count = i;
    break;
  }
}

if(count != 0){
  console.log(count);
} else{
  console.log(false);
}
*/

// Problem #161

/*
let arr = [2, 4, 12];
let k = 0;
let l = 2;
let count = 0;

for(let i = k + 1; i < l; i++){
  count += arr[i];
}

console.log(count);
*/

// Problem #162

/*
let arr = [2, 4, 12, -10, 3, 5, 7];
let k = 1;
let l = 6;
let count = 0;
let check = 0;

for(let i = k + 1; i < l; i++){
  count += arr[i];
  check++;
}

if(count > 0 || check > 0){
  console.log(count / check);
} else{
  console.log(0);
}
*/

// Problem #163

/*
let arr = [2, 4, 12, -10, 3, 5, 7];
let k = 1;
let l = 6;
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(i <= k || i >= l){
    count += arr[i];
  }
}

console.log(count);
*/

// Problem #164

/*
let arr = [11, 14, 17, 20, 23];
let n = arr[1] - arr[0];
let count = 0;

for(let i = 1; i < arr.length; i++){
  if(arr[i] - n != arr[i - 1]){
    count = 1;
    break;
  }
}

if(arr.length < 2){
  console.log(false);
} else if(count == 0){
  console.log(n);
} else{
  console.log(false);
}
*/

// Problem #165

/*
let arr = [2, 6, 18];
let n = Math.floor(arr[1] / arr[0]);
let count = 0;

for(let i = 1; i < arr.length; i++){
  if(arr[i] / n != arr[i - 1]){
    count = 1;
  }
}

if(arr.length < 2){
  console.log(0);
} else if(count == 0){
  console.log(n);
} else{
  console.log(false);
}
*/

// Problem #166



// Problem #167

/*
let a = [1, -3, 12, -1, 3, -4, -2, 1, -7];
let b = 0;

for(let i = 0; i < a.length; i++){
  if(i % 2 == 0){
    b += a[i];
  }
}

console.log(b);
*/

// Problem #168

/*
let arr = [1, -3, 12, -1, 3, -4];
let collectArr = [];  
let n = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] > arr[i + 1]){
    collectArr[collectArr.length] = i;
    n++;
  }
}

console.log(collectArr, `c: ${n}`);
*/

// Problem #169

/*
let arr = [1, -3, 12, -1, 3, -4];
let collectArr = [];
let n = 0;

for(let i = arr.length - 1; i >= 0; i--){
  if(arr[i] < arr[i - 1]){
    collectArr[collectArr.length] = arr[i - 1];
    n++;
  }
}

console.log(collectArr, `c: ${n}`);
*/

// Problem #170

/*
let arr = [1, 2, -10, 3, 5];
let r = 5;
let a = 0

for(let i = 0; i < arr.length; i++){
  a = arr[i] - r;
  if(arr[i] - r < a){
    a = arr[i];
    console.log(a);
  }
}

// console.log(a);
*/

// Problem #171

/*
let arr = [1, -10, 2, 1, 2, 5];
let chooseArr = [];
let count = 0;

for(let i = 0; i < arr.length; i++){
  chooseArr[i] = arr[i];
  if(arr[i] )
}

console.log(chooseArr);
*/

// Problem #172

/*
let arr = [false];
let newArr = [true ];
let tempArr = [];

for(let i = 0; i < arr.length; i++){
  tempArr[i] = arr[i];
  arr[i] = newArr[i];
  newArr[i] = tempArr[i]; 
}

console.log(arr, newArr);
*/

// Problem #173

/*
let arr = [1, -3, 2, -3, 5];
let newArr = [];

for(let i = 0; i < arr.length; i++){
  if(arr[i] < 5){
    newArr[i] = 2 * arr[i];
  } else{
    newArr[i] = arr[i] / 2;
  }
}

console.log(newArr);
*/

// Problem #174

/*
let arr = [1, -3, 10];
let newArr = [12, 4, -3];
let sortArr = [];

for(let i = 0; i < arr.length; i++){
  if(arr[i] > newArr[i]){
    sortArr[i] = arr[i];
  } else{
    sortArr[i] = newArr[i];
  }
}

console.log(sortArr);
*/

// Problem #175

/*
let arr = [9, 14, 3, 2, 1];
let newArr = [];

for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 == 0){
    newArr[newArr.length] = arr[i];
  }
}

console.log(newArr);
*/

// Problem #176

/*
let arr = [9, 14, 3, 2, 1];
let newArr = [];
let count = 0;

for(let i = 0; i < arr.length; i++){
  count = arr[i] + count;
  newArr[i] = count;
}

console.log(newArr);
*/

// Problem #177

/*
let arr = [9, 12, 3, 2, 1];
let newArr = [];
let count = 0;

for(let i = arr.length - 1; i >= 0; i--){
  count = arr[i] + count;
  newArr[i] = count;
}

console.log(newArr);
*/

// Problem #178

/*
let n = [1, 2, 10, 5, 6, 7];
let newArr = [];
let count = 0;

for(let i = 0; i < n.length; i++){
  if(n[i] < n[i + 1]){
    count++;
  }
}
*/

// Problem #179

/*
let n = 5;
let arr = [1, 1];
let a = 1;
let b = 1;
let c = 0;

for(let i = 0; i < n - 2; i++){
  c = a + b;
  a = b;
  b = c;
  arr[arr.length] = c;
}

console.log(arr);
*/

// Problem #180

/*
let arr = [9, -14, 3, 2, 1];
let min = arr[0];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
  }
  if(arr[i] > max){
    max = arr[i];
  }
}

console.log(`min: ${min}, max: ${max}`);
*/

// Problem #181

/*
let a = [1, 't', 15, 't'];
let b = [2, 4];
let c = [];
c[0] = a[0];

for(let i = 1; i < a.length; i++){
  for(let j = 1; j < a.length; j++){
    if(i[])
  }
}

console.log(c);
*/

// Problem #182

/*
let arr = [0, 1, 10, 22, 5];
let n = 10;
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] == n){
    count = i;
    break;
  } else{
    count = 0;
  }
}

if(count != 0){
  console.log(count);
} else{
  console.log(-1);
}
*/
