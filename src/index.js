import initTilt from "./js/tilt";
import initSr from "./js/sr";

import "./style/main.scss";
$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}
function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}
detectMob() == false ?
ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 6,
    yPercent: -50,
    color:'#2e008b',
    background:'white'
  }),
  scrub: true,
  trigger: "#hero",
  start: "top bottom",
  endTrigger: "#hero",
  end: "top center",
})
:
ScrollTrigger.create({
  animation: gsap.from(".logo", {
    y: "50vh",
    scale: 3,
    yPercent: -50,
    color:'#2e008b',
    background:'white'
  }),
  scrub: true,
  trigger: "#hero",
  start: "top bottom",
  endTrigger: "#hero",
  end: "top center",
});

initSr();
initTilt();

let link =
  "https://mail.google.com/mail/?view=cm&fs=1&to=npiyush35@gmail.com&su=SUBJECT&body=BODY";

console.log("Contact Me :" + link);

let year = new Date();
$(".footer__text").html(`Customize by
<a href="https://github.com/npiyush97 " target="_blank" aria-label="Link to github"
  >Piyush Negi
</a>
© ${year.getFullYear()} - Template developed by<br />
<a href="https://github.com/cobidev" target="_blank"
  >Jacobo Martínez</a
>`);
