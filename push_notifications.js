self.addEventListener("push",async (event)=>{

    if (Notification.permission != "granted")
        return;

    const serviceWorkerRegistration = await navigator.serviceWorker.ready;

    event.waitUntil(serviceWorkerRegistration.showNotification('E-Calculator', {
        body: event.data.text(),
        icon: 'icons/notification.png'
      }));
    
});