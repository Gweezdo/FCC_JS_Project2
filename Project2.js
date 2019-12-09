function convertToRoman(num) {

    // if(num>1){
    //     let ones = num%10;
    //     num = Math.floor(num/10)
    //     console.log("ones = " + ones);
    //     console.log(num);

    //     if(num > 1){ 
    //         let tens = num%10*10;
    //         num = Math.floor(num/10);
    //         console.log("tens = " + tens);
    //         console.log(num);
    //     }
        
    // }

    

    // if(num > 100){
    //     let hundreds = num%1000 *100;
    //     console.log(hundreds);
    // }

    let strInt = num.toString();
    let numArray = strInt.split("")
    console.log(numArray);

    let romanNumArr = [
        {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
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
            5: "L",
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
            5: "D",
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
            5: "V\u0305",
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
            5: "L\u0305",
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
            5: "D\u0305",
            6: "C\u0305D\u0305",
            7: "C\u0305D\u0305D\u0305",
            8: "C\u0305D\u0305D\u0305D\u0305",
            9: "C\u0305M\u0305"
        },   
        {
            1: "M\u0305",
            2: "M\u0305M\u0305",
            3: "M\u0305M\u0305M\u0305",
        }
    ]

    
    let reversedArr = numArray.reverse();

    let arrLength = reversedArr.length -1;
    console.log("reversedArr = " + reversedArr);
    
    for(var i=0; i=arrLength; i++){
        console.log(romanNumArr[i][numArray[i]])
    }

 return num;
}


convertToRoman(2836);