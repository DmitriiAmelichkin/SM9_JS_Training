function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
              let files =   input.files[0];
              const reader = new FileReader()
              reader.readAsText(files, 'utf-8')
              //let groups = fs.readFileSync(input.files, "utf-8")
              reader.onload = function() {
              let puzzle_input = reader.result.split('\n');
              let sum = 0;
              let i = 0
              puzzle_input.forEach(element => {
                let aCurrentRucksack = [element.substring(0,element.length/2|0),element.substring(element.length/2|0)];
                sum = sum + calcAlfabet(calc(aCurrentRucksack[0],aCurrentRucksack[1]));
                console.log(sum + '  '+  calcAlfabet(calc(aCurrentRucksack[0],aCurrentRucksack[1])) + ' : '+  calc(aCurrentRucksack[0],aCurrentRucksack[1]) +  '  : ' + i);
                i++;
              });
              console.log(sum);
              }; 
          };
    input.click();
  }
  
  function calc(firstCompartments, secondCompartments) {
        for (let i = 0; i<firstCompartments.length; i++){
            if(secondCompartments.indexOf(firstCompartments[i]) != -1) {
                return firstCompartments[i];
            }
        }
  }

  function calcAlfabet(sLetter){
    let sAlfabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return sAlfabet.indexOf(sLetter) + 1;
  }
  
  