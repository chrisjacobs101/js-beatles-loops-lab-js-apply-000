function theBeatlesPlay (musicians, instruments) {
  
  var beatlesArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
    
  }
  
  return beatlesArray;
}

//"John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);