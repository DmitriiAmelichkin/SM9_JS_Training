//Advent of Code 2022
//Day 3

const fs = require('fs');

let inputfilename = "/uploads/rucksacks.txt";


let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r');
//console.log(groups);



const groups_of_rucksacks=[];
groups_of_rucksacks[0]="";

let n = 0;

for (var i=0; i < groups[0].length; i++) {

    if (groups[0].charAt(i) == " " || (groups[0].charAt(i) == "\r" && groups[0].charAt(i+1) == "\n")) {

  
    i++;
    n++;
     (groups[0].charAt(i+2)) ? groups_of_rucksacks[n]= "" : "" ;
    continue;
    } else {
    
   groups_of_rucksacks[n] = groups_of_rucksacks[n] + groups[0].charAt(i);
    }
    
}


function calculPriority(rucksack) {
    
    var sack1 = "";
    var sack2 = "";
    const merge = [];
    var sum=0;
    var length = groups_of_rucksacks[rucksack].length;
    
    if (length % 2 == 0) {
    for (var i=0; i < length; i++) {
        
        if ((i+1) <= length/2) {
            sack1 += groups_of_rucksacks[rucksack].charAt(i);
        } else {
            
            sack2 +=groups_of_rucksacks[rucksack].charAt(i);
            }
    }
    //console.log(sack1 + "---" + sack2);
     var count = 0;
    for (var i = 0; i < length/2; i++) {
           count = 0;
          if (!merge.includes(sack1.charAt(i))) {
        for (var j = 0; j < length/2; j++) {
            if((sack1.charAt(i) === sack2.charAt(j)) && count == 0 ) {
                merge.push(sack1.charAt(i));
                count++;
            }
        }
          } 
    }
   // console.log(merge);
    
   
    if (merge.length > 0) {
      
       for (var z = 0; z < merge.length; z++) {
       if (merge[z].charCodeAt(0) > 96) {
       
      // console.log(merge[z]+"("+((merge[z].charCodeAt(0))-96)+")");
       
        sum += ((merge[z].charCodeAt(0))-96);
    } else {
        
        
     //  console.log(merge[z]+"("+((merge[z].charCodeAt(0))-64+26)+")");
        
        sum += ((merge[z].charCodeAt(0))-64+26);
    }
    
   }
  }
 } else {
    console.log("Wrong number of input items in rucksack: "+ (rucksack+1));
}
return sum;

} // End of calculPriority

const priority=[];
for (var i = 0; i < groups_of_rucksacks.length; i++) {
priority.push(calculPriority(i));
}
console.log("Sum of the priorities: ");
console.log(priority.reduce(function (x, y) {return x + y},0));


