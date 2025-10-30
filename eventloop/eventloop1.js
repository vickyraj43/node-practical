//node myFile.js
//New timers , tasks , operations are recorded from myFile running
myFile.runContents();
const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

function shouldContinue(){
  // Check one : any pending setTimeout setInterval , setImmediate?
  // check two : any pending os tasks? (like server listening to port)
  // check three : any pending long running operations? (like fs module)
    return pendingTimers.length || pendingOsTasks.length || pendingOperations.length;
}

//Entire body execute in one 'tick'
while(shouldContinue()){
    //1. node look at pendingTimers and sees if any functions are ready to be called.

    //2. Node looks at pendingOsTasks and pendingOperations and call relevant callbacks

    //3. pause execution. Continue when
    // - a new pendingOsTasks is done
    // - a new pendingOperation is done 
    // - a timer is obout to complete

    //4. Look at pendingTimers.
    //5. Handle any 'close'  events
}



//exit back to terminal