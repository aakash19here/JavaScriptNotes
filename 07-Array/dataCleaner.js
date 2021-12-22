const arrayOfStrings = [
'Arrays Intro(7:09)',   
'Array Methods(13:47)',  
'Array ForEach(8:39)',   
'Array Map(4:30)',   
'Array Filter(11:14)',   
'Array Find(4:18)', 
'Array Includes(6:26)', 
'Array Sort(5:42)',  
'Array Some and Every(4:20)',    
'Array Reduce(9:27)', 
'Strings Intro(7:45)',
'String Length and Basic Properties(3:55)',
'Change String Case(2:51)',
'Searching for a Substring(9:08)',
'Getting a Substring(2:29)',
'Split a String(3:02)',
'Reverse, Repeat and Trim a String(5:16)',
'String Exercise(3:16)'

] 
for(let i=0;i<arrayOfStrings.length;i++){
    const firstBracket = arrayOfStrings[i].indexOf('(');
    console.log(arrayOfStrings[i].slice(0,firstBracket));
}
