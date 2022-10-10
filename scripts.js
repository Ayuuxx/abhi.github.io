var prevScrollpos = window.scrollY;
window.onscroll = function() 
{
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottomnav").style.top = "0";
  } else {
    document.getElementById("bottomnav").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
