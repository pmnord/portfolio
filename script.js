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

/*
You can customize the node’s console.log() output in two different ways. One option is, using the native code, which can be a bit less readable; another is simply using an npm package which can reduce your pain a bit.

The native way
console.log("\x1b[33m%s\x1b[0m" ,"I Am Using Yellow");
console.log("\x1b[44m%s\x1b[0m" ,"Background Color Is Blue");
Simple use an escape sequence \x1b followed by a style code [33m and then your string argument.
It is recommended to use \x1b[0m to reset the terminal color else the terminal will take the last given color value. Below are the list of codes you can use to style your node console.

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
*/
