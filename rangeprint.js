function rangePrint(start, range, skip=1){
if(range === undefined){
  range = start;
  start = 0;
}
  for(var i = start; i < range; i+=skip){
    console.log(i);
    
  }
}

rangePrint(-5,14,3);