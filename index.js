function printString(myString) {
    console.log(myString[0])

  if (myString.length > 1){
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(myString){
  if (myString.length > 0){
    return myString.substring(myString.length - 1, myString.length) + reverseString(myString.substring(0, myString.length - 1 ))
  } else {
    return myString
  }
}

function isPalindrome(myString){
  if (myString.length > 1){
    if (myString[0] === myString[myString.length - 1]){
      console.log(myString.substring(1, myString.length - 1))
      isPalindrome(myString.substring(1, myString.length - 1))
    } else {
      return false
    }
  }
  return true
}

function addUpTo(arr, i){
  if (i > 0){
    return arr[i] + addUpTo(arr, i - 1)
  } else {
    return arr[i]
  }
}

function maxOf(arr){
    if (arr.length === 1){
      return arr[0]
    } else {
      if (arr[0] > arr[arr.length - 1]){
        arr.pop()
      return  maxOf(arr)
      } else {
      arr.shift()
    return  maxOf(arr)
    }
  }
}

function includesNumber(arr, num){
  if (arr.length > 0){
    if (arr[0] === num){
      return true
    } else {
      arr.shift()
      return includesNumber(arr, num)
    }
  } else {
    return false
  }
}
