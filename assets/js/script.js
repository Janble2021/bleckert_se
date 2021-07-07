
// slideshow on index page
if (document.getElementsByClassName("mySlides").length != 0) {

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  setInterval(function () { plusSlides(1); }, 5000);
}

// displays a banner with cookie choice
function cookieBanner() {
  var banner = document.getElementById("cookie_banner");
  var consent = localStorage.getItem("cookie_consent");
  if (consent == null) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }
}

// sets and checks cookie choice
function allowCookies(choice) {
  if (choice == true) {
    localStorage.setItem("cookie_consent", true);
  } else {
    localStorage.setItem("cookie_consent", false);
  }
  cookieBanner()
}

// when user is not scrolled to the top
setInterval(function () { scrollArrow(); }, 100);
function scrollArrow() {
  var arrow = document.getElementById("scroll_arrow");
  if (window.scrollY > 0) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

// scroll user to top
function scrollToTop() {
  window.scrollTo(0, 0);
}