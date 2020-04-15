
var herotitle = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 500,
  scale    : 1,
}

var cover = {
  origin   : "bottom",
  distance : "0px",
  duration : 600,
  delay    : 0,
  opacity: 0,
}

var sectitle = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 100,
  scale    : 1,
}

var qanda = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 0.98,
  viewFactor: 0.9,
}

var table = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 0.98,
  viewFactor: 0.3,
}

var second_page_img = {
  origin   : "right",
  distance : "2000px",
  opacity : 1,
  duration : 900,
  delay    : 500,
  scale    : 1,
  viewFactor: 0,
}

var projects = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 0.9,
  viewFactor: 0.2,
}

var contact = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 1,
}

var arrow = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 1200,
  scale    : 1,
  beforeReveal:function () {
    // $(".freccia").css("opacity","0");
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
  },
  afterReveal: function () {
    document.getElementsByClassName("freccia")[0].style.animation = "freccia 1.6s ease-in-out 5";
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
    // $(".freccia").css({"animation":"freccia 1.6s ease-in-out 5"});
    // $(".freccia").css("opacity","0");
  },
}

var footer = {
  origin   : "bottom",
  distance : "20px",
  duration : 900,
  delay    : 0,
  scale    : 1,
}

var cover = {
  origin   : "top",
  distance : "0",
  duration : 1200,
  delay    : 0,
  scale    : 1.1,
}

var text = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 1,
}

var immagini = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 0,
  scale    : 0.98,
  viewFactor: 0.2,
}

var staggerMin = {
  duration: 500,
  delay: 1500,
  distance: '40px',
  scale: 1,
  afterReveal: function(el) {
    el.firstElementChild.style = 'transform: none;';
  },
};

var staggerMin2 = {
  duration: 500,
  delay: 1600,
  distance: '40px',
  scale: 1,
  afterReveal: function(el) {
    el.firstElementChild.style = 'transform: none;';
  },
};

var staggerLow = {
  duration: 500,
  delay: 1700,
  distance: '50px',
  scale: 1,
  afterReveal: function(el) {
    el.firstElementChild.style = 'transform: none;';
  },
};

var staggerMed = {
  duration: 500,
  delay: 1800,
  distance: '70px',
  scale: 1,
  afterReveal: function(el) {
    el.firstElementChild.style = 'transform: none;';
  },
};

var staggerMax = {
  duration: 500,
  delay: 1900,
  distance: '80px',
  scale: 1,
  afterReveal: function(el) {
    el.firstElementChild.style = 'transform: none;';
  },
};

var slideFromRight = {
  origin: 'right',
  distance: '100%',
  opacity: 1,
  duration: 500,
  scale: 1,
};

var sliderAnimation = {
  origin: 'right',
  duration: 500,
  distance: '200px',
  scale: 1,
};

var slideToTop = {
  duration: 0,
  distance: '0px',
  easing: 'linear',
  opacity: 1,
  scale: 1,
  viewFactor: 0.9,
  afterReveal: function(el) {
      el.style = 'transform: translateY(-100%);';
  },
}

var slideToBottom = {
  duration: 0,
  distance: '0px',
  easing: 'linear',
  opacity: 1,
  scale: 1,
  viewFactor: 0.9,
  afterReveal: function(el) {
      el.style = 'transform: translateY(100%);';
  },
}

var slideToLeft = {
  duration: 0,
  distance: '0px',
  easing: 'linear',
  opacity: 1,
  scale: 1,
  viewFactor: 0.9,
  afterReveal: function(el) {
      el.style = 'transform: translateX(-100%);';
  },
}