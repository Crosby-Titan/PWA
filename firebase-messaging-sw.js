importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js');

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


messaging.onBackgroundMessage(function(payload) {
    console.log('Получено уведомление:', payload);
    
    const notification = JSON.parse(payload.notification);
  
    const notificationTitle = notification.title;
    const notificationOptions = {
      body: notification.body,
      icon: notification.icon,
      click_action: notification.click_action
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
});