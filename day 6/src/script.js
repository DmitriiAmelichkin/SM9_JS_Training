function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
            let files =   input.files[0];
            const reader = new FileReader()
            reader.readAsText(files, 'utf-8')
            reader.onload = function() {
              let puzzle_input = reader.result;
              let aBuffArray = [];
              let  = false;
              for(let j = 0; j<puzzle_input.length; j++){
                for(let i=0; i<4; i++){
                  aBuffArray.push(puzzle_input[j+ i]);
                }
                if(!check4letters(aBuffArray) ){
                  console.log(j+4);
                }
                else {
                  aBuffArray.length = 0;
                }
              }
            }; 
        };
  input.click();
}
function check4letters(aArray){
  const findDuplicates = aArray => aArray.filter((item, index) => aArray.indexOf(item) !== index)
  const duplicates = findDuplicates(aArray);
  return (duplicates.length > 0);
}
