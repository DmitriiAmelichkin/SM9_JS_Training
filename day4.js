//Advent of Code 2022
//Day 4

const fs = require('fs');

let inputfilename = "/uploads/sections.txt";

let groups = fs.readFileSync(inputfilename, "utf-8").split('\r\n\r\n' || '\n\r\n\r');

const groups_of_sections=[];
groups_of_sections[0]="";

let n = 0;

for (var i=0; i < groups[0].length; i++) {

    if (groups[0].charAt(i) == " " || (groups[0].charAt(i) == "\r" && groups[0].charAt(i+1) == "\n")) {

  
    i++;
    n++;
     (groups[0].charAt(i+2)) ? groups_of_sections[n]= "" : "" ;
    continue;
    } else {
    
   groups_of_sections[n] = groups_of_sections[n] + groups[0].charAt(i);
    }
    
}

function isSubsection(srt) {
    var myfield =[];
    myfield = srt.split(",");

    myfield = myfield.map((n)=>n.split("-"));

    const zones = [];
     for (var i=0; i < 2; i++) {
      const zone = [];
      for (var j = parseInt(myfield[i][0]); j < parseInt(myfield[i][1]) + 1; j++){
            zone.push(j);
            
      }
      zones.push(zone);
  }
   
  const master = [];
  var sub = [];
   if (zones[0].length >= zones[1].length) {
        master.push(zones[0]);
        sub.push(zones[1]);
   } else {
       master.push(zones[1]);
       sub.push(zones[0]);
   }
 
   return (master.toString().includes(sub.toString()));
}

let sum = 0;

for (var i = 0; i < groups_of_sections.length; i++) {
    
    if (isSubsection(groups_of_sections[i])) {
        sum ++;
    }
}

console.log(sum);

