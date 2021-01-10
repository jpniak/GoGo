// Znam także const i let :-)))) uzyłem var celowo, żeby na starszych przeglądarkach nie było problemu

var first = document.getElementById('first');
//console.log(first);

var second = document.getElementById('second');
//console.log(second);

var third = document.getElementById('third');
//console.log(third);


var texts = ['<div style="color: black"><h3>Heading</h3><p>Lorem ipsum dolor sit amet.</p><i style="color: black" class="fab fa-wordpress"></i></div>', '<div style="color: black"><h3>Heading</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates ipsa in qui? Animi, placeat!</p></div>', '<div style="color: black"><h3>Ultra Mega Super Long Heading</h3><p>Lorem ipsum dolor sit amet.</p></div>'];


var i = 0
var j = 1
var k = 2


function sliderPrev() {
  
  if (i<texts.length-1){i++} else {i=0}
  if (j<texts.length-1){j++} else {j=0}
  if (k<texts.length-1){k++} else {k=0}
  
  first.innerHTML = texts[i];
  second.innerHTML = texts[j];
  third.innerHTML = texts[k];
  
}

function sliderNext() {
  
  if (i>0) {i--} else {i=(texts.length-1)}
  if (j>0) {j--} else {j=(texts.length-1)}
  if (k>0) {k--} else {k=(texts.length-1)}
  
  first.innerHTML = texts[i];
  second.innerHTML = texts[j];
  third.innerHTML = texts[k];
 

  
}

function keyChangeSlide(event) {
  switch (event.keyCode){
    case 37: 
      sliderPrev();
      break;
    
    case 39:
      sliderNext();
      break;
  }
  
}


document.getElementById('prev').addEventListener('click', sliderPrev);
document.getElementById('next').addEventListener('click', sliderNext);
window.addEventListener('keydown', keyChangeSlide);