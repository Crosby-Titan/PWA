const sendNotificationBtn = document.getElementById("send_notification_btn");

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

sendNotificationBtn.addEventListener("click", async (event)=>{
    const tokens = await getAllTokens();

    sendNotification(tokens);
});

async function sendNotification(tokens){
    await fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'Bearer AAAAeyoYsSs:APA91bEf14BQ-J4L5ygfVNUJ0iTQgpNyHKDgea9ajNICIYZ0iRvrEPFfoSvyi1Wef2RCBuc96HS67uGjpHrwLJ0cSIDoOoQDNlmRRkqTIfcTnrdJt_qDTeyLZspd5iiaemtcc-COOOCt',
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'tokens': tokens,
            'notification': {
                'title': document.getElementById("title").value,
                'body': document.getElementById("description").value
            }
        })
    });
}

async function getAllTokens(){
    const response = await fetch('https://functions.yandexcloud.net/d4e5ons68nu2do178hqu');

    return await response.json();
}