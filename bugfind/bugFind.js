let tester = [
    {
        q: "Fix the code to pass this challenge. Look at the examples below to get an idea of what the function should do. </br></br>cubed(3) ➞ 27 </br>cubed(5) ➞ 125 </br> cubed(10) ➞ 1000",
        t: [2, 3, 4, 5, 10],
        a: [8, 27, 64, 125, 1000],
        c: "return a * 3",
        parameter: "a"
    }, {
        q: "Fix the code to pass this challenge. Look at the examples below to get an idea of what the function should do.</br></br>squared(5) ➞ 25 </br>squared(9) ➞ 81 </br> squared(100) ➞ 10000",
        t: [10, 69, 666, -21, 21],
        a: [100, 4761, 443556, 441, 441],
        c: "return b **b",
        parameter: "b"
    }, {
        q: "Fix the code to pass this challenge. Look at the examples below to get an idea of what the function should do.</br></br>sumArray([1, 2, 3, 4, 5]) ➞ 15</br>sumArray([1, 2, 3, 4, 5]) ➞ 15 </br> sumArray([0, 4, 8, 12]) ➞ 24",
        t: [[1, 2, 3, 4, 5], [-1, 0, 1], [0, 4, 8, 12]],
        a: [15, 0, 24],
        c: "let sum;\nfor (i = 0; i < arr; i++) {\n\tsum = 0;\n\tsum + arr[i];\n}\nreturn sum;",
        parameter: "arr"
    }, {
        q: "Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake. Can you help her?</br></br>greeting('Matt') ➞ 'Hello, Matt!'</br>greeting('Helen') ➞ 'Hello, Helen!'</br> greeting('Mubashir') ➞ 'Hello, my Love!'",
        t: ["Matt", "Helen", "Mubashir"],
        a: ["Hello, Matt!", "Hello, Helen!", "Hello, my Love!"],
        c: "return 'Hello, ' + name + '!';\nif(name == 'Mubashir') {\nreturn 'Hello, my Love!;\n}",
        parameter: "name"
    }, {
        q: "Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.</br>**Jeg har kommentert ut koden slik at den evige loopen ikke kjører**</br></br>printArray(1) ➞ [1]</br>printArray(3) ➞ [1, 2, 3] </br> printArray(6) ➞ [1, 2, 3, 4, 5, 6]",
        t: [1, 3, 5, 7, 10],
        a: [[1], [1, 2, 3], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        c: "var newArray = [];\nfor(var i = 1; i <= number;+) {\n\tnewArray.push(i);\n}\nreturn newArray;",
        parameter: "number"
    }, {
        q: "Mubashir wants to swap two given numbers! It is not returning the right values. Can you help him fix it?</br></br>swap(100, 200) ➞ [200, 100]</br>swap(44, 33) ➞ [33, 44]</br>swap(21, 12) ➞ [12, 21]",
        t: [[100, 200], [44, 33], [21, 12], [10, 20]],
        a: [[200, 100], [33, 44], [12, 21], [20, 10]],
        c: "b = a;\na = b;\nreturn [a, b];",
        parameter: "[a,b]"
    }, {
        q: "Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.'Easy one!' he thinks, but soon he discovers that his function fails over the fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?Can you help Captain Obvious to debug his function and solve the exercise?</br></br>floatSum(0.3, 0.7) ➞ 1</br>floatSum(0.35, 0.75) ➞ 1.1</br>floatSum(1.234, 5.6789) ➞ 6.9129",
        t: [[0.1, 0.2], [8.4, 8.8], [5.7, 4.3], [3.4444, 3.5555]],
        a: [0.3, 17.2, 10, 6.9999],
        c: " return a + b;",
        parameter: "[a,b]"
    }, {
        q: "Your friend is trying to write a function that removes all vowels from a string.However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.</br></br>removeVowels('candy') ➞ 'cndy'</br>removeVowels('hello') ➞ 'hll'</br>removeVowels('apple') ➞ 'ppl'",
        t: ["ben", "candy", "hello", "fever", "money"],
        a: ["bn", "cndy", "hll", "fvr", "mny"],
        c: "return str.replace(/[aeiou]/, '')",
        parameter: "str"
    }, {
        q: "Here is a trainwreck of a photo:<img src='bugfind/FAILEDPASSED.png'></br>The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above. First parameter is the user's score. Second parameter is the required score.</br></br>gradePercentage('85%', '85%') ➞ 'You PASSED the Exam'</br>gradePercentage('99%', '85%') ➞ 'You PASSED the Exam'</br>gradePercentage('66%', '90%') ➞ 'You FAILED the Exam'",
        t: [["85%", "85%"], ["65%", "66%"], ["5%", "8%"], ["99%", "85%"], ["65%", "90%"]],
        a: ["You PASSED the Exam", "You FAILED the Exam", "You FAILED the Exam", "You PASSED the Exam", "You FAILED the Exam"],
        c: "let s = 'You ';\nuserScore = parseInt(userScore.substring(0, userScore.length - 1));\npassScore = parseInt(passScore.substring(0, passScore.length - 1));\nif (userScore <= passScore){\n\ts = s + 'FAILED';\n}\nif (userScore >= passScore){\n\ts = s + 'PASSED';\n}\nreturn 'You' + ' ' + s + ' ' + 'the Exam';",
        parameter: "[userScore,passScore]"
    }, {
        q: "Create a function that returns true if two arrays contain identical values, and false otherwise.To solve this question, your friend writes a code.But testing the code, you see that something is not quite right. Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order.</br></br>checkEquals([1, 2], [1, 3]) ➞ false</br>checkEquals([1, 2], [1, 2]) ➞ true</br>checkEquals([4, 7, 6], [4, 6, 7]) ➞ false",
        t: [[[1, 2], [1, 3]], [[1, 2], [1, 2]], [[4, 5, 6], [4, 5, 6]], [[4, 7, 6], [4, 5, 6]]],
        a: [false, true, true, false],
        c: "if (arr1 === arr2) {\n\treturn true;\n}\n else {\n\treturn false;\n}",
        parameter: "[arr1,arr2]"
    }, {
        q: "I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4]. But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.</br></br>flatten([[1, 2], [3, 4]]) ➞ [1, 2, 3, 4]</br>latten([['a', 'b'], ['c', 'd']]) ➞ ['a', 'b', 'c', 'd']</br>flatten([[true, false], [false, false]]) ➞ [true, false, false, false]",
        t: [[[1, 2], [3, 4]],[['a', 'b'], ['c', 'd']],[[true, false], [false, false]]],
        a: [[1, 2, 3, 4], ['a', 'b', 'c', 'd'], [true, false, false, false]],
        c: "arr2 = [];\nfor (let i = 0; i < arr.length; i++) {\narr2.push(arr[i]);\n}\nreturn arr2;",
        parameter: "arr"
    }, {
        q: "A function that accepts an array of strings. Return the longest string. If the array is empty it should return false. If The Strings are of the same length, return the first word </br></br>longestString(['test','teste','testet']) ➞ 'testet'</br> longestString([]) ➞ false</br>",
        t: [["test", "teste", "testet"], ["stig", "stein", "svein"], ["woop", "Expeliarmus", "Supercali"], []],
        a: ["testet", "stein", "Expeliarmus", false],
        c: "var longest;\nfor (var i = 0; i < arr.length; i++) {\n\tif (arr[i].length > longest) {\n\tlongest += arr[i];\n}\n}\nreturn longest;",
        parameter: "arr"
    }, {
        q: "Your friend is trying to write a function to accomplish the following transformations:</br><img src='bugfind/pic.png' height=300px width=800px></br></br>change(x,1) ➞ [3, 2, 2, 2, 2, 2, 3]</br> change(x,2) ➞ [3, 2, 1, 1, 1, 2, 3]</br>",
        t: [1, 2, 3],
        a: [[3, 2, 2, 2, 2, 2, 3], [3, 2, 1, 1, 1, 2, 3], [3, 2, 1, 0, 1, 2, 3]],
        c: "let x = [3, 3, 3, 3, 3, 3, 3]\nfor (let i = 0; i < x.length; i++) {\nlet j = 1; \n\nwhile (j <= times) {\nif (i >= j && i < x.length - j) {\n\tx[i]--;\n}\n\tj++;\n\t}\n}\n\nconsole.log(x)\nreturn x;",
        parameter: "times"
    }, {
        q: "A function that takes a string, and returns the character that is most commonly used in the string.Do we need to consider times when more than one character shows up the same number of times? No. Return the last one.</br></br>countingChars('test') ➞ 't'</br> countingChars('løk') ➞ 'k'</br>",
        t: ["test", "cascada", "expeliarmus", "løk"],
        a: ["t", "a", "e", "k"],
        c: "const charCount = {};\nlet maxCharCount = 0;\nlet maxChar = '';\n\nfor(let i = 0; i < str.length; i++) {\ncharCount[str[i]] = ++charCount[str[i]] || 1;\n}\nfor(let key in charCount) {\nif(charCount[key] <= maxCharCount) {\nmaxCharCount = charCount[key];\nmaxChar = key;\n\n}\n}\nreturn maxChar;",
        parameter: "str"
    }, {
        q: "a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string. Do we need to consider whitespace? Trim whitespace prior to comparison.</br> If an anagram is just a bunch of letters jumbled around, we can see if the strings are anagrams of each other by:</br>1. Comparing the length: if they are not same length, they are not an anagram of the other </br>2. Sorting the string and using an equality operator to see if it’s equal.</br></br>anagrams('cat','buddha')➞ false</br> anagrams('dog','god') ➞ true</br>",
        t: [["thug", "hug"], ["dog", "god"], ["life", "file"]],
        a: [false, true, true],
        c: "if(str1.length == str2.length) {\n //step 1\nreturn false;\n}\nlet sort1 = str1.split(' ').sort(); // step 2\nlet sort2 = str2.split(' ').sort();\nreturn sort1.join('') !== sort2;",
        parameter: "[str1,str2]"
    }, {
        q: "An Armstrong number is an n-digit number that is equal to the sum of the nthnth powers of its digits. Determine if the input number is an Armstrong number. Return either true or false. an example:</br> <img src='bugfind/ex.png'> </br></br>isArmstrongNumber(153) ➞ true</br> isArmstrongNumber(27) ➞ false</br>",
        t: [153, 27, 370, 407, 1000],
        a: [true, false, true, true, false],
        c: "let strN = n + '';\nlet power = strN.length;\n\nlet sum = 0;\nfor(let i = 0; i < strN.length; i++) {\nsum += Math.pow(Number(strN[i]));\n}\nreturn sum;",
        parameter: "n"
    }, {
        q: "Find the factorial.Factorials (!) are products of every whole number from 1 to n. In other words, take the number and multiply through to 1. For example: If n is 5, then 5! is 5 x 4 x 3 x 2 x 1 = 120 </br></br>factorial(5) ➞ 120</br> factorial(3) ➞ 6</br>",
        t: [2,3,4,5,6],
        a: [2, 6, 24, 120, 720],
        c: " if (x === 0) {\nreturn false;\n}\nelse {\nx -= 1;\nfor (let i = 0; i < x; i++) {\nfactorial(x);\n}\nreturn x;\n} ",
        parameter: "x"
    }, {
        q: "an Insertion sort, you compare the  key  element with the previous elements. If the previous elements are greater than the  key  element, then you move the previous element to the next position. Start from index 1 to size of the input array.</br></br>insertion_sort([8,3,5,1,4,2] ➞ [1,2,3,4,5,8]</br> insertion_sort([54,2,45,99,10,4]) ➞ [2,4,10,45,54,99]</br>",
        t: [[8, 3, 5, 1, 4, 2],[54, 2, 45, 99, 10, 4]],
        a: [[1, 2, 3, 4, 5, 8], [2, 4, 10, 45, 54, 99]],
        c: " var len = A.length;\nvar i = 1;\nwhile (i < len) {\nvar x = A[i];\nvar j = 5;\nwhile (j >= 0 && A[j] < x) {\nA[j + 1] = A[j];\nj = j - 1;\n}\nA[i+1] = x;\ni = i + 1;\n}\nreturn x;",
        parameter: "A"
    }
];
var current = 0;
function begynn() {
    document.getElementById("sp").innerHTML = "Bug " + (current + 1);
    document.getElementById("quest").innerHTML = tester[current].q;
    document.querySelector("textarea").innerHTML = tester[current].c;
}


function ny() {
    current++;
    document.getElementById("sp").innerHTML = "Bug " + (current + 1);
    document.getElementById("knapp1").style.visibility = "hidden";
    document.querySelector("ul").innerHTML = "";
    document.getElementById("quest").innerHTML = tester[current].q;
    document.querySelector("textarea").value = tester[current].c;
}

begynn();
function runModifiedFunction() {
    // Get the content of the text area
    var functionContent = document.querySelector("textArea").value;
    let korrekt = true;
    try {
        // Create a new function from the content of the text area
        var modifiedFunction = new Function(tester[current].parameter, functionContent);
        console.log(modifiedFunction);
        document.querySelector("ul").innerHTML = "";
        
        // Run the modified function with specified arguments
        for (let i = 0; i < tester[current].a.length; i++) {
            if (tester[current].a[i] === modifiedFunction(tester[current].t[i]) || arraysAreEqual(tester[current].a[i], modifiedFunction(tester[current].t[i]))) {
                let para = document.createElement("li");
                para.innerHTML = `Test ${(i + 1)} Passed: Value == ${tester[current].a[i]}`;
                para.style.color = "GREEN";
                document.querySelector("ul").appendChild(para);
            }
            else {
                let para = document.createElement("li");
                para.innerHTML = `FAILED:Test ${(i + 1)}:Expected: ${tester[current].a[i]}`;
                para.style.color = "RED";
                document.querySelector("ul").appendChild(para);
                korrekt = false;
            }

        }
    } catch (error) {
        korrekt = false;
        console.error("Error while running the modified function:", error);
    }
    if (korrekt) {
        document.getElementById("knapp1").style.visibility = "visible";
    }
}
function arraysAreEqual(arr1, arr2) {
    // If the arrays have different lengths, they are not equal
    if (arr1.length !== arr2.length || !Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    // Check each element in the arrays for equality
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are equal, the arrays are equal
    return true;
}
