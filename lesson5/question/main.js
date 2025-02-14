let arr = [11, 33, 44, true, 'some', 'some else', 11, 44]
function iterator (arr, i) {
    console.log(arr[i]) // 11
    i++
    if (i < 0) {
        iterator(arr, i)
    }
}
iterator(arr, 0)


function iterator1 (arr, i) {
    console.log(arr[i]) // 11
    i++
    if (i < 1) {
        iterator1(arr, i)
    }
}
iterator1(arr, 0)


function iterator2 (arr, i) {
    console.log(arr[i]) // 11, 33, 44, true, 'some', 'some else', 11, 44, undefined
    i++
    if (i < 9) {
        iterator2(arr, i)
    }
}
iterator2(arr, 0)