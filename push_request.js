const config = {
    apiKey: "AIzaSyBJD0pFT23NP7l0itfzoys1vegruVxGag8",
    authDomain: "telegrambot-b7130.firebaseapp.com",
    databaseURL: "https://telegrambot-b7130-default-rtdb.firebaseio.com",
    projectId: "telegrambot-b7130",
    storageBucket: "telegrambot-b7130.appspot.com",
    messagingSenderId: "528987238699",
    appId: "1:528987238699:web:9f5771129cabc23945156e",
    measurementId: "G-TJRXL9L0G3"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();


document.getElementById("notification_subscribe").addEventListener("click",async () => {

    await Notification.requestPermission();

    if (Notification.permission === 'granted'){
        await messaging.requestPermission();
        sendToken(await messaging.getToken());
    }
});

async function sendToken(token){

    await fetch('https://functions.yandexcloud.net/d4e5ons68nu2do178hqu', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ user_token: token }) 
    });
}
