var img = document.getElementById('image');
var overlay = document.getElementById('overlay');
img.onclick = function(){
  overlay.style.display = "block"; 
  img.setAttribute("style", "-webkit-filter:brightness(30%)");  
}
overlay.onclick = function(){
  overlay.style.display = "none";
  img.setAttribute("style", "-webkit-filter:brightness(100%)");
}