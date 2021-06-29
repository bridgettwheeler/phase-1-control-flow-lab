// question: would nesting my if statements be good here?
// question: when to use else if and else Vs. if?
// question: when to use = vs == vs ===?
function scuberGreetingForFeet(feet){
  let greeting;
  if (feet < 401) {
    greeting = "This one is on me!"
  } else if (feet > 2000 && feet < 2501) {
    greeting = "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    greeting = "No can do.";
  }
return greeting;
}

function ternaryCheckCity(city){
  let greeting;
  if (city == "NYC") {
    greeting = "Ok, sounds good."
  } else {
    greeting = "No go."
  }
  return greeting;
}

function switchOnCharmFromTip(tip){
  
  if (tip == "generous") {
    return "Thank you so much.";
  }
  else if (tip == "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
  
}