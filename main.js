
    var typed = new Typed('#element', {
      strings: ["Frontend Developer","Web Developer","Youtuber",],
      typeSpeed: 100,
       backSpeed: 100,
       backDelay: 1000,
        loop: true
      
    });







    document.addEventListener("DOMContentLoaded", function () {
      const progressBars = document.querySelectorAll(".progress");
      progressBars.forEach((bar) => {
          bar.style.width = bar.style.width;
      });
  
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle) => {
          let percent = circle.getAttribute("data-percent");
          let rotateValue = `rotate(${(percent / 100) * 360}deg)`;
          circle.style.transform = rotateValue;
      });
  });
  
