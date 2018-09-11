/**
 * @param a - an array of integers. Indices of people, whom they love
 * @return - number of love triangles
 */
module.exports = function getLoveTrianglesCount(a = []) {
  let triangles = 0;
  let index = [];
  let buff;
  for(let i = 0; i < a.length; i++){
    index.push(i + 1);
  }
  for(let j = 0; j < a.length; j++){
    if( isValidIndex(index, j + 1) ){
      buff = Copy(index);
      buff.splice(buff.indexOf( j + 1 ), 1);
      if( isValidIndex(buff, a[j]) ){
        buff.splice(buff.indexOf( a[j] ), 1);
        if( isValidIndex(buff, a[a[j] - 1] ) ){     
          buff.splice(buff.indexOf(a[a[j] - 1] ), 1);
          if(a[a[a[a[j] - 1] - 1] - 1] == a[j]){
            triangles++;
            index = buff;
          }
        }
      }
    }
  }
  return triangles;
};

function Copy(src) {
  return Object.assign([], src);
}

function isValidIndex(array, index){
  if( array.indexOf(index) == -1) return false;
  else return true;
}

