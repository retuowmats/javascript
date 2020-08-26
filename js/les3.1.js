{    
    var response = parseInt(prompt('getal 1')); // user gives number 1
    var response2 = parseInt(prompt('getal 2')); // user gives number 2

    var groter = '<h2>' + response + ' is groter dan ' + response2 ; // declaring var if number1 is larger than number 2
    var kleiner = '<h2>' + response + ' is kleiner dan ' + response2 ; // declaring var if number1 is smaller than number 2
    var gelijk = '<h2>' + response + ' is gelijk aan ' + response2 ; // declaring var if number1 is equal to number 2

    var resultaat = (response > response2) ? groter : (response < response2) ? kleiner : gelijk ; // if n1 is larger than n2 var groter, else n1 smaller than n2 var kleiner, else equal.
  
    var invoer = '<h2> De getallen die u ingevoerd heeft zijn: ' + response + ' en ' + response2 ; // User feedback about the given numbers

    document.getElementById('divResult').innerHTML = invoer; // Which numbers did the user give
    document.getElementById('divResult1').innerHTML = resultaat; // Result of which number is larger
}