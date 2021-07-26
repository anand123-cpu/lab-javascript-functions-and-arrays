// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(num1 , num2)
{
 if(num1 > num2)
   {
     return num1;
   }
  else{
     return num2;
  }  
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  if(words.length ==0){
    return null;
  }

  else if(words.length ==1){
    return words[0];
  }

  else if(words.length ==2)
  {
    if(words[0].length == words[1].length){
      return words[0];
    }
  }

  else if(words.length >2)
{
    for(i=0; i<words.length; i++)
    {
      if(words[0].length < words[i].length )
      {
        words[0] = words[i];
      }
    } 
   return words[0];
}
}

// Progression #3: Net Price
//const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
function netPrice(prices)
{ 
  let sum = 0;
   for (var i=0;i<prices.length;i++)
  {
    if (isNaN(prices[i])) {
      continue;
    }
    sum+=prices[i]
  }
  return sum
} 

// Progression #4: Calculate the average
const number=[2,6,9,10,7,4]
function midPointOfLevels(numbers){
  let sum=0;
  if(number.length==0) 
  return null;
}

// Progression 4.1: Array of numbers
const numberAvg = [2, 6, 9, 10, 7, 4];

function midPointOfLevels(numberAvg) 
{
  if(numberAvg.length==0)
  {
    return null
  }
  else
  {
    var sum = 0
    for (var i = 0; i < numberAvg.length; i++) 
    {
      sum += numberAvg[i]
      var avg=sum/numberAvg.length
    }
  }
  return avg
}


// Progression 4.2: Array of strings
const items = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt'
]; 
 
 function averageWordLength(items)
 {
    if (items.length == 0) {
      return null
    }
    else {
      var sum = 0
      for (var i = 0; i < items.length; i++) {
        sum += items[i].length
        var avg = sum / items.length
      }
    }
    return avg
  } 

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique,words)
{ 
  if(wordsUnique.length==0)
  {
    return null
  }
  else
  {
    return [...new Set(wordsUnique)]
  }

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, words)
{
  if(wordsFind.length==0)
  {
    return null
  }
  else
  {
    for (i=0;i<wordsFind.length;i++)
    {
      if (wordsFind[i] == words )
      {
        return true
      }
    }
  }
}
  
 
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount , words)
{
  var counter = 0
  if (wordsCount.length == 0)
  {
     return 0;
  }
  for (var i=0; i<wordsCount.length;i++)
  {
    if(wordsCount[i]==words)
    {
      counter++
    }
  }
  return counter;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
