function convertToRoman(num) {

    let strInt = num.toString(); // Convert num to String to enable spliting into array
    let numArray = strInt.split("")

    let romanNumArr = [         // Define a object that holds all the Decimal : Roman Numeral key value pairs
        {                       
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",             // First object holds numbers 1-9
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX"
        },
        {
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",             // Second object holds numbers 10-90
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC"
        },
        {   
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",             // Third object holds numbers 100-900
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM"    
        },
        {
            1: "M",
            2: "MM",
            3: "MMM",
            4: "MV\u0305",
            5: "V\u0305",      // Forth object holds numbers 1000-9000     
            6: "V\u0305M",
            7: "V\u0305MM",
            8: "V\u0305MMM",
            9: "MX\u0305"
        },
        {
            1: "X\u0305",
            2: "X\u0305X\u0305",
            3: "X\u0305X\u0305X\u0305",
            4: "L\u0305X\u0305",
            5: "L\u0305",                   // Fith object holds numbers 10,000-90,000
            6: "X\u0305L\u0305",
            7: "X\u0305L\u0305L\u0305",
            8: "X\u0305L\u0305L\u0305L\u0305",
            9: "X\u0305C\u0305"
        },  
        {
            1: "C\u0305",
            2: "C\u0305C\u0305",
            3: "C\u0305C\u0305C\u0305",
            4: "C\u0305D\u0305",
            5: "D\u0305",               // Sixth object holds numbers 100,000-900,000
            6: "C\u0305D\u0305",
            7: "C\u0305D\u0305D\u0305",
            8: "C\u0305D\u0305D\u0305D\u0305",
            9: "C\u0305M\u0305"
        },   
        {
            1: "M\u0305",
            2: "M\u0305M\u0305",        // Seventh object holds numbers 1,000,000-3,000,000 (The roman numeral for 5 Million)
            3: "M\u0305M\u0305M\u0305", // is outside of the scope of this project, plus can't find this value on internet.
        }                               // This symbol will have an obvious effect on 4 Million and why its not included)
    ]

    let reversedArr = numArray.reverse(); // reverse array in place so I can match the "one's value" with that of the Object  
                                          // in the for loop to follow. i.e. i=0   
    let finalRomanNumArr = [];
    for(let i=0; i<reversedArr.length; i++){
        console.log(romanNumArr[i][reversedArr[i]])             // iterate through number array and push roman numerals to
        finalRomanNumArr.push(romanNumArr[i][reversedArr[i]])   //empty array
    }

    let finalNum = finalRomanNumArr.reverse().join("");         // the array is currently in the order 1, 10, 100 ..etc, so
    console.log(finalNum);                                      // reverse in place and join() to form a string 

 return finalNum;
}


convertToRoman(2836);