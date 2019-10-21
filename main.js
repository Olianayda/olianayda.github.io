let body = document.querySelector('body');
let topEye = document.querySelector('#top-eye');
let topBall = document.querySelector('#top-eye-ball');
let topPupil = document.querySelector('#top-eye-pupil');
let topMouseX = (topBall.getBoundingClientRect().left);
let topMouseY = (topBall.getBoundingClientRect().top);
let rightEye = document.querySelector('#right-eye');
let rightBall = document.querySelector('#right-eye-ball');
let rightPupil = document.querySelector('#right-eye-pupil');
let rightMouseX = (rightBall.getBoundingClientRect().left);
let rightMouseY = (rightBall.getBoundingClientRect().top);

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

document.querySelector('#to-contacts').addEventListener('click', (e) => {
  body.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  e.preventDefault();
});