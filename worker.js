const CACHE = 'network-or-cache-v1';
let timeout = 400;




self.addEventListener('install', (event) => {

})

self.addEventListener('activate', async (event) => {
  console.time();
  console.log('Activated');
  const data = await getTranslations('https://translations-system.maximlitvinov.workers.dev/?id=03feca40b2b44f53b0abc71e572bd7e4');
  console.log(data);
  console.timeEnd();
})

self.addEventListener('fetch', (event) => {
  console.log('it works');
  console.log(timeout);
})

async function getTranslations(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.result);
}