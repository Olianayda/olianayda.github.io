const urlRegexp = /url-/;
const textRegexp = /text-/;
const ctaRegexp = /cta-/;

const lang = (window.navigator
  ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage)
  : 'en_us').replace('-', '_').toLowerCase();

document.addEventListener('DOMContentLoaded', async function (event) {
  console.time();
  body.style.opacity = 0;

  const data = await getTranslations('https://translations-system.maximlitvinov.workers.dev/?id=03feca40b2b44f53b0abc71e572bd7e4');
    
  const changeData = (str, element, inputData) => {
    if (str.match(urlRegexp)) {
      element.href = inputData;
    }

    if (str.match(textRegexp) || str.match(ctaRegexp)) {
      element.innerHTML = inputData;
    }
  }
  
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const domElement = document.querySelectorAll(`.${key}`);

      if (domElement.length) {
        
        if (domElement.length > 1) {
          domElement.forEach(el => {
            changeData(key, el, data[`${key}`][`${lang}`]);
          })
        } else {
          changeData(key, domElement[0], data[`${key}`][`${lang}`])
        }
      }
    }
  }

  body.style.opacity = 1;

  console.timeEnd();
  /* parser of page */

  // function hasChild(el) {
  //   const arr = el.childNodes;
  //   if (el.hasChildNodes() && el.tagName !== 'SCRIPT') {
  //     if (arr.length && arr.length === 1) {
  //       // console.log(el.childNodes[0].parentElement?.className);

  //     } else {
  //       arr.forEach((el) => {
  //         hasChild(el);
  //       })
  //     }
  //   }
  // }
})



async function getTranslations(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.result);
  
}

// getTranslations('https://jsonplaceholder.typicode.com/todos');

// url='https://translations-system.maximlitvinov.workers.dev/?id=03feca40b2b44f53b0abc71e572bd7e4'