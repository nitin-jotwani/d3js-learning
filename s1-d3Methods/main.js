var arrayOfObj = [
  {key: 'ABC', value: 44},
  {key: 'PQR', value: 56},
  {key: 'XYZ', value: 89},
  {key: 'RST', value: 12}
]

arrayOfObj.forEach(function (entry) {
  console.log('arrayOfObj', entry)
})

var valueGreaterThan30 = arrayOfObj.filter(function (entry) {
  return entry.value > 30
})

console.log('valueGreaterThan30: ', valueGreaterThan30)

var reformattedArrayOfObj = arrayOfObj.map(function (entry) {
  return {
    myKey: entry.key,
    myValue: entry.value
  }
})

console.log('reformattedArrayOfObj: ', reformattedArrayOfObj)

// USING D3 METHODS
console.log('USING D3 METHODS')
var array = [44, 56, 12, 89, 53, 14]
console.log('Array: ', array)
var dataMin = d3.min(array)
console.log('D3 Min Value: ' + dataMin)
var dataMax = d3.max(array)
console.log('D3 Max Value: ' + dataMax)
var dataMinMax = d3.extent(array)
console.log('Data MinMax Value', dataMinMax)

var arrayOfObjMinValue = d3.min(arrayOfObj, function (d) {
  return d.value
})
console.log('arrayOfObjMinValue: ', arrayOfObjMinValue)
var arrayOfObjMaxValue = d3.max(arrayOfObj, function (d) {
  return d.value
})
console.log('arrayOfObjMaxValue: ', arrayOfObjMaxValue)
var arrayOfObjMinMaxValue = d3.extent(arrayOfObj, function (d) {
  return d.value
})
console.log('arrayOfObjMinMaxValue: ', arrayOfObjMinMaxValue)
