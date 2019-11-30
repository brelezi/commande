
var newMenu={
  mco:'mco',
  mcs:'mco',
  mco:'mco',
  mcm:'mco',
  rm:'0',
}


function delet(obj) {
            for (var prop in obj) {
                if (obj[prop] === '0' || obj[prop] === undefined) {
                    delete obj[prop];
                }
            }
          };

console.log(newMenu);
console.log('done');
delet(newMenu);
console.log(newMenu);
