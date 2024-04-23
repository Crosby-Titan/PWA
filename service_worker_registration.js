navigator?.serviceWorker.register('/service-worker.js', { scope: '/' })
.then(() => {
  console.log('Service worker registered');
})
.catch((error) => {
  console.error('Service worker registration failed:', error);
});