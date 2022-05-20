function getCombination(str) {
    let len = str.length;
    //number of possible combinations
    let comb = 2 ** (len - 1);
    console.log("total combination: " + comb);
    // resulting array
    let combinations = [];
    //intermediate array
    let nstr = [];
    //bit representation of number
    let bitValue = null;
    for (let i = 0; i < comb; i++) {
      nstr = [];
      //calculation of a bit value with zeros added in front
      bitValue = i.toString(2).padStart(len - 1, 0);
      // console.log(i, bitValue);
      for (let j = 0; j <= len - 1; j++) {
        //if bit == 1 - paste dot
        bitValue[j] == 1 ? nstr.push(str[j] + ".") : nstr.push(str[j]);
      }
      combinations.push(nstr.join(""));
    }
    return combinations.join(", ");
  }
  
  console.log(getCombination("abcdef"));
  