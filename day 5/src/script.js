function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
            let files =   input.files[0];
            const reader = new FileReader()
            reader.readAsText(files, 'utf-8')
            reader.onload = function() {
              let puzzle_input = reader.result.split('\n');

              //create Array with stacks
              let indexInputData = [1,5,9,13,17,21,25,29,33];
              let aStacks = [];
              let subBuf = [];
              for(let i = 0; i <= 8; i++){
                for(let j = 7; j >= 0; j--) {
                  if(puzzle_input[j][indexInputData[i]] != ' ') {
                    subBuf.push(puzzle_input[j][indexInputData[i]]);
                  }
                }
                 aStacks.push(subBuf.concat());
                 subBuf.length = 0;
              }
              // for(let i = 0; i <= 8; i++){
              //   for(let j = 0; j < 8; j++) {

              //create Array of rules
              let aRules = [];
              let sBufstring;
              for(let i = 10; i < puzzle_input.length; i++){
                sBufstring = puzzle_input[i]
                sBufstring = sBufstring.replace(/[a-z]/gi, '');
                aRules.push(sBufstring);
              }
              
              for(let i = 0; i<aRules.length; i++){
                FollowTheRule(aRules[i], aStacks);
              }

            }; 
        };
  input.click();
}

function FollowTheRule(sRule, aStacks){
  let sAmout = sRule.split(' ')[1];
  let sFromWhichStack = sRule.split(' ')[3];
  let sToWhichStack = sRule.split(' ')[5];

  for(let i = 0; i < sAmout; i++){
    transferoneletter(aStacks[Number(sFromWhichStack) - 1], aStacks[Number(sToWhichStack) - 1])
  }

}

function transferoneletter(aFromWhichStack, aToWhichStack) {

  aToWhichStack.push(aFromWhichStack[aFromWhichStack.length - 1]);
  aFromWhichStack.length = aFromWhichStack.length-1

}

