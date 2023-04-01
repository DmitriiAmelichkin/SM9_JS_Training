function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
              let files =   input.files[0];
              const reader = new FileReader()
              reader.readAsText(files, 'utf-8')
              reader.onload = function() {
              let puzzle_input = reader.result.split('\n');
              let sum = 0;
              let i = 0
              puzzle_input.forEach(element => {

                a = [element.split(',')]; // split into value for 1 elf
                b = [a[0][0].split('-'),a[0][1].split('-')]; // split into value for 1 elf
                
                if(checkContains(b[0][0], b[0][1], b[1][0], b[1][1],)) {
                  i++;
                }
                else if(checkContains(b[1][0], b[1][1], b[0][0], b[0][1])) {
                  i++;
                }
              });
              console.log(i);
              }; 
          };
    input.click();
  }
  

  // check if second array contains inside first array
  function checkContains(minValue1, maxValue1, minValue2, maxValue2) {
    let result = false;
    (Number(maxValue1) >= Number(maxValue2)) ? result = true : result = false;

    if(result){
      (Number(minValue1) <= Number(minValue2)) ? result = true : result = false;
    }

    return result;
  }
  
  