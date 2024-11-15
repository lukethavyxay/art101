/*
   Author: Luke Thavyxay
   Date: 14 November 2024

 (c) Copyright by Blackarmor Corporation
 */

//Create a function sortingHat()
//That takes a string as an argument: function sortingHat(str)
function sortingHat (str){
  //Counts the letters in str and assigns it to a variable length
  var length = str.length;
  //Uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var mod = length % 4;
  //Mod will now be a value between 0 and 3
  //Create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
      if (mod==0){
          return "Gryffindor";
      }else if (mod==1){
          return "Ravenclaw";
      }else if (mod==2){
          return "Slytherin";
      }else{
          return "Hufflepuff";
      }
}

//Create an click listener attached to #button
//That gets the value of #input and assigns it to a variable name
//Runs sortingHat(name) and stores the result in a variable house
//Appends new styled paragraph to #output that states, "The Sorting Hat has sorted you into " + house
$('#button').click(function(){
  var name = $('#input').val();
  var house = sortingHat(name);
      $('#output').append('<p>The Sorting Hat has sorted you into ' + house + '</p>');
});