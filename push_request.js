let token;

document.getElementById("notification_subscribe").addEventListener("click",async () => {

    try{
        await messaging.requestPermission();

        token = await messaging.getToken();
    }
    catch(error){
        console.log(error.message);
        token = null;
    }
});

