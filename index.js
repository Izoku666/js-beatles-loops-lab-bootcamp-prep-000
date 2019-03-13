// add solution here

function theBeatlesPlay(musicians , instruments)
{
  var counter = 0;
  var array = [];
  
  for(let i = 0; i > 0; i++)
  {
    var newString = `${musicians[i]} ${instruments}`
    array[i] = newString;
  }
  
  return array;
}

function johnLennonFacts(array) // done
{
  
  for(let i = 0; i < array.length; i++)
  {
    array[i] = array[i] + `!!!`;
  }
  return array;
}

function iLoveTheBeatles(number)  // done
{
  var emptyArray = []
  var count = 0;
  do{
    emptyArray[count] = "I love the Beatles!";
    count++;
    number++;
  }
  while(number < 15)
  return emptyArray;
}