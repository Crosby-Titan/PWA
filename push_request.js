document.getElementById("notification_subscribe").addEventListener("click",async () => {

    let permission =  await Notification.requestPermission();

    if (permission === "granted") {
        console.log("Получено разрешение на пуш уведомления.");

        const serviceWorkerRegistration = await navigator.serviceWorker.ready;

        const subscribe = await serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: window.Uint8Array.from("BN36xnlGjkL0FvjPDkCPCFPdIPzMBgfKnYG9q1k7XVOKoaxnt1D4WgsaZOYa7nGf_GP8CJ3tBHRTUjWKY5bvHPU")
        });

        alert(subscribe.toJSON());
    }
});

