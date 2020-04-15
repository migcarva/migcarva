function cultureInit() {
    // SELECTORS
  // var valuesSlider = document.querySelector('#values-slider');
  // var valuesElements = document.querySelectorAll('.values__image-container');
  // var valuesDescriptions = document.querySelectorAll('.values__description');
  // var valuesTrigger = document.querySelector('#values-trigger');
  // var valuesContent = document.querySelector('#values-slider-container .container');

  var ourWaySlider = document.querySelector('#ourway-slider');
  var ourWayElements = document.querySelectorAll('.ourway__image-container');
  var ourWayDescriptions = document.querySelectorAll('.ourway__description');
  var ourWayTrigger = document.querySelector('#ourway-trigger');
  var ourWayContent = document.querySelector('#ourway-slider-container .container');

  // MEASUREMENTS
  var valuesMeasurements = {
      width: 0,
      margin: 0,
  };

  var ourWayMeasurements = {
      width: 0,
      margin: 0,
  };

  var fadeLength = '30px';
  var boxSize = '60rem';

  if (window.matchMedia('(max-width: 1600px)').matches) { // bp-xl
    boxSize = '50rem';
  }

  if (window.matchMedia('(max-width: 1400px)').matches) { // bp-md
    boxSize = '40rem';
  }

  if (window.matchMedia('(min-aspect-ratio: 70/71) and (max-height: 900px)').matches) {
    boxSize = '50rem';
  }

  if (window.matchMedia('(max-width: 576px)').matches) { // bp-sm
    boxSize = '37rem';
  }

  var sliderLength = window.matchMedia('(max-width: 576px)').matches ? '3000px' : '6000px';

  // CORE
  /* var valuesNavData = {
      prevProgress: 0,
      currentSlide: 0,
      slider: valuesSlider,
      elements: valuesElements,
      descriptions: valuesDescriptions,
      measurements: valuesMeasurements,
      boxes: false
  }; */

  var ourWayNavData = {
      prevProgress: 0,
      currentSlide: 0,
      slider: ourWaySlider,
      elements: ourWayElements,
      descriptions: ourWayDescriptions,
      measurements: ourWayMeasurements,
      boxes: true
  };

  // SCROLLMAGIC
  $('#main').removeClass('hide');
  setVariables();
  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene
  /*     var valuesScene = new ScrollMagic.Scene({triggerElement: valuesTrigger, duration: sliderLength, triggerHook: 0})
  .setPin('#values-slider-container')
  .on('progress', function(event) {
      navigationHandler(valuesNavData, event.progress, event.scrollDirection)
  })
  .addTo(controller); */


  // OUR WAY SECTION
  var ourWayScene = new ScrollMagic.Scene({triggerElement: ourWayTrigger, duration: sliderLength, triggerHook: 0})
  .setPin('#ourway-slider-container')
  .on('progress', function(event) {
      navigationHandler(ourWayNavData, event.progress, event.scrollDirection);
  })
  .addTo(controller);

  // setTrigger(valuesTrigger, valuesContent);
  setTrigger(ourWayTrigger, ourWayContent);

  reveal();

  window.addEventListener('resize', setVariables);

  // LOGIC

  function setTrigger(element, content) {
    element.style = 'top: ' + (getCenterAbsoluteOffset(content) - (window.innerHeight / 2)) + 'px;';
  }

  function setVariables() {
  /*     valuesMeasurements.width = valuesElements[0].getBoundingClientRect().width;
      valuesMeasurements.margin = calcProperty(valuesElements[0], 'margin-right'); */

      ourWayMeasurements.width = ourWayElements[0].getBoundingClientRect().width;
      ourWayMeasurements.margin = calcProperty(ourWayElements[0], 'margin-right');
  };

  // Una si occupa di chiamare il tutto solo al cambio soglia, ricevendo progress e direction (chiami current++ o -- ecc)
  function navigationHandler(navigationObject, currentProgress, direction) {
      if (direction === "FORWARD") {
        if (
          navigationObject.prevProgress >= 0 &&
          navigationObject.prevProgress < 0.2 &&
          currentProgress >= 0.2 &&
          currentProgress < 0.4
        ) {
          slideTo(navigationObject, 1);
        }
    
        if (
          navigationObject.prevProgress >= 0.2 &&
          navigationObject.prevProgress < 0.4 &&
          currentProgress >= 0.4 &&
          currentProgress < 0.6
        ) {
          slideTo(navigationObject, 2);
        }
    
        if (
          navigationObject.prevProgress >= 0.4 &&
          navigationObject.prevProgress < 0.6 &&
          currentProgress >= 0.6 &&
          currentProgress < 0.8
        ) {
          slideTo(navigationObject, 3);
        }
    
        if (
          navigationObject.prevProgress >= 0.6 &&
          navigationObject.prevProgress < 0.8 &&
          currentProgress >= 0.8 &&
          currentProgress <= 1
        ) {
          slideTo(navigationObject, 4);
        }
      } else if (direction === "REVERSE") {
        if (
          currentProgress >= 0 &&
          currentProgress < 0.2 &&
          navigationObject.prevProgress >= 0.2 &&
          navigationObject.prevProgress < 0.4
        ) {
          slideTo(navigationObject, 0);
        }
    
        if (
          currentProgress >= 0.2 &&
          currentProgress < 0.4 &&
          navigationObject.prevProgress >= 0.4 &&
          navigationObject.prevProgress < 0.6
        ) {
          slideTo(navigationObject, 1);
        }
    
        if (
          currentProgress >= 0.4 &&
          currentProgress < 0.6 &&
          navigationObject.prevProgress >= 0.6 &&
          navigationObject.prevProgress < 0.8
        ) {
          slideTo(navigationObject, 2);
        }
    
        if (
          currentProgress >= 0.6 &&
          currentProgress < 0.8 &&
          navigationObject.prevProgress >= 0.8 &&
          navigationObject.prevProgress <= 1
        ) {
          slideTo(navigationObject, 3);
        }
      }
      navigationObject.prevProgress = currentProgress;
    }

  function slideTo(sliderData, page) {
      // Main slide
      sliderData.slider.style = 'transform: translateX(-' + page * (sliderData.measurements.width + sliderData.measurements.margin) + 'px);';
      if (!sliderData.boxes) {
          sliderData.elements.forEach(function(el, i) {
              if (i < page) {
                  el.style = 'opacity: 0; visibility: hidden';
              } else {
                  el.style = 'opacity: 1; visibility: visible';
              }
          });
      } else {
          sliderData.elements.forEach(function(el, i) {
              if (i < page) {
                  el.style = 'width: ' + boxSize + '; opacity: 0; visibility: hidden';
              } else if (i === page) {
                  el.style = 'width: ' + boxSize + ';';
              } else {
                  el.style = 'opacity: 1; visibility: visible';
              }
          });
      }

      // Descriptions
      sliderData.descriptions.forEach(function(el, i) {
          if (i < page) {
              el.style = 'transform: translateY(-' + fadeLength + '); opacity: 0; visibility: hidden;';
          } else if (i === page) {
              el.style = 'transform: translateY(0px); opacity: 1; visibility: visible; transition-delay: .15s;';
          } else {
              el.style = 'transform: translateY(' + fadeLength + '); opacity: 0; visibility: hidden;';
          }
      });
  }

  // UTILS
  function calcProperty(element, property) {
      return parseFloat(window.getComputedStyle(element, null).getPropertyValue(property));
  };

  function getCenterAbsoluteOffset(element) {
    var rect = element.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;
    var center = (bottom - top) / 2;
    return window.pageYOffset + (bottom - center);
  };

  function reveal() {
    // HEADER
    sr.reveal(".herotitle", herotitle);
    sr.reveal(".sectitle", sectitle);
    sr.reveal(".secondtitle", { scale: 1 });

    // STAGGERED IMAGES
    sr.reveal(".staggered-images__image-container--1", staggerMin);
    sr.reveal(".staggered-images__image-container--2", staggerMin2);
    sr.reveal(".staggered-images__image-container--3", staggerLow);
    sr.reveal(".staggered-images__image-container--4", staggerMed);
    sr.reveal(".staggered-images__image-container--5", staggerMax);

    // MANIFESTO
    sr.reveal(".manifesto__heading", { scale: 1 });
    sr.reveal(".manifesto__item", { scale: 1, viewFactor: 1 });

    // SLIDERS
    // sr.reveal(".values__images", sliderAnimation);
    // sr.reveal(".values__description-container", { scale: 1 });
    sr.reveal(".ourway__images", sliderAnimation);
    sr.reveal(".ourway__description-container", { scale: 1 });

    //AWARDS
    sr.reveal(".awards tr", { scale: 1, viewFactor: 1 });

    // OUR OFFICE
    sr.reveal(".office__heading", { scale: 1 });
    sr.reveal(".office__white-overlay--top", slideToTop);
    sr.reveal(".office__white-overlay--bottom", slideToBottom);
    sr.reveal(".office__white-overlay--right", slideToLeft);

    // VISION
    sr.reveal(".vision__bg", slideFromRight);
    sr.reveal(".vision__animated-1", { delay: 400, duration: 500, distance: '50px', scale: 1 });
    sr.reveal(".vision__animated-2", { delay: 1000, duration: 500, distance: '50px', scale: 1 });
    sr.reveal(".vision__animated-3", { delay: 1100, duration: 500, distance: '50px', scale: 1 });
    sr.reveal(".vision__animated-4", { delay: 1200, duration: 500, distance: '50px', scale: 1 });
    sr.reveal(".vision__animated-5", { delay: 1300, duration: 500, distance: '50px', scale: 1 });
    sr.reveal(".vision__animated-6", { delay: 1400, duration: 500, distance: '50px', scale: 1 });

    // FOOTER
    sr.reveal(".contact", contact);
    sr.reveal(".footer", footer, 120);
  }
}