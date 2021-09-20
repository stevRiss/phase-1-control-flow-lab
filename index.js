function scuberGreetingForFeet(distance){
   
  if(distance < 400){
    let greeting = 'This one is on me!';
    return greeting;
  }else if(distance < 2500){
    let greeting = 'I will gladly take your thirty bucks.';
    return greeting;
  }else if(distance > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }else{
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){

  let generous;  
  let notAsGenerous;
  let ifAnythingElse;
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}