export interface Translations {
  // App Title
  appName: string;
  
  // Language Selection
  selectLanguage: string;
  continue: string;
  
  // Navigation
  home: string;
  explore: string;
  community: string;
  messages: string;
  
  // Home Screen
  tagline: string;
  featuredServices: string;
  upcomingEvents: string;
  
  // Messages & Notifications
  messagesAndNotifications: string;
  notifications: string;
  
  // Common
  comingSoon: string;
  continuePrompting: string;
  featureComingSoon: string;

  // Featured Services
  currentJobOpenings: string;
  childcareServices: string;
  transportationServices: string;

  // Job Openings
  customerServiceRep: string;
  warehouseWorker: string;
  retailSales: string;
  restaurantServer: string;
  customerServiceRepDesc: string;
  warehouseWorkerDesc: string;
  retailSalesDesc: string;
  restaurantServerDesc: string;

  // Childcare Services
  dellaLambDaycare: string;
  headStartProgram: string;
  kcmoChildcare: string;
  familyDaycare: string;
  dellaLambDaycareDesc: string;
  headStartProgramDesc: string;
  kcmoChildcareDesc: string;
  familyDaycareDesc: string;

  // Transportation Services
  ridekc: string;
  kcStreetcar: string;
  uberLyft: string;
  bikekc: string;
  ridekcDesc: string;
  kcStreetcarDesc: string;
  uberLyftDesc: string;
  bikekcDesc: string;

  // Food Page
  foodAssistancePrograms: string;
  ethnicMarkets: string;
  filterByCategory: string;
  all: string;
  noLocationsFound: string;
  searchFoodLocations: string;

  // Food Categories
  africanCaribbean: string;
  asianMarkets: string;
  hispanicLatino: string;
  middleEasternMediterranean: string;
  southAsian: string;
  halalMarkets: string;
  european: string;
  specialty: string;
  foodAssistance: string;
  
  // Service Categories
  search: string;
  englishClasses: string;
  food: string;
  legal: string;
  childcare: string;
  healthSupport: string;
  employment: string;
  transportation: string;
  housing: string;
  
  // Community
  askQuestion: string;
  offerHelp: string;
  discussions: string;
  languageLearning: string;
  transportationHelp: string;
  
  // Notifications
  dentistAppointment: string;
  foodPantryHours: string;
  newEnglishClass: string;
  healthScreeningReminder: string;
  jobFairAnnouncement: string;
  childcareOpenings: string;
  transportationUpdate: string;
  communityEventReminder: string;
  housingAssistanceUpdate: string;
  
  // Messages
  healthCenterMessage: string;
  thanksMessage: string;
  homeworkHelpers: string;
  happyToHelp: string;
  
  // Time references
  today: string;
  yesterday: string;
  hoursAgo: string;
  comments: string;

  // Messages & Notifications
  messagesAndNotifications: string;
  samuelUHealthCenter: string;
  walkInAvailability: string;
  gabrielaS: string;
  seeYouTomorrow: string;
  homeworkHelpers: string;
  happyToHelpMsg: string;

  // Events
  computerLab: string;
  introductoryEnglishClass: string;
  beginnerEnglish: string;
  onlineIntermediateEnglishClass: string;
  dellaLambClients: string;

  // Community Page
  upcomingEvents: string;
  languageLearningDesc: string;
  transportationHelpDesc: string;
  commentsCount: string;
  hoursAgoShort: string;

  // Forms
  name: string;
  question: string;
  organization: string;
  descriptionOfService: string;
  submit: string;
  cancel: string;
  nameRequired: string;
  questionRequired: string;
  organizationRequired: string;
  serviceDescRequired: string;
}

export const translations: Record<string, Translations> = {
  en: {
    appName: "LinkUp KC",
    selectLanguage: "Select Language",
    continue: "Continue",
    
    home: "Home",
    explore: "Explore",
    community: "Community",
    messages: "Messages",
    
    tagline: "Linking Support. Growing Belonging.",
    featuredServices: "Featured Services",
    upcomingEvents: "Upcoming Events",
    
    messagesAndNotifications: "Messages & Notifications",
    notifications: "Notifications",
    
    comingSoon: "content coming soon...",
    continuePrompting: "Continue prompting to fill in this page content!",
    featureComingSoon: "Feature coming soon...",

    // Featured Services
    currentJobOpenings: "Current Job Openings",
    childcareServices: "Childcare",
    transportationServices: "Transportation",

    // Job Openings
    customerServiceRep: "Customer Service Representative",
    warehouseWorker: "Warehouse Worker",
    retailSales: "Retail Sales Associate",
    restaurantServer: "Restaurant Server",
    customerServiceRepDesc: "Answer calls and help customers - $15-18/hr, Downtown KC",
    warehouseWorkerDesc: "Package handling and shipping - $16-20/hr, North KC",
    retailSalesDesc: "Help customers and manage inventory - $14-17/hr, Plaza area",
    restaurantServerDesc: "Take orders and serve customers - $12/hr + tips, Crossroads",

    // Childcare Services
    dellaLambDaycare: "Della Lamb Community Center",
    headStartProgram: "Head Start Program",
    kcmoChildcare: "KCMO Childcare Assistance",
    familyDaycare: "Licensed Family Daycare",
    dellaLambDaycareDesc: "Quality childcare for ages 6 weeks-5 years, sliding scale fees",
    headStartProgramDesc: "Free preschool program for low-income families, ages 3-5",
    kcmoChildcareDesc: "Financial assistance for working families, income-based",
    familyDaycareDesc: "Home-based care in your neighborhood, flexible hours",

    // Transportation Services
    ridekc: "RideKC Bus System",
    kcStreetcar: "KC Streetcar",
    uberLyft: "Uber & Lyft",
    bikekc: "BikeKC Bike Share",
    ridekcDesc: "Public bus routes citywide - $1.50 per ride, free transfers",
    kcStreetcarDesc: "Free streetcar from Union Station to River Market",
    uberLyftDesc: "On-demand rideshare services throughout metro area",
    bikekcDesc: "Bike sharing stations downtown - $5 day pass available",
    
    search: "Search",
    englishClasses: "English Classes",
    food: "Food",
    legal: "Legal",
    childcare: "Childcare",
    healthSupport: "Health Support",
    employment: "Employment",
    transportation: "Transportation",
    housing: "Housing",
    
    askQuestion: "Ask a question",
    offerHelp: "Offer Help",
    discussions: "DISCUSSIONS",
    languageLearning: "Language Learning",
    transportationHelp: "Transportation Help",
    
    dentistAppointment: "Your dentist appointment is tomorrow at 9:30am",
    foodPantryHours: "Food Pantry added hours on Wednesday",
    newEnglishClass: "A new English class was posted near you.",
    healthScreeningReminder: "Free health screening available this Friday at the Community Center",
    jobFairAnnouncement: "Job fair this Thursday - over 20 employers hiring immediately",
    childcareOpenings: "New childcare spots available at Della Lamb Community Center",
    transportationUpdate: "KC Streetcar will have extended hours during the weekend",
    communityEventReminder: "Community potluck dinner tonight at 6 PM - all welcome!",
    housingAssistanceUpdate: "Emergency housing assistance program accepting new applications",
    
    healthCenterMessage: "Yes, we have Walk-in availability.",
    thanksMessage: "Thanks, see you tomorrow.",
    homeworkHelpers: "Homework Helpers",
    happyToHelp: "Sure, I'd be happy to help!",
    
    today: "TODAY",
    yesterday: "YESTERDAY",
    hoursAgo: "hours ago",
    comments: "comments",

    // Messages & Notifications
    samuelUHealthCenter: "Samuel U Rogers Health Center",
    walkInAvailability: "Yes, we have Walk-in availability.",
    gabrielaS: "Gabriela S.",
    seeYouTomorrow: "Thanks, see you tomorrow.",
    homeworkHelpers: "Homework Helpers",
    happyToHelpMsg: "Sure, I'd be happy to help!",

    // Food Page
    foodAssistancePrograms: "Food Assistance Programs",
    ethnicMarkets: "Ethnic Markets",
    filterByCategory: "Filter by Category",
    all: "All",
    noLocationsFound: "No locations found for this category.",
    searchFoodLocations: "Search food locations",

    // Food Categories
    africanCaribbean: "African & Caribbean",
    asianMarkets: "Asian Markets",
    hispanicLatino: "Hispanic & Latino",
    middleEasternMediterranean: "Middle Eastern & Mediterranean",
    southAsian: "South Asian",
    halalMarkets: "Halal Markets",
    european: "European",
    specialty: "Specialty",
    foodAssistance: "Food Assistance",

    // Events
    computerLab: "Computer Lab",
    introductoryEnglishClass: "Introductory English Class",
    beginnerEnglish: "Beginner English",
    onlineIntermediateEnglishClass: "Online Intermediate Level English Class",
    dellaLambClients: "Della Lamb Clients",

    // Community Page
    languageLearningDesc: "Ask for help, recommend tutors, or share free English class info here.",
    transportationHelpDesc: "Ask about getting around Kansas City, buses, bikes, rides, or directions.",
    commentsCount: "comments",
    hoursAgoShort: "hours ago",

    // Forms
    name: "Name",
    question: "Question",
    organization: "Organization",
    descriptionOfService: "Description of Service Offered",
    submit: "Submit",
    cancel: "Cancel",
    nameRequired: "Name is required",
    questionRequired: "Question is required",
    organizationRequired: "Organization is required",
    serviceDescRequired: "Service description is required",
  },
  
  es: {
    appName: "LinkUp KC",
    selectLanguage: "Seleccionar Idioma",
    continue: "Continuar",
    
    home: "Inicio",
    explore: "Explorar",
    community: "Comunidad",
    messages: "Mensajes",
    
    tagline: "Conectando Apoyo. Creciendo Pertenencia.",
    featuredServices: "Servicios Destacados",
    upcomingEvents: "Próximos Eventos",
    
    messagesAndNotifications: "Mensajes y Notificaciones",
    notifications: "Notificaciones",
    
    comingSoon: "contenido próximamente...",
    continuePrompting: "¡Continúa escribiendo para llenar el contenido de esta página!",
    featureComingSoon: "Función próximamente...",

    // Featured Services
    currentJobOpenings: "Ofertas de Trabajo Actuales",
    childcareServices: "Cuidado Infantil",
    transportationServices: "Transporte",

    // Job Openings
    customerServiceRep: "Representante de Servicio al Cliente",
    warehouseWorker: "Trabajador de Almacén",
    retailSales: "Asociado de Ventas al Por Menor",
    restaurantServer: "Mesero de Restaurante",
    customerServiceRepDesc: "Responder llamadas y ayudar a clientes - $15-18/hr, Centro KC",
    warehouseWorkerDesc: "Manejo de paquetes y envíos - $16-20/hr, Norte KC",
    retailSalesDesc: "Ayudar clientes y manejar inventario - $14-17/hr, área Plaza",
    restaurantServerDesc: "Tomar órdenes y servir clientes - $12/hr + propinas, Crossroads",

    // Childcare Services
    dellaLambDaycare: "Centro Comunitario Della Lamb",
    headStartProgram: "Programa Head Start",
    kcmoChildcare: "Asistencia de Cuidado Infantil KCMO",
    familyDaycare: "Guardería Familiar Licenciada",
    dellaLambDaycareDesc: "Cuidado infantil de calidad para edades 6 semanas-5 años, tarifas escalonadas",
    headStartProgramDesc: "Programa preescolar gratuito para familias de bajos ingresos, edades 3-5",
    kcmoChildcareDesc: "Asistencia financiera para familias trabajadoras, basada en ingresos",
    familyDaycareDesc: "Cuidado en el hogar en su vecindario, horarios flexibles",

    // Transportation Services
    ridekc: "Sistema de Autobuses RideKC",
    kcStreetcar: "Tranvía KC",
    uberLyft: "Uber y Lyft",
    bikekc: "BikeKC Compartir Bicicletas",
    ridekcDesc: "Rutas de autobús públicas en toda la ciudad - $1.50 por viaje, transferencias gratuitas",
    kcStreetcarDesc: "Tranvía gratuito de Union Station a River Market",
    uberLyftDesc: "Servicios de transporte bajo demanda en toda el área metropolitana",
    bikekcDesc: "Estaciones de bicicletas compartidas en el centro - pase diario $5 disponible",
    
    search: "Buscar",
    englishClasses: "Clases de Inglés",
    food: "Comida",
    legal: "Legal",
    childcare: "Cuidado Infantil",
    healthSupport: "Apoyo de Salud",
    employment: "Empleo",
    transportation: "Transporte",
    housing: "Vivienda",
    
    askQuestion: "Hacer una pregunta",
    offerHelp: "Ofrecer Ayuda",
    discussions: "DISCUSIONES",
    languageLearning: "Aprendizaje de Idiomas",
    transportationHelp: "Ayuda de Transporte",
    
    dentistAppointment: "Tu cita con el dentista es mañana a las 9:30am",
    foodPantryHours: "La Despensa de Comida agregó horarios el miércoles",
    newEnglishClass: "Se publicó una nueva clase de inglés cerca de ti.",
    healthScreeningReminder: "Examen de salud gratuito disponible este viernes en el Centro Comunitario",
    jobFairAnnouncement: "Feria de empleo este jueves - más de 20 empleadores contratando inmediatamente",
    childcareOpenings: "Nuevos espacios de cuidado infantil disponibles en el Centro Comunitario Della Lamb",
    transportationUpdate: "El tranvía KC tendrá horarios extendidos durante el fin de semana",
    communityEventReminder: "¡Cena comunitaria esta noche a las 6 PM - todos bienvenidos!",
    housingAssistanceUpdate: "Programa de asistencia de vivienda de emergencia acepta nuevas solicitudes",
    
    healthCenterMessage: "Sí, tenemos disponibilidad sin cita.",
    thanksMessage: "Gracias, nos vemos mañana.",
    homeworkHelpers: "Ayudantes de Tarea",
    happyToHelp: "¡Claro, estaré feliz de ayudar!",
    
    today: "HOY",
    yesterday: "AYER",
    hoursAgo: "horas atrás",
    comments: "comentarios",

    // Messages & Notifications
    samuelUHealthCenter: "Centro de Salud Samuel U Rogers",
    walkInAvailability: "Sí, tenemos disponibilidad sin cita.",
    gabrielaS: "Gabriela S.",
    seeYouTomorrow: "Gracias, nos vemos ma��ana.",
    homeworkHelpers: "Ayudantes de Tareas",
    happyToHelpMsg: "¡Claro, estaré feliz de ayudar!",

    // Food Page
    foodAssistancePrograms: "Programas de Asistencia Alimentaria",
    ethnicMarkets: "Mercados Étnicos",
    filterByCategory: "Filtrar por Categoría",
    all: "Todos",
    noLocationsFound: "No se encontraron ubicaciones para esta categoría.",
    searchFoodLocations: "Buscar ubicaciones de comida",

    // Food Categories
    africanCaribbean: "Africano y Caribeño",
    asianMarkets: "Mercados Asiáticos",
    hispanicLatino: "Hispano y Latino",
    middleEasternMediterranean: "Medio Oriente y Mediterráneo",
    southAsian: "Asiático del Sur",
    halalMarkets: "Mercados Halal",
    european: "Europeo",
    specialty: "Especialidad",
    foodAssistance: "Asistencia Alimentaria",

    // Events
    computerLab: "Laboratorio de Computación",
    introductoryEnglishClass: "Clase de Inglés Introductoria",
    beginnerEnglish: "Inglés para Principiantes",
    onlineIntermediateEnglishClass: "Clase de Inglés Intermedio en Línea",
    dellaLambClients: "Clientes de Della Lamb",

    // Community Page
    languageLearningDesc: "Pide ayuda, recomienda tutores o comparte información sobre clases gratuitas de inglés aquí.",
    transportationHelpDesc: "Pregunta sobre cómo moverse por Kansas City, autobuses, bicicletas, viajes o direcciones.",
    commentsCount: "comentarios",
    hoursAgoShort: "hace horas",

    // Forms
    name: "Nombre",
    question: "Pregunta",
    organization: "Organización",
    descriptionOfService: "Descripción del Servicio Ofrecido",
    submit: "Enviar",
    cancel: "Cancelar",
    nameRequired: "El nombre es requerido",
    questionRequired: "La pregunta es requerida",
    organizationRequired: "La organización es requerida",
    serviceDescRequired: "La descripción del servicio es requerida",
  },
  
  fr: {
    appName: "LinkUp KC",
    selectLanguage: "Sélectionner la Langue",
    continue: "Continuer",
    
    home: "Accueil",
    explore: "Explorer",
    community: "Communauté",
    messages: "Messages",
    
    tagline: "Lier le Soutien. Grandir l'Appartenance.",
    featuredServices: "Services en Vedette",
    upcomingEvents: "Événements à Venir",
    
    messagesAndNotifications: "Messages et Notifications",
    notifications: "Notifications",
    
    comingSoon: "contenu à venir...",
    continuePrompting: "Continuez à demander pour remplir le contenu de cette page !",
    featureComingSoon: "Fonctionnalité à venir...",

    // Featured Services
    currentJobOpenings: "Offres d'Emploi Actuelles",
    childcareServices: "Garde d'Enfants",
    transportationServices: "Transport",

    // Job Openings
    customerServiceRep: "Représentant du Service Client",
    warehouseWorker: "Ouvrier d'Entrepôt",
    retailSales: "Associé de Vente au Détail",
    restaurantServer: "Serveur de Restaurant",
    customerServiceRepDesc: "Répondre aux appels et aider les clients - $15-18/hr, Centre KC",
    warehouseWorkerDesc: "Manutention de colis et expédition - $16-20/hr, Nord KC",
    retailSalesDesc: "Aider les clients et gérer l'inventaire - $14-17/hr, zone Plaza",
    restaurantServerDesc: "Prendre les commandes et servir les clients - $12/hr + pourboires, Crossroads",

    // Childcare Services
    dellaLambDaycare: "Centre Communautaire Della Lamb",
    headStartProgram: "Programme Head Start",
    kcmoChildcare: "Assistance Garde d'Enfants KCMO",
    familyDaycare: "Garderie Familiale Agréée",
    dellaLambDaycareDesc: "Garde d'enfants de qualité pour âges 6 semaines-5 ans, tarifs dégressifs",
    headStartProgramDesc: "Programme préscolaire gratuit pour familles à faible revenu, âges 3-5",
    kcmoChildcareDesc: "Aide financière pour familles qui travaillent, basée sur le revenu",
    familyDaycareDesc: "Soins à domicile dans votre quartier, horaires flexibles",

    // Transportation Services
    ridekc: "Système de Bus RideKC",
    kcStreetcar: "Tramway KC",
    uberLyft: "Uber et Lyft",
    bikekc: "Vélos Partagés BikeKC",
    ridekcDesc: "Routes de bus publiques dans toute la ville - $1.50 par trajet, transferts gratuits",
    kcStreetcarDesc: "Tramway gratuit de Union Station à River Market",
    uberLyftDesc: "Services de transport à la demande dans toute la zone métropolitaine",
    bikekcDesc: "Stations de vélos partagés au centre-ville - pass journalier $5 disponible",
    
    search: "Rechercher",
    englishClasses: "Cours d'Anglais",
    food: "Nourriture",
    legal: "Juridique",
    childcare: "Garde d'Enfants",
    healthSupport: "Soutien Santé",
    employment: "Emploi",
    transportation: "Transport",
    housing: "Logement",
    
    askQuestion: "Poser une question",
    offerHelp: "Offrir de l'Aide",
    discussions: "DISCUSSIONS",
    languageLearning: "Apprentissage des Langues",
    transportationHelp: "Aide au Transport",
    
    dentistAppointment: "Votre rendez-vous chez le dentiste est demain à 9h30",
    foodPantryHours: "La Banque Alimentaire a ajouté des heures mercredi",
    newEnglishClass: "Un nouveau cours d'anglais a été publié près de chez vous.",
    healthScreeningReminder: "Dépistage de santé gratuit disponible ce vendredi au Centre Communautaire",
    jobFairAnnouncement: "Salon de l'emploi ce jeudi - plus de 20 employeurs embauchent immédiatement",
    childcareOpenings: "Nouvelles places de garde d'enfants disponibles au Centre Communautaire Della Lamb",
    transportationUpdate: "Le tramway KC aura des horaires étendus pendant le week-end",
    communityEventReminder: "Dîner communautaire ce soir à 18h - tous les bienvenus !",
    housingAssistanceUpdate: "Le programme d'aide au logement d'urgence accepte de nouvelles candidatures",
    
    healthCenterMessage: "Oui, nous avons une disponibilité sans rendez-vous.",
    thanksMessage: "Merci, à demain.",
    homeworkHelpers: "Aides aux Devoirs",
    happyToHelp: "Bien sûr, je serais ravi d'aider !",
    
    today: "AUJOURD'HUI",
    yesterday: "HIER",
    hoursAgo: "il y a heures",
    comments: "commentaires",

    // Messages & Notifications
    samuelUHealthCenter: "Centre de Santé Samuel U Rogers",
    walkInAvailability: "Oui, nous avons une disponibilité sans rendez-vous.",
    gabrielaS: "Gabriela S.",
    seeYouTomorrow: "Merci, à demain.",
    homeworkHelpers: "Aides aux Devoirs",
    happyToHelpMsg: "Bien sûr, je serais ravi d'aider !",

    // Food Page
    foodAssistancePrograms: "Programmes d'Aide Alimentaire",
    ethnicMarkets: "Marchés Ethniques",
    filterByCategory: "Filtrer par Catégorie",
    all: "Tous",
    noLocationsFound: "Aucun emplacement trouvé pour cette catégorie.",
    searchFoodLocations: "Rechercher des emplacements alimentaires",

    // Food Categories
    africanCaribbean: "Africain et Caraïbes",
    asianMarkets: "Marchés Asiatiques",
    hispanicLatino: "Hispanique et Latino",
    middleEasternMediterranean: "Moyen-Orient et Méditerranéen",
    southAsian: "Asie du Sud",
    halalMarkets: "Marchés Halal",
    european: "Européen",
    specialty: "Spécialité",
    foodAssistance: "Aide Alimentaire",

    // Events
    computerLab: "Laboratoire Informatique",
    introductoryEnglishClass: "Cours d'Anglais d'Introduction",
    beginnerEnglish: "Anglais Débutant",
    onlineIntermediateEnglishClass: "Cours d'Anglais Intermédiaire en Ligne",
    dellaLambClients: "Clients de Della Lamb",

    // Community Page
    languageLearningDesc: "Demandez de l'aide, recommandez des tuteurs ou partagez des informations sur les cours d'anglais gratuits ici.",
    transportationHelpDesc: "Demandez comment vous déplacer à Kansas City, bus, vélos, trajets ou directions.",
    commentsCount: "commentaires",
    hoursAgoShort: "il y a heures",

    // Forms
    name: "Nom",
    question: "Question",
    organization: "Organisation",
    descriptionOfService: "Description du Service Offert",
    submit: "Soumettre",
    cancel: "Annuler",
    nameRequired: "Le nom est requis",
    questionRequired: "La question est requise",
    organizationRequired: "L'organisation est requise",
    serviceDescRequired: "La description du service est requise",
  },
  
  sw: {
    appName: "LinkUp KC",
    selectLanguage: "Chagua Lugha",
    continue: "Endelea",
    
    home: "Nyumbani",
    explore: "Gundua",
    community: "Jamii",
    messages: "Ujumbe",
    
    tagline: "Kuunganisha Msaada. Kukuza Uongozi.",
    featuredServices: "Huduma Maalum",
    upcomingEvents: "Matukio Yanayokuja",
    
    messagesAndNotifications: "Ujumbe na Arifa",
    notifications: "Arifa",
    
    comingSoon: "maudhui yanakuja hivi karibuni...",
    continuePrompting: "Endelea kuongea ili kujaza maudhui ya ukurasa huu!",
    featureComingSoon: "Kipengele kinakuja hivi karibuni...",

    // Featured Services
    currentJobOpenings: "Nafasi za Kazi za Sasa",
    childcareServices: "Utunzaji wa Watoto",
    transportationServices: "Usafiri",

    // Job Openings
    customerServiceRep: "Mwakilishi wa Huduma kwa Wateja",
    warehouseWorker: "Mfanyakazi wa Ghala",
    retailSales: "Mshirika wa Mauzo ya Rejareja",
    restaurantServer: "Mhudumu wa Mkahawa",
    customerServiceRepDesc: "Jibu simu na usaidie wateja - $15-18/saa",
    warehouseWorkerDesc: "Kushughulikia vifurushi - $16-20/saa",
    retailSalesDesc: "Kusaidia wateja - $14-17/saa",
    restaurantServerDesc: "Chukua maagizo - $12/saa + zawadi",

    // Childcare Services
    dellaLambDaycare: "Kituo cha Jamii cha Della Lamb",
    headStartProgram: "Programu ya Head Start",
    kcmoChildcare: "Msaada wa Utunzaji wa Watoto KCMO",
    familyDaycare: "Chuo cha Familia Kilichoruhusiwa",
    dellaLambDaycareDesc: "Utunzaji wa watoto wa ubora",
    headStartProgramDesc: "Programu ya kabla ya shule ya bure",
    kcmoChildcareDesc: "Msaada wa kifedha kwa familia",
    familyDaycareDesc: "Utunzaji wa nyumbani",

    // Transportation Services
    ridekc: "Mfumo wa Basi wa RideKC",
    kcStreetcar: "Gari la Mitaani la KC",
    uberLyft: "Uber na Lyft",
    bikekc: "Baiskeli za Kushiriki BikeKC",
    ridekcDesc: "Njia za basi za umma - $1.50",
    kcStreetcarDesc: "Gari la mitaani la bure",
    uberLyftDesc: "Huduma za usafiri za haraka",
    bikekcDesc: "Vituo vya baiskeli za kushiriki",
    
    search: "Tafuta",
    englishClasses: "Madarasa ya Kiingereza",
    food: "Chakula",
    legal: "Kisheria",
    childcare: "Utunzaji wa Watoto",
    healthSupport: "Msaada wa Afya",
    employment: "Ajira",
    transportation: "Usafiri",
    housing: "Makazi",
    
    askQuestion: "Uliza swali",
    offerHelp: "Toa Msaada",
    discussions: "MIJADALA",
    languageLearning: "Kujifunza Lugha",
    transportationHelp: "Msaada wa Usafiri",
    
    dentistAppointment: "Miadi yako ya daktari wa meno ni kesho saa 9:30 asubuhi",
    foodPantryHours: "Hifadhi ya Chakula imeongeza masaa Jumatano",
    newEnglishClass: "Darasa jipya la Kiingereza limechapishwa karibu nawe.",
    healthScreeningReminder: "Uchunguzi wa afya wa bure unapatikana Ijumaa hii katika Kituo cha Jamii",
    jobFairAnnouncement: "Maonesho ya kazi Alhamisi hii - zaidi ya waajiri 20 wanaajiri moja kwa moja",
    childcareOpenings: "Nafasi mpya za utunzaji wa watoto zinapatikana katika Kituo cha Jamii cha Della Lamb",
    transportationUpdate: "Treni ya KC itakuwa na masaa ya ziada wakati wa wikendi",
    communityEventReminder: "Chakula cha pamoja cha jamii leo usiku saa 6 - wote karibu!",
    housingAssistanceUpdate: "Programu ya msaada wa makazi ya dharura inakubali maombi mapya",
    
    healthCenterMessage: "Ndiyo, tuna upatikanaji wa Walk-in.",
    thanksMessage: "Asante, tutaonana kesho.",
    homeworkHelpers: "Wasaidizi wa Kazi za Nyumbani",
    happyToHelp: "Hakika, nitafurahi kusaidia!",
    
    today: "LEO",
    yesterday: "JANA",
    hoursAgo: "masaa yaliyopita",
    comments: "maoni",

    // Messages & Notifications
    samuelUHealthCenter: "Kituo cha Afya Samuel U Rogers",
    walkInAvailability: "Ndiyo, tuna upatikanaji wa kuja tu.",
    gabrielaS: "Gabriela S.",
    seeYouTomorrow: "Asante, tutaonana kesho.",
    homeworkHelpers: "Wasaidizi wa Kazi za Nyumbani",
    happyToHelpMsg: "Hakika, nitafurahi kusaidia!",

    // Food Page
    foodAssistancePrograms: "Mipango ya Msaada wa Chakula",
    ethnicMarkets: "Masoko ya Kikabila",
    filterByCategory: "Chuja kwa Jamii",
    all: "Yote",
    noLocationsFound: "Hakuna maeneo yaliyopatikana kwa jamii hii.",
    searchFoodLocations: "Tafuta maeneo ya chakula",

    // Food Categories
    africanCaribbean: "Afrika na Caribbean",
    asianMarkets: "Masoko ya Asia",
    hispanicLatino: "Hispania na Latino",
    middleEasternMediterranean: "Mashariki ya Kati na Mediterranean",
    southAsian: "Asia Kusini",
    halalMarkets: "Masoko ya Halal",
    european: "Ulaya",
    specialty: "Maalum",
    foodAssistance: "Msaada wa Chakula",

    // Events
    computerLab: "Maabara ya Kompyuta",
    introductoryEnglishClass: "Darasa la Kiingereza la Msingi",
    beginnerEnglish: "Kiingereza cha Waanzish",
    onlineIntermediateEnglishClass: "Darasa la Kiingereza la Kati Mtandaoni",
    dellaLambClients: "Wateja wa Della Lamb",

    // Community Page
    languageLearningDesc: "Omba msaada, pendekeza wakufunzi au shiriki habari za darasa la bure la Kiingereza hapa.",
    transportationHelpDesc: "Uliza kuhusu jinsi ya kusafiri Kansas City, mabasi, baiskeli, safari au maelekezo.",
    commentsCount: "maoni",
    hoursAgoShort: "masaa yaliyopita",

    // Forms
    name: "Jina",
    question: "Swali",
    organization: "Shirika",
    descriptionOfService: "Maelezo ya Huduma Inayotolewa",
    submit: "Wasilisha",
    cancel: "Ghairi",
    nameRequired: "Jina linahitajika",
    questionRequired: "Swali linahitajika",
    organizationRequired: "Shirika linahitajika",
    serviceDescRequired: "Maelezo ya huduma yanahitajika",
  },
  
  ar: {
    appName: "LinkUp KC",
    selectLanguage: "اختر اللغة",
    continue: "متابعة",
    
    home: "الرئيسية",
    explore: "استكشف",
    community: "المجتمع",
    messages: "ا��رسائل",
    
    tagline: "ربط الدعم. تنمية الانتماء.",
    featuredServices: "الخدمات المميزة",
    upcomingEvents: "الأحداث القادمة",
    
    messagesAndNotifications: "الرسائل والإشعارات",
    notifications: "الإشعارات",
    
    comingSoon: "المحتو���� قادم قريباً...",
    continuePrompting: "استمر في الطلب لملء محتوى هذه الصفحة!",
    featureComingSoon: "الميزة قادمة قريباً...",

    // Featured Services
    currentJobOpenings: "فرص العمل الحالية",
    childcareServices: "رعاية الأطفال",
    transportationServices: "النقل",

    // Job Openings
    customerServiceRep: "ممثل خدمة العملاء",
    warehouseWorker: "عامل مستودع",
    retailSales: "مندوب مبيعات بالتجزئة",
    restaurantServer: "نادل مطعم",
    customerServiceRepDesc: "الرد على المكالمات ومساعدة العملاء - $15-18/ساعة",
    warehouseWorkerDesc: "التعامل مع الطرود والشحن - $16-20/ساعة",
    retailSalesDesc: "مساعدة العملاء وإدارة المخزون - $14-17/ساعة",
    restaurantServerDesc: "أخذ الطلبات وخدمة العملاء - $12/ساعة + إكراميات",

    // Childcare Services
    dellaLambDaycare: "مركز ديلا لامب المجتمعي",
    headStartProgram: "برنامج هيد ستارت",
    kcmoChildcare: "مساعدة رعاية الأطفال KCMO",
    familyDaycare: "حضانة عائلية مرخصة",
    dellaLambDaycareDesc: "رعاية أطفال عالية الجودة",
    headStartProgramDesc: "برنامج ما قبل المدرسة المجاني",
    kcmoChildcareDesc: "المساعدة المالية للعائلات العاملة",
    familyDaycareDesc: "رعاية منزلية في حيك",

    // Transportation Services
    ridekc: "نظام حافلات RideKC",
    kcStreetcar: "ترام KC",
    uberLyft: "أوبر وليفت",
    bikekc: "مشاركة الدراجات BikeKC",
    ridekcDesc: "خطوط الحافلات العامة - $1.50",
    kcStreetcarDesc: "ترام مجاني",
    uberLyftDesc: "خدمات النقل عند الطلب",
    bikekcDesc: "محطات مشاركة الدراجات",
    
    search: "بحث",
    englishClasses: "دروس الإنجليزية",
    food: "طعام",
    legal: "قانوني",
    childcare: "رعاية الأطفال",
    healthSupport: "الدعم الصحي",
    employment: "التوظيف",
    transportation: "النقل",
    housing: "الإسكان",
    
    askQuestion: "اطرح سؤالاً",
    offerHelp: "تقديم المساعدة",
    discussions: "النقاشات",
    languageLearning: "تعلم اللغة",
    transportationHelp: "مساعدة النقل",
    
    dentistAppointment: "موعدك مع طبيب الأسنان غداً في الساعة 9:30 صباحاً",
    foodPantryHours: "أضاف مخزن الطعام ساعات يوم الأربعاء",
    newEnglishClass: "تم نشر درس إنجليزي جديد بالقرب منك.",
    healthScreeningReminder: "فحص صحي مجاني متاح يوم الجمعة في المركز المجتمعي",
    jobFairAnnouncement: "معرض الوظائف يوم الخميس - أكثر من 20 صاحب عمل يوظفون فوراً",
    childcareOpenings: "أماكن جديدة لرعاية الأطفال متاحة في مركز ديلا لامب المجتمعي",
    transportationUpdate: "سيكون لترام KC ساعات عمل ممدودة خلال عطلة نهاية الأسب��ع",
    communityEventReminder: "عشاء مجتمعي الليلة في الساعة 6 مساءً - الجميع مرحب بهم!",
    housingAssistanceUpdate: "برنامج مساعدة السكن الطارئ يقبل طلبات جديدة",
    
    healthCenterMessage: "نعم، لدينا توفر بدون موعد.",
    thanksMessage: "شكراً، أراك غداً.",
    homeworkHelpers: "مساعدي الواجبات المنزلية",
    happyToHelp: "بالتأكيد، سأكون سعيداً للمساعدة!",
    
    today: "اليوم",
    yesterday: "أمس",
    hoursAgo: "منذ ساعات",
    comments: "تعليقات",

    // Messages & Notifications
    samuelUHealthCenter: "مركز صاموئيل يو روجرز الصحي",
    walkInAvailability: "نعم، لدينا توفر بدون موعد.",
    gabrielaS: "جابرييلا س.",
    seeYouTomorrow: "شكراً، أراك غداً.",
    homeworkHelpers: "مساعدي الواجبات",
    happyToHelpMsg: "بالتأكيد، سأكون سعيداً للمساعدة!",

    // Food Page
    foodAssistancePrograms: "برامج المساعدة الغذائية",
    ethnicMarkets: "الأسواق العرقية",
    filterByCategory: "تصفية حسب الفئة",
    all: "الكل",
    noLocationsFound: "لم يتم العثور على مواقع لهذه الفئة.",
    searchFoodLocations: "البحث عن مواقع الطعام",

    // Food Categories
    africanCaribbean: "أفريقي وكاريبي",
    asianMarkets: "الأسواق الآسيوية",
    hispanicLatino: "هسباني ولاتيني",
    middleEasternMediterranean: "الشرق الأوسط والبحر المتوسط",
    southAsian: "جنوب آسيا",
    halalMarkets: "أسواق الحلال",
    european: "أوروبي",
    specialty: "متخصص",
    foodAssistance: "المساعدة الغذائية",

    // Events
    computerLab: "مختبر الكمبيوتر",
    introductoryEnglishClass: "فصل الإنجليزية التمهيدي",
    beginnerEnglish: "إنجليزية المبتدئين",
    onlineIntermediateEnglishClass: "فصل الإنجليزية المتوسط عبر الإنترنت",
    dellaLambClients: "عملاء ديلا لامب",

    // Community Page
    languageLearningDesc: "اطلب المساعدة أو أوصِ بمدرسين أو شارك معلومات فصول الإنجليزية المجانية هنا.",
    transportationHelpDesc: "اسأل عن التنقل في مدينة كانساس ��يتي والحافلات والدراجات والرحلات أو الاتجاهات.",
    commentsCount: "تعل��قات",
    hoursAgoShort: "منذ ساعات",

    // Forms
    name: "الاسم",
    question: "السؤال",
    organization: "المنظمة",
    descriptionOfService: "وصف الخدمة المقدمة",
    submit: "إرسال",
    cancel: "إلغاء",
    nameRequired: "الاسم مطلوب",
    questionRequired: "السؤال مطلوب",
    organizationRequired: "المنظمة مطلوبة",
    serviceDescRequired: "وصف الخدمة مطلوب",
  },
  
  uk: {
    appName: "LinkUp KC",
    selectLanguage: "Оберіть Мову",
    continue: "Продовжити",
    
    home: "Головна",
    explore: "Дослідити",
    community: "Спільнота",
    messages: "Повідомлення",
    
    tagline: "З'єднуючи Підтримку. Зростаючи Приналежність.",
    featuredServices: "Рекомендовані Послуги",
    upcomingEvents: "Майбутні Події",
    
    messagesAndNotifications: "Повідомлення та Сповіщення",
    notifications: "Сповіщення",
    
    comingSoon: "контент незабаром...",
    continuePrompting: "Продовжуйте запитувати, щоб заповнит�� вміст цієї сторінки!",
    featureComingSoon: "Функція незабаром...",

    // Featured Services
    currentJobOpenings: "Поточні Вакансії",
    childcareServices: "Догляд за Дітьми",
    transportationServices: "Транспорт",

    // Job Openings
    customerServiceRep: "Представник Служби Підтримки",
    warehouseWorker: "Працівник Складу",
    retailSales: "Асоціат Роздрібних Продажів",
    restaurantServer: "Офіціант Ресторану",
    customerServiceRepDesc: "Відповідати на дзвінки та допомагати клієнтам - $15-18/год",
    warehouseWorkerDesc: "Обробка пакетів та відвантаження - $16-20/год",
    retailSalesDesc: "Допомагати клієнтам та керувати інвентарем - $14-17/год",
    restaurantServerDesc: "Приймати замовлення та обслуговувати клієнтів - $12/год + чайові",

    // Childcare Services
    dellaLambDaycare: "Громадський Центр Делла Ламб",
    headStartProgram: "Програма Head Start",
    kcmoChildcare: "Допомога з Доглядом за Дітьми KCMO",
    familyDaycare: "Ліцензований Сімейний Садочок",
    dellaLambDaycareDesc: "Якісний догляд за дітьми",
    headStartProgramDesc: "Безкоштовна дошкільна програма",
    kcmoChildcareDesc: "Фінансова допомога для працюючих сімей",
    familyDaycareDesc: "Домашній догляд у вашому районі",

    // Transportation Services
    ridekc: "Автобусна Система RideKC",
    kcStreetcar: "Трамвай KC",
    uberLyft: "Uber та Lyft",
    bikekc: "Прокат Велосипедів BikeKC",
    ridekcDesc: "Громадські автобусні маршрути - $1.50",
    kcStreetcarDesc: "Безкоштовний трамвай",
    uberLyftDesc: "Послуги каршерингу на вимогу",
    bikekcDesc: "Станції прокату велосипедів",
    
    search: "Пошук",
    englishClasses: "Уроки Англійської",
    food: "Їжа",
    legal: "Юридичний",
    childcare: "Догляд за Дітьми",
    healthSupport: "Підтримка Здоров'я",
    employment: "Працевлаштування",
    transportation: "Транспорт",
    housing: "Житло",
    
    askQuestion: "Поставити питання",
    offerHelp: "Запропонувати Допомогу",
    discussions: "ОБГОВОРЕННЯ",
    languageLearning: "Вивчення Мови",
    transportationHelp: "Допомога з Транспортом",
    
    dentistAppointment: "Ваш прийом у стоматолога завтра о 9:30 ранку",
    foodPantryHours: "Продовольчий банк додав години у середу",
    newEnglishClass: "Новий урок англійської був опублікований поблизу вас.",
    healthScreeningReminder: "Безкоштовний медичний огляд доступний цієї п'ятниці в Громадському Центрі",
    jobFairAnnouncement: "Ярмарок вакансій цього четверга - понад 20 роботодавців наймають негайно",
    childcareOpenings: "Нові місця в дитячому садку доступні в Громадському Центрі Делла Ламб",
    transportationUpdate: "Трамвай KC матиме продовжені години роботи на вихідних",
    communityEventReminder: "Громадський вечеря сьогодні о 18:00 - усі запрошені!",
    housingAssistanceUpdate: "Програма екстреної житлової допомоги приймає нові заявки",
    
    healthCenterMessage: "Так, у нас є доступність без запису.",
    thanksMessage: "Дякую, побачимося завтра.",
    homeworkHelpers: "Помічники з Домашніми Завданнями",
    happyToHelp: "Звичайно, я буду радий допомогти!",
    
    today: "СЬОГОДНІ",
    yesterday: "ВЧОРА",
    hoursAgo: "годин тому",
    comments: "коментарі",

    // Messages & Notifications
    samuelUHealthCenter: "Медичний Центр Саму��ль У Роджерс",
    walkInAvailability: "Так, у нас є вільні місця без запису.",
    gabrielaS: "Габріела С.",
    seeYouTomorrow: "Дякую, побачимося завтра.",
    homeworkHelpers: "Помічники з Домашніми Завданнями",
    happyToHelpMsg: "Звичайно, я буду радий допомогти!",

    // Food Page
    foodAssistancePrograms: "Програми Продовольчої Допомоги",
    ethnicMarkets: "Етнічні Ринки",
    filterByCategory: "Фільтр за Категорією",
    all: "Всі",
    noLocationsFound: "Місць для цієї категорії не знайдено.",
    searchFoodLocations: "Пошук місць з їжею",

    // Food Categories
    africanCaribbean: "Африканський та Карибський",
    asianMarkets: "Азіатські Ринки",
    hispanicLatino: "Іспанський та Латино",
    middleEasternMediterranean: "Близький Схід та Середземномор'я",
    southAsian: "Південна Азія",
    halalMarkets: "Халяльні Ринки",
    european: "Єв��опейський",
    specialty: "Спеціальність",
    foodAssistance: "Продовольча Допомога",

    // Events
    computerLab: "Комп'ютерна Лабораторія",
    introductoryEnglishClass: "Вступний Клас Англійської",
    beginnerEnglish: "Англійська для Початківців",
    onlineIntermediateEnglishClass: "Онлайн Клас Англійської Середнього Рівня",
    dellaLambClients: "Клієнти Делла Ламб",

    // Community Page
    languageLearningDesc: "Попросіть допомоги, порекомендуйте викладачів або поділіться інформацією про безкоштовні уроки англійської тут.",
    transportationHelpDesc: "Запитайте про пересування по Канзас-Сіті, автобуси, велосипеди, поїздки або напрямки.",
    commentsCount: "коментарі",
    hoursAgoShort: "годин тому",

    // Forms
    name: "Ім'я",
    question: "Питання",
    organization: "Організація",
    descriptionOfService: "Опис Пропонованої Послуги",
    submit: "Надіслати",
    cancel: "Скасувати",
    nameRequired: "Ім'я обов'язкове",
    questionRequired: "Питання обов'язкове",
    organizationRequired: "Організація обов'язкова",
    serviceDescRequired: "Опис послуги обов'язковий",
  },
};
