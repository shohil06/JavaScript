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

  function moveBox(moveBy){
    var left=el.offsetLeft;
    el.style.left=left+moveBy+"px";

    if( ( (left > 399) && (moveBy > 0) )  ||  ( (moveBy < 0) && (left < 51) ) )
    {
      clearTimeout(timer);
      timer=setInterval(move,10);
    }
  };
  function move(){
    var rand = 3;
    rand*=-1;
    return rand;
  }
  var timer=setInterval(move,10);
  }());
