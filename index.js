// add solution here

function theBeatlesPlay(musicians , instruments)
{
  var array = [];
  array.length = musicians.length;
  for(let i = 0; i < musicians.length - 1; i++)
  {
    var newString = `${musicians} plays ${instruments}`
    array[i] = newString;
  }
  return newString;
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