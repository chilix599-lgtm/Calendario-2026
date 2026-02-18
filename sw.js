const CACHE_NAME = 'iagenda-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

// Esto permite recibir órdenes de notificación del index.html
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'NOTIFICACION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.message,
            icon: 'https://raw.githubusercontent.com/chilix599-lgtm/Calendario-2026/main/lol.png'
        });
    }
});

self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    e.waitUntil(
        clients.matchAll({type: 'window'}).then(windowClients => {
            if (windowClients.length > 0) return windowClients[0].focus();
            return clients.openWindow('./');
        })
    );
});
