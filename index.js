function theBeatlesPlay (musicians, instruments) {
  
  var beatlesArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
    
  }
  
  return beatlesArray;
}

function johnLennonFacts(facts) {
  
  var factsArray = [];
  var counter = facts.length - 1;
  
  while (counter >= 0) {
    
    factsArray.push(facts[i] + "!!!")
    counter--;
    
  }
  
  return factsArray;
}

//"John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);