const button = document.getElementById("notification_subscribe");

button.addEventListener("click",async () => {

    navigator?.serviceWorker.controller.postMessage({ message: "notification_request"});

    navigator?.serviceWorker.controller.addEventListener("message",(event)=>{
        const {message , title} = event.data;
    });
});

