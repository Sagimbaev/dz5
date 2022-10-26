
const button = document.querySelector('button').onclick = myClick;

function myClick() {
   var a = document.querySelector('.icon').value;
   var arr = [];
   arr.push(a);
   console.log(arr);
   document.querySelector('.better').innerHTML = a;
}
