Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

    - def - converts string to uppercase
    - Parameter - no parameter
    - Return - string in uppercase

3. `toLowerCase`

    - def - converts string to lowercase
    - parameter - no parameter
    - return - string in lowercase

4. `trim`

    - def- removes whitespace from both ends of a string
    - parameter - no paraneter
    - return - string w/o white space

5. `trimEnd`

    - def- removes whitespace from right end of a string
    - parameter - no paraneter
    - return - string w/o white space

6. `trimStart`

    - def- removes whitespace from left end of a string
    - parameter - no paraneter
    - return - string w/o white space

7. `concat`

    - def- concatenates two strings
    - parameter - string to add in btw, string to be added with
    - return - concatenated string

8. `endsWith`

    - def- whether a string ends with a specific string or not
    - parameter - character to be searched, length till search(optional)
    - return - true or false

9. `includes`

    - def- case-sensitive search to determine whether one string may be found within another string
    - parameter - string to be searched, search start(otional)
    - return - true or false

10. `indexOf`

    - def- index of given string
    - parameter - string to be searched, search start(otional)
    - return - index of string, -1 if not present 

11. `lastIndexOf`

    - def- index from last of given string
    - parameter - string to be searched, search start from end(otional)
    - return - index of string, -1 if not present 

12. `padEnd`

    - def - pads the current string with a given string 
    - parameter - length of padding, pad string(optional)
    - return - string with right padding

13. `padStart`

    - def - pads the current string with a given string at start 
    - parameter - length of padding, pad string(optional)
    - return - string with right padding

14. `repeat`

    - def - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    - parameter - count 
    - return string with copies

15. `replace`

    - def - returns a new string with some or all matches of a pattern replaced by a replacement.
    - parameter - string to be replaced, new string
    - return - string with replacement

16. `slice`

    - def - method extracts a section of a string and returns it as a new string, without modifying the original string.
    - parameter - start index, end index
    - return - sliced string

17. `split`

    - def - method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
    - paramter - seprator, limit
    - return - an array

18. `substring`

    -def - method returns the part of the string between the start and end indexes, or to the end of the string.
    - paramter - index start, index end
    - return - string
