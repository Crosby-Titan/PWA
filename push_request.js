document.getElementById("notification_subscribe").addEventListener("click",async () => {

    if (Notification.permission === 'default'){
        const permission = await Notification.requestPermission();

        console.log(`Permission: ${permission}`);
    }
});

