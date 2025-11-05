// Mock Data - Datos de prueba para SigmaForo
// En producción, estos datos vendrían de Supabase

const mockReports = [
  {
    id: 'report-1',
    authorId: 'user-1',
    authorName: 'Gestión Municipal',
    authorUsername: 'gestion_muni',
    category: 'infraestructura',
    title: 'Semáforo caído en Av. Tacha',
    content: 'INFRAESTRUCTURA ⚠️ ¡Alerta! El semáforo en la intersección de Av. Tacha con Calle Arica está caído debido al fuerte viento, se requiere intervención urgente para evitar accidentes. #TacnaSegura',
    location: 'Av. Tacha con Calle Arica',
    coordinates: { lat: -18.0145, lng: -70.2495 },
    imageUrl: 'https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?w=400',
    hashtags: ['TacnaSegura'],
    status: 'en_proceso',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    views: 45,
    likes: 120,
    dislikes: 3,
  },
  {
    id: 'report-2',
    authorId: 'user-2',
    authorName: 'Ciudadano Activo',
    authorUsername: 'ciudadano_tca',
    category: 'seguridad',
    title: 'Vandalismo en parque central',
    content: 'SEGURIDAD 🚨 Vandalismo en el parque central! Han dañado varios bancos y carteles informativos durante la noche. Por favor, más vigilancia. #TacnaVigilante',
    location: 'Parque Central',
    coordinates: { lat: -18.0056, lng: -70.2444 },
    imageUrl: 'https://images.unsplash.com/photo-1667884578193-75c66111b00b?w=400',
    hashtags: ['TacnaVigilante'],
    status: 'en_revision',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    views: 89,
    likes: 234,
    dislikes: 8,
  },
  {
    id: 'report-3',
    authorId: 'user-3',
    authorName: 'Reportes Tacna',
    authorUsername: 'reportes_tca',
    category: 'vias',
    title: 'Bache peligroso en Av. Rica',
    content: 'VÍAS 🚧 Bache peligroso en Av. Rica esquina con Bolognesi. Ya ha causado varios accidentes menores. Necesitamos reparación urgente.',
    location: 'Av. Rica con Bolognesi',
    coordinates: { lat: -18.0087, lng: -70.2401 },
    imageUrl: 'https://images.unsplash.com/photo-1724015652877-9423e464fc0d?w=400',
    hashtags: ['BachesPeligrososAvRica'],
    status: 'pendiente',
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    views: 156,
    likes: 389,
    dislikes: 12,
  },
  {
    id: 'report-4',
    authorId: 'user-2',
    authorName: 'Ciudadano Activo',
    authorUsername: 'ciudadano_tca',
    category: 'servicios',
    title: 'Falta de agua en sector norte',
    content: 'SERVICIOS 🚰 Llevamos 12 horas sin agua en el sector norte de la ciudad. Necesitamos que EPS Tacna intervenga urgentemente.',
    location: 'Sector Norte - Av. Industrial',
    coordinates: { lat: -17.9987, lng: -70.2556 },
    hashtags: ['FaltaDeAgua', 'EPSTacna'],
    status: 'en_proceso',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    views: 203,
    likes: 456,
    dislikes: 5,
  },
  {
    id: 'report-5',
    authorId: 'user-3',
    authorName: 'Reportes Tacna',
    authorUsername: 'reportes_tca',
    category: 'medio_ambiente',
    title: 'Acumulación de basura en zona residencial',
    content: 'MEDIO AMBIENTE 🌱 Acumulación crítica de basura en Calle Zela. Hace 5 días que no pasa el camión recolector. Mal olor y riesgo sanitario.',
    location: 'Calle Zela con Av. San Martín',
    coordinates: { lat: -18.0125, lng: -70.2478 },
    hashtags: ['BasuraTacna', 'Limpieza'],
    status: 'pendiente',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    views: 178,
    likes: 312,
    dislikes: 15,
  },
  {
    id: 'report-6',
    authorId: 'user-1',
    authorName: 'Gestión Municipal',
    authorUsername: 'gestion_muni',
    category: 'seguridad',
    title: 'Iluminación deficiente en parque',
    content: 'SEGURIDAD 🚨 Alumbrado público apagado en Parque de la Familia. Zona oscura que representa riesgo para transeúntes en horas nocturnas.',
    location: 'Parque de la Familia',
    coordinates: { lat: -18.0198, lng: -70.2523 },
    hashtags: ['IluminacionPública', 'Seguridad'],
    status: 'en_revision',
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    views: 92,
    likes: 167,
    dislikes: 3,
  },
  {
    id: 'report-7',
    authorId: 'user-2',
    authorName: 'Ciudadano Activo',
    authorUsername: 'ciudadano_tca',
    category: 'infraestructura',
    title: 'Rotura de tubería en vía pública',
    content: 'INFRAESTRUCTURA ⚠️ Tubería rota en Av. Bolognesi causando inundación en la pista. El agua corre por varias cuadras afectando el tránsito.',
    location: 'Av. Bolognesi altura cuadra 8',
    coordinates: { lat: -18.0067, lng: -70.2489 },
    hashtags: ['TuberíaRota', 'Inundación'],
    status: 'en_proceso',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    views: 267,
    likes: 543,
    dislikes: 7,
  },
  {
    id: 'report-8',
    authorId: 'user-3',
    authorName: 'Reportes Tacna',
    authorUsername: 'reportes_tca',
    category: 'vias',
    title: 'Señalización borrada en cruce',
    content: 'VÍAS 🚧 Las líneas de señalización en el cruce de Av. Legado Cabrejos están totalmente borradas. Causa confusión y riesgo de accidentes.',
    location: 'Av. Legado Cabrejos con Calle Apurímac',
    coordinates: { lat: -18.0113, lng: -70.2435 },
    hashtags: ['SeñalizaciónVial', 'SeguridadVial'],
    status: 'pendiente',
    createdAt: new Date(Date.now() - 15 * 60 * 60 * 1000),
    views: 134,
    likes: 278,
    dislikes: 9,
  },
];

const mockNotifications = [
  {
    id: 'notif-1',
    userId: 'current-user',
    type: 'nearby_incident',
    relatedReportId: 'report-2',
    category: 'seguridad',
    title: 'Nuevo reporte en tu zona',
    description: 'Vandalismo reportado en Parque Central. Se recomienda precaución en la zona.',
    location: 'Parque Central',
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
    isRead: false,
  },
  {
    id: 'notif-2',
    userId: 'current-user',
    type: 'incident_status_update',
    relatedReportId: 'report-1',
    category: 'infraestructura',
    title: 'Actualización de incidente',
    description: 'El semáforo en Av. Tacha está siendo reparado. Se espera normalización del tráfico.',
    location: 'Av. Tacha',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    isRead: false,
  },
  {
    id: 'notif-3',
    userId: 'current-user',
    type: 'new_incident_in_followed_area',
    relatedReportId: 'report-3',
    category: 'vias',
    title: 'Incidente en zona seguida',
    description: 'Bache peligroso en Av. Rica esquina con Bolognesi. Reportado por múltiples usuarios.',
    location: 'Av. Rica',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    isRead: true,
  },
];

const mockTrending = [
  { hashtag: 'TacnaSegura', count: 1234 },
  { hashtag: 'BachesPeligrosos', count: 892 },
  { hashtag: 'TacnaVigilante', count: 567 },
  { hashtag: 'FaltaDeAgua', count: 445 },
  { hashtag: 'IluminacionPública', count: 321 },
];

// Funciones helper
function getRelativeTime(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = {
    año: 31536000,
    mes: 2592000,
    semana: 604800,
    día: 86400,
    hora: 3600,
    minuto: 60,
  };

  for (const [name, secondsInterval] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInterval);
    if (interval >= 1) {
      return `Hace ${interval} ${name}${interval > 1 ? 's' : ''}`;
    }
  }
  return 'Justo ahora';
}

function getCategoryColor(category) {
  const colors = {
    seguridad: '#dc2626',
    infraestructura: '#ea580c',
    vias: '#ca8a04',
    servicios: '#2563eb',
    medio_ambiente: '#16a34a',
  };
  return colors[category] || '#6b7280';
}

function getCategoryLabel(category) {
  const labels = {
    seguridad: 'Seguridad',
    infraestructura: 'Infraestructura',
    vias: 'Vías',
    servicios: 'Servicios',
    medio_ambiente: 'Medio Ambiente',
  };
  return labels[category] || 'Otro';
}

function getStatusLabel(status) {
  const labels = {
    pendiente: 'Pendiente',
    en_revision: 'En Revisión',
    en_proceso: 'En Proceso',
    resuelto: 'Resuelto',
  };
  return labels[status] || status;
}

function getStatusColor(status) {
  const colors = {
    pendiente: '#6b7280',
    en_revision: '#eab308',
    en_proceso: '#3b82f6',
    resuelto: '#22c55e',
  };
  return colors[status] || '#6b7280';
}
