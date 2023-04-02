function scuberGreetingForFeet(ride){

  if (ride<=400){
    return "This one is on me!"
  }
  else if(ride>=400&&ride<2000){
    return "That will be twenty bucks."
    
  }
  else if(ride>2000&&ride<=2500){
    return  "I will gladly take your thirty bucks."
     
  } 
  else if (ride>2500)
    return 'No can do.'
  
}

scuberGreetingForFeet(199)
scuberGreetingForFeet(1500)
scuberGreetingForFeet(2000)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  // Write your code here!
  if(city=="NYC"){
    return "Ok, sounds good."
  }
  else return 'No go.'
}
ternaryCheckCity(NYC)
ternaryCheckCity(Pittsburgh)

//function switchOnCharmFromTip(tip){
  //switch(tip){
    //case 'generous':
      //return "Thank you so much."
      //break;
    //case 'if the tip is not as generous':
      //return "Thank you."
      //break;
    //default : 'if anything else'
      //return "Bye."  
  //}
//}
function switchOnCharmFromTip(tip){
  if (tip=="generous"){
    return "Thank you so much."
  }
  else if (tip=="not as generous"){
    return "Thank you."
  }
  else if (tip=='thanks for everything'){
    return "Bye."
  }

}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')