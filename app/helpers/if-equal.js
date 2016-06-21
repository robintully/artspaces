
// export function ifequal(x) {
//   alert(x)
//   alert(typeof(x))
//   alert (x.first)
//  if(x === y) {
//     return true;
//   } else {
//   return false;
//   }
// }

// export default Ember.Helper.helper(ifequal);

import Ember from 'ember';
const eq = (params) => params[0] === params[1];
export default Ember.Helper.helper(eq);