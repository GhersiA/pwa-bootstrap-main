if ("serviceWorker" in navigator){

  navigator.serviceWorker
  .register("./sw.js")
  .then(() => console.log("sw registered"))
   .catch((err) => console.log(err));
}


var isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 10000);
  }

  // The event was re-dispatched in response to our request
  // ...
});
document.getElementById("installer l'application ? ").innerHTML = resultatPrompt;