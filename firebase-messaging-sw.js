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