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

});
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}



var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
alert('beforeinstallprompt fired');
event.preventDefault();
deferredPrompt = event;
return false;
});

function addToHomeScreen() {
if (deferredPrompt) {
deferredPrompt.prompt();
deferredPrompt.userChoice.then(function (choiceResult) {
console.log(choiceResult.outcome);
if (choiceResult.outcome === 'dismissed') {
	console.log('User cancelled installation');
} else {
	console.log('User added to home screen');
}
});
deferredPrompt = null;
}
}
