const originalArray = [[
    "encouraging",
    0.018569012766541475
],
[
    "determining",
    0.016318223340294022
],
[
    "contributing",
    0.01380772744178725
],
[
    "resulting",
    0.012523287679760528
],
[
    "estimating",
    0.008037333884025414
]];

const numberOfItems = originalArray.length;
const newArray = [];
for(i = 0; i < numberOfItems; i++) {
    newArray.push(originalArray[i][0])
 }         
console.log("Done")
console.log(newArray)