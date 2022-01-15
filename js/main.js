let d = document;

document.addEventListener('DOMContentLoaded', function () {
  const navbar = body.querySelector('.navbar');
  const button = body.querySelector('.burger').addEventListener('click', (event) => {
    // event.stopPropagation();
    console.log(event.type);
    navbar.classList.toggle('active');
  });
});

d.querySelectorAll('.js-svg').forEach(place => {
  let svg = d.querySelector(place.dataset.svg).cloneNode(true);
  svg.removeAttribute('id');
  place.parentNode.replaceChild(svg, place);
});

let body = d.querySelector('body'),
  eyes = d.querySelectorAll('.eye-ball');

body.addEventListener('mousemove', (e) => {
  eyes.forEach(ball => {
    let rect = ball.getBoundingClientRect();

    if (0 == rect.width || 0 == rect.height) {
      return;
    }

    let pupil = ball.querySelector('.eye-pupil'),
        mouseX = rect.left,
        mouseY = rect.top,
        degDiff = ball.dataset.eye == 'left' ? 400 : 220,
        radianDeg = Math.atan2(e.clientX - mouseX, e.clientY - mouseY),
        rotationDeg = (radianDeg * (180/ Math.PI) * -1) + degDiff;

    ball.style.transform = `rotate(${rotationDeg}deg)`;
    ball.style.transformOrigin = ball.dataset.eye == 'left' ? `-10px -10px` : `10px 10px`;
    pupil.style.transform = `rotate(-${rotationDeg}deg)`;
  });
});

// d.querySelector('#to-contacts').addEventListener('click', (e) => {
//   body.scrollIntoView({ block: 'end',  behavior: 'smooth' });
//   e.preventDefault();
// });

d.querySelectorAll('.case-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    let target = this.hash;

    try {
      target = d.querySelector(this.hash);
      target.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } catch (e) {
      return false;
    }

    e.preventDefault();
  });
});

// setTimeout(() => {
//   body.querySelectorAll('.eye').forEach(eye => {
//     eye.querySelector('.eye-closed').style.display = 'none';
//     eye.querySelector('.eye-opened').style.display = 'block';
//     eye.querySelector('.eye-eyelid').style.fill = '#FFFFFF';
//   });
// }, 500);

// d.querySelectorAll('.js-blink').forEach(link => {
//   link.addEventListener('mousedown', () => {
//     d.querySelectorAll('.eye').forEach(eye => {
//       eye.querySelector('.eye-closed').style.display = 'block';
//       eye.querySelector('.eye-opened').style.display = 'none';
//       eye.querySelector('.eye-eyelid').style.fill = '#FFEDDC';
//     });
//   });
// })

d.querySelectorAll('.js-include-eye').forEach(eye => {
  let svg = d.querySelector(`#${eye.dataset.eye}-eye`);
  eye.innerHTML = svg.outerHTML;
});
