import c from './c';
console.log(c);
import('./d').then(function (d) {
  console.log(d);
});
var a = 1;
const b = 2;