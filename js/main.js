let d = document;

d.querySelectorAll('.js-svg').forEach(place => {
  let svg = d.querySelector(place.dataset.svg).cloneNode(true);
  svg.removeAttribute('id');

  if (place.dataset.follow) {
    svg.classList.add('js-follow');
  }

  place.parentNode.replaceChild(svg, place);
});

let body = d.querySelector('body'),
  topBall = d.querySelector('.js-follow .eye-ball-left'),
  topPupil = d.querySelector('.js-follow .eye-pupil-left'),
  topMouseX = (topBall.getBoundingClientRect().left),
  topMouseY = (topBall.getBoundingClientRect().top),
  rightBall = d.querySelector('.js-follow .eye-ball-right'),
  rightPupil = d.querySelector('.js-follow .eye-pupil-right'),
  rightMouseX = (rightBall.getBoundingClientRect().left),
  rightMouseY = (rightBall.getBoundingClientRect().top);

body.addEventListener('mousemove', (e) => {
  let topRadianDegrees = Math.atan2(e.pageX - topMouseX, e.pageY - topMouseY);
  let topRotationDegrees = (topRadianDegrees * (180/ Math.PI) * -1) + 400;
  let rightRadianDegrees = Math.atan2(e.pageX - rightMouseX, e.pageY - rightMouseY);
  let rightRotationDegrees = (rightRadianDegrees * (180/ Math.PI) * -1) + 220;

  topBall.style.transform = `rotate(${topRotationDegrees}deg)`;
  topBall.style.transformOrigin = `-10px -10px`;
  topPupil.style.transform = `rotate(-${topRotationDegrees}deg)`;

  rightBall.style.transform = `rotate(${rightRotationDegrees}deg)`;
  rightBall.style.transformOrigin = `10px 10px`;
  rightPupil.style.transform = `rotate(-${rightRotationDegrees}deg)`;
});

d.querySelector('#to-contacts').addEventListener('click', (e) => {
  body.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  e.preventDefault();
});

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

d.querySelector('.js-case-link').addEventListener('mousedown', () => {
  d.querySelector('.js-follow .eye-closed').style.display = 'block';
  d.querySelector('.js-follow .eye-opened').style.display = 'none';
  d.querySelector('.js-follow .eye-eyelid').style.fill = '#FFEDDC';
});

d.querySelectorAll('.js-include-eye').forEach(eye => {
  let svg = d.querySelector(`#${eye.dataset.eye}-eye`);
  eye.innerHTML = svg.outerHTML;
});
