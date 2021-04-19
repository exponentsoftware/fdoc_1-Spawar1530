function random(arr){
var n;
var r=[];
for (n=1; n<=7; ++n)
{
  var i = Math.floor((Math.random() * (10-n)) + 1);
  r.push(arr[i]);
  arr[i] = arr[10-n];
}
return r;
}

var a = [0,1,2,3,4,5,6,7,8,9];

console.log(random(a))