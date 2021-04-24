import initTilt from "./js/tilt";
import initSr from "./js/sr";
// import resume from "./assets/resume.pdf";

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

initSr();
initTilt();

let link = 'https://mail.google.com/mail/?view=cm&fs=1&to=npiyush35@gmail.com&su=SUBJECT&body=BODY'

console.log('Contact Me :' + link);
// uncomment this if you want to attach your resume
// addResume(resume);
