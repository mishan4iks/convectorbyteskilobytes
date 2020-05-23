var p=document.getElementById("text");
btn.onclick=function(){
var res1;
var np1=+document.getElementById("inp1").value;
console.log(np1);
res1=np1*1024;
p.innerHTML=+res1+"байтов";

}
btn1.onclick=function(){
var res1;
var np1=+document.getElementById("inp1").value;
console.log(np1);
res1=np1/1024;
p.innerHTML=+res1+"килобайт";
}