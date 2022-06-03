const FormatNumber1 = '+X XXX XXX XXXX'
const FormatNumber2 = '+XX XXX XXX XXXX'

export const numberToFormat = (number) => {
  let space = 1
  if (number.length === 12) {
    let arr = FormatNumber2.split('')
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== ' ') {
        arr[i] = number[i - space]
      } else space++
    }
    return arr.join('')
  }
  let arr = FormatNumber1.split('')
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== ' ') {
      arr[i] = number[i - space]
    } else space++
  }
  return arr.join('')
}