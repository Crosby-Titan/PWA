const serviceWorkerRegistration = await navigator.serviceWorker.ready;

self.addEventListener("push",(event)=>{
    if (Notification.permission != "granted")
        return;

    event.waitUntil(serviceWorkerRegistration.showNotification('E-Calculator', {
        body: event.data.text(),
        icon: 'icons/notification.png'
      }));
    
});