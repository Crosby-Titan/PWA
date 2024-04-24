document.getElementById("notification_subscribe").addEventListener("click",async () => {

    if(Notification.permission != "default")
        return;

    let permission =  await Notification.requestPermission();

    if (permission === "granted") {
        console.log("Получено разрешение на пуш уведомления.");
    }
});

