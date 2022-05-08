// const urlRegexp = /url-/;
// const textRegexp = /text-/;
// const ctaRegexp = /cta-/;

// const lang = (window.navigator
//   ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage)
//   : 'en_us').replace('-', '_').toLowerCase();

// document.addEventListener('DOMContentLoaded', async function (event) {
//   console.time();
//   body.style.opacity = 0;

//   const data = await getTranslations('URL');
    
//   const changeData = (str, element, inputData) => {
//     if (str.match(urlRegexp)) {
//       element.href = inputData;
//     }

//     if (str.match(textRegexp) || str.match(ctaRegexp)) {
//       element.innerHTML = inputData;
//     }
//   }
  
//   for (const key in data) {
//     if (Object.hasOwnProperty.call(data, key)) {
//       const domElement = document.querySelectorAll(`.${key}`);

//       if (domElement.length) {
        
//         if (domElement.length > 1) {
//           domElement.forEach(el => {
//             changeData(key, el, data[`${key}`][`${lang}`]);
//           })
//         } else {
//           changeData(key, domElement[0], data[`${key}`][`${lang}`])
//         }
//       }
//     }
//   }

//   body.style.opacity = 1;

//   console.timeEnd();
//   /* parser of page */

//   // function hasChild(el) {
//   //   const arr = el.childNodes;
//   //   if (el.hasChildNodes() && el.tagName !== 'SCRIPT') {
//   //     if (arr.length && arr.length === 1) {
//   //       // console.log(el.childNodes[0].parentElement?.className);

//   //     } else {
//   //       arr.forEach((el) => {
//   //         hasChild(el);
//   //       })
//   //     }
//   //   }
//   // }
// })



// async function getTranslations(url) {
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data.result);
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('worker.js')
    .then(() => navigator.serviceWorker.ready.then((worker) => {
      worker.sync.register('syncdata');
    }))
  .catch(err => console.log('We got an error ', err))
}

