//####################################################
// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//     // split string into separate words in an array separated by a space
//     let arr = str.split(' ');
//     console.log(arr);
//     // create new empty array to push new finished array later
//     const newArr = [];
//     // use a for of loop to iterate over the split array
//     for (const word of arr) {
//         // target the first element of the split string array using .substring starting at index zero and stopping before index 1
//         let firstLetter = word.substring(0, 1);
//         // turn to upper case
//         firstLetter = firstLetter.toUpperCase();
//         // target rest of the elements of the split string array by starting at index 1 using the rest of the its length
//         let restLetters = word.substring(1, word.length);
//         // turn rest of the elements into lower case
//         restLetters = restLetters.toLowerCase();
//         // push both arrays together into new empty array
//         newArr.push(firstLetter + restLetters);
//     }
//     // joined both arrays back into a string separated by a space
//     return newArr.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));

//########################################################

// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     let result = [];
//     result.push(...arr2.slice(0, n));
//     result.push(...arr1);
//     result.push(...arr2.slice(n, arr2.length));
//     return result;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function frankenSplice(arr1, arr2, n) {
//     let arr2Copy = arr2.slice();
//     for (let i = 0; i < arr1.length; i++) {
//         arr2Copy.splice(n, 0, arr1[i]);
//         n++;
//     }
//     return arr2Copy;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function frankenSplice(arr1, arr2, n) {
//     return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//#####################################################

// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//     let truthies = [];
//     for (let elem of arr) {
//         if (elem) truthies.push(elem);
//     }
//     return truthies;
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

// function bouncer(arr) {
//     return arr.filter(function (elem) {
//         return elem;
//     });
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

// function bouncer(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let individualValue = arr[i];
//         if (individualValue) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

//######################################################
// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//     arr.sort(function (a, b) {
//         return a - b;
//     });
//     for (let i = 0; i <= arr.length; i++) {
//         if (num <= arr[i]) {
//             return i;
//         }
//     }
//     return arr.length;
// }

// console.log(getIndexToIns([40, 60], 50));

// function getIndexToIns(arr, num) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < num) count++;
//     }
//     return count;
// }

// console.log(getIndexToIns([40, 60], 50));

// function getIndexToIns(arr, num) {
//     return arr.filter((val) => num > val).length;
// }

// console.log(getIndexToIns([40, 60], 50));

//#######################################################
// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// function mutation(arr) {
//     let firstWord = arr[0].toLowerCase();
//     let secondWord = arr[1].toLowerCase();
//     for (let i = 0; i < secondWord.length; i++) {
//         if (firstWord.indexOf(secondWord[i]) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(mutation(['hello', 'hey']));

//####################################################
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     var groups = [];
//     while (arr.length > 0) {
//         groups.push(arr.slice(0, size));
//         arr = arr.slice(size);
//     }
//     return groups;
// }

// chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

// function chunkArrayInGroups(arr, size) {
//     var groups = [];
//     while (arr.length > 0) {
//         //using splice instead
//         groups.push(arr.splice(0, size));
//     }
//     return groups;
// }

// chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

//######################################################

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

// const squareList = (arr) => {
//     // Only change code below this line

//     let positiveIntegersSquared = arr
//         .filter(function (num) {
//             if (Number.isInteger(num) && num > 0) {
//                 return num;
//             }
//         })
//         .map(function (num) {
//             return num * num;
//         });
//     return positiveIntegersSquared;
//     // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// const squareList = (arr) => {
//     // Only change code below this line
//     return arr.filter(isPositive).filter(isDecimal).map(square);
//     // Only change code above this line
// };

// function square(num) {
//     return num * num;
// }

// function isPositive(num) {
//     return num >= 0;
// }
// function isDecimal(num) {
//     return Math.floor(num) === num;
// }

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

//######################################################

// Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//     // Only change code below this line
//     const newArr = [].concat(arr);

//     return newArr.sort(compareFunction);
//     // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray));

// function compareFunction(a, b) {
//     return a - b;
// }

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//     // Only change code below this line
//     return [...arr].sort(function (a, b) {
//         return a - b;
//     });
//     // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray));

//######################################################

// Apply Functional Programming to Convert Strings to URL Slugs
// The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

// Let's combine what we've learned to solve a practical problem.

// Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

// The input is a string with spaces and title-cased words

// The output is a string with the spaces between words replaced by a hyphen (-)

// The output should be all lower-cased letters

// The output should not have any spaces

// Only change code below this line
// function urlSlug(title) {
//   return title.slice().toLowerCase().split(' ').filter(function(word) {
//     if(word != "") {
//       return word;
//     }
//   }).join('-')
// }

// // Only change code above this line
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

// Only change code below this line
// function urlSlug(title) {
//     return title.toLowerCase().trim().split(/\s+/).join('-');
// }
// // Only change code above this line
// console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone'));

//#########################################################

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// function sumAll(arr) {
//     const sortedArr = arr.sort(compareFunc);

//     let sum = 0;

//     for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function compareFunc(a, b) {
//     return a - b;
// }

// console.log(sumAll([1, 4]));

// function sumAll(arr) {
//     let start = Math.min(arr[0], arr[1]);
//     let end = Math.max(arr[0], arr[1]);
//     let total = 0;

//     for (let i = start; i <= end; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(sumAll([1, 4]));

//#####################################################

// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {
//     const newArr = [];
//     const bothArr = arr1.concat(arr2);
//     for (let member of bothArr) {
//         const isInArr1 = arr1.indexOf(member) !== -1;
//         const isInArr2 = arr2.indexOf(member) !== -1;

//         if (!(isInArr1 && isInArr2)) {
//             newArr.push(member);
//         }
//     }
//     return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// function diffArray(arr1, arr2) {
//     const filteredArr1 = arr1.filter((elem) => !arr2.includes(elem));
//     const filteredArr2 = arr2.filter((elem) => !arr1.includes(elem));
//     return filteredArr1.concat(filteredArr2);
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//########################################################

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// function destroyer(arr) {
//     const [values, ...targets] = Object.values(arguments);
//     return values.filter((member) => {
//         return targets.indexOf(member) === -1;
//     });
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function destroyer(arr, ...rest) {
//     return arr.filter((item) => rest.indexOf(item) === -1);
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//#####################################################

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Only change code below this line
//     collection.forEach((item) => {
//         for (let key in source) {
//             if (item[key] && item[key] === source[key]) {
//                 arr.push(item);
//             }
//         }
//     });

//     // Only change code above this line
//     return arr;
// }

// console.log(
//     whatIsInAName(
//         [
//             { first: 'Romeo', last: 'Montague' },
//             { first: 'Mercutio', last: null },
//             { first: 'Tybalt', last: 'Capulet' },
//         ],
//         { last: 'Capulet' }
//     )
// );

//######################################################

// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (vowels.indexOf(letter) != -1 && i === 0) {
//             return str + 'way';
//         }
//         if (vowels.indexOf(letter) != -1) {
//             return str.slice(i) + str.slice(0, i) + 'ay';
//         }
//     }
//     return str + 'ay';
// }

// translatePigLatin('consonant');

// function translatePigLatin(str) {
//     const regex = /^([^aeiou]+)(.*)/;
//     if (regex.test(str)) {
//         str = str.replace(/^([^aeiou]+)(.*)/, '$2$1ay');
//     } else {
//         str += 'way';
//     }
//     return str;
// }

// console.log(translatePigLatin('consonant'));

//########################################################

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// function myReplace(str, before, after) {
//     if (before[0] === before[0].toUpperCase()) {
//         after = after[0].toUpperCase() + after.slice(1);
//     } else {
//         after = after[0].toLowerCase() + after.slice(1);
//     }
//     return str.replace(before, after);
// }

// console.log(
//     myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// );

//#######################################################

// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// function pairElement(str) {
//     const pairs = {
//         A: 'T',
//         T: 'A',
//         C: 'G',
//         G: 'C',
//     };
//     return str.split('').map((elem) => [elem, pairs[elem]]);
// }

// console.log(pairElement('GCG'));

//#####################################################

// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// function fearNotLetter(str) {
//     const arr = str.split('').map((letter) => letter.charCodeAt(0));

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return String.fromCharCode(arr[i] + 1);
//         }
//     }
//     return undefined;
// }

// console.log(fearNotLetter('abce'));

//####################################################

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// function uniteUnique(...arr) {
//     let newArr = [];
//     for (let arrays of arr) {
//         for (let element of arrays) {
//             if (!newArr.includes(element)) {
//                 newArr.push(element);
//             }
//         }
//     }
//     return newArr;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//#######################################################

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//     return str
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&apos;');
// }

// convertHTML('Dolce & Gabbana');

//#######################################################
