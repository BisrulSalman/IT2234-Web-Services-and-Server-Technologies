let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let count = {};
let maxFreq = 0;
let mostFreq;

arr.forEach(num => {
    count[num] = (count[num] || 0) + 1; // Count occurrences

    if (count[num] > maxFreq) {
        maxFreq = count[num]; // Update max frequency
        mostFreq = num; // Store most frequent element
    }
});

console.log(arr+"\n")
console.log("Most frequent element:", mostFreq); // Output: 4
