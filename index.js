/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const actualTime = parseInt(time)
  if (actualTime < 12) {
    return "Good Morning"; 
  }
  if (actualTime >= 12 && actualTime < 17) {
    return "Good Afternoon";
    }
  if (actualTime > 17) {
    return "Good Evening";}
}

/* Write your implementation of displayMessage() */
  function displayMessage(msg) {
    let greet = document.getElementById("greeting")
    greet.innerText = msg;
  }
