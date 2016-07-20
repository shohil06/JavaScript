// (function(){
//   var doc=document;
//   var Foo=doc.getElementById("foo");
//   Foo.className="css-style css-style2";
// }());
//


/*----------------------------------------------
Using innerHTML in place of createTextNode
----------------------------------------------*/
(function(){
  var doc=document,
  el=doc.getElementById("box");
  left=el.offsetLeft;
  moveBy= 3;
  
  function move(){
    if(left > 399)
    {  moveBox(moveBy);}
    else {
      moveBox = moveBox * (-1);
      moveBox(moveBy);
    }
  }
  var timer=setInterval(move,10);





  var moveBox =function(moveBy){

    el.style.left=left+moveBy+"px";

    if( ( (left > 399) && (moveBy > 0) )  ||  ( (moveBy < 0) && (left < 51) ) )
    {
      clearTimeout(timer);
      timer=setInterval(move,10);
    }
  };

  }());
