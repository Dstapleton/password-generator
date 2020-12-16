// Assignment code here
var maxchar = 129;
var minchar = 7;
var numerics = [0,1,2,3,4,5,6,7,8,9];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

function passwordOptions() {
 
  //
  var lengthVal = parseInt(prompt("what is the length of your new password?") );
  var counter = 0;

  //check for no input

  while (!lengthVal){
    alert("Your password must be between 8 and 128 characters");
    lengthVal = parseInt(prompt("what is the length of your new password?") );
    counter ++;
    //exit after 2 failed attemps
    if (counter >= 1){
      return;
    }
  }

  if (lengthVal <= minchar){
    alert("Your password length must be at lest 8 characters");
      console.log("User error minlength");
  }
  else if (lengthVal >= maxchar){
      alert("Your password length must be less that 128 characters");
      console.log("User error maxlenght");
  }
 
  var numericVal = confirm("Would you like numbers included");
  

  var lowercase = confirm("Should lowercase values be added");

 
  var uppercase = confirm("Would you like UPPERCASE values");


  var specialVal = confirm("Should special charecters (-) be added");

  var passwordList = {
    length:lengthVal,
    numeric:numericVal,
    lowerCase:lowercase,
    upperCase:uppercase,
    specialchar:specialVal
  }
  return passwordList;
}

//
function generatePassword(){
 var inputOptions = passwordOptions();
  var passwordArray = [];

  if(inputOptions.numeric){
    for(i=0;i < numerics.length; ++i){
      passwordArray.push(numerics[i]);
    }
  }

  if(inputOptions.lowerCase){
    for(i=0;i < lower.length; ++i){
      passwordArray.push(lower[i]);
    }
  } 

  if(inputOptions.upperCase){
    for(i=0;i < upper.length; ++i){
      passwordArray.push(upper[i]);
    }
  }
  if(inputOptions.specialchar){
    for(i=0;i < special.length; ++i){
      passwordArray.push(special[i]);
    }
  } 
    //randomise input
  var randArray = [];
  for(i = 0; i <= inputOptions.length-1; ++i){
    var randval = Math.floor(Math.random() * Math.floor(passwordArray.length));
      randArray.push(passwordArray[randval]);
    }
    console.log(randArray);
    
   var newPassword = randArray.join('');
  return newPassword;

}

function randomise(randInput){
  var randArray = [];

  for(i = 0; i <= randInput.length; ++i){
  var randval = Math.floor(Math.random() * Math.floor(randInput.length));
    randArray.push(randInput[randval]);
  }
  return randArray;
}


// Get references to the #generate element
  var generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Being clicked");

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
