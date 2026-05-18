/*With that in mind, write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the 
strings that are longer than the given number. 
For example, 
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
would return ["hello", "morning"].
*/
const numOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = ['say', 'hello', 'in', 'the', 'morning'];

function getSumOfArray(arr){
    let sum = 0;
    for (const n in arr){
        sum += arr[n];
    }
    return sum;
}

function getAveOfArray(arr){
    let sum = 0;
    let cnt = 0;
    for (const n in arr){
        sum += arr[n];
        cnt = n;
    }
    return sum/++cnt;
}

function getLongestOfString(strArray){
    let longStr = "";
    for (const str of strArray){
        if(longStr.length < str.length){
            longStr = str;
        }
    }
    return longStr;
}

function getStringLongerThan(strArray, num){
    let longerStr = [];
    for (const str of strArray){
        if(parseInt(str.length) > num){ 
            longerStr.push(str);
        }
    }
    return longerStr;
}
console.log("The Sum of array is :",getSumOfArray(numOfArr));
console.log("The Average of array is :",getAveOfArray(numOfArr));
console.log("The longest string in an array is :",getLongestOfString(str));
console.log("The string long at least in number is :",getStringLongerThan(str, 3));

//////////////////////////////////////////////
/*
Part 2: Thinking Methodically
When functions are built into objects, like Arrays, they are referred 
to as “methods” of those objects. Many methods, including Array methods, 
require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/
const jobs=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
 function getDivision(num1, num0){
    
    return num1/num0;
}
const sortingAge = jobs.sort((a,b) => Number(a.age)-(Number(b.age))) ;
const ageUnder51 = jobs.filter((a) => Number(a.age) < 51) ;

const jobAgeAddOne = jobs.map(item => {
    let newJob = [];
    let obj = {...item};
    
    obj['job'] = obj['occupation'];
    delete obj['occupation'];
    obj.age++;
    newJob.push(obj);

    return newJob;
});

const sum = jobs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate average
    const average = sum / jobs.length;

console.log("Age sorted :",sortingAge);
console.log("Age under 51 :",ageUnder51);
console.log("Job and Age add one :",jobAgeAddOne);
// console.log("Sum Age :",sum);
// console.log("Sum Age :",sum);
//console.log("Job array :",jobs);


////////////////////////////////////////////////
/* Part 3: Thinking Critically
It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
*/

function addAge(arr){
    arr.forEach((e) => {
        e.age++;
    });
    return arr;
}
function addAgeNewObj(arr){
    let newObj = [];
    arr.forEach((e) => {
        let obj = {...e};
        obj.age++;
        newObj.push(obj);    
    });
    return newObj;
}
console.log("Object jobs :",jobs);
console.log("Object copy by reference :",addAge(jobs));
console.log("Object copy by value :",addAgeNewObj(jobs));
 
 /////////////////////////////////////////////
 /*
 Part 4: Thinking Practically
Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.
The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.
*/


//////////////////////////////
/*Part 5: Thinking Back
Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
How many of the scripts could be turned into functions?
What would the parameters look like? What kind of returns should they have?
Could you package your code into even smaller blocks, creating helper functions?
What else could be changed to optimize the code, knowing what you now know?
Explore, experiment, and experience the magic of reusable code!
*/