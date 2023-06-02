var Box = document.getElementById('box');
var clickcount =document.getElementById('click-count');
var count=0;
Box.addEventListener('click',function(){
  count++;
  console.log(count);
  clickcount.innerText=count+" ";
});