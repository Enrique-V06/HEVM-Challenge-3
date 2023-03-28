// Assignment Code
var generateBtn = document.querySelector("#generate");
  function generatePassword(){
    var length = window.prompt("Please enter the number of characters you wish for your password: ");
    var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specchar = ['!', '"', '#','$','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var characters = [];
    var passwd ="";
    
    
      if (length > 11 && length < 128){
        var upper = confirm("Would you like to include upper case letters? ");
        if(upper){
          characters = characters.concat(upperCase);
          // console.log(characters);
        }
        var lower = confirm("Would you like to include lower case letters?");
        if(lower){
          characters = characters.concat(lowercase);
          // console.log(characters);
        }
        var specialchar = confirm("Would you like to include scpecial characters?");
        if(specialchar){
          characters = characters.concat(specchar);
          // console.log(characters)
        }     
        var numb = confirm("Would you like to include numbers?");
        if(numb){
          characters = characters.concat(numbers);
          // console.log(characters)
        }

        for(i = 0; i < length; i++){
          var c = characters[Math.round(Math.random() * characters.length)];
          console.log(c);
          var passwd = passwd + c;
          // console.log(typeof passwd);
          console.log("passwd: " + passwd);
        }
        // password = toString(passwd);
        console.log(typeof passwd);
        window.alert("Your password is: " + passwd);
        return passwd;
    }
    else{
      window.alert("We recommend password with at least 12 characters.")
      return passwd;
    }

  }
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click",  writePassword);

