const button = document.getElementById("notification_subscribe");

button.addEventListener("click",async () => {

    if (Notification.permission === 'default'){
        const permission = await Notification.requestPermission();

        console.log(`Permission: ${permission}`);
    }
});

