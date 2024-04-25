//const config = {
//    apiKey: "AIzaSyBJD0pFT23NP7l0itfzoys1vegruVxGag8",
//    authDomain: "telegrambot-b7130.firebaseapp.com",
//    databaseURL: "https://telegrambot-b7130-default-rtdb.firebaseio.com",
//    projectId: "telegrambot-b7130",
//    storageBucket: "telegrambot-b7130.appspot.com",
//    messagingSenderId: "528987238699",
//    appId: "1:528987238699:web:9f5771129cabc23945156e",
//    measurementId: "G-TJRXL9L0G3"
//};
//
//firebase.initializeApp(config);
//const messaging = firebase.messaging();


document.getElementById("notification_subscribe").addEventListener("click",async () => {

    await Notification.requestPermission();

    //if (Notification.permission === 'granted'){
    //    //await messaging.requestPermission();
//
    //    //const res = await navigator.permissions.query({ name: 'clipboard-write' });
    //    
    //    //if(res.state === "granted"){
    //    //    await navigator.clipboard.writeText(await messaging.getToken());
    //    //}
    //}
});

