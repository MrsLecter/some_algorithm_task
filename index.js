/**
 * get an array of strings with all possible dot placements between letters
 * @param {Number} dots - maximum number of dots in result string
 * @param {String} str - string, with you want modify
 * @returns {Array}
 */
function getAllDotsCombination(dots, str) {
  let arr = str.split("");
  arr.pop()

  let result_arr = [];
  if (dots == 0) {
    result_arr.push(str);
  } else {
    let copy_arr = [];
    copy_arr = arr;
    //for dots == 0
    result_arr.push(str);
    //for dots == 1
    for (let i = 0; i < copy_arr.length; i++) {
      result_arr.push(addDots(copy_arr[i], str));
    }
    let count = copy_arr.length;

    for (let d = 0; d < dots - 1; d++) {
      let tmp = [];
      for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < copy_arr.length; k++) {
          if (arr[i] != copy_arr[k]) {
            tmp.push(copy_arr[k] + arr[i]);
            count += 1;
          }
        }
      }
      for (let i = 0; i < tmp.length; i++) {
        result_arr.push(addDots(tmp[i], str));
      }
      copy_arr = tmp;
    }
  }
  result_arr = removeDublicates(result_arr);
  console.log(result_arr.length)
  return result_arr;
}

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function removeDublicates(arr) {
  let unique_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique_arr.includes(arr[i]) == false) {
      unique_arr.push(arr[i]);
    }
  }
  return unique_arr;
}

/**
 * add dots in original string to part chunk
 * @param {String} chunk - string part
 * @param {String} original - original string
 * @returns {String}
 */
function addDots(chunk, original) {
  let result_arr = [];
  let chunk_arr = chunk.split("");
  let original_arr = original.split("");
  let unique = original_arr.filter((dots) => !chunk_arr.includes(dots));
  //loocks in every element, if it not unique - add dot ('.')
  for (let i = 0; i < original_arr.length; i++) {
    if (unique.includes(original_arr[i]) == false) {
      result_arr.push(original_arr[i] + ".");
    } else {
      result_arr.push(original_arr[i]);
    }
  }

  return result_arr.join("");
}