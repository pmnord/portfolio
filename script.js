const root = document.documentElement;
const darkmodeTrack = document.querySelector('.darkmode__icon');

const darkmodeValues = {
  text: '#ffffffde',
  background: 'hsl(0, 0%, 9%)',
  'card-background': 'hsl(0, 0%, 12%)',
  'card-shadow': 'hsla(0, 0%, 80%, 0.3)',
  'tag-background': 'hsl(0, 0%, 9%)',
};
const lightmodeValues = {
  text: '#000000de',
  background: '#fafbff',
  'card-background': 'hsl(0, 0%, 99%)',
  'card-shadow': 'hsla(0, 0%, 20%, 0.3)',
  'tag-background': 'hsl(222, 100%, 96%)',
};
let darkmode = false;

const toggleDarkmode = () => {
  for (let [key, value] of Object.entries(
    darkmode ? lightmodeValues : darkmodeValues
  )) {
    root.style.setProperty(`--${key}`, value);
  }

  darkmode = !darkmode;
  window.localStorage.setItem('nordman.dev--darkmode', darkmode);
};

darkmodeTrack.addEventListener('click', toggleDarkmode);

const savedDarkmode = window.localStorage.getItem('nordman.dev--darkmode');
if (savedDarkmode === 'true') {
  toggleDarkmode();
}

// console.log(`You wake up in the middle of the woods. Which way do you go?
// north() ?
// south() ?
// east()  ?
// west()  ?
// `);

// const north = () => {
//   console.log('You ran right into a bear and became bear supper. Game Over!');
// };
// const south = () => console.log('You hit the edge of the world');
// const east = () => console.log('You hit the edge of the world');
// const west = () => console.log('You hit the edge of the world');
