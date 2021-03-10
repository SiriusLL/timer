// var myArgs = process.argv.slice(2);

// for (let i = 0; i < process.argv.length; i++) {
  
//   let timeout = 0;
//   for (const seconds of myArgs) {
    
    
//     setTimeout(() =>{
      
//       process.stdout.write('@'+'\x07');
//       ///console.log(timeout);
      
    
//     }, seconds * 1000);
//   } seconds = 
// }




const userInput = process.argv.slice(2);

for (let element of userInput) {
  
  if (!isNaN(element) && element > 0) {
    setTimeout(() =>{
      
      process.stdout.write('@'+'\x07');
      ///console.log(timeout);
      
    
    }, element * 1000);
  }  
}

