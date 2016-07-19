/*----------------------------------------------
Simple Addition Operations
Key Note- "The comma operator to separate variables doesnt work.!"
----------------------------------------------*/
/*
alert("Hi there! This is my first program"),
alert("I wanna try Several Stuff, Kindly Coperate");
var foo = 9 + 7;
var foo1 = "9" + 7;
var foo2 = 7 + "9";
var foo3 = 7 + "9" + 4;
var foo4 = 7 + 5 + "8" + 2;
alert(foo); alert(foo1) , alert(foo2) , alert(foo3) , alert(foo4) ;
*/



/*----------------------------------------------
ParseInt Operations
Key Note- "The comma operator to separate variables doesnt work.!"
----------------------------------------------*/
/*
var foo="34",
foo = parseInt("34"),
foo = foo + 6;
alert(foo);

var foo1="3asdc4",
foo1 = parseInt(foo1 , 10),
foo1 = foo1 + 6;
alert(foo1);
*/



/*----------------------------------------------
Function Operations
Key Note- "The comma operator to separate variables doesnt work.!"
----------------------------------------------*/
/*
var foo=doSomething(2,2);
var bar=doSomething(3,2);
function doSomething(p1,p2){
  p1=p1+3;
  p1=p1+1;
  p1=p1*8;
  return (p1*p2);
}
alert(foo);
alert(bar);
*/



/*----------------------------------------------
Assigning Function to a Variable
Key Note- "The comma operator to separate variables doesnt work.!"
----------------------------------------------*/

var doSomething=function(p1,p2,fn){
  p1=p1+3;
  p1=p1+1;
  p1=p1*8;
  return fn(p1,p2);
};
function fn(p1,p2){
  return p1 * p2;
}
var foo=doSomething(2,2,fn);
var bar=doSomething(3,2,fn);
alert(foo);
alert(bar);
