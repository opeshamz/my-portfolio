
var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px";
    document.getElementById("navbar").style.height = "auto";
    
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("navbar").style.backgroundColor = "#bec0b8";
  } 
  else if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
    document.getElementById("navbar").style.padding = "20px";
    document.getElementById("navbar").style.height = "auto";

    document.getElementById("logo").style.fontSize = "20px";
    document.getElementById("navbar").style.backgroundColor = "";
  } 
  else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  };

}AOS.init({
			easing:'ease',
			duration:1800,
			once:true
		});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
 
