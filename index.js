// question: would nesting my if statements be good here?
// question: when to use else if and else Vs. if?
// question: when to use = vs == vs ===?
function scuberGreetingForFeet(feet){
  let greeting;
  if (feet < 401) {
    greeting = "This one is on me!"
  }
  if (feet > 2000) {
    greeting = "I will gladly take your thirty bucks."
  }
  if (feet > 2500) {
    greeting = "No can do."
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
  let tipResponse;
  if (tip == "generous") {
    tipResponse = "Thank you so much.";
  }
  if (tip == "not as generous") {
    tipResponse = "Thank you.";
  } else {
    tipResponse = "Bye.";
  }
  return tipResponse;
}