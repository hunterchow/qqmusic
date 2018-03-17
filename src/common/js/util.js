// export function shuffle(arr1) {
//   let arr = arr1.slice()
//   for(let i = 0;i<arr.length;i++){
//     let index = getRandomIndex(0,i)
//     let temp = arr[i]
//     arr[i] = arr[index]
//     arr[index] = temp
//   }
//   return arr
// }
//
// function getRandomIndex(min,max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
