async function subscribeToPushMessages() {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
  
    let pushSubscription = serviceWorkerRegistration.pushManager.getSubscription();

    if (pushSubscription)
        return;
  
    try {
        pushSubscription = await serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BN36xnlGjkL0FvjPDkCPCFPdIPzMBgfKnYG9q1k7XVOKoaxnt1D4WgsaZOYa7nGf_GP8CJ3tBHRTUjWKY5bvHPU"
      });
    } catch (err) {
      console.log("Error", err);
    }
}
