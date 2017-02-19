// function RecursiveAnagrams(input,remaining,answers){
//   if (!answers){answers=[]}
//   if (!remaining){remaining=""}
//   if(input.length===0){
//     answers.push(remaining);
//     return answers
//   }
//   for(var i=0;i<input.length;i++){
//     var thing = input.slice(0,i)+input.slice(i+1)
//     RecursiveAnagrams(thing,remaining+input[i],answers)
//   }
//   return answers
// }
// console.log(RecursiveAnagrams('abcd'))



//*This helper function assembles a sorted list of x random integers in exclusive range (0,1000)
function assemble_rands(x){
  rands=[]
  for (var j=1;j<=x;j++){rands.push(Math.floor(Math.random()*1000))}
  rands.sort(function(a, b){return a-b})   /*uses a callback to sort in ascending order*/
  return rands
}

//This recursive function uses recrusion and binary searching to determine whether target is present in a list
function RecursiveBisection(list,target,count){
  if(!count){count=0}
  // console.log("list now has length",list.length,"and is the list",list)
  if (list.length===1 && list[0]!=target){
    console.log("the target,",target,", is not in list; this took",count,"iterations")
    console.log("")
    return false
  }
  var mid = Math.floor(list.length/2)
  count++
  //console.log("mid is now the integer",mid,"which is the value",list[mid])
  if (list[mid]>target){
    RecursiveBisection(list.slice(0,mid),target,count)
  }
  else if (list[mid]<target){
    RecursiveBisection(list.slice(mid+1),target,count)
  }
  else if (list[mid]===target){
    console.log("found the target,",target,", after",count,"iterations")
    return true
  }
}

//RecursiveBisection(assemble_rands(10),444) -->//the target, 444 , is not in list; this took 3 iterations
//RecursiveBisection(assemble_rands(100),444) --> //the target, 444 , is not in list; this took 6 iterations
//RecursiveBisection(assemble_rands(1000),444) --> //found the target, 444 , after 5 iterations
//RecursiveBisection(assemble_rands(10000),444) --> //found the target, 444 , after 4 iterations
