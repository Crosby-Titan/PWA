document.addEventListener("load",()=>{
    navigator?.serviceWorker.register('/firebase-messaging-sw.js', { scope: '/' })
      .then(() => {
          console.log('Service Worker для Firebase Messaging зарегистрирован');
      })
      .catch((error) => {
          console.error('Ошибка регистрации Service Worker для Firebase Messaging:', error);
      });
});