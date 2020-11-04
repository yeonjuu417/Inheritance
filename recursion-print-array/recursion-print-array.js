/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(arr) {
    for(let el of arr){
        if(!(Array.isArray(el)) && typeof el === 'number'){
            console.log(el)
        }else if(Array.isArray(el)){
           printArray(el);
        }
    }
};

module.exports = printArray;