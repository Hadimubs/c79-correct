a=[];
function d(){
n1=document.getElementById("i1").value;
n2=document.getElementById("i2").value;
n3=document.getElementById("i3").value;
n4=document.getElementById("i4").value;
a.push(n1);
a.push(n2);
a.push(n3);
a.push(n4);
console.log(a);
document.getElementById("answer").innerHTML=a;
document.getElementById("b").style.display="none";
document.getElementById("s").style.display="inline-block";
}
function o(){
a.sort();
console.log(a);
document.getElementById("answer").innerHTML=a;
}