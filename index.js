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
//});
//Tosty();
//let deferrdPrompt;
//window.addEventListener('beforeinstallprompt', function(e) {

//  e.preventDefault();

 // deferrdPrompt = e.prompt;
 // console.log(`'deferrdPrompt' event was fired.`);

  //const installAppButton = document.getElementById('installAppButton');
  //f (installAppButton){
  //  installAppButton.addEventListener('click',function(){
   //   deferrdPrompt.prompt();
   // })
 // }
//});
//var option = {
 // animation:true, 

 // delay: 4000

//};

//window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  //e.preventDefault();

  //let deferredPrompt;

  // Stash the event so it can be triggered later.
 //deferredPrompt = e;
  // Show the prompt
 // deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
//  deferredPrompt.userChoice
  //.then((choiceResult) => {
  //  if (choiceResult.outcome === 'accepted') {
     // console.log('User accepted the A2HS prompt');
   // } else {
     // console.log('User dismissed the A2HS prompt');
  //  }
   // deferredPrompt = null;
 /// })
//})
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
