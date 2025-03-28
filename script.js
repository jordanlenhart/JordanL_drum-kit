let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
//

// let prevArrow = document.querySelector(`.prev[data-prev="${190.keyCode}"`)
// let nextArrow = document.querySelector(`.next[data-next="${188.keyCode}"`)

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(`n is`, n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function detectArrows(e) {
  console.log(e);
  if (e.keyCode === 190) {
    console.log(`e is 190`);
    plusSlides(1);
  }
  if (e.keyCode === 188) {
    console.log(`e is 188`);
    plusSlides(-1);
  }
}

function playSound(e) {
    let audio;
    let note;

    if (slideIndex === 1) {
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        note = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    }
    if (slideIndex === 2) {
        audio = document.querySelector(`audio[data=string="${e.keyCode}"]`)
        note = document.querySelector(`.key[data-string="${e.keyCode}"]`)
    }
    

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    note.classList.add('playing');
  };

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  window.addEventListener('keydown', detectArrows);