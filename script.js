// PRELOADER 

function loaderAnimation() {
  var loader = document.querySelector(".preloader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 2000)
}

loaderAnimation()

let counterElement = document.getElementById("counter");
let count = 0;
let intervalId = setInterval(() => {
    count++;
    if (count > 100) {
        clearInterval(intervalId);
        document.querySelector('.preloader').style.backgroundColor = '#FFFFFF';
        document.querySelector('.preloader-box').style.display = 'none';
    } else {
        counterElement.textContent = count + "%"
    }
}, 15);


// NAVBAR ONLOADING ANIMATION 

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    },2800 + index * 100);
  });
});


// HAMBURGER MENU FUNCTION 

function onClickMenu() {
  var menuIcon = document.getElementById("menu");
  var nav = document.querySelector("nav");

  menuIcon.classList.toggle("bx-menu");
  menuIcon.classList.toggle("bx-x");

  nav.classList.toggle("active");

  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
      link.classList.toggle("transformed");
  });

  let hamItem1 = document.querySelectorAll('.mainsection');

  hamItem1.forEach(function (element) {
    element.classList.toggle('hide1');
  });

  let hamItem2 = document.querySelectorAll('.hamlogo');

  hamItem2.forEach(function (element) {
    element.classList.toggle('hide2');
  });

  let hamItem3 = document.querySelectorAll('#bluelogo');

  hamItem3.forEach(function (element) {
    element.classList.toggle('hide3');
  });

  let hamItem4 = document.querySelectorAll('.mainsection i');

  hamItem4.forEach(function (element) {
    element.classList.toggle('hide4');
  });
}


// ROTATING TEXT ANIMATION 

let lastScrollTop5 = 0;

window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop5) {
        document.querySelector(".rotator1").classList.add("hidden");
        document.querySelector(".rotator2").classList.remove("hidden");
    } else {
        document.querySelector(".rotator1").classList.remove("hidden");
        document.querySelector(".rotator2").classList.add("hidden");
    }

    lastScrollTop5 = st <= 0 ? 0 : st;
}, false);

document.querySelector(".rotator2").addEventListener("mouseenter", function() {
  document.querySelector(".rotator1").classList.remove("hidden");
  document.querySelector(".rotator2").classList.add("hidden");
  document.querySelector(".rotator1").style.backgroundColor = "#f0cd76";
});

document.querySelector(".rotator1").addEventListener("mouseleave", function() {
  document.querySelector(".rotator1").style.backgroundColor = "#fff";
  document.querySelector(".rotator1").classList.add("hidden");
  document.querySelector(".rotator2").classList.remove("hidden");
});


// Parallax Animation

let parallaximg = document.getElementsByClassName("image-container3")[0];
console.log(parallaximg);

document.addEventListener("scroll", function () {
  if (window.innerWidth >= 1000) {
     parallaximg.style.transform = `translateY(-${window.pageYOffset * 0.35}px)`;
  }
});

// ACCORDIAN 

const acc = document.querySelectorAll(".acc");
const works = document.querySelectorAll(".work");

function showAccordion() {
  for (let i = 0; i < 4; i++) {
    (function(i) {
      setTimeout(function() {
        acc[i].classList.add("active2");
        works[i].style.display = "block";
        if (i > 0) {
          acc[i - 1].classList.remove("active2");
          works[i-1].style.display = "none";
        } else {
          acc[3].classList.remove("active2");
          works[3].style.display = "none";
        }
        
        if (i === 3) {
          setTimeout(function() {
            showAccordion();
          }, 10000);
        }
      }, i * 10000);
    })(i);
  }
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    showAccordion();
    window.removeEventListener('scroll', arguments.callee);
  }
});


// PICTURE ANIMATION 

const images = document.querySelectorAll('.image-container1 img');
let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active', 'out'));
  images[currentIndex].classList.add('out');
  currentIndex = (index + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(() => {
  showImage(currentIndex);
}, 2000);


const images1 = document.querySelectorAll('.image-container2 img');
let currentIndex1 = 0;

function showImage2(index) {
  images1.forEach(img => img.classList.remove('active', 'out'));
  images1[currentIndex1].classList.add('out');
  currentIndex1 = (index + 1) % images1.length;
  images1[currentIndex1].classList.add('active');
}

setInterval(() => {
  showImage2(currentIndex1);
}, 2000);


// MARQUEE SCROLLING EFFECT 

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let st = window.scrollY || window.pageYOffset;
  let marquee = document.querySelector('.marquee');
  let marqueeTop = marquee.offsetTop - 500;
  let marqueeHeight = marquee.offsetHeight;
  let marqueeBottom = marqueeTop + marqueeHeight;

  if (st > lastScrollTop && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide1').classList.remove('scroll-right');
    document.querySelector('#slide1').classList.add('scroll-left');
  } else if (st < lastScrollTop && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide1').classList.remove('scroll-left');
    document.querySelector('#slide1').classList.add('scroll-right');
  }

  lastScrollTop = st <= 0 ? 0 : st;
}, false);

let lastScrollTop2 = 0;

window.addEventListener("scroll", function () {
  let st = window.scrollY || window.pageYOffset;
  let marquee = document.querySelector('.marquee');
  let marqueeTop = marquee.offsetTop - 400;
  let marqueeHeight = marquee.offsetHeight;
  let marqueeBottom = marqueeTop + marqueeHeight;

  if (st > lastScrollTop2 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide2').classList.remove('scroll-left');
    document.querySelector('#slide2').classList.add('scroll-right');
  } else if (st < lastScrollTop2 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide2').classList.remove('scroll-right');
    document.querySelector('#slide2').classList.add('scroll-left');
  }

  lastScrollTop2 = st <= 0 ? 0 : st;
}, false);

let lastScrollTop3 = 0;

window.addEventListener("scroll", function () {
  let st = window.scrollY || window.pageYOffset;
  let marquee = document.querySelector('.marquee');
  let marqueeTop = marquee.offsetTop - 300;
  let marqueeHeight = marquee.offsetHeight;
  let marqueeBottom = marqueeTop + marqueeHeight;

  if (st > lastScrollTop3 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide3').classList.remove('scroll-right');
    document.querySelector('#slide3').classList.add('scroll-left');
  } else if (st < lastScrollTop3 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide3').classList.remove('scroll-left');
    document.querySelector('#slide3').classList.add('scroll-right');
  }

  lastScrollTop3 = st <= 0 ? 0 : st;
}, false);

let lastScrollTop4 = 0;

window.addEventListener("scroll", function () {
  let st = window.scrollY || window.pageYOffset;
  let marquee = document.querySelector('.marquee');
  let marqueeTop = marquee.offsetTop - 200;
  let marqueeHeight = marquee.offsetHeight;
  let marqueeBottom = marqueeTop + marqueeHeight;

  if (st > lastScrollTop4 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide4').classList.remove('scroll-left');
    document.querySelector('#slide4').classList.add('scroll-right');
  } else if (st < lastScrollTop4 && st >= marqueeTop && st <= marqueeBottom) {

    document.querySelector('#slide4').classList.remove('scroll-right');
    document.querySelector('#slide4').classList.add('scroll-left');
  }

  lastScrollTop4 = st <= 0 ? 0 : st;
}, false);


// PARALLAX ANIMATION 
const ourteam = document.querySelectorAll('.content11 h3')

function parallax() {
  let scrollValue = window.scrollY;

  if (ourteam[0].hasAttribute('style') && scrollValue >= 6800 && window.innerWidth >= 980) {
    ourteam[0].removeAttribute('style')
    setTimeout(() => {
      ourteam[1].removeAttribute('style')
    }, 150)
  }
  else if (ourteam[0].hasAttribute('style') && window.innerWidth < 980) {
    ourteam[0].removeAttribute('style')
    ourteam[1].removeAttribute('style')
  }
}
window.addEventListener('scroll', parallax)



// CAROUSEL FUNCTIONING 

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".left-right .arrow");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const cardWidth = firstCardWidth - 40; 

let isDragging = false, startX, startScrollLeft;

arrowBtns[0].style.backgroundColor = '#335DA3';

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");

    const scrollLeft = index * 4 * cardWidth;
    carousel.scrollLeft = scrollLeft;

    if (index === 0) {
      arrowBtns[0].style.backgroundColor = '#335DA3';
      arrowBtns[1].style.backgroundColor = '';
    } else if (index === dots.length - 1) {
      arrowBtns[0].style.backgroundColor = '';
      arrowBtns[1].style.backgroundColor = '#335DA3';
    } else {
      arrowBtns[0].style.backgroundColor = '';
      arrowBtns[1].style.backgroundColor = '';
    }
  });
});

let i = 0;

arrowBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const direction = index === 0 ? -1 : 1;
    const nextScrollLeft = carousel.scrollLeft + direction * 3 * cardWidth;

    if (nextScrollLeft >= 0 && nextScrollLeft <= carousel.scrollWidth - carousel.offsetWidth) {
      carousel.scrollLeft = nextScrollLeft;
      updateActiveDotAndScroll(direction);

      if (index === 1) {
        arrowBtns[0].style.backgroundColor = '#00358D';
      }

      if (index === 1) {
        i++; 
      } else {
        i--; 
      }

      if (i == 2) {
        arrowBtns[1].style.backgroundColor = '#335DA3';
      }
      else {
        arrowBtns[1].style.backgroundColor = '#00358D';
      }

      if (i == 0 && index === 0) {
        arrowBtns[0].style.backgroundColor = '#335DA3';
      }
      else {
        arrowBtns[0].style.backgroundColor = '#00358D';
      }
    }
  });
});

function updateActiveDotAndScroll(direction) {
  const activeDot = document.querySelector(".dot.active");
  const currentIndex = Array.from(dots).indexOf(activeDot);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = dots.length - 1;
  } else if (newIndex >= dots.length) {
    newIndex = 0;
  }

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[newIndex].classList.add("active");

  carousel.scrollLeft = newIndex * 4 * cardWidth;
}

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging")
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);



// TO PLAY VIDEO WHEN WE REACHED THERE 

const video = document.getElementById('video2');
const offset = document.getElementById('videosection2').offsetTop;

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVideo() {
  if (isInViewport(video)) {
    video.play();
  } else {
    video.pause();
  }
}

window.addEventListener('scroll', checkVideo);
checkVideo();
















