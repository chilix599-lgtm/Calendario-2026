// Nombre del caché
const CACHE_NAME = 'iagenda-v1';

// Escuchar el evento de instalación
self.addEventListener('install', (e) => {
    console.log('SW: Instalado');
});

// Escuchar notificaciones enviadas desde el sistema
self.addEventListener('push', (e) => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'https://raw.githubusercontent.com/chilix599-lgtm/Calendario-2026/main/lol.png',
        vibrate: [200, 100, 200]
    });
});

// Manejar el clic en la notificación
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    e.waitUntil(
        clients.openWindow('https://chilix599-lgtm.github.io/Calendario-2026/') //
    );
});

