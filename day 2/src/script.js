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
                sum = sum + calc(element.split(/\s+/)[0], element.split(/\s+/)[1]);
                console.log(sum + '  '+  element.split(/\s+/)[0] + ' : '+  element.split(/\s+/)[1] +  '  : ' + i);
                i++;
              });
              console.log(sum);
              }; 
          };
    input.click();
  }
  
  function calc(opStrategy, yourStrategy) {
      let currentIndex; let currentArray;
      switch(opStrategy){
          case 'A': currentArray = [4,8,3]; 
              break; 
          case 'B': currentArray = [1,5,9];
              break; 
          case 'C': currentArray = [7,2,6];
              break;
          default : alert("error"); }
      switch(yourStrategy){
          case 'X': currentIndex = 0; 
              break; 
          case 'Y': currentIndex = 1; 
              break; 
          case 'Z': currentIndex = 2; 
          break;
          default : alert("error"); }
          //console.log(currentArray[currentIndex]);
      return currentArray[currentIndex];
  
  }
  
  
