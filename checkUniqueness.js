function checkUniqueness(arr) {

var removedDuplicate = arr.filter((value, index) => {
    arr.indexOf(value) === index;
})

if(arr === removedDuplicate){
    return true
} else {
    return false
}
}
const arrOne = [1, 4, 6, 2, 1]
console.log(checkUniqueness(arrOne))