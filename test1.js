const wordsBreak = (inputStr, dictionary)=> {
   const result = [];
   const wordSet = new Set(dictionary);
   console.log(wordSet)
   function backtrack(i, path){
      console.log(i)
      if(i === inputStr.length){
         result.push([...path])
         return
      }
      for(let j = 1; j <= inputStr.length; j++){
         const word = inputStr.slice(i, j);
         console.log(word)
         if(wordSet.has(word)){
            path.push(word);
            console.log(path)
            backtrack(j, path);
            // console.log(path.pop())
         }
      }
   }
   backtrack(0, []);
   return result.length > 0 ? result : ['no way'];
}

const dictionary =  ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
const inputStr = "programmer"

console.log(wordsBreak(inputStr, dictionary))