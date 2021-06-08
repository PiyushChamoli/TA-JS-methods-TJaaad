Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

    - The join() method joins all elements of an array into a string.
    - no mutation.
    - var elements = ['Fire', 'Air', 'Water'];
    - elements.join('.') // "Fire.Air.Water"

3. `flat`
    - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    - var arr1 = [1, 2, [3, 4]];
    - arr1.flat(); // [1, 2, 3, 4]

4. `push`
    - The push() method adds one or more elements to the end of an array and returns the new length of the array.

5. `indexOf`
    - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

6. `lastIndexOf`
    - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

7. `includes`
    - The includes() method determines whether an array includes a certain element, returning true or false as appropriate..


8. `reverse`
    - The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

9. `every`
    - The every() method tests whether all elements in the array pass the test implemented by the provided function.

10. `shift` 
    - The shift() method removes the first element from an array and returns that element. This method changes the length of the array.


11. `splice`
    - The splice() method changes the content of an array by removing existing elements and/or adding new elements.

12. `find`
    - 
The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

13. `unshift`
    - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

14. `findIndex`
    - The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

15. `filter`
    - The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

16. `flat`
    - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

17. `forEach`
    - The forEach() method executes a provided function once per array element.

18. `map`
    - The map() method creates a new array with the results of calling a provided function on every element in this array.

19. `pop`
    - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

20. `reduce`
    - The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

21. `slice`
    - The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

22. `some`
    - 
The some() method tests whether some element in the array passes the test implemented by the provided function.
