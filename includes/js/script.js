/*----------------------------------------------
Simple Addition Operations
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
----------------------------------------------*/
/*
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
*/



/*----------------------------------------------
Scope of a Variable
----------------------------------------------*/
/*
var globalVar="This is a global variable.";
var globalFunction=function(p1){
  alert(globalVar),
  alert(p1),
  var localVar=function(){

  };
  var local="This is a local variable!";
  globalVar="Value has been Modified!";
};
globalFunction(),
alert(p1),
alert(globalVar);
*/



/*----------------------------------------------
Properties of a String Object
----------------------------------------------*/
/*
var obj="This is a my new variable!";
length=obj.length;
var index=obj.lastIndexOf("is");
var index2=obj.lastIndexOf("is" , index - 3);
alert(length),
alert(index),
alert(index2);
index=obj.lastIndexOf("T");
var substr=obj.substr(index,3);
var substring=obj.substring(0,4);
alert(substr);
alert(substring);
*/



/*----------------------------------------------
Properties of a String Object
----------------------------------------------*/
/*
var obj="This is a my new variable!";
var replace=obj.replace("new","old");
alert(replace);
var upcase=obj.toUpperCase(),
lowcase=obj.toLowerCase();
lowcase=obj.toLowerCase(),
alert(upcase),
alert(lowcase),
alert(obj);
*/



/*----------------------------------------------
Creating Objects in java script
----------------------------------------------*/
/*
var person = new Object();
person.firstName="Shohil",
person.lastName="Sethia",
person.getFullName=function(){
  return this.firstName + " " + this.lastName ;
},
alert(person.getFullName());

//    OR one could do the following which is called Object Literal Notation .

var obj = {
  firstName : "Shohil", lastName : "Sethia" , getFullName : function(){return this.firstName + " " + this.lastName;}
};
alert(obj.getFullName());

*/

/*----------------------------------------------
Arrays in Java Script
----------------------------------------------*/

//New Way of Defining array
/*
var array=[11,"Delhi",true];
alert(array[1]);

//   Old way of defining array
 var array1=new Array(11,"Delhi",true);
 alert(array1[2]),

//To Concat two strings
alert(array.concat(array1)),

//To Join array with a separator after each element
alert(array.join(" / "));
*/

/*----------------------------------------------
Loops and Conditional Statements in Java Script
----------------------------------------------*/
/*
if(" ")
{
  alert("hi");
}
var array=[1,2,3,4,5];
for (var i = 0; i < array.length; i++) {
  alert(array[i]);
}
while(array.length > 0)
{
  array.pop();
}
alert(array.length);
alert("This is outside of all loops");
*/

/*----------------------------------------------
The Window Object
----------------------------------------------*/
/*
(function(){
  var foo="hello, World";
  alert(foo);
}());
*/

/*----------------------------------------------
The Confirm() operation
----------------------------------------------*/
/*
(function(){
  if(confirm("Do you wanna go to google ?"))
  {
    location = "http://www.google.com";
    // alert("Oh Yes! We will take you to google right away!");
  }
  else {
    alert("Congrats on this too! you are staying here !");
  }
}());
*/

/*----------------------------------------------
The "document" Object
----------------------------------------------*/

(function(){
  /*
  var pElements = document.getElementsByTagName("p");
  for (var i = 0,len=pElements.length; i < len; i++) {
    alert(pElements[i]);
*/
/*
  var pElement = document.getElementById("foo1");
  if(pElement === null)
    {
      alert(pElement);
    }
*/

  var p1Element = document.querySelectorAll("div p");
  alert(p1Element.length);

  var p1Element = document.querySelectorAll("#foo");
  alert(p1Element.length);

}());
