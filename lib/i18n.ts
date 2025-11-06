"use client"

// Multi-language support for Lab68 Platform

export type Language = "en" | "es" | "fr" | "de" | "zh" | "ja" | "pt" | "ru" | "vi"

export interface Translations {
  // Navigation
  nav: {
    home: string
    dashboard: string
    projects: string
    aiTools: string
    community: string
    settings: string
    signIn: string
    signUp: string
    signOut: string
    todo: string
    meeting: string
    planning: string
    diagrams: string
  }
  // Auth
  auth: {
    signIn: string
    signUp: string
    email: string
    password: string
    name: string
    createAccount: string
    alreadyHaveAccount: string
    dontHaveAccount: string
    signInButton: string
    signUpButton: string
    rememberMe: string
  }
  // Dashboard
  dashboard: {
    welcomeBack: string
    happeningToday: string
    loading: string
    activeUsers: string
    totalBuilds: string
    repositories: string
    apiCalls: string
    recentProjects: string
    aiAssistant: string
    systemStatus: string
    askAnything: string
    send: string
    allSystemsOperational: string
    buildsInProgress: string
    connectedAndHealthy: string
  }
  // Settings
  settings: {
    title: string
    subtitle: string
    profile: string
    username: string
    email: string
    userId: string
    memberSince: string
    saveChanges: string
    notifications: string
    emailNotifications: string
    emailNotificationsDesc: string
    buildNotifications: string
    buildNotificationsDesc: string
    meetingNotifications: string
    meetingNotificationsDesc: string
    security: string
    currentPassword: string
    newPassword: string
    updatePassword: string
    appearance: string
    theme: string
    darkMode: string
    lightMode: string
    currentTheme: string
    comingSoon: string
    language: string
    selectLanguage: string
    dangerZone: string
    dangerZoneDesc: string
    deleteAccount: string
    avatar: string
    uploadAvatar: string
    removeAvatar: string
  }
  // Notifications
  notifications: {
    title: string
    noUpcoming: string
    startsIn: string
  }
  // Landing Page
  landing: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    mission: {
      title: string
      description: string
    }
    techStack: {
      title: string
    }
    community: {
      title: string
      description: string
    }
  }
  // To Do feature
  todo: {
    title: string
    subtitle: string
    addTask: string
    taskName: string
    taskDescription: string
    priority: string
    low: string
    medium: string
    high: string
    create: string
    noTasks: string
    startAdding: string
    completed: string
    pending: string
    markComplete: string
    markIncomplete: string
    delete: string
  }
  // Meeting feature
  meeting: {
    title: string
    subtitle: string
    scheduleMeeting: string
    meetingTitle: string
    meetingDescription: string
    date: string
    time: string
    duration: string
    minutes: string
    schedule: string
    noMeetings: string
    startScheduling: string
    upcoming: string
    past: string
    cancel: string
  }
  // Planning feature
  planning: {
    title: string
    subtitle: string
    createPlan: string
    planName: string
    planDescription: string
    startDate: string
    endDate: string
    status: string
    notStarted: string
    inProgress: string
    completed: string
    create: string
    noPlans: string
    startPlanning: string
    addMilestone: string
    milestoneName: string
    milestoneDate: string
    delete: string
  }
  // Projects feature
  projects: {
    title: string
    subtitle: string
    newProject: string
    projectName: string
    projectDescription: string
    technologies: string
    status: string
    active: string
    building: string
    inProgress: string
    create: string
    noProjects: string
    startCreating: string
    lastUpdated: string
    edit: string
    delete: string
    cancel: string
    save: string
    editProject: string
    kanban: string
    viewKanban: string
    collaborators: string
    addCollaborator: string
    inviteByEmail: string
    invite: string
    removeCollaborator: string
    owner: string
    noCollaborators: string
  }
  // Community feature
  community: {
    title: string
    subtitle: string
    newDiscussion: string
    discussionTitle: string
    discussionContent: string
    category: string
    selectCategory: string
    customCategory: string
    post: string
    noDiscussions: string
    startDiscussion: string
    replies: string
    by: string
    cancel: string
    // Predefined categories
    general: string
    help: string
    showcase: string
    feedback: string
    announcements: string
  }
  // Kanban feature
  kanban: {
    title: string
    backToProjects: string
    addCard: string
    addColumn: string
    columnName: string
    cardTitle: string
    cardDescription: string
    assignee: string
    dueDate: string
    create: string
    cancel: string
    deleteCard: string
    deleteColumn: string
    editCard: string
    save: string
    noCards: string
    dragCard: string
  }
  diagrams: {
    editLabel: string
    title: string
    createNew: string
    noDiagrams: string
    noDiagramsDesc: string
    diagramName: string
    description: string
    create: string
    edit: string
    delete: string
    confirmDelete: string
    cancel: string
    save: string
    addNode: string
    addConnection: string
    nodeTypes: {
      start: string
      process: string
      decision: string
      end: string
      data: string
    }
    tools: {
      select: string
      move: string
      delete: string
      connect: string
    }
    exportImage: string
    exportJSON: string
    clear: string
    zoom: string
  }
  // Files feature
  files: {
    title: string
    subtitle: string
    uploadFile: string
    addLink: string
    fileName: string
    fileDescription: string
    fileUrl: string
    linkUrl: string
    linkTitle: string
    linkDescription: string
    upload: string
    addLinkButton: string
    cancel: string
    noFiles: string
    startUploading: string
    uploadedBy: string
    linkedBy: string
    delete: string
    download: string
    openLink: string
    type: string
    uploaded: string
    linked: string
    relatedTo: string
    project: string
    task: string
    meeting: string
    design: string
    documentation: string
    planning: string
    research: string
    general: string
  }
  // Wiki feature
  wiki: {
    title: string
    subtitle: string
    createArticle: string
    articleTitle: string
    articleContent: string
    category: string
    tags: string
    tagsPlaceholder: string
    create: string
    edit: string
    delete: string
    cancel: string
    save: string
    noArticles: string
    startWriting: string
    lastUpdated: string
    author: string
    readMore: string
    backToList: string
    confirmDelete: string
    // Categories
    processes: string
    bestPractices: string
    projectSummaries: string
    tutorials: string
    documentation: string
    guidelines: string
    api: string
    troubleshooting: string
    faq: string
    architecture: string
  }
}

const defaultFilesTranslations = {
  title: "Files & Documents",
  subtitle: "Store, share, and manage project files and links",
  uploadFile: "Upload File",
  addLink: "Add Link",
  fileName: "File Name",
  fileDescription: "Description",
  fileUrl: "File URL",
  linkUrl: "Link URL",
  linkTitle: "Link Title",
  linkDescription: "Link Description",
  upload: "Upload",
  addLinkButton: "Add Link",
  cancel: "Cancel",
  noFiles: "No files or links yet",
  startUploading: "Upload your first file or add a link to get started",
  uploadedBy: "Uploaded by",
  linkedBy: "Added by",
  delete: "Delete",
  download: "Download",
  openLink: "Open Link",
  type: "Type",
  uploaded: "Uploaded",
  linked: "Link",
  relatedTo: "Related To",
  project: "Project",
  task: "Task",
  meeting: "Meeting",
  design: "Design",
  documentation: "Documentation",
  planning: "Planning",
  research: "Research",
  general: "General",
}

const defaultWikiTranslations = {
  title: "Knowledge Base",
  subtitle: "Document processes, best practices, and project summaries",
  createArticle: "Create Article",
  articleTitle: "Article Title",
  articleContent: "Content",
  category: "Category",
  tags: "Tags",
  tagsPlaceholder: "Add tags separated by commas",
  create: "Create",
  edit: "Edit",
  delete: "Delete",
  cancel: "Cancel",
  save: "Save",
  noArticles: "No articles yet",
  startWriting: "Create your first article to start building your knowledge base",
  lastUpdated: "Last updated",
  author: "Author",
  readMore: "Read More",
  backToList: "Back to Articles",
  confirmDelete: "Are you sure you want to delete this article?",
  processes: "Processes",
  bestPractices: "Best Practices",
  projectSummaries: "Project Summaries",
  tutorials: "Tutorials",
  documentation: "Documentation",
  guidelines: "Guidelines",
  api: "API Reference",
  troubleshooting: "Troubleshooting",
  faq: "FAQ",
  architecture: "Architecture",
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      dashboard: "Dashboard",
      projects: "Projects",
      aiTools: "AI Tools",
      community: "Community",
      settings: "Settings",
      signIn: "Sign In",
      signUp: "Sign Up",
      signOut: "Sign Out",
      todo: "To Do",
      meeting: "Meeting",
      planning: "Planning",
      diagrams: "Flow & Diagrams",
    },
    auth: {
      signIn: "Sign In",
      signUp: "Sign Up",
      email: "Email",
      password: "Password",
      name: "Name",
      createAccount: "Create Account",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
      signInButton: "Sign In",
      signUpButton: "Sign Up",
      rememberMe: "Remember me",
    },
    dashboard: {
      welcomeBack: "Welcome back",
      happeningToday: "Here's what's happening with your projects today.",
      loading: "Loading...",
      activeUsers: "Active Users",
      totalBuilds: "Total Builds",
      repositories: "Repositories",
      apiCalls: "API Calls",
      recentProjects: "Recent Projects",
      aiAssistant: "AI Assistant",
      systemStatus: "System Status",
      askAnything: "Ask me anything...",
      send: "Send",
      allSystemsOperational: "All systems operational",
      buildsInProgress: "builds in progress",
      connectedAndHealthy: "Connected and healthy",
    },
    settings: {
      title: "Settings",
      subtitle: "Manage your account and preferences",
      profile: "Profile",
      username: "Username",
      email: "Email",
      userId: "User ID",
      memberSince: "Member Since",
      saveChanges: "Save Changes",
      notifications: "Notifications",
      emailNotifications: "Email Notifications",
      emailNotificationsDesc: "Receive updates about your projects",
      buildNotifications: "Build Notifications",
      buildNotificationsDesc: "Get notified when builds complete",
      meetingNotifications: "Meeting Notifications",
      meetingNotificationsDesc: "Get notified about upcoming meetings",
      security: "Security",
      currentPassword: "Current Password",
      newPassword: "New Password",
      updatePassword: "Update Password",
      appearance: "Appearance",
      theme: "Theme",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      currentTheme: "Current theme",
      comingSoon: "Coming soon",
      language: "Language",
      selectLanguage: "Select your preferred language",
      dangerZone: "Danger Zone",
      dangerZoneDesc: "Irreversible actions that will permanently affect your account",
      deleteAccount: "Delete Account",
      avatar: "Profile Picture",
      uploadAvatar: "Upload Photo",
      removeAvatar: "Remove",
    },
    notifications: {
      title: "Notifications",
      noUpcoming: "No upcoming meetings",
      startsIn: "Starts in",
    },
    landing: {
      hero: {
        title: "Think. Code. Test. Ship.",
        subtitle: "The ultimate platform for developers who build, learn, and collaborate.",
        cta: "Enter Lab68",
      },
      mission: {
        title: "Our Mission",
        description:
          "Lab68 is a brutalist developer platform designed for those who value function over form. We provide the tools, community, and resources you need to build exceptional software.",
      },
      techStack: {
        title: "Tech Stack",
      },
      community: {
        title: "Join the Community",
        description: "Connect with developers worldwide. Share knowledge. Build together.",
      },
    },
    todo: {
      title: "To Do",
      subtitle: "Manage your tasks and stay organized",
      addTask: "Add Task",
      taskName: "Task Name",
      taskDescription: "Task Description",
      priority: "Priority",
      low: "Low",
      medium: "Medium",
      high: "High",
      create: "Create Task",
      noTasks: "No tasks yet",
      startAdding: "Start adding tasks to stay organized",
      completed: "Completed",
      pending: "Pending",
      markComplete: "Mark Complete",
      markIncomplete: "Mark Incomplete",
      delete: "Delete",
    },
    meeting: {
      title: "Meeting",
      subtitle: "Schedule and manage your meetings",
      scheduleMeeting: "Schedule Meeting",
      meetingTitle: "Meeting Title",
      meetingDescription: "Meeting Description",
      date: "Date",
      time: "Time",
      duration: "Duration",
      minutes: "minutes",
      schedule: "Schedule Meeting",
      noMeetings: "No meetings scheduled",
      startScheduling: "Start scheduling meetings to stay organized",
      upcoming: "Upcoming",
      past: "Past",
      cancel: "Cancel Meeting",
    },
    planning: {
      title: "Planning",
      subtitle: "Plan and track your projects",
      createPlan: "Create Plan",
      planName: "Plan Name",
      planDescription: "Plan Description",
      startDate: "Start Date",
      endDate: "End Date",
      status: "Status",
      notStarted: "Not Started",
      inProgress: "In Progress",
      completed: "Completed",
      create: "Create Plan",
      noPlans: "No plans yet",
      startPlanning: "Start planning your projects",
      addMilestone: "Add Milestone",
      milestoneName: "Milestone Name",
      milestoneDate: "Milestone Date",
      delete: "Delete",
    },
    projects: {
      title: "Projects",
      subtitle: "Manage and monitor your development projects",
      newProject: "New Project",
      projectName: "Project Name",
      projectDescription: "Project Description",
      technologies: "Technologies (comma separated)",
      status: "Status",
      active: "Active",
      building: "Building",
      inProgress: "In Progress",
      create: "Create Project",
      noProjects: "No projects yet",
      startCreating: "Start creating projects to track your work",
      lastUpdated: "Last updated",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      save: "Save Changes",
      editProject: "Edit Project",
      kanban: "Kanban Board",
      viewKanban: "View Kanban",
      collaborators: "Collaborators",
      addCollaborator: "Add Collaborator",
      inviteByEmail: "Invite by email",
      invite: "Invite",
      removeCollaborator: "Remove",
      owner: "Owner",
      noCollaborators: "No collaborators yet",
    },
    community: {
      title: "Community",
      subtitle: "Connect with developers, share knowledge, and collaborate",
      newDiscussion: "New Discussion",
      discussionTitle: "Discussion Title",
      discussionContent: "What's on your mind?",
      category: "Category",
      selectCategory: "Select a category",
      customCategory: "Custom Category Name",
      post: "Post Discussion",
      noDiscussions: "No discussions yet",
      startDiscussion: "Be the first to start a discussion",
      replies: "replies",
      by: "by",
      cancel: "Cancel",
      general: "General",
      help: "Help",
      showcase: "Showcase",
      feedback: "Feedback",
      announcements: "Announcements",
    },
    kanban: {
      title: "Kanban Board",
      backToProjects: "Back to Projects",
      addCard: "Add Card",
      addColumn: "Add Column",
      columnName: "Column Name",
      cardTitle: "Card Title",
      cardDescription: "Card Description",
      assignee: "Assignee",
      dueDate: "Due Date",
      create: "Create",
      cancel: "Cancel",
      deleteCard: "Delete Card",
      deleteColumn: "Delete Column",
      editCard: "Edit Card",
      save: "Save Changes",
      noCards: "No cards yet",
      dragCard: "Drag cards between columns",
    },
    diagrams: {
      title: "Flow & Diagrams",
      createNew: "Create New Diagram",
      noDiagrams: "No diagrams yet",
      noDiagramsDesc: "Create your first flowchart or diagram to visualize your processes",
      diagramName: "Diagram Name",
      description: "Description",
      create: "Create",
      edit: "Edit",
      delete: "Delete",
      confirmDelete: "Are you sure you want to delete this diagram?",
      cancel: "Cancel",
      save: "Save",
      addNode: "Add Node",
      addConnection: "Add Connection",
      nodeTypes: {
        start: "Start",
        process: "Process",
        decision: "Decision",
        end: "End",
        data: "Data",
      },
      tools: {
        select: "Select",
        move: "Move",
        delete: "Delete",
        connect: "Connect",
      },
      exportImage: "Export as Image",
      exportJSON: "Export as JSON",
      clear: "Clear Canvas",
      zoom: "Zoom",
      editLabel: ""
    },
    files: {
      title: "Files & Documents",
      subtitle: "Store, share, and manage project files and links",
      uploadFile: "Upload File",
      addLink: "Add Link",
      fileName: "File Name",
      fileDescription: "Description",
      fileUrl: "File URL",
      linkUrl: "Link URL",
      linkTitle: "Link Title",
      linkDescription: "Link Description",
      upload: "Upload",
      addLinkButton: "Add Link",
      cancel: "Cancel",
      noFiles: "No files or links yet",
      startUploading: "Upload your first file or add a link to get started",
      uploadedBy: "Uploaded by",
      linkedBy: "Added by",
      delete: "Delete",
      download: "Download",
      openLink: "Open Link",
      type: "Type",
      uploaded: "Uploaded",
      linked: "Link",
      relatedTo: "Related To",
      project: "Project",
      task: "Task",
      meeting: "Meeting",
      design: "Design",
      documentation: "Documentation",
      planning: "Planning",
      research: "Research",
      general: "General",
    },
    wiki: {
      title: "Knowledge Base",
      subtitle: "Document processes, best practices, and project summaries",
      createArticle: "Create Article",
      articleTitle: "Article Title",
      articleContent: "Content",
      category: "Category",
      tags: "Tags",
      tagsPlaceholder: "Add tags separated by commas",
      create: "Create",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      save: "Save",
      noArticles: "No articles yet",
      startWriting: "Create your first article to start building your knowledge base",
      lastUpdated: "Last updated",
      author: "Author",
      readMore: "Read More",
      backToList: "Back to Articles",
      confirmDelete: "Are you sure you want to delete this article?",
      processes: "Processes",
      bestPractices: "Best Practices",
      projectSummaries: "Project Summaries",
      tutorials: "Tutorials",
      documentation: "Documentation",
      guidelines: "Guidelines",
      api: "API Reference",
      troubleshooting: "Troubleshooting",
      faq: "FAQ",
      architecture: "Architecture",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      dashboard: "Panel",
      projects: "Proyectos",
      aiTools: "Herramientas IA",
      community: "Comunidad",
      settings: "Configuración",
      signIn: "Iniciar Sesiión",
      signUp: "Registrarse",
      signOut: "Cerrar Sesiión",
      todo: "Tareas",
      meeting: "Reuniones",
      planning: "Planificaciión",
      diagrams: "Flujo y Diagramas",
    },
    auth: {
      signIn: "Iniciar Sesiión",
      signUp: "Registrarse",
      email: "Correo Electrónico",
      password: "Contraseña",
      name: "Nombre",
      createAccount: "Crear Cuenta",
      alreadyHaveAccount: "¿Ya tienes una cuenta?",
      dontHaveAccount: "¿No tienes una cuenta?",
      signInButton: "Iniciar Sesiión",
      signUpButton: "Registrarse",
      rememberMe: "Recuérdame",
    },
    dashboard: {
      welcomeBack: "Bienvenido de nuevo",
      happeningToday: "Esto es lo que está pasando con tus proyectos hoy.",
      loading: "Cargando...",
      activeUsers: "Usuarios Activos",
      totalBuilds: "Compilaciones Totales",
      repositories: "Repositorios",
      apiCalls: "Llamadas API",
      recentProjects: "Proyectos Recientes",
      aiAssistant: "Asistente IA",
      systemStatus: "Estado del Sistema",
      askAnything: "Pregúntame cualquier cosa...",
      send: "Enviar",
      allSystemsOperational: "Todos los sistemas operativos",
      buildsInProgress: "compilaciones en progreso",
      connectedAndHealthy: "Conectado y saludable",
    },
    settings: {
      title: "Configuración",
      subtitle: "Administra tu cuenta y preferences",
      profile: "Perfil",
      username: "Nombre de Usuario",
      email: "Correo Electrónico",
      userId: "ID de Usuario",
      memberSince: "Miembro Desde",
      saveChanges: "Guardar Cambios",
      notifications: "Notificaciones",
      emailNotifications: "Notificaciones por Correo",
      emailNotificationsDesc: "Recibe actualizaciones sobre tus proyectos",
      buildNotifications: "Notificaciones de Compilación",
      buildNotificationsDesc: "Recibe notificaciones cuando se completen las compilaciones",
      meetingNotifications: "Notificaciones de Reuniones",
      meetingNotificationsDesc: "Recibe notificaciones sobre próximas reuniones",
      security: "Seguridad",
      currentPassword: "Contraseña Actual",
      newPassword: "Nueva Contraseña",
      updatePassword: "Actualizar Contraseña",
      appearance: "Apariencia",
      theme: "Tema",
      darkMode: "Modo Oscuro",
      lightMode: "Modo Claro",
      currentTheme: "Tema actual",
      comingSoon: "Próximamente",
      language: "Idioma",
      selectLanguage: "Selecciona tu idioma preferido",
      dangerZone: "Zona de Peligro",
      dangerZoneDesc: "Acciones irreversibles que afectarán permanentemente tu cuenta",
      deleteAccount: "Eliminar Cuenta",
      avatar: "Foto de Perfil",
      uploadAvatar: "Subir Foto",
      removeAvatar: "Eliminar",
    },
    notifications: {
      title: "Notificaciones",
      noUpcoming: "No hay reuniones próximas",
      startsIn: "Comienza en",
    },
    landing: {
      hero: {
        title: "Piensa. Codifica. Prueba. Envâa.",
        subtitle: "La plataforma definitiva para desarrolladores que construyen, aprenden y colaboran.",
        cta: "Entrar a Lab68",
      },
      mission: {
        title: "Nuestra Misión",
        description:
          "Lab68 es una plataforma de desarrollo brutalista diseñada para aquellos que valoran la función sobre la forma. Proporcionamos las herramientas, la comunidad y los recursos que necesitas para construir software excepcional.",
      },
      techStack: {
        title: "Stack Tecnológico",
      },
      community: {
        title: "Únete a la Comunidad",
        description: "Conéctate con desarrolladores de todo el mundo. Comparte conocimiento. Construye juntos.",
      },
    },
    todo: {
      title: "Tareas",
      subtitle: "Gestiona tus tareas y mantente organizado",
      addTask: "Agregar Tarea",
      taskName: "Nombre de la Tarea",
      taskDescription: "Descripciión de la Tarea",
      priority: "Prioridad",
      low: "Baja",
      medium: "Media",
      high: "Alta",
      create: "Crear Tarea",
      noTasks: "No hay tareas aún",
      startAdding: "Comienza a agregar tareas para mantenerte organizado",
      completed: "Completadas",
      pending: "Pendientes",
      markComplete: "Marcar Completa",
      markIncomplete: "Marcar Incompleta",
      delete: "Eliminar",
    },
    meeting: {
      title: "Reuniones",
      subtitle: "Programa y gestiona tus reuniones",
      scheduleMeeting: "Programar Reuniión",
      meetingTitle: "Tâtulo de la Reuniión",
      meetingDescription: "Descripciión de la Reuniión",
      date: "Fecha",
      time: "Hora",
      duration: "Duraciión",
      minutes: "minutos",
      schedule: "Programar Reuniión",
      noMeetings: "No hay reuniones programadas",
      startScheduling: "Comienza a programar reuniones para mantenerte organizado",
      upcoming: "Prióximas",
      past: "Pasadas",
      cancel: "Cancelar Reuniión",
    },
    planning: {
      title: "Planificaciión",
      subtitle: "Planifica y rastrea tus proyectos",
      createPlan: "Crear Plan",
      planName: "Nombre del Plan",
      planDescription: "Descripciión del Plan",
      startDate: "Fecha de Inicio",
      endDate: "Fecha de Fin",
      status: "Estado",
      notStarted: "No Iniciado",
      inProgress: "En Progreso",
      completed: "Completado",
      create: "Crear Plan",
      noPlans: "No hay planes aún",
      startPlanning: "Comienza a planificar tus proyectos",
      addMilestone: "Agregar Hito",
      milestoneName: "Nombre del Hito",
      milestoneDate: "Fecha del Hito",
      delete: "Eliminar",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Administra y monitorea tus proyectos de desarrollo",
      newProject: "Nuevo Proyecto",
      projectName: "Nombre del Proyecto",
      projectDescription: "Descripciión del Proyecto",
      technologies: "Tecnologâas (separadas por comas)",
      status: "Status",
      active: "Activo",
      building: "Construyendo",
      inProgress: "En Progreso",
      create: "Crear Proyecto",
      noProjects: "Aún no hay proyectos",
      startCreating: "Comienza a crear proyectos para rastrear tu trabajo",
      lastUpdated: "Última actualizaciión",
      edit: "Editar",
      delete: "Eliminar",
      cancel: "Cancelar",
      save: "Guardar Cambios",
      editProject: "Editar Proyecto",
      kanban: "Tablero Kanban",
      viewKanban: "Ver Kanban",
      collaborators: "Colaboradores",
      addCollaborator: "Agregar Colaborador",
      inviteByEmail: "Invitar por correo",
      invite: "Invitar",
      removeCollaborator: "Eliminar",
      owner: "Propietario",
      noCollaborators: "Aún no hay colaboradores",
    },
    community: {
      title: "Comunidad",
      subtitle: "Conéctate con desarrolladores, comparte conocimiento y colabora",
      newDiscussion: "Nueva Discusiión",
      discussionTitle: "Tâtulo de la Discusiión",
      discussionContent: "¿Qué estás pensando?",
      category: "Categorâa",
      selectCategory: "Selecciona una categorâa",
      customCategory: "Nombre de Categorâa Personalizada",
      post: "Publicar Discusiión",
      noDiscussions: "Aún no hay discusiones",
      startDiscussion: "Sé el primero en iniciar una discusiión",
      replies: "respuestas",
      by: "por",
      cancel: "Cancelar",
      general: "General",
      help: "Ayuda",
      showcase: "Mostrar",
      feedback: "Comentarios",
      announcements: "Anuncios",
    },
    kanban: {
      title: "Tablero Kanban",
      backToProjects: "Volver a Proyectos",
      addCard: "Agregar Tarjeta",
      addColumn: "Agregar Columna",
      columnName: "Nombre de Columna",
      cardTitle: "Tâtulo de Tarjeta",
      cardDescription: "Descripciión de Tarjeta",
      assignee: "Asignado a",
      dueDate: "Fecha de Vencimiento",
      create: "Crear",
      cancel: "Cancelar",
      deleteCard: "Eliminar Tarjeta",
      deleteColumn: "Eliminar Columna",
      editCard: "Editar Tarjeta",
      save: "Guardar Cambios",
      noCards: "Aún no hay tarjetas",
      dragCard: "Arrastra tarjetas entre columnas",
    },
    diagrams: {
      title: "Flujo y Diagramas",
      createNew: "Crear Nuevo Diagrama",
      noDiagrams: "Aún no hay diagramas",
      noDiagramsDesc: "Crea tu primer diagrama de flujo para visualizar tus procesos",
      diagramName: "Nombre del Diagrama",
      description: "Descripciión",
      create: "Crear",
      edit: "Editar",
      delete: "Eliminar",
      confirmDelete: "¿Estás seguro de que quieres eliminar este diagrama?",
      cancel: "Cancelar",
      save: "Guardar",
      addNode: "Agregar Nodo",
      addConnection: "Agregar Conexiión",
      nodeTypes: {
        start: "Inicio",
        process: "Proceso",
        decision: "Decisiión",
        end: "Fin",
        data: "Datos",
      },
      tools: {
        select: "Seleccionar",
        move: "Mover",
        delete: "Eliminar",
        connect: "Conectar",
      },
      exportImage: "Exportar como Imagen",
      exportJSON: "Exportar como JSON",
      clear: "Limpiar Lienzo",
      zoom: "Zoom",
      editLabel: ""
    },
    files: {
      title: "Archivos y Documentos",
      subtitle: "Almacenar, compartir y gestionar archivos y enlaces de proyectos",
      uploadFile: "Subir Archivo",
      addLink: "Agregar Enlace",
      fileName: "Nombre del Archivo",
      fileDescription: "Descripciión",
      fileUrl: "URL del Archivo",
      linkUrl: "URL del Enlace",
      linkTitle: "Tâtulo del Enlace",
      linkDescription: "Descripciión del Enlace",
      upload: "Subir",
      addLinkButton: "Agregar Enlace",
      cancel: "Cancelar",
      noFiles: "Sin archivos o enlaces aún",
      startUploading: "Sube tu primer archivo o agrega un enlace para comenzar",
      uploadedBy: "Subido por",
      linkedBy: "Agregado por",
      delete: "Eliminar",
      download: "Descargar",
      openLink: "Abrir Enlace",
      type: "Tipo",
      uploaded: "Subido",
      linked: "Enlace",
      relatedTo: "Relacionado con",
      project: "Proyecto",
      task: "Tarea",
      meeting: "Reuniión",
      design: "Diseño",
      documentation: "Documentaciión",
      planning: "Planificaciión",
      research: "Investigaciión",
      general: "General",
    },
    wiki: {
      title: "Base de Conocimientos",
      subtitle: "Documentar procesos, mejores prácticas y resúmenes de proyectos",
      createArticle: "Crear Artâculo",
      articleTitle: "Tâtulo del Artâculo",
      articleContent: "Contenido",
      category: "Categorâa",
      tags: "Etiquetas",
      tagsPlaceholder: "Agregar etiquetas separadas por comas",
      create: "Crear",
      edit: "Editar",
      delete: "Eliminar",
      cancel: "Cancelar",
      save: "Guardar",
      noArticles: "Sin artâculos aún",
      startWriting: "Crea tu primer artâculo para comenzar a construir tu base de conocimientos",
      lastUpdated: "Última actualizaciión",
      author: "Autor",
      readMore: "Leer Más",
      backToList: "Volver a Artâculos",
      confirmDelete: "¿Estás seguro de que quieres eliminar este artâculo?",
      processes: "Procesos",
      bestPractices: "Mejores Prácticas",
      projectSummaries: "Resúmenes de Proyectos",
      tutorials: "Tutoriales",
      documentation: "Documentaciión",
      guidelines: "Directrices",
      api: "Referencia API",
      troubleshooting: "Soluciión de Problemas",
      faq: "Preguntas Frecuentes",
      architecture: "Arquitectura",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      dashboard: "Tableau de Bord",
      projects: "Projets",
      aiTools: "Outils IA",
      community: "Communauté",
      settings: "Paramètres",
      signIn: "Se Connecter",
      signUp: "S'inscrire",
      signOut: "Se Déconnecter",
      todo: "Tâches",
      meeting: "Réunions",
      planning: "Planification",
      diagrams: "Flux et Diagrammes",
    },
    auth: {
      signIn: "Se Connecter",
      signUp: "S'inscrire",
      email: "Email",
      password: "Mot de Passe",
      name: "Nom",
      createAccount: "Créer un Compte",
      alreadyHaveAccount: "Vous avez déjà un compte?",
      dontHaveAccount: "Vous n'avez pas de compte?",
      signInButton: "Se Connecter",
      signUpButton: "S'inscrire",
      rememberMe: "Se souvenir de moi",
    },
    dashboard: {
      welcomeBack: "Bon retour",
      happeningToday: "Voici ce qui se passe avec vos projets aujourd'hui.",
      loading: "Chargement...",
      activeUsers: "Utilisateurs Actifs",
      totalBuilds: "Builds Totaux",
      repositories: "Dépôts",
      apiCalls: "Appels API",
      recentProjects: "Projets Récents",
      aiAssistant: "Assistant IA",
      systemStatus: "État du Système",
      askAnything: "Demandez-moi n'importe quoi...",
      send: "Envoyer",
      allSystemsOperational: "Tous les systèmes opérationnels",
      buildsInProgress: "builds en cours",
      connectedAndHealthy: "Connecté et en bonne santé",
    },
    settings: {
      title: "Paramètres",
      subtitle: "Gérez votre compte et vos préférences",
      profile: "Profil",
      username: "Nom d'Utilisateur",
      email: "Email",
      userId: "ID Utilisateur",
      memberSince: "Membre Depuis",
      saveChanges: "Enregistrer les Modifications",
      notifications: "Notifications",
      emailNotifications: "Notifications par Email",
      emailNotificationsDesc: "Recevez des mises â  jour sur vos projets",
      buildNotifications: "Notifications de Build",
      buildNotificationsDesc: "Soyez notifié lorsque les builds sont terminés",
      meetingNotifications: "Notifications de Réunion",
      meetingNotificationsDesc: "Recevoir des notifications sur les réunions à venir",
      avatar: "Photo de Profil",
      uploadAvatar: "Télécharger une Photo",
      removeAvatar: "Supprimer",
      security: "Sécurité",
      currentPassword: "Mot de Passe Actuel",
      newPassword: "Nouveau Mot de Passe",
      updatePassword: "Mettre â  Jour le Mot de Passe",
      appearance: "Apparence",
      theme: "Thème",
      darkMode: "Mode Sombre",
      lightMode: "Mode Clair",
      currentTheme: "Thème actuel",
      comingSoon: "Bientôt disponible",
      language: "Langue",
      selectLanguage: "Sélectionnez votre langue préférée",
      dangerZone: "Zone de Danger",
      dangerZoneDesc: "Actions irréversibles qui affecteront définitivement votre compte",
      deleteAccount: "Supprimer le Compte",
    },
    notifications: {
      title: "Notifications",
      noUpcoming: "Aucune réunion à venir",
      startsIn: "Commence dans",
    },
    landing: {
      hero: {
        title: "Penser. Coder. Tester. Livrer.",
        subtitle: "La plateforme ultime pour les développeurs qui construisent, apprennent et collaborent.",
        cta: "Entrer dans Lab68",
      },
      mission: {
        title: "Notre Mission",
        description:
          "Lab68 est une plateforme de développement brutaliste conçue pour ceux qui valorisent la fonction plutôt que la forme. Nous fournissons les outils, la communauté et les ressources dont vous avez besoin pour créer des logiciels exceptionnels.",
      },
      techStack: {
        title: "Stack Technologique",
      },
      community: {
        title: "Rejoignez la Communauté",
        description:
          "Connectez-vous avec des développeurs du monde entier. Partagez vos connaissances. Construisez ensemble.",
      },
    },
    todo: {
      title: "Tâches",
      subtitle: "Gérez vos tâches et restez organisé",
      addTask: "Ajouter une Tâche",
      taskName: "Nom de la Tâche",
      taskDescription: "Description de la Tâche",
      priority: "Priorité",
      low: "Basse",
      medium: "Moyenne",
      high: "Haute",
      create: "Créer une Tâche",
      noTasks: "Pas encore de tâches",
      startAdding: "Commencez â  ajouter des tâches pour rester organisé",
      completed: "Terminées",
      pending: "En Attente",
      markComplete: "Marquer Terminée",
      markIncomplete: "Marquer Incomplète",
      delete: "Supprimer",
    },
    meeting: {
      title: "Réunions",
      subtitle: "Planifiez et gérez vos réunions",
      scheduleMeeting: "Planifier une Réunion",
      meetingTitle: "Titre de la Réunion",
      meetingDescription: "Description de la Réunion",
      date: "Date",
      time: "Heure",
      duration: "Durée",
      minutes: "minutes",
      schedule: "Planifier une Réunion",
      noMeetings: "Aucune réunion planifiée",
      startScheduling: "Commencez â  planifier des réunions pour rester organisé",
      upcoming: "â€ Venir",
      past: "Passées",
      cancel: "Annuler la Réunion",
    },
    planning: {
      title: "Planification",
      subtitle: "Planifiez et suivez vos projets",
      createPlan: "Créer un Plan",
      planName: "Nom du Plan",
      planDescription: "Description du Plan",
      startDate: "Date de Début",
      endDate: "Date de Fin",
      status: "Statut",
      notStarted: "Non Commencé",
      inProgress: "En Cours",
      completed: "Terminé",
      create: "Créer un Plan",
      noPlans: "Pas encore de plans",
      startPlanning: "Commencez â  planifier vos projets",
      addMilestone: "Ajouter une Étape",
      milestoneName: "Nom de l'Étape",
      milestoneDate: "Date de l'Étape",
      delete: "Supprimer",
    },
    projects: {
      title: "Projets",
      subtitle: "Gérez et surveillez vos projets de développement",
      newProject: "Nouveau Projet",
      projectName: "Nom du Projet",
      projectDescription: "Description du Projet",
      technologies: "Technologies (séparées par des virgules)",
      status: "Statut",
      active: "Actif",
      building: "En Construction",
      inProgress: "En Cours",
      create: "Créer un Projet",
      noProjects: "Pas encore de projets",
      startCreating: "Commencez â  créer des projets pour suivre votre travail",
      lastUpdated: "Dernière mise â  jour",
      edit: "Modifier",
      delete: "Supprimer",
      cancel: "Annuler",
      save: "Enregistrer les Modifications",
      editProject: "Modifier le Projet",
      kanban: "Tableau Kanban",
      viewKanban: "Voir Kanban",
      collaborators: "Collaborateurs",
      addCollaborator: "Ajouter un Collaborateur",
      inviteByEmail: "Inviter par email",
      invite: "Inviter",
      removeCollaborator: "Supprimer",
      owner: "Propriétaire",
      noCollaborators: "Pas encore de collaborateurs",
    },
    community: {
      title: "Communauté",
      subtitle: "Connectez-vous avec des développeurs, partagez vos connaissances et collaborez",
      newDiscussion: "Nouvelle Discussion",
      discussionTitle: "Titre de la Discussion",
      discussionContent: "â€ quoi pensez-vous?",
      category: "Catégorie",
      selectCategory: "Sélectionnez une catégorie",
      customCategory: "Nom de Catégorie Personnalisée",
      post: "Publier la Discussion",
      noDiscussions: "Pas encore de discussions",
      startDiscussion: "Soyez le premier â  lancer une discussion",
      replies: "réponses",
      by: "par",
      cancel: "Annuler",
      general: "Général",
      help: "Aide",
      showcase: "Vitrine",
      feedback: "Commentaires",
      announcements: "Annonces",
    },
    kanban: {
      title: "Tableau Kanban",
      backToProjects: "Retour aux Projets",
      addCard: "Ajouter une Carte",
      addColumn: "Ajouter une Colonne",
      columnName: "Nom de la Colonne",
      cardTitle: "Titre de la Carte",
      cardDescription: "Description de la Carte",
      assignee: "Assigné â ",
      dueDate: "Date d'Échéance",
      create: "Créer",
      cancel: "Annuler",
      deleteCard: "Supprimer la Carte",
      deleteColumn: "Supprimer la Colonne",
      editCard: "Modifier la Carte",
      save: "Enregistrer les Modifications",
      noCards: "Pas encore de cartes",
      dragCard: "Faites glisser les cartes entre les colonnes",
    },
    diagrams: {
      title: "Flux et Diagrammes",
      createNew: "Créer un Nouveau Diagramme",
      noDiagrams: "Aucun diagramme pour le moment",
      noDiagramsDesc: "Créez votre premier organigramme pour visualiser vos processus",
      diagramName: "Nom du Diagramme",
      description: "Description",
      create: "Créer",
      edit: "Modifier",
      delete: "Supprimer",
      confirmDelete: "âŠtes-vous sûr de vouloir supprimer ce diagramme?",
      cancel: "Annuler",
      save: "Enregistrer",
      addNode: "Ajouter un NÅ“ud",
      addConnection: "Ajouter une Connexion",
      nodeTypes: {
        start: "Début",
        process: "Processus",
        decision: "Décision",
        end: "Fin",
        data: "Données",
      },
      tools: {
        select: "Sélectionner",
        move: "Déplacer",
        delete: "Supprimer",
        connect: "Connecter",
      },
      exportImage: "Exporter en Image",
      exportJSON: "Exporter en JSON",
      clear: "Effacer le Canevas",
      zoom: "Zoom",
      editLabel: ""
    },
    files: {
      title: "Fichiers et Documents",
      subtitle: "Stocker, partager et gérer les fichiers et liens de projet",
      uploadFile: "Télécharger un fichier",
      addLink: "Ajouter un lien",
      fileName: "Nom du fichier",
      fileDescription: "Description",
      fileUrl: "URL du fichier",
      linkUrl: "URL du lien",
      linkTitle: "Titre du lien",
      linkDescription: "Description du lien",
      upload: "Télécharger",
      addLinkButton: "Ajouter un lien",
      cancel: "Annuler",
      noFiles: "Aucun fichier ou lien pour le moment",
      startUploading: "Téléchargez votre premier fichier ou ajoutez un lien pour commencer",
      uploadedBy: "Téléchargé par",
      linkedBy: "Ajouté par",
      delete: "Supprimer",
      download: "Télécharger",
      openLink: "Ouvrir le lien",
      type: "Type",
      uploaded: "Téléchargé",
      linked: "Lien",
      relatedTo: "Lié â ",
      project: "Projet",
      task: "Tâche",
      meeting: "Réunion",
      design: "Conception",
      documentation: "Documentation",
      planning: "Planification",
      research: "Recherche",
      general: "Général",
    },
    wiki: {
      title: "Base de Connaissances",
      subtitle: "Documenter les processus, les meilleures pratiques et les résumés de projets",
      createArticle: "Créer un Article",
      articleTitle: "Titre de l'Article",
      articleContent: "Contenu",
      category: "Catégorie",
      tags: "Étiquettes",
      tagsPlaceholder: "Ajouter des étiquettes séparées par des virgules",
      create: "Créer",
      edit: "Modifier",
      delete: "Supprimer",
      cancel: "Annuler",
      save: "Enregistrer",
      noArticles: "Aucun article pour le moment",
      startWriting: "Créez votre premier article pour commencer â  construire votre base de connaissances",
      lastUpdated: "Dernière mise â  jour",
      author: "Auteur",
      readMore: "Lire la Suite",
      backToList: "Retour aux Articles",
      confirmDelete: "âŠtes-vous sûr de vouloir supprimer cet article?",
      processes: "Processus",
      bestPractices: "Meilleures Pratiques",
      projectSummaries: "Résumés de Projets",
      tutorials: "Tutoriels",
      documentation: "Documentation",
      guidelines: "Directives",
      api: "Référence API",
      troubleshooting: "Dépannage",
      faq: "FAQ",
      architecture: "Architecture",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      dashboard: "Dashboard",
      projects: "Projekte",
      aiTools: "KI-Tools",
      community: "Community",
      settings: "Einstellungen",
      signIn: "Anmelden",
      signUp: "Registrieren",
      signOut: "Abmelden",
      todo: "Aufgaben",
      meeting: "Besprechungen",
      planning: "Planung",
      diagrams: "Fluss & Diagramme",
    },
    auth: {
      signIn: "Anmelden",
      signUp: "Registrieren",
      email: "E-Mail",
      password: "Passwort",
      name: "Name",
      createAccount: "Konto Erstellen",
      alreadyHaveAccount: "Haben Sie bereits ein Konto?",
      dontHaveAccount: "Haben Sie kein Konto?",
      signInButton: "Anmelden",
      signUpButton: "Registrieren",
      rememberMe: "Angemeldet bleiben",
    },
    dashboard: {
      welcomeBack: "Willkommen zurück",
      happeningToday: "Hier ist, was heute mit Ihren Projekten passiert.",
      loading: "Laden...",
      activeUsers: "Aktive Benutzer",
      totalBuilds: "Gesamte Builds",
      repositories: "Repositories",
      apiCalls: "API-Aufrufe",
      recentProjects: "Letzte Projekte",
      aiAssistant: "KI-Assistent",
      systemStatus: "Systemstatus",
      askAnything: "Fragen Sie mich alles...",
      send: "Senden",
      allSystemsOperational: "Alle Systeme betriebsbereit",
      buildsInProgress: "Builds in Bearbeitung",
      connectedAndHealthy: "Verbunden und gesund",
    },
    settings: {
      title: "Einstellungen",
      subtitle: "Verwalten Sie Ihr Konto und Ihre Einstellungen",
      profile: "Profil",
      username: "Benutzername",
      email: "E-Mail",
      userId: "Benutzer-ID",
      memberSince: "Mitglied Seit",
      saveChanges: "â„nderungen Speichern",
      notifications: "Benachrichtigungen",
      emailNotifications: "E-Mail-Benachrichtigungen",
      emailNotificationsDesc: "Erhalten Sie Updates zu Ihren Projekten",
      buildNotifications: "Build-Benachrichtigungen",
      buildNotificationsDesc: "Werden Sie benachrichtigt, wenn Builds abgeschlossen sind",
      meetingNotifications: "Besprechungs-Benachrichtigungen",
      meetingNotificationsDesc: "Erhalten Sie Benachrichtigungen über bevorstehende Besprechungen",
      avatar: "Profilbild",
      uploadAvatar: "Foto Hochladen",
      removeAvatar: "Entfernen",
      security: "Sicherheit",
      currentPassword: "Aktuelles Passwort",
      newPassword: "Neues Passwort",
      updatePassword: "Passwort Aktualisieren",
      appearance: "Erscheinungsbild",
      theme: "Thema",
      darkMode: "Dunkler Modus",
      lightMode: "Heller Modus",
      currentTheme: "Aktuelles Thema",
      comingSoon: "Demnächst",
      language: "Sprache",
      selectLanguage: "Wählen Sie Ihre bevorzugte Sprache",
      dangerZone: "Gefahrenzone",
      dangerZoneDesc: "Irreversible Aktionen, die Ihr Konto dauerhaft beeinflussen",
      deleteAccount: "Konto Löschen",
    },
    notifications: {
      title: "Benachrichtigungen",
      noUpcoming: "Keine bevorstehenden Besprechungen",
      startsIn: "Beginnt in",
    },
    landing: {
      hero: {
        title: "Denken. Codieren. Testen. Versenden.",
        subtitle: "Die ultimative Plattform für Entwickler, die bauen, lernen und zusammenarbeiten.",
        cta: "Lab68 Betreten",
      },
      mission: {
        title: "Unsere Mission",
        description:
          "Lab68 ist eine brutalistische Entwicklerplattform für diejenigen, die Funktion über Form schätzen. Wir bieten die Tools, die Community und die Ressourcen, die Sie benötigen, um außergewöhnliche Software zu erstellen.",
      },
      techStack: {
        title: "Tech-Stack",
      },
      community: {
        title: "Treten Sie der Community Bei",
        description: "Verbinden Sie sich mit Entwicklern weltweit. Share knowledge. Build together.",
      },
    },
    todo: {
      title: "Aufgaben",
      subtitle: "Verwalten Sie Ihre Aufgaben und bleiben Sie organisiert",
      addTask: "Aufgabe Hinzufügen",
      taskName: "Aufgabenname",
      taskDescription: "Aufgabenbeschreibung",
      priority: "Priorität",
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
      create: "Aufgabe Erstellen",
      noTasks: "Noch keine Aufgaben",
      startAdding: "Beginnen Sie mit dem Hinzufügen von Aufgaben, um organisiert zu bleiben",
      completed: "Abgeschlossen",
      pending: "Ausstehend",
      markComplete: "Als Abgeschlossen Markieren",
      markIncomplete: "Als Unvollständig Markieren",
      delete: "Löschen",
    },
    meeting: {
      title: "Besprechungen",
      subtitle: "Planen und verwalten Sie Ihre Besprechungen",
      scheduleMeeting: "Besprechung Planen",
      meetingTitle: "Besprechungstitel",
      meetingDescription: "Besprechungsbeschreibung",
      date: "Datum",
      time: "Uhrzeit",
      duration: "Dauer",
      minutes: "Minuten",
      schedule: "Besprechung Planen",
      noMeetings: "Keine Besprechungen geplant",
      startScheduling: "Beginnen Sie mit der Planung von Besprechungen, um organisiert zu bleiben",
      upcoming: "Bevorstehend",
      past: "Vergangene",
      cancel: "Besprechung Absagen",
    },
    planning: {
      title: "Planung",
      subtitle: "Planen und verfolgen Sie Ihre Projekte",
      createPlan: "Plan Erstellen",
      planName: "Planname",
      planDescription: "Planbeschreibung",
      startDate: "Startdatum",
      endDate: "Enddatum",
      status: "Status",
      notStarted: "Nicht Gestartet",
      inProgress: "In Bearbeitung",
      completed: "Abgeschlossen",
      create: "Plan Erstellen",
      noPlans: "Noch keine Pläne",
      startPlanning: "Beginnen Sie mit der Planung Ihrer Projekte",
      addMilestone: "Meilenstein Hinzufügen",
      milestoneName: "Meilensteinname",
      milestoneDate: "Meilensteindatum",
      delete: "Löschen",
    },
    projects: {
      title: "Projekte",
      subtitle: "Verwalten und überwachen Sie Ihre Entwicklungsprojekte",
      newProject: "Neues Projekt",
      projectName: "Projektname",
      projectDescription: "Projektbeschreibung",
      technologies: "Technologien (durch Kommas getrennt)",
      status: "Status",
      active: "Aktiv",
      building: "Im Aufbau",
      inProgress: "In Bearbeitung",
      create: "Projekt Erstellen",
      noProjects: "Noch keine Projekte",
      startCreating: "Beginnen Sie mit der Erstellung von Projekten, um Ihre Arbeit zu verfolgen",
      lastUpdated: "Zuletzt aktualisiert",
      edit: "Bearbeiten",
      delete: "Löschen",
      cancel: "Abbrechen",
      save: "â„nderungen Speichern",
      editProject: "Projekt Bearbeiten",
      kanban: "Kanban-Board",
      viewKanban: "Kanban Ansehen",
      collaborators: "Mitarbeiter",
      addCollaborator: "Mitarbeiter Hinzufügen",
      inviteByEmail: "Per E-Mail einladen",
      invite: "Einladen",
      removeCollaborator: "Entfernen",
      owner: "Eigentümer",
      noCollaborators: "Noch keine Mitarbeiter",
    },
    community: {
      title: "Community",
      subtitle: "Verbinden Sie sich mit Entwicklern, teilen Sie Wissen und arbeiten Sie zusammen",
      newDiscussion: "Neue Diskussion",
      discussionTitle: "Diskussionstitel",
      discussionContent: "Was denken Sie?",
      category: "Kategorie",
      selectCategory: "Wählen Sie eine Kategorie",
      customCategory: "Benutzerdefinierter Kategoriename",
      post: "Diskussion Veröffentlichen",
      noDiscussions: "Noch keine Diskussionen",
      startDiscussion: "Seien Sie der Erste, der eine Diskussion startet",
      replies: "Antworten",
      by: "von",
      cancel: "Abbrechen",
      general: "Allgemein",
      help: "Hilfe",
      showcase: "Präsentation",
      feedback: "Feedback",
      announcements: "Ankündigungen",
    },
    kanban: {
      title: "Kanban-Board",
      backToProjects: "Zurück zu Projekten",
      addCard: "Karte Hinzufügen",
      addColumn: "Spalte Hinzufügen",
      columnName: "Spaltenname",
      cardTitle: "Kartentitel",
      cardDescription: "Kartenbeschreibung",
      assignee: "Zugewiesen an",
      dueDate: "Fälligkeitsdatum",
      create: "Erstellen",
      cancel: "Abbrechen",
      deleteCard: "Karte Löschen",
      deleteColumn: "Spalte Löschen",
      editCard: "Karte Bearbeiten",
      save: "â„nderungen Speichern",
      noCards: "Noch keine Karten",
      dragCard: "Ziehen Sie Karten zwischen Spalten",
    },
    diagrams: {
      title: "Fluss & Diagramme",
      createNew: "Neues Diagramm Erstellen",
      noDiagrams: "Noch keine Diagramme",
      noDiagramsDesc: "Erstellen Sie Ihr erstes Flussdiagramm zur Visualisierung Ihrer Prozesse",
      diagramName: "Diagrammname",
      description: "Beschreibung",
      create: "Erstellen",
      edit: "Bearbeiten",
      delete: "Löschen",
      confirmDelete: "Möchten Sie dieses Diagramm wirklich löschen?",
      cancel: "Abbrechen",
      save: "Speichern",
      addNode: "Knoten Hinzufügen",
      addConnection: "Verbindung Hinzufügen",
      nodeTypes: {
        start: "Start",
        process: "Prozess",
        decision: "Entscheidung",
        end: "Ende",
        data: "Daten",
      },
      tools: {
        select: "Auswählen",
        move: "Bewegen",
        delete: "Löschen",
        connect: "Verbinden",
      },
      exportImage: "Als Bild Exportieren",
      exportJSON: "Als JSON Exportieren",
      clear: "Leinwand Löschen",
      zoom: "Zoom",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
  zh: {
    nav: {
      home: "首页",
      dashboard: "仪表板",
      projects: "项目",
      aiTools: "AI 工具",
      community: "社区",
      settings: "设置",
      signIn: "登录",
      signUp: "注册",
      signOut: "退出",
      todo: "待办事项",
      meeting: "会议",
      planning: "规划",
      diagrams: "流程图",
    },
    auth: {
      signIn: "ç™»å½•",
      signUp: "æ³¨å†Œ",
      email: "é‚®ç®±",
      password: "å¯†ç ",
      name: "å§“å",
      createAccount: "åˆ›å»ºè´¦æˆ·",
      alreadyHaveAccount: "å·²æœ‰è´¦æˆ·ï¼Ÿ",
      dontHaveAccount: "æ²¡æœ‰è´¦æˆ·ï¼Ÿ",
      signInButton: "ç™»å½•",
      signUpButton: "æ³¨å†Œ",
      rememberMe: "è®°ä½æˆ‘",
    },
    dashboard: {
      welcomeBack: "æ¬¢è¿Žå›žæ¥",
      happeningToday: "è¿™æ˜¯æ‚¨ä»Šå¤©é¡¹ç›®çš„æœ€æ–°åŠ¨æ€â€‚",
      loading: "åŠ è½½ä¸­...",
      activeUsers: "æ´»è·ƒç”¨æˆ·",
      totalBuilds: "æ€»æž„å»ºæ•°",
      repositories: "ä»“åº“",
      apiCalls: "APIè°ƒç”¨",
      recentProjects: "æœ€è¿‘é¡¹ç›®",
      aiAssistant: "AIåŠ©æ‰‹",
      systemStatus: "ç³»ç»ŸçŠ¶æ€",
      askAnything: "é—®æˆ‘ä»»ä½•é—®é¢˜...",
      send: "å‘é€",
      allSystemsOperational: "æ‰€æœ‰ç³»ç»Ÿæ­£å¸¸è¿è¡Œ",
      buildsInProgress: "ä¸ªæž„å»ºæ­£åœ¨è¿›è¡Œ",
      connectedAndHealthy: "å·²è¿žæŽ¥ä¸”å¥åº·",
    },
    settings: {
      title: "设置",
      subtitle: "管理您的账户和偏好",
      profile: "个人资料",
      username: "用户名",
      email: "邮箱",
      userId: "用户ID",
      memberSince: "注册时间",
      saveChanges: "保存更改",
      notifications: "通知",
      emailNotifications: "邮件通知",
      emailNotificationsDesc: "接收有关您项目的更新",
      buildNotifications: "构建通知",
      buildNotificationsDesc: "构建完成时接收通知",
      meetingNotifications: "会议通知",
      meetingNotificationsDesc: "获取即将召开会议的通知",
      avatar: "头像",
      uploadAvatar: "上传照片",
      removeAvatar: "删除",
      security: "安全",
      currentPassword: "当前密码",
      newPassword: "新密码",
      updatePassword: "更新密码",
      appearance: "外观",
      theme: "主题",
      darkMode: "深色模式",
      lightMode: "浅色模式",
      currentTheme: "当前主题",
      comingSoon: "即将推出",
      language: "语言",
      selectLanguage: "选择您的首选语言",
      dangerZone: "危险区域",
      dangerZoneDesc: "不可逆的操作会永久影响您的账户",
      deleteAccount: "删除账户",
    },
    notifications: {
      title: "通知",
      noUpcoming: "没有即将召开的会议",
      startsIn: "开始于",
    },
    landing: {
      hero: {
        title: "æ€è€ƒâ€‚ç¼–ç â€‚æµ‹è¯•â€‚å‘å¸ƒâ€‚",
        subtitle: "ä¸ºæž„å»ºâ€å­¦ä¹ å’Œåä½œçš„å¼€å‘è€…æ‰“é€ çš„ç»ˆæžå¹³å°â€‚",
        cta: "è¿›å…¥Lab68",
      },
      mission: {
        title: "æˆ‘ä»¬çš„ä½¿å‘½",
        description:
          "Lab68æ˜¯ä¸€ä¸ªç²—é‡Žä¸»ä¹‰å¼€å‘è€…å¹³å°ï¼Œä¸“ä¸ºé‚£äº›é‡è§†åŠŸèƒ½èƒœè¿‡å½¢å¼çš„äººè®¾è®¡â€‚æˆ‘ä»¬æä¾›æ‚¨æž„å»ºå“è¶Šè½¯ä»¶æ‰€éœ€çš„å·¥å…·â€ç¤¾åŒºå’Œèµ„æºâ€‚",
      },
      techStack: {
        title: "æŠ€æœ¯æ ˆ",
      },
      community: {
        title: "åŠ å…¥ç¤¾åŒº",
        description: "ä¸Žå…¨çƒå¼€å‘è€…è”ç³»â€‚åˆ†äº«çŸ¥è¯†â€‚å…±åŒæž„å»ºâ€‚",
      },
    },
    todo: {
      title: "å¾…åŠžäº‹é¡¹",
      subtitle: "ç®¡ç†æ‚¨çš„ä»»åŠ¡å¹¶ä¿æŒäº•ç„¶æœ‰åº",
      addTask: "æ·»åŠ ä»»åŠ¡",
      taskName: "ä»»åŠ¡åç§°",
      taskDescription: "ä»»åŠ¡æè¿°",
      priority: "ä¼˜å…ˆçº§",
      low: "ä½Ž",
      medium: "ä¸­",
      high: "é«˜",
      create: "åˆ›å»ºä»»åŠ¡",
      noTasks: "è¿˜æ²¡æœ‰ä»»åŠ¡",
      startAdding: "å¼€å§‹æ·»åŠ ä»»åŠ¡ä»¥ä¿æŒäº•ç„¶æœ‰åº",
      completed: "å·²å®Œæˆ",
      pending: "å¾…å¤„ç†",
      markComplete: "æ ‡è®°ä¸ºå®Œæˆ",
      markIncomplete: "æ ‡è®°ä¸ºæœªå®Œæˆ",
      delete: "åˆ é™¤",
    },
    meeting: {
      title: "ä¼šè®®",
      subtitle: "å®‰æŽ’å’Œç®¡ç†æ‚¨çš„ä¼šè®®",
      scheduleMeeting: "å®‰æŽ’ä¼šè®®",
      meetingTitle: "ä¼šè®®æ ‡é¢˜",
      meetingDescription: "ä¼šè®®æè¿°",
      date: "æ—¥æœŸ",
      time: "æ—¶é—´",
      duration: "æŒç»­æ—¶é—´",
      minutes: "åˆ†é’Ÿ",
      schedule: "å®‰æŽ’ä¼šè®®",
      noMeetings: "æ²¡æœ‰å®‰æŽ’ä¼šè®®",
      startScheduling: "å¼€å§‹å®‰æŽ’ä¼šè®®ä»¥ä¿æŒäº•ç„¶æœ‰åº",
      upcoming: "å³å°†åˆ°æ¥",
      past: "è¿‡åŽ»",
      cancel: "å–æ¶ˆä¼šè®®",
    },
    planning: {
      title: "è§„åˆ’",
      subtitle: "è§„åˆ’å’Œè·Ÿè¸ªæ‚¨çš„é¡¹ç›®",
      createPlan: "åˆ›å»ºè®¡åˆ’",
      planName: "è®¡åˆ’åç§°",
      planDescription: "è®¡åˆ’æè¿°",
      startDate: "å¼€å§‹æ—¥æœŸ",
      endDate: "ç»“æŸæ—¥æœŸ",
      status: "çŠ¶æ€",
      notStarted: "æœªå¼€å§‹",
      inProgress: "è¿›è¡Œä¸­",
      completed: "å·²å®Œæˆ",
      create: "åˆ›å»ºè®¡åˆ’",
      noPlans: "è¿˜æ²¡æœ‰è®¡åˆ’",
      startPlanning: "å¼€å§‹è§„åˆ’æ‚¨çš„é¡¹ç›®",
      addMilestone: "æ·»åŠ é‡Œç¨‹ç¢‘",
      milestoneName: "é‡Œç¨‹ç¢‘åç§°",
      milestoneDate: "é‡Œç¨‹ç¢‘æ—¥æœŸ",
      delete: "åˆ é™¤",
    },
    projects: {
      title: "é¡¹ç›®",
      subtitle: "ç®¡ç†å’Œç›‘æŽ§æ‚¨çš„å¼€å‘é¡¹ç›®",
      newProject: "æ–°é¡¹ç›®",
      projectName: "é¡¹ç›®åç§°",
      projectDescription: "é¡¹ç›®æè¿°",
      technologies: "æŠ€æœ¯ï¼ˆç”¨é€—å·åˆ†éš”ï¼‰",
      status: "çŠ¶æ€",
      active: "æ´»è·ƒ",
      building: "æž„å»ºä¸­",
      inProgress: "è¿›è¡Œä¸­",
      create: "åˆ›å»ºé¡¹ç›®",
      noProjects: "è¿˜æ²¡æœ‰é¡¹ç›®",
      startCreating: "å¼€å§‹åˆ›å»ºé¡¹ç›®ä»¥è·Ÿè¸ªæ‚¨çš„å·¥ä½œ",
      lastUpdated: "æœ€åŽæ›´æ–°",
      edit: "ç¼–è¾‘",
      delete: "åˆ é™¤",
      cancel: "å–æ¶ˆ",
      save: "ä¿å­˜æ›´æ”¹",
      editProject: "ç¼–è¾‘é¡¹ç›®",
      kanban: "çœ‹æ¿",
      viewKanban: "æŸ¥çœ‹çœ‹æ¿",
      collaborators: "åä½œè€…",
      addCollaborator: "æ·»åŠ åä½œè€…",
      inviteByEmail: "é€šè¿‡é‚®ç®±é‚€è¯·",
      invite: "é‚€è¯·",
      removeCollaborator: "ç§»é™¤",
      owner: "æ‰€æœ‰è€…",
      noCollaborators: "è¿˜æ²¡æœ‰åä½œè€…",
    },
    community: {
      title: "ç¤¾åŒº",
      subtitle: "ä¸Žå¼€å‘è€…è”ç³»ï¼Œåˆ†äº«çŸ¥è¯†ï¼Œåä½œ",
      newDiscussion: "æ–°è®¨è®º",
      discussionTitle: "è®¨è®ºæ ‡é¢˜",
      discussionContent: "æ‚¨åœ¨æƒ³ä»€ä¹ˆï¼Ÿ",
      category: "ç±»åˆ«",
      selectCategory: "é€‰æ‹©ç±»åˆ«",
      customCategory: "è‡ªå®šä¹‰ç±»åˆ«åç§°",
      post: "å‘å¸ƒè®¨è®º",
      noDiscussions: "è¿˜æ²¡æœ‰è®¨è®º",
      startDiscussion: "æˆä¸ºç¬¬ä¸€ä¸ªå¼€å§‹è®¨è®ºçš„äºº",
      replies: "å›žå¤",
      by: "ç”±",
      cancel: "å–æ¶ˆ",
      general: "ä¸€èˆ¬",
      help: "å¸®åŠ©",
      showcase: "å±•ç¤º",
      feedback: "åé¦ˆ",
      announcements: "å…¬å‘Š",
    },
    kanban: {
      title: "çœ‹æ¿",
      backToProjects: "è¿”å›žé¡¹ç›®",
      addCard: "æ·»åŠ å¡ç‰‡",
      addColumn: "æ·»åŠ åˆ—",
      columnName: "åˆ—å",
      cardTitle: "å¡ç‰‡æ ‡é¢˜",
      cardDescription: "å¡ç‰‡æè¿°",
      assignee: "åˆ†é…ç»™",
      dueDate: "æˆªæ­¢æ—¥æœŸ",
      create: "åˆ›å»º",
      cancel: "å–æ¶ˆ",
      deleteCard: "åˆ é™¤å¡ç‰‡",
      deleteColumn: "åˆ é™¤åˆ—",
      editCard: "ç¼–è¾‘å¡ç‰‡",
      save: "ä¿å­˜æ›´æ”¹",
      noCards: "è¿˜æ²¡æœ‰å¡ç‰‡",
      dragCard: "åœ¨åˆ—ä¹‹é—´æ‹–åŠ¨å¡ç‰‡",
    },
    diagrams: {
      title: "æµç¨‹å›¾",
      createNew: "åˆ›å»ºæ–°å›¾è¡¨",
      noDiagrams: "è¿˜æ²¡æœ‰å›¾è¡¨",
      noDiagramsDesc: "åˆ›å»ºæ‚¨çš„ç¬¬ä¸€ä¸ªæµç¨‹å›¾æ¥å¯è§†åŒ–æ‚¨çš„æµç¨‹",
      diagramName: "å›¾è¡¨åç§°",
      description: "æè¿°",
      create: "åˆ›å»º",
      edit: "ç¼–è¾‘",
      delete: "åˆ é™¤",
      confirmDelete: "æ‚¨ç¡®å®šè¦åˆ é™¤æ­¤å›¾è¡¨å—ï¼Ÿ",
      cancel: "å–æ¶ˆ",
      save: "ä¿å­˜",
      addNode: "æ·»åŠ èŠ‚ç‚¹",
      addConnection: "æ·»åŠ è¿žæŽ¥",
      nodeTypes: {
        start: "å¼€å§‹",
        process: "è¿‡ç¨‹",
        decision: "å†³ç­–",
        end: "ç»“æŸ",
        data: "æ•°æ®",
      },
      tools: {
        select: "é€‰æ‹©",
        move: "ç§»åŠ¨",
        delete: "åˆ é™¤",
        connect: "è¿žæŽ¥",
      },
      exportImage: "å¯¼å‡ºä¸ºå›¾ç‰‡",
      exportJSON: "å¯¼å‡ºä¸ºJSON",
      clear: "æ¸…ç©ºç”»å¸ƒ",
      zoom: "ç¼©æ”¾",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
  ja: {
    nav: {
      home: "âƒ›âƒ¼âƒ ",
      dashboard: "âƒ€âƒƒâ‚·âƒ¥âƒœâƒ¼âƒ‰",
      projects: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆ",
      aiTools: "AIâƒ„âƒ¼âƒ«",
      community: "â‚³âƒŸâƒ¥âƒ‹âƒ†â‚£",
      settings: "è¨­å®š",
      signIn: "âƒ­â‚°â‚¤âƒ³",
      signUp: "ç™»éŒ²",
      signOut: "âƒ­â‚°â‚¢â‚¦âƒˆ",
      todo: "â‚¿â‚¹â‚¯",
      meeting: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°",
      planning: "è¨ˆç”»",
      diagrams: "âƒ•âƒ­âƒ¼å›³",
    },
    auth: {
      signIn: "âƒ­â‚°â‚¤âƒ³",
      signUp: "ç™»éŒ²",
      email: "âƒ¡âƒ¼âƒ«",
      password: "âƒ‘â‚¹âƒ¯âƒ¼âƒ‰",
      name: "åå‰",
      createAccount: "â‚¢â‚«â‚¦âƒ³âƒˆä½œæˆ",
      alreadyHaveAccount: "â‚¢â‚«â‚¦âƒ³âƒˆâ‚’âŠæŒâ¡â§â™â‹ï¼Ÿ",
      dontHaveAccount: "â‚¢â‚«â‚¦âƒ³âƒˆâ‚’âŠæŒâ¡â§âªâ„â§â™â‹ï¼Ÿ",
      signInButton: "âƒ­â‚°â‚¤âƒ³",
      signUpButton: "ç™»éŒ²",
      rememberMe: "âƒ­â‚°â‚¤âƒ³çŠ¶æ…‹â‚’ä¿æŒ",
    },
    dashboard: {
      welcomeBack: "âŠâ‹âˆâ‚Šâªâ•â„",
      happeningToday: "ä»Šæ—¥â®âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ®çŠ¶æ³â§â™â€‚",
      loading: "èª­â¿è¾¼â¿ä¸­...",
      activeUsers: "â‚¢â‚¯âƒ†â‚£âƒ–âƒ¦âƒ¼â‚¶âƒ¼",
      totalBuilds: "ç·âƒ“âƒ«âƒ‰æ•°",
      repositories: "âƒªâƒâ‚¸âƒˆâƒª",
      apiCalls: "APIå‘¼â³å‡ºâ—",
      recentProjects: "æœ€è¿‘â®âƒ—âƒ­â‚¸â‚§â‚¯âƒˆ",
      aiAssistant: "AIâ‚¢â‚·â‚¹â‚¿âƒ³âƒˆ",
      systemStatus: "â‚·â‚¹âƒ†âƒ â‚¹âƒ†âƒ¼â‚¿â‚¹",
      askAnything: "ä½•â§â‚‚èžâ„â¦ââ â•â„...",
      send: "é€ä¿¡",
      allSystemsOperational: "â™â¹â¦â®â‚·â‚¹âƒ†âƒ âŒç¨¼åƒä¸­",
      buildsInProgress: "å€‹â®âƒ“âƒ«âƒ‰âŒé€²è¡Œä¸­",
      connectedAndHealthy: "æŽ¥ç¶šæ¸ˆâ¿â§æ­£å¸¸",
    },
    settings: {
      title: "設定",
      subtitle: "アカウントと設定を管理",
      profile: "プロフィール",
      username: "ユーザー名",
      email: "メール",
      userId: "ユーザーID",
      memberSince: "メンバー登録日",
      saveChanges: "変更を保存",
      notifications: "通知",
      emailNotifications: "メール通知",
      emailNotificationsDesc: "プロジェクトの更新を受け取る",
      buildNotifications: "ビルド通知",
      buildNotificationsDesc: "ビルドが完了したら通知を受け取る",
      meetingNotifications: "会議の通知",
      meetingNotificationsDesc: "近日開催の会議について通知を受け取る",
      avatar: "プロフィール写真",
      uploadAvatar: "写真をアップロード",
      removeAvatar: "削除",
      security: "セキュリティ",
      currentPassword: "現在のパスワード",
      newPassword: "新しいパスワード",
      updatePassword: "パスワードを更新",
      appearance: "外観",
      theme: "テーマ",
      darkMode: "ダークモード",
      lightMode: "ライトモード",
      currentTheme: "現在のテーマ",
      comingSoon: "近日公開",
      language: "言語",
      selectLanguage: "使用する言語を選択",
      dangerZone: "危険ゾーン",
      dangerZoneDesc: "元に戻せない操作でアカウントに永続的な影響があります",
      deleteAccount: "アカウントを削除",
    },
    notifications: {
      title: "通知",
      noUpcoming: "今後の会議はありません",
      startsIn: "開始時刻",
    },
    landing: {
      hero: {
        title: "è€ƒâˆâ‚‹â€‚â‚³âƒ¼âƒ‰â™â‚‹â€‚âƒ†â‚¹âƒˆâ™â‚‹â€‚å‡ºè·â™â‚‹â€‚",
        subtitle: "æ§‹ç¯‰â€å­¦ç¿’â€å”åŠ›â™â‚‹é–‹ç™ºè€…â®âŸâ‚â®ç©¶æ¥µâ®âƒ—âƒ©âƒƒâƒˆâƒ•â‚©âƒ¼âƒ â€‚",
        cta: "Lab68â«å…¥â‚‹",
      },
      mission: {
        title: "ç§âŸâ¡â®ä½¿å‘½",
        description:
          "Lab68â¯â€å½¢å¼â‚ˆâ‚Šâ‚‚æ©Ÿèƒ½â‚’é‡è¦–â™â‚‹äººâ€…â®âŸâ‚â«è¨­è¨ˆâ•â‚ŒâŸâƒ–âƒ«âƒ¼â‚¿âƒªâ‚¹âƒˆé–‹ç™ºè€…âƒ—âƒ©âƒƒâƒˆâƒ•â‚©âƒ¼âƒ â§â™â€‚å„ªâ‚ŒâŸâ‚½âƒ•âƒˆâ‚¦â‚§â‚¢â‚’æ§‹ç¯‰â™â‚‹âŸâ‚â«å¿…è¦âªâƒ„âƒ¼âƒ«â€â‚³âƒŸâƒ¥âƒ‹âƒ†â‚£â€âƒªâ‚½âƒ¼â‚¹â‚’æä¾›â—â¾â™â€‚",
      },
      techStack: {
        title: "æŠ€è¡“â‚¹â‚¿âƒƒâ‚¯",
      },
      community: {
        title: "â‚³âƒŸâƒ¥âƒ‹âƒ†â‚£â«å‚åŠ ",
        description: "ä¸–ç•Œä¸­â®é–‹ç™ºè€…â¨â¤âªâŒâ‚‹â€‚çŸ¥è­˜â‚’å…±æœ‰â™â‚‹â€‚ä¸€ç·’â«æ§‹ç¯‰â™â‚‹â€‚",
      },
    },
    todo: {
      title: "â‚¿â‚¹â‚¯",
      subtitle: "â‚¿â‚¹â‚¯â‚’ç®¡ç†â—â¦æ•´ç†æ•´é “",
      addTask: "â‚¿â‚¹â‚¯â‚’è¿½åŠ ",
      taskName: "â‚¿â‚¹â‚¯å",
      taskDescription: "â‚¿â‚¹â‚¯â®èª¬æ˜Ž",
      priority: "å„ªå…ˆåº¦",
      low: "ä½Ž",
      medium: "ä¸­",
      high: "é«˜",
      create: "â‚¿â‚¹â‚¯â‚’ä½œæˆ",
      noTasks: "â¾â â‚¿â‚¹â‚¯âŒâ‚â‚Šâ¾â›â‚“",
      startAdding: "â‚¿â‚¹â‚¯â‚’è¿½åŠ â—â¦æ•´ç†æ•´é “â‚’å§‹â‚â¾â—â‚‡â†",
      completed: "å®Œäº†",
      pending: "ä¿ç•™ä¸­",
      markComplete: "å®Œäº†â¨â—â¦âƒžâƒ¼â‚¯",
      markIncomplete: "æœªå®Œäº†â¨â—â¦âƒžâƒ¼â‚¯",
      delete: "å‰Šé™¤",
    },
    meeting: {
      title: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°",
      subtitle: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â‚’â‚¹â‚±â‚¸âƒ¥âƒ¼âƒ«â—â¦ç®¡ç†",
      scheduleMeeting: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â‚’â‚¹â‚±â‚¸âƒ¥âƒ¼âƒ«",
      meetingTitle: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â®â‚¿â‚¤âƒˆâƒ«",
      meetingDescription: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â®èª¬æ˜Ž",
      date: "æ—¥ä»˜",
      time: "æ™‚é–“",
      duration: "æœŸé–“",
      minutes: "åˆ†",
      schedule: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â‚’â‚¹â‚±â‚¸âƒ¥âƒ¼âƒ«",
      noMeetings: "â‚¹â‚±â‚¸âƒ¥âƒ¼âƒ«â•â‚ŒâŸâƒŸâƒ¼âƒ†â‚£âƒ³â‚°â¯â‚â‚Šâ¾â›â‚“",
      startScheduling: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â‚’â‚¹â‚±â‚¸âƒ¥âƒ¼âƒ«â—â¦æ•´ç†æ•´é “â‚’å§‹â‚â¾â—â‚‡â†",
      upcoming: "ä»Šå¾Œ",
      past: "éŽåŽ»",
      cancel: "âƒŸâƒ¼âƒ†â‚£âƒ³â‚°â‚’â‚­âƒ£âƒ³â‚»âƒ«",
    },
    planning: {
      title: "è¨ˆç”»",
      subtitle: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ‚’è¨ˆç”»â—â¦è¿½è·¡",
      createPlan: "è¨ˆç”»â‚’ä½œæˆ",
      planName: "è¨ˆç”»å",
      planDescription: "è¨ˆç”»â®èª¬æ˜Ž",
      startDate: "é–‹å§‹æ—¥",
      endDate: "çµ‚äº†æ—¥",
      status: "â‚¹âƒ†âƒ¼â‚¿â‚¹",
      notStarted: "æœªé–‹å§‹",
      inProgress: "é€²è¡Œä¸­",
      completed: "å®Œäº†",
      create: "è¨ˆç”»â‚’ä½œæˆ",
      noPlans: "â¾â è¨ˆç”»âŒâ‚â‚Šâ¾â›â‚“",
      startPlanning: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ®è¨ˆç”»â‚’å§‹â‚â¾â—â‚‡â†",
      addMilestone: "âƒžâ‚¤âƒ«â‚¹âƒˆâƒ¼âƒ³â‚’è¿½åŠ ",
      milestoneName: "âƒžâ‚¤âƒ«â‚¹âƒˆâƒ¼âƒ³å",
      milestoneDate: "âƒžâ‚¤âƒ«â‚¹âƒˆâƒ¼âƒ³â®æ—¥ä»˜",
      delete: "å‰Šé™¤",
    },
    projects: {
      title: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆ",
      subtitle: "é–‹ç™ºâƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ‚’ç®¡ç†âŠâ‚ˆâ³ç›£è¦–",
      newProject: "æ–°â—â„âƒ—âƒ­â‚¸â‚§â‚¯âƒˆ",
      projectName: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆå",
      projectDescription: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ®èª¬æ˜Ž",
      technologies: "æŠ€è¡“ï¼ˆâ‚«âƒ³âƒžåŒºåˆ‡â‚Šï¼‰",
      status: "â‚¹âƒ†âƒ¼â‚¿â‚¹",
      active: "â‚¢â‚¯âƒ†â‚£âƒ–",
      building: "æ§‹ç¯‰ä¸­",
      inProgress: "é€²è¡Œä¸­",
      create: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ‚’ä½œæˆ",
      noProjects: "â¾â âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâŒâ‚â‚Šâ¾â›â‚“",
      startCreating: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ‚’ä½œæˆâ—â¦ä½œæ¥­â‚’è¿½è·¡â—â¾â—â‚‡â†",
      lastUpdated: "æœ€çµ‚æ›´æ–°",
      edit: "ç·¨é›†",
      delete: "å‰Šé™¤",
      cancel: "â‚­âƒ£âƒ³â‚»âƒ«",
      save: "å¤‰æ›´â‚’ä¿å­˜",
      editProject: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ‚’ç·¨é›†",
      kanban: "â‚«âƒ³âƒâƒ³âƒœâƒ¼âƒ‰",
      viewKanban: "â‚«âƒ³âƒâƒ³â‚’è¡¨ç¤º",
      collaborators: "â‚³âƒ©âƒœâƒ¬âƒ¼â‚¿âƒ¼",
      addCollaborator: "â‚³âƒ©âƒœâƒ¬âƒ¼â‚¿âƒ¼â‚’è¿½åŠ ",
      inviteByEmail: "âƒ¡âƒ¼âƒ«â§æ‹›å¾…",
      invite: "æ‹›å¾…",
      removeCollaborator: "å‰Šé™¤",
      owner: "â‚ªâƒ¼âƒŠâƒ¼",
      noCollaborators: "â¾â â‚³âƒ©âƒœâƒ¬âƒ¼â‚¿âƒ¼âŒâ„â¾â›â‚“",
    },
    community: {
      title: "â‚³âƒŸâƒ¥âƒ‹âƒ†â‚£",
      subtitle: "é–‹ç™ºè€…â¨â¤âªâŒâ‚Šâ€çŸ¥è­˜â‚’å…±æœ‰â—â€å”åŠ›â™â‚‹",
      newDiscussion: "æ–°â—â„âƒ‡â‚£â‚¹â‚«âƒƒâ‚·âƒ§âƒ³",
      discussionTitle: "âƒ‡â‚£â‚¹â‚«âƒƒâ‚·âƒ§âƒ³â®â‚¿â‚¤âƒˆâƒ«",
      discussionContent: "ä½•â‚’è€ƒâˆâ¦â„â¾â™â‹ï¼Ÿ",
      category: "â‚«âƒ†â‚´âƒªâƒ¼",
      selectCategory: "â‚«âƒ†â‚´âƒªâƒ¼â‚’é¸æŠž",
      customCategory: "â‚«â‚¹â‚¿âƒ â‚«âƒ†â‚´âƒªâƒ¼å",
      post: "âƒ‡â‚£â‚¹â‚«âƒƒâ‚·âƒ§âƒ³â‚’æŠ•ç¨¿",
      noDiscussions: "â¾â âƒ‡â‚£â‚¹â‚«âƒƒâ‚·âƒ§âƒ³âŒâ‚â‚Šâ¾â›â‚“",
      startDiscussion: "æœ€åˆâ«âƒ‡â‚£â‚¹â‚«âƒƒâ‚·âƒ§âƒ³â‚’å§‹â‚â¾â—â‚‡â†",
      replies: "è¿”ä¿¡",
      by: "æŠ•ç¨¿è€…",
      cancel: "â‚­âƒ£âƒ³â‚»âƒ«",
      general: "ä¸€èˆ¬",
      help: "âƒ˜âƒ«âƒ—",
      showcase: "â‚·âƒ§âƒ¼â‚±âƒ¼â‚¹",
      feedback: "âƒ•â‚£âƒ¼âƒ‰âƒâƒƒâ‚¯",
      announcements: "âŠçŸ¥â‚‰â›",
    },
    kanban: {
      title: "â‚«âƒ³âƒâƒ³âƒœâƒ¼âƒ‰",
      backToProjects: "âƒ—âƒ­â‚¸â‚§â‚¯âƒˆâ«æˆ»â‚‹",
      addCard: "â‚«âƒ¼âƒ‰â‚’è¿½åŠ ",
      addColumn: "åˆ—â‚’è¿½åŠ ",
      columnName: "åˆ—å",
      cardTitle: "â‚«âƒ¼âƒ‰â‚¿â‚¤âƒˆâƒ«",
      cardDescription: "â‚«âƒ¼âƒ‰â®èª¬æ˜Ž",
      assignee: "æ‹…å½“è€…",
      dueDate: "æœŸé™",
      create: "ä½œæˆ",
      cancel: "â‚­âƒ£âƒ³â‚»âƒ«",
      deleteCard: "â‚«âƒ¼âƒ‰â‚’å‰Šé™¤",
      deleteColumn: "åˆ—â‚’å‰Šé™¤",
      editCard: "â‚«âƒ¼âƒ‰â‚’ç·¨é›†",
      save: "å¤‰æ›´â‚’ä¿å­˜",
      noCards: "â¾â â‚«âƒ¼âƒ‰âŒâ‚â‚Šâ¾â›â‚“",
      dragCard: "åˆ—é–“â§â‚«âƒ¼âƒ‰â‚’âƒ‰âƒ©âƒƒâ‚°",
    },
    diagrams: {
      title: "âƒ•âƒ­âƒ¼å›³",
      createNew: "æ–°â—â„å›³â‚’ä½œæˆ",
      noDiagrams: "â¾â å›³âŒâ‚â‚Šâ¾â›â‚“",
      noDiagramsDesc: "æœ€åˆâ®âƒ•âƒ­âƒ¼âƒâƒ£âƒ¼âƒˆâ‚’ä½œæˆâ—â¦âƒ—âƒ­â‚»â‚¹â‚’è¦–è¦šåŒ–â—â¾â—â‚‡â†",
      diagramName: "å›³â®åå‰",
      description: "èª¬æ˜Ž",
      create: "ä½œæˆ",
      edit: "ç·¨é›†",
      delete: "å‰Šé™¤",
      confirmDelete: "â“â®å›³â‚’å‰Šé™¤â—â¦â‚‚â‚ˆâ‚â—â„â§â™â‹ï¼Ÿ",
      cancel: "â‚­âƒ£âƒ³â‚»âƒ«",
      save: "ä¿å­˜",
      addNode: "âƒŽâƒ¼âƒ‰â‚’è¿½åŠ ",
      addConnection: "æŽ¥ç¶šâ‚’è¿½åŠ ",
      nodeTypes: {
        start: "é–‹å§‹",
        process: "âƒ—âƒ­â‚»â‚¹",
        decision: "åˆ¤æ–­",
        end: "çµ‚äº†",
        data: "âƒ‡âƒ¼â‚¿",
      },
      tools: {
        select: "é¸æŠž",
        move: "ç§»å‹•",
        delete: "å‰Šé™¤",
        connect: "æŽ¥ç¶š",
      },
      exportImage: "ç”»åƒâ¨â—â¦â‚¨â‚¯â‚¹âƒâƒ¼âƒˆ",
      exportJSON: "JSONâ¨â—â¦â‚¨â‚¯â‚¹âƒâƒ¼âƒˆ",
      clear: "â‚­âƒ£âƒ³âƒâ‚¹â‚’â‚¯âƒªâ‚¢",
      zoom: "â‚ºâƒ¼âƒ ",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
  pt: {
    nav: {
      home: "Inâcio",
      dashboard: "Painel",
      projects: "Projetos",
      aiTools: "Ferramentas IA",
      community: "Comunidade",
      settings: "Configuraçâµes",
      signIn: "Entrar",
      signUp: "Cadastrar",
      signOut: "Sair",
      todo: "Tarefas",
      meeting: "Reuniâµes",
      planning: "Planejamento",
      diagrams: "Fluxo e Diagramas",
    },
    auth: {
      signIn: "Entrar",
      signUp: "Cadastrar",
      email: "Email",
      password: "Senha",
      name: "Nome",
      createAccount: "Criar Conta",
      alreadyHaveAccount: "Já tem uma conta?",
      dontHaveAccount: "Nâ£o tem uma conta?",
      signInButton: "Entrar",
      signUpButton: "Cadastrar",
      rememberMe: "Lembrar de mim",
    },
    dashboard: {
      welcomeBack: "Bem-vindo de volta",
      happeningToday: "Aqui está o que está acontecendo com seus projetos hoje.",
      loading: "Carregando...",
      activeUsers: "Usuários Ativos",
      totalBuilds: "Builds Totais",
      repositories: "Repositiórios",
      apiCalls: "Chamadas API",
      recentProjects: "Projetos Recentes",
      aiAssistant: "Assistente IA",
      systemStatus: "Status do Sistema",
      askAnything: "Pergunte-me qualquer coisa...",
      send: "Enviar",
      allSystemsOperational: "Todos os sistemas operacionais",
      buildsInProgress: "builds em andamento",
      connectedAndHealthy: "Conectado e saudável",
    },
    settings: {
      title: "Configuraçâµes",
      subtitle: "Gerencie sua conta e preferâªncias",
      profile: "Perfil",
      username: "Nome de Usuário",
      email: "Email",
      userId: "ID do Usuário",
      memberSince: "Membro Desde",
      saveChanges: "Salvar Alteraçâµes",
      notifications: "Notificaçâµes",
      emailNotifications: "Notificaçâµes por Email",
      emailNotificationsDesc: "Receba atualizaçâµes sobre seus projetos",
      buildNotifications: "Notificaçâµes de Build",
      buildNotificationsDesc: "Seja notificado quando os builds forem concluâdos",
      meetingNotifications: "Meeting Notifications",
      meetingNotificationsDesc: "Get notified about upcoming meetings",
      avatar: "Profile Picture",
      uploadAvatar: "Upload Photo",
      removeAvatar: "Remove",
      security: "Segurança",
      currentPassword: "Senha Atual",
      newPassword: "Nova Senha",
      updatePassword: "Atualizar Senha",
      appearance: "Aparâªncia",
      theme: "Tema",
      darkMode: "Modo Escuro",
      lightMode: "Modo Claro",
      currentTheme: "Tema atual",
      comingSoon: "Em breve",
      language: "Idioma",
      selectLanguage: "Selecione seu idioma preferido",
      dangerZone: "Zona de Perigo",
      dangerZoneDesc: "Açâµes irreversâveis que afetarâ£o permanentemente sua conta",
      deleteAccount: "Excluir Conta",
    },
    notifications: {
      title: "Notificações",
      noUpcoming: "Nenhuma reuniâo futura",
      startsIn: "Começa em",
    },
    landing: {
      hero: {
        title: "Pense. Codifique. Teste. Envie.",
        subtitle: "A plataforma definitiva para desenvolvedores que constroem, aprendem e colaboram.",
        cta: "Entrar no Lab68",
      },
      mission: {
        title: "Nossa Missâ£o",
        description:
          "Lab68 é uma plataforma de desenvolvimento brutalista projetada para aqueles que valorizam a funçâ£o sobre a forma. Fornecemos as ferramentas, a comunidade e os recursos necessários para construir software excepcional.",
      },
      techStack: {
        title: "Stack Tecnológico",
      },
      community: {
        title: "Junte-se â  Comunidade",
        description: "Conecte-se com desenvolvedores em todo o mundo. Compartilhe conhecimento. Construa juntos.",
      },
    },
    todo: {
      title: "Tarefas",
      subtitle: "Gerencie suas tarefas e mantenha-se organizado",
      addTask: "Adicionar Tarefa",
      taskName: "Nome da Tarefa",
      taskDescription: "Descriçâ£o da Tarefa",
      priority: "Prioridade",
      low: "Baixa",
      medium: "Média",
      high: "Alta",
      create: "Criar Tarefa",
      noTasks: "Ainda nâ£o há tarefas",
      startAdding: "Comece a adicionar tarefas para se manter organizado",
      completed: "Concluâdas",
      pending: "Pendentes",
      markComplete: "Marcar como Concluâda",
      markIncomplete: "Marcar como Incompleta",
      delete: "Excluir",
    },
    meeting: {
      title: "Reuniâµes",
      subtitle: "Agende e gerencie suas reuniâµes",
      scheduleMeeting: "Agendar Reuniâ£o",
      meetingTitle: "Tâtulo da Reuniâ£o",
      meetingDescription: "Descriçâ£o da Reuniâ£o",
      date: "Data",
      time: "Hora",
      duration: "Duraçâ£o",
      minutes: "minutos",
      schedule: "Agendar Reuniâ£o",
      noMeetings: "Nenhuma reuniâ£o agendada",
      startScheduling: "Comece a agendar reuniâµes para se manter organizado",
      upcoming: "Prióximas",
      past: "Passadas",
      cancel: "Cancelar Reuniâ£o",
    },
    planning: {
      title: "Planejamento",
      subtitle: "Planeje e acompanhe seus projetos",
      createPlan: "Criar Plano",
      planName: "Nome do Plano",
      planDescription: "Descriçâ£o do Plano",
      startDate: "Data de Inâcio",
      endDate: "Data de Término",
      status: "Status",
      notStarted: "Nâ£o Iniciado",
      inProgress: "Em Andamento",
      completed: "Concluâdo",
      create: "Criar Plano",
      noPlans: "Ainda nâ£o há planos",
      startPlanning: "Comece a planejar seus projetos",
      addMilestone: "Adicionar Marco",
      milestoneName: "Nome do Marco",
      milestoneDate: "Data do Marco",
      delete: "Excluir",
    },
    projects: {
      title: "Projetos",
      subtitle: "Gerencie e monitore seus projetos de desenvolvimento",
      newProject: "Novo Projeto",
      projectName: "Nome do Projeto",
      projectDescription: "Descriçâ£o do Projeto",
      technologies: "Tecnologias (separadas por vârgula)",
      status: "Status",
      active: "Ativo",
      building: "Construindo",
      inProgress: "Em Andamento",
      create: "Criar Projeto",
      noProjects: "Ainda nâ£o há projetos",
      startCreating: "Comece a criar projetos para rastrear seu trabalho",
      lastUpdated: "Última atualizaçâ£o",
      edit: "Editar",
      delete: "Excluir",
      cancel: "Cancelar",
      save: "Salvar Alteraçâµes",
      editProject: "Editar Projeto",
      kanban: "Quadro Kanban",
      viewKanban: "Ver Kanban",
      collaborators: "Colaboradores",
      addCollaborator: "Adicionar Colaborador",
      inviteByEmail: "Convidar por email",
      invite: "Convidar",
      removeCollaborator: "Remover",
      owner: "Proprietário",
      noCollaborators: "Ainda nâ£o há colaboradores",
    },
    community: {
      title: "Comunidade",
      subtitle: "Conecte-se com desenvolvedores, compartilhe conhecimento e colabore",
      newDiscussion: "Nova Discussâ£o",
      discussionTitle: "Tâtulo da Discussâ£o",
      discussionContent: "O que vocâª está pensando?",
      category: "Categoria",
      selectCategory: "Selecione uma categoria",
      customCategory: "Nome da Categoria Personalizada",
      post: "Publicar Discussâ£o",
      noDiscussions: "Ainda nâ£o há discussâµes",
      startDiscussion: "Seja o primeiro a iniciar uma discussâ£o",
      replies: "respostas",
      by: "por",
      cancel: "Cancelar",
      general: "Geral",
      help: "Ajuda",
      showcase: "Vitrine",
      feedback: "Feedback",
      announcements: "Anúncios",
    },
    kanban: {
      title: "Quadro Kanban",
      backToProjects: "Voltar aos Projetos",
      addCard: "Adicionar Cartâ£o",
      addColumn: "Adicionar Coluna",
      columnName: "Nome da Coluna",
      cardTitle: "Tâtulo do Cartâ£o",
      cardDescription: "Descriçâ£o do Cartâ£o",
      assignee: "Atribuâdo a",
      dueDate: "Data de Vencimento",
      create: "Criar",
      cancel: "Cancelar",
      deleteCard: "Excluir Cartâ£o",
      deleteColumn: "Excluir Coluna",
      editCard: "Editar Cartâ£o",
      save: "Salvar Alteraçâµes",
      noCards: "Ainda nâ£o há cartâµes",
      dragCard: "Arraste cartâµes entre colunas",
    },
    diagrams: {
      title: "Fluxo e Diagramas",
      createNew: "Criar Novo Diagrama",
      noDiagrams: "Ainda nâ£o há diagramas",
      noDiagramsDesc: "Crie seu primeiro fluxograma para visualizar seus processos",
      diagramName: "Nome do Diagrama",
      description: "Descriçâ£o",
      create: "Criar",
      edit: "Editar",
      delete: "Excluir",
      confirmDelete: "Tem certeza de que deseja excluir este diagrama?",
      cancel: "Cancelar",
      save: "Salvar",
      addNode: "Adicionar Nió",
      addConnection: "Adicionar Conexâ£o",
      nodeTypes: {
        start: "Inâcio",
        process: "Processo",
        decision: "Decisâ£o",
        end: "Fim",
        data: "Dados",
      },
      tools: {
        select: "Selecionar",
        move: "Mover",
        delete: "Excluir",
        connect: "Conectar",
      },
      exportImage: "Exportar como Imagem",
      exportJSON: "Exportar como JSON",
      clear: "Limpar Tela",
      zoom: "Zoom",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
  ru: {
    nav: {
      home: "Ð“Ð»Ð°Ð²Ð½Ð°Ñ",
      dashboard: "ÐŸÐ°Ð½ÐµÐ»ÑŒ",
      projects: "ÐŸÑ€Ð¾ÐµÐºÑ‚Ñ‹",
      aiTools: "Ð˜Ð˜ Ð˜Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹",
      community: "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾",
      settings: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸",
      signIn: "Ð’Ð¾Ð¹Ñ‚Ð¸",
      signUp: "Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ",
      signOut: "Ð’Ñ‹Ð¹Ñ‚Ð¸",
      todo: "Ð—Ð°Ð´Ð°Ñ‡Ð¸",
      meeting: "Ð’ÑÑ‚Ñ€ÐµÑ‡Ð¸",
      planning: "ÐŸÐ»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ",
      diagrams: "Ð‘Ð»Ð¾Ðº-ÑÑ…ÐµÐ¼Ñ‹",
    },
    auth: {
      signIn: "Ð’Ð¾Ð¹Ñ‚Ð¸",
      signUp: "Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ",
      email: "Ð­Ð»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð°Ñ Ð¿Ð¾Ñ‡Ñ‚Ð°",
      password: "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ",
      name: "Ð˜Ð¼Ñ",
      createAccount: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚",
      alreadyHaveAccount: "Ð£Ð¶Ðµ ÐµÑÑ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚?",
      dontHaveAccount: "ÐÐµÑ‚ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°?",
      signInButton: "Ð’Ð¾Ð¹Ñ‚Ð¸",
      signUpButton: "Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ",
      rememberMe: "Ð—Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ñ‚ÑŒ Ð¼ÐµÐ½Ñ",
    },
    dashboard: {
      welcomeBack: "Ð¡ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰ÐµÐ½Ð¸ÐµÐ¼",
      happeningToday: "Ð’Ð¾Ñ‚ Ñ‡Ñ‚Ð¾ Ð¿Ñ€Ð¾Ð¸ÑÑ…Ð¾Ð´Ð¸Ñ‚ Ñ Ð²Ð°ÑˆÐ¸Ð¼Ð¸ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð°Ð¼Ð¸ ÑÐµÐ³Ð¾Ð´Ð½Ñ.",
      loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°...",
      activeUsers: "ÐÐºÑ‚Ð¸Ð²Ð½Ñ‹Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð¸",
      totalBuilds: "Ð’ÑÐµÐ³Ð¾ ÑÐ±Ð¾Ñ€Ð¾Ðº",
      repositories: "Ð ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¸",
      apiCalls: "API Ð²Ñ‹Ð·Ð¾Ð²Ñ‹",
      recentProjects: "ÐÐµÐ´Ð°Ð²Ð½Ð¸Ðµ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹",
      aiAssistant: "Ð˜Ð˜ ÐÑÑÐ¸ÑÑ‚ÐµÐ½Ñ‚",
      systemStatus: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹",
      askAnything: "Ð¡Ð¿Ñ€Ð¾ÑÐ¸Ñ‚Ðµ Ð¼ÐµÐ½Ñ Ð¾ Ñ‡ÐµÐ¼ ÑƒÐ³Ð¾Ð´Ð½Ð¾...",
      send: "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
      allSystemsOperational: "Ð’ÑÐµ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÑŽÑ‚",
      buildsInProgress: "ÑÐ±Ð¾Ñ€Ð¾Ðº Ð² Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐµ",
      connectedAndHealthy: "ÐŸÐ¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾ Ð¸ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚",
    },
    settings: {
      title: "Настройки",
      subtitle: "Управляйте своей учетной записью и параметрами",
      profile: "Профиль",
      username: "Имя пользователя",
      email: "Электронная почта",
      userId: "ID пользователя",
      memberSince: "Участник с",
      saveChanges: "Сохранить изменения",
      notifications: "Уведомления",
      emailNotifications: "Уведомления по почте",
      emailNotificationsDesc: "Получайте обновления о ваших проектах",
      buildNotifications: "Уведомления о сборках",
      buildNotificationsDesc: "Получайте уведомления о завершении сборок",
      meetingNotifications: "Уведомления о встречах",
      meetingNotificationsDesc: "Получайте уведомления о предстоящих встречах",
      avatar: "Фотография профиля",
      uploadAvatar: "Загрузить фото",
      removeAvatar: "Удалить",
      security: "Безопасность",
      currentPassword: "Текущий пароль",
      newPassword: "Новый пароль",
      updatePassword: "Обновить пароль",
      appearance: "Внешний вид",
      theme: "Тема",
      darkMode: "Тёмный режим",
      lightMode: "Светлый режим",
      currentTheme: "Текущая тема",
      comingSoon: "Скоро",
      language: "Язык",
      selectLanguage: "Выберите предпочитаемый язык",
      dangerZone: "Опасная зона",
      dangerZoneDesc: "Необратимые действия, которые навсегда повлияют на вашу учетную запись",
      deleteAccount: "Удалить аккаунт",
    },
    notifications: {
      title: "Уведомления",
      noUpcoming: "Нет предстоящих встреч",
      startsIn: "Начинается через",
    },
    landing: {
      hero: {
        title: "Ð”ÑƒÐ¼Ð°Ð¹. ÐšÐ¾Ð´Ð¸Ñ€ÑƒÐ¹. Ð¢ÐµÑÑ‚Ð¸Ñ€ÑƒÐ¹. ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÐ¹.",
        subtitle: "Ð˜Ð´ÐµÐ°Ð»ÑŒÐ½Ð°Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð° Ð´Ð»Ñ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ¾Ð², ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ ÑÐ¾Ð·Ð´Ð°ÑŽÑ‚, ÑƒÑ‡Ð°Ñ‚ÑÑ Ð¸ ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸Ñ‡Ð°ÑŽÑ‚.",
        cta: "Ð’Ð¾Ð¹Ñ‚Ð¸ Ð² Lab68",
      },
      mission: {
        title: "ÐÐ°ÑˆÐ° Ð¼Ð¸ÑÑÐ¸Ñ",
        description:
          "Lab68 - ÑÑ‚Ð¾ Ð±Ñ€ÑƒÑ‚Ð°Ð»ÑŒÐ½Ð°Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð° Ð´Ð»Ñ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ¾Ð², ÑÐ¾Ð·Ð´Ð°Ð½Ð½Ð°Ñ Ð´Ð»Ñ Ñ‚ÐµÑ…, ÐºÑ‚Ð¾ Ñ†ÐµÐ½Ð¸Ñ‚ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²Ñ‹ÑˆÐµ Ñ„Ð¾Ñ€Ð¼Ñ‹. ÐœÑ‹ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÐ¼ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹, ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾ Ð¸ Ñ€ÐµÑÑƒÑ€ÑÑ‹, Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ Ð´Ð»Ñ ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ñ Ð¸ÑÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð½Ð¾Ð³Ð¾ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ.",
      },
      techStack: {
        title: "Ð¢ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ ÑÑ‚ÐµÐº",
      },
      community: {
        title: "ÐŸÑ€Ð¸ÑÐ¾ÐµÐ´Ð¸Ð½ÑÐ¹Ñ‚ÐµÑÑŒ Ðº ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ñƒ",
        description: "ÐžÐ±Ñ‰Ð°Ð¹Ñ‚ÐµÑÑŒ Ñ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ°Ð¼Ð¸ Ð¿Ð¾ Ð²ÑÐµÐ¼Ñƒ Ð¼Ð¸Ñ€Ñƒ. Ð”ÐµÐ»Ð¸Ñ‚ÐµÑÑŒ Ð·Ð½Ð°Ð½Ð¸ÑÐ¼Ð¸. Ð¡Ð¾Ð·Ð´Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð²Ð¼ÐµÑÑ‚Ðµ.",
      },
    },
    todo: {
      title: "Ð—Ð°Ð´Ð°Ñ‡Ð¸",
      subtitle: "Ð£Ð¿Ñ€Ð°Ð²Ð»ÑÐ¹Ñ‚Ðµ ÑÐ²Ð¾Ð¸Ð¼Ð¸ Ð·Ð°Ð´Ð°Ñ‡Ð°Ð¼Ð¸ Ð¸ Ð¾ÑÑ‚Ð°Ð²Ð°Ð¹Ñ‚ÐµÑÑŒ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¼Ð¸",
      addTask: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð·Ð°Ð´Ð°Ñ‡Ñƒ",
      taskName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð·Ð°Ð´Ð°Ñ‡Ð¸",
      taskDescription: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð·Ð°Ð´Ð°Ñ‡Ð¸",
      priority: "ÐŸÑ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚",
      low: "ÐÐ¸Ð·ÐºÐ¸Ð¹",
      medium: "Ð¡Ñ€ÐµÐ´Ð½Ð¸Ð¹",
      high: "Ð’Ñ‹ÑÐ¾ÐºÐ¸Ð¹",
      create: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð·Ð°Ð´Ð°Ñ‡Ñƒ",
      noTasks: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ Ð·Ð°Ð´Ð°Ñ‡",
      startAdding: "ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÑ‚ÑŒ Ð·Ð°Ð´Ð°Ñ‡Ð¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾ÑÑ‚Ð°Ð²Ð°Ñ‚ÑŒÑÑ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¼Ð¸",
      completed: "Ð—Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð½Ñ‹Ðµ",
      pending: "ÐžÐ¶Ð¸Ð´Ð°ÑŽÑ‰Ð¸Ðµ",
      markComplete: "ÐžÑ‚Ð¼ÐµÑ‚Ð¸Ñ‚ÑŒ ÐºÐ°Ðº Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð½ÑƒÑŽ",
      markIncomplete: "ÐžÑ‚Ð¼ÐµÑ‚Ð¸Ñ‚ÑŒ ÐºÐ°Ðº Ð½ÐµÐ·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð½ÑƒÑŽ",
      delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
    },
    meeting: {
      title: "Ð’ÑÑ‚Ñ€ÐµÑ‡Ð¸",
      subtitle: "ÐŸÐ»Ð°Ð½Ð¸Ñ€ÑƒÐ¹Ñ‚Ðµ Ð¸ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÑÐ¹Ñ‚Ðµ ÑÐ²Ð¾Ð¸Ð¼Ð¸ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð°Ð¼Ð¸",
      scheduleMeeting: "Ð—Ð°Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÑ‚Ñ€ÐµÑ‡Ñƒ",
      meetingTitle: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð¸",
      meetingDescription: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð¸",
      date: "Ð”Ð°Ñ‚Ð°",
      time: "Ð’Ñ€ÐµÐ¼Ñ",
      duration: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ",
      minutes: "Ð¼Ð¸Ð½ÑƒÑ‚",
      schedule: "Ð—Ð°Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÑ‚Ñ€ÐµÑ‡Ñƒ",
      noMeetings: "ÐÐµÑ‚ Ð·Ð°Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ñ… Ð²ÑÑ‚Ñ€ÐµÑ‡",
      startScheduling: "ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÑ‚Ñ€ÐµÑ‡Ð¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¾ÑÑ‚Ð°Ð²Ð°Ñ‚ÑŒÑÑ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¼Ð¸",
      upcoming: "ÐŸÑ€ÐµÐ´ÑÑ‚Ð¾ÑÑ‰Ð¸Ðµ",
      past: "ÐŸÑ€Ð¾ÑˆÐµÐ´ÑˆÐ¸Ðµ",
      cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð²ÑÑ‚Ñ€ÐµÑ‡Ñƒ",
    },
    planning: {
      title: "ÐŸÐ»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ",
      subtitle: "ÐŸÐ»Ð°Ð½Ð¸Ñ€ÑƒÐ¹Ñ‚Ðµ Ð¸ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð¹Ñ‚Ðµ ÑÐ²Ð¾Ð¸ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹",
      createPlan: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð¿Ð»Ð°Ð½",
      planName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¿Ð»Ð°Ð½Ð°",
      planDescription: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð¿Ð»Ð°Ð½Ð°",
      startDate: "Ð”Ð°Ñ‚Ð° Ð½Ð°Ñ‡Ð°Ð»Ð°",
      endDate: "Ð”Ð°Ñ‚Ð° Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ð½Ð¸Ñ",
      status: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ",
      notStarted: "ÐÐµ Ð½Ð°Ñ‡Ð°Ñ‚Ð¾",
      inProgress: "Ð’ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐµ",
      completed: "Ð—Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð¾",
      create: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð¿Ð»Ð°Ð½",
      noPlans: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ Ð¿Ð»Ð°Ð½Ð¾Ð²",
      startPlanning: "ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ Ð¿Ð»Ð°Ð½Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ²Ð¾Ð¸ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹",
      addMilestone: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð²ÐµÑ…Ñƒ",
      milestoneName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð²ÐµÑ…Ð¸",
      milestoneDate: "Ð”Ð°Ñ‚Ð° Ð²ÐµÑ…Ð¸",
      delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
    },
    projects: {
      title: "ÐŸÑ€Ð¾ÐµÐºÑ‚Ñ‹",
      subtitle: "Ð£Ð¿Ñ€Ð°Ð²Ð»ÑÐ¹Ñ‚Ðµ Ð¸ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð¹Ñ‚Ðµ ÑÐ²Ð¾Ð¸ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸",
      newProject: "ÐÐ¾Ð²Ñ‹Ð¹ ÐŸÑ€Ð¾ÐµÐºÑ‚",
      projectName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐŸÑ€Ð¾ÐµÐºÑ‚Ð°",
      projectDescription: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ ÐŸÑ€Ð¾ÐµÐºÑ‚Ð°",
      technologies: "Ð¢ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸ (Ñ‡ÐµÑ€ÐµÐ· Ð·Ð°Ð¿ÑÑ‚ÑƒÑŽ)",
      status: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ",
      active: "ÐÐºÑ‚Ð¸Ð²Ð½Ñ‹Ð¹",
      building: "Ð’ Ð Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐµ",
      inProgress: "Ð’ ÐŸÑ€Ð¾Ñ†ÐµÑÑÐµ",
      create: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ ÐŸÑ€Ð¾ÐµÐºÑ‚",
      noProjects: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¾Ð²",
      startCreating: "ÐÐ°Ñ‡Ð½Ð¸Ñ‚Ðµ ÑÐ¾Ð·Ð´Ð°Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹ Ð´Ð»Ñ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð²Ð°ÑˆÐµÐ¹ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹",
      lastUpdated: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ",
      edit: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
      delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
      cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ",
      save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ",
      editProject: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÐŸÑ€Ð¾ÐµÐºÑ‚",
      kanban: "ÐšÐ°Ð½Ð±Ð°Ð½ Ð”Ð¾ÑÐºÐ°",
      viewKanban: "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ ÐšÐ°Ð½Ð±Ð°Ð½",
      collaborators: "Ð¡Ð¾Ð°Ð²Ñ‚Ð¾Ñ€Ñ‹",
      addCollaborator: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð¡Ð¾Ð°Ð²Ñ‚Ð¾Ñ€Ð°",
      inviteByEmail: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑÐ¸Ñ‚ÑŒ Ð¿Ð¾ email",
      invite: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑÐ¸Ñ‚ÑŒ",
      removeCollaborator: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
      owner: "Ð’Ð»Ð°Ð´ÐµÐ»ÐµÑ†",
      noCollaborators: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ ÑÐ¾Ð°Ð²Ñ‚Ð¾Ñ€Ð¾Ð²",
    },
    community: {
      title: "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾",
      subtitle: "ÐžÐ±Ñ‰Ð°Ð¹Ñ‚ÐµÑÑŒ Ñ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ°Ð¼Ð¸, Ð´ÐµÐ»Ð¸Ñ‚ÐµÑÑŒ Ð·Ð½Ð°Ð½Ð¸ÑÐ¼Ð¸ Ð¸ ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸Ñ‡Ð°Ð¹Ñ‚Ðµ",
      newDiscussion: "ÐÐ¾Ð²Ð¾Ðµ ÐžÐ±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",
      discussionTitle: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐžÐ±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ñ",
      discussionContent: "Ðž Ñ‡ÐµÐ¼ Ð²Ñ‹ Ð´ÑƒÐ¼Ð°ÐµÑ‚Ðµ?",
      category: "ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ñ",
      selectCategory: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ",
      customCategory: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¾Ð¹ ÐšÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð¸",
      post: "ÐžÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ¾Ð²Ð°Ñ‚ÑŒ ÐžÐ±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",
      noDiscussions: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ð¹",
      startDiscussion: "Ð‘ÑƒÐ´ÑŒÑ‚Ðµ Ð¿ÐµÑ€Ð²Ñ‹Ð¼, ÐºÑ‚Ð¾ Ð½Ð°Ñ‡Ð½ÐµÑ‚ Ð¾Ð±ÑÑƒÐ¶Ð´ÐµÐ½Ð¸Ðµ",
      replies: "Ð¾Ñ‚Ð²ÐµÑ‚Ð¾Ð²",
      by: "Ð¾Ñ‚",
      cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ",
      general: "ÐžÐ±Ñ‰ÐµÐµ",
      help: "ÐŸÐ¾Ð¼Ð¾Ñ‰ÑŒ",
      showcase: "Ð’Ð¸Ñ‚Ñ€Ð¸Ð½Ð°",
      feedback: "ÐžÑ‚Ð·Ñ‹Ð²Ñ‹",
      announcements: "ÐžÐ±ÑŠÑÐ²Ð»ÐµÐ½Ð¸Ñ",
    },
    kanban: {
      title: "ÐšÐ°Ð½Ð±Ð°Ð½ Ð”Ð¾ÑÐºÐ°",
      backToProjects: "ÐÐ°Ð·Ð°Ð´ Ðº ÐŸÑ€Ð¾ÐµÐºÑ‚Ð°Ð¼",
      addCard: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÑƒ",
      addColumn: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÐšÐ¾Ð»Ð¾Ð½ÐºÑƒ",
      columnName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐšÐ¾Ð»Ð¾Ð½ÐºÐ¸",
      cardTitle: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÐ¸",
      cardDescription: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÐ¸",
      assignee: "ÐÐ°Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¾",
      dueDate: "Ð¡Ñ€Ð¾Ðº Ð’Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
      create: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ",
      cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ",
      deleteCard: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÑƒ",
      deleteColumn: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÐšÐ¾Ð»Ð¾Ð½ÐºÑƒ",
      editCard: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÑƒ",
      save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð˜Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ",
      noCards: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡ÐµÐº",
      dragCard: "ÐŸÐµÑ€ÐµÑ‚Ð°ÑÐºÐ¸Ð²Ð°Ð¹Ñ‚Ðµ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÐ¸ Ð¼ÐµÐ¶Ð´Ñƒ ÐºÐ¾Ð»Ð¾Ð½ÐºÐ°Ð¼Ð¸",
    },
    diagrams: {
      title: "Ð‘Ð»Ð¾Ðº-ÑÑ…ÐµÐ¼Ñ‹",
      createNew: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ ÐÐ¾Ð²ÑƒÑŽ Ð”Ð¸Ð°Ð³Ñ€Ð°Ð¼Ð¼Ñƒ",
      noDiagrams: "ÐŸÐ¾ÐºÐ° Ð½ÐµÑ‚ Ð´Ð¸Ð°Ð³Ñ€Ð°Ð¼Ð¼",
      noDiagramsDesc: "Ð¡Ð¾Ð·Ð´Ð°Ð¹Ñ‚Ðµ ÑÐ²Ð¾ÑŽ Ð¿ÐµÑ€Ð²ÑƒÑŽ Ð±Ð»Ð¾Ðº-ÑÑ…ÐµÐ¼Ñƒ Ð´Ð»Ñ Ð²Ð¸Ð·ÑƒÐ°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐ¾Ð²",
      diagramName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð”Ð¸Ð°Ð³Ñ€Ð°Ð¼Ð¼Ñ‹",
      description: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ",
      create: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ",
      edit: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
      delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
      confirmDelete: "Ð’Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ ÑÑ‚Ñƒ Ð´Ð¸Ð°Ð³Ñ€Ð°Ð¼Ð¼Ñƒ?",
      cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð°",
      save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ",
      addNode: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð£Ð·ÐµÐ»",
      addConnection: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð¡Ð²ÑÐ·ÑŒ",
      nodeTypes: {
        start: "ÐÐ°Ñ‡Ð°Ð»Ð¾",
        process: "ÐŸÑ€Ð¾Ñ†ÐµÑÑ",
        decision: "Ð ÐµÑˆÐµÐ½Ð¸Ðµ",
        end: "ÐšÐ¾Ð½ÐµÑ†",
        data: "Ð”Ð°Ð½Ð½Ñ‹Ðµ",
      },
      tools: {
        select: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ",
        move: "ÐŸÐµÑ€ÐµÐ¼ÐµÑÑ‚Ð¸Ñ‚ÑŒ",
        delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
        connect: "Ð¡Ð¾ÐµÐ´Ð¸Ð½Ð¸Ñ‚ÑŒ",
      },
      exportImage: "Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ Ð² Ð˜Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ",
      exportJSON: "Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚ Ð² JSON",
      clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ Ð¥Ð¾Ð»ÑÑ‚",
      zoom: "ÐœÐ°ÑÑˆÑ‚Ð°Ð±",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      dashboard: "Bảng Điều Khiển",
      projects: "Dự án",
      aiTools: "Công Cụ AI",
      community: "Cộng Đồng",
      settings: "Cài Đặt",
      signIn: "Đăng Nhập",
      signUp: "Đăng Ký",
      signOut: "Đăng Xuất",
      todo: "Công Việc",
      meeting: "Cuộc Họp",
      planning: "Kế Hoạch",
      diagrams: "Sơ Đồ",
    },
    auth: {
      signIn: "ÄÄƒng Nháº­p",
      signUp: "ÄÄƒng Kâ½",
      email: "Email",
      password: "Máº­t Kháº©u",
      name: "Tâªn",
      createAccount: "Táº¡o Tâ i Khoáº£n",
      alreadyHaveAccount: "Äâ£ ciàtâ i khoáº£n?",
      dontHaveAccount: "ChÆ°a ciàtâ i khoáº£n?",
      signInButton: "ÄÄƒng Nháº­p",
      signUpButton: "ÄÄƒng Kâ½",
      rememberMe: "Ghi nhá»› Ä‘Äƒng nháº­p",
    },
    dashboard: {
      welcomeBack: "Châ o má»«ng trá»Ÿ láº¡i",
      happeningToday: "Äây lâ  nhá»¯ng gâ¬ Ä‘ang diá»…n ra vá»›i các dá»± án cá»§a báº¡n hôm nay.",
      loading: "Äang táº£i...",
      activeUsers: "NgÆ°á»i Dùng Hoáº¡t Äá»™ng",
      totalBuilds: "Tá»•ng Sá»‘ Báº£n Dá»±ng",
      repositories: "Kho LÆ°u Trá»¯",
      apiCalls: "Lá»i Gá»i API",
      recentProjects: "Dá»± ân Gáº§n Äây",
      aiAssistant: "Trá»£ Lâ½ AI",
      systemStatus: "Tráº¡ng Thái Há»‡ Thá»‘ng",
      askAnything: "Há»i tôi báº¥t cá»© Ä‘iá»u gâ¬...",
      send: "Gá»­i",
      allSystemsOperational: "Táº¥t cáº£ há»‡ thá»‘ng hoáº¡t Ä‘á»™ng",
      buildsInProgress: "báº£n dá»±ng Ä‘ang tiáº¿n hâ nh",
      connectedAndHealthy: "Äâ£ káº¿t ná»‘i vâ  khá»e máº¡nh",
    },
    settings: {
      title: "Cài Đặt",
      subtitle: "Quản lý tài khoản và tùy chọn của bạn",
      profile: "Hồ Sơ",
      username: "Tên Người Dùng",
      email: "Email",
      userId: "ID Người Dùng",
      memberSince: "Thành Viên Từ",
      saveChanges: "Lưu Thay Đổi",
      notifications: "Thông Báo",
      emailNotifications: "Thông Báo Email",
      emailNotificationsDesc: "Nhận cập nhật về các dự án của bạn",
      buildNotifications: "Thông Báo Bản Dựng",
      buildNotificationsDesc: "Nhận thông báo khi bản dựng hoàn thành",
      meetingNotifications: "Thông Báo Cuộc Họp",
      meetingNotificationsDesc: "Nhận thông báo về các cuộc họp sắp tới",
      avatar: "Ảnh Đại Diện",
      uploadAvatar: "Tải Ảnh Lên",
      removeAvatar: "Xóa",
      security: "Bảo Mật",
      currentPassword: "Mật Khẩu Hiện Tại",
      newPassword: "Mật Khẩu Mới",
      updatePassword: "Cập Nhật Mật Khẩu",
      appearance: "Giao Diện",
      theme: "Chủ Đề",
      darkMode: "Chế Độ Tối",
      lightMode: "Chế Độ Sáng",
      currentTheme: "Chủ đề hiện tại",
      comingSoon: "Sắp ra mắt",
      language: "Ngôn Ngữ",
      selectLanguage: "Chọn ngôn ngữ ưa thích của bạn",
      dangerZone: "Khu Vực Nguy Hiểm",
      dangerZoneDesc: "Các hành động không thể đảo ngược sẽ ảnh hưởng vĩnh viễn đến tài khoản của bạn",
      deleteAccount: "Xóa Tài Khoản",
    },
    notifications: {
      title: "Thông Báo",
      noUpcoming: "Không có cuộc họp sắp tới",
      startsIn: "Bắt đầu sau",
    },
    landing: {
      hero: {
        title: "Suy NghÄ©. Láº­p Trâ¬nh. Kiá»ƒm Tra. Triá»ƒn Khai.",
        subtitle: "Ná»n táº£ng tá»‘i Æ°u cho các nhâ  phát triá»ƒn xây dá»±ng, há»c há»i vâ  cá»™ng tác.",
        cta: "Vâ o Lab68",
      },
      mission: {
        title: "Sá»© Má»‡nh Cá»§a Chúng Tôi",
        description:
          "Lab68 lâ  má»™t ná»n táº£ng phát triá»ƒn theo phong cách brutalist Ä‘Æ°á»£c thiáº¿t káº¿ cho nhá»¯ng ngÆ°á»i coi trá»ng chá»©c nÄƒng hÆ¡n hâ¬nh thá»©c. Chúng tôi cung cáº¥p các công cá»¥, cá»™ng Ä‘á»“ng vâ  tâ i nguyâªn báº¡n cáº§n Ä‘á»ƒ xây dá»±ng pháº§n má»m xuáº¥t sáº¯c.",
      },
      techStack: {
        title: "NgÄƒn Xáº¿p Công Nghá»‡",
      },
      community: {
        title: "Tham Gia Cá»™ng Äá»“ng",
        description: "Káº¿t ná»‘i vá»›i các nhâ  phát triá»ƒn trâªn toâ n tháº¿ giá»›i. Chia sáº» kiáº¿n thá»©c. Cùng nhau xây dá»±ng.",
      },
    },
    todo: {
      title: "Công Viá»‡c",
      subtitle: "Quáº£n lâ½ công viá»‡c vâ  giá»¯ má»i thá»© ngÄƒn náº¯p",
      addTask: "Thâªm Công Viá»‡c",
      taskName: "Tâªn Công Viá»‡c",
      taskDescription: "Mô Táº£ Công Viá»‡c",
      priority: "Æ¯u Tiâªn",
      low: "Tháº¥p",
      medium: "Trung Bâ¬nh",
      high: "Cao",
      create: "Táº¡o Công Viá»‡c",
      noTasks: "ChÆ°a ciàcông viá»‡c nâ o",
      startAdding: "Báº¯t Ä‘áº§u thâªm công viá»‡c Ä‘á»ƒ giá»¯ má»i thá»© ngÄƒn náº¯p",
      completed: "Äâ£ Hoâ n Thâ nh",
      pending: "Äang Chá»",
      markComplete: "Äánh Dáº¥u Hoâ n Thâ nh",
      markIncomplete: "Äánh Dáº¥u ChÆ°a Hoâ n Thâ nh",
      delete: "Xióa",
    },
    meeting: {
      title: "Cuá»™c Há»p",
      subtitle: "Lâªn lá»‹ch vâ  quáº£n lâ½ các cuá»™c há»p cá»§a báº¡n",
      scheduleMeeting: "Lâªn Lá»‹ch Cuá»™c Há»p",
      meetingTitle: "Tiâªu Äá» Cuá»™c Há»p",
      meetingDescription: "Mô Táº£ Cuá»™c Há»p",
      date: "Ngâ y",
      time: "Giá»",
      duration: "Thá»i LÆ°á»£ng",
      minutes: "phút",
      schedule: "Lâªn Lá»‹ch Cuá»™c Há»p",
      noMeetings: "ChÆ°a ciàcuá»™c há»p nâ o Ä‘Æ°á»£c lâªn lá»‹ch",
      startScheduling: "Báº¯t Ä‘áº§u lâªn lá»‹ch cuá»™c há»p Ä‘á»ƒ giá»¯ má»i thá»© ngÄƒn náº¯p",
      upcoming: "Sáº¯p Tá»›i",
      past: "Äâ£ Qua",
      cancel: "Há»§y Cuá»™c Há»p",
    },
    planning: {
      title: "Káº¿ Hoáº¡ch",
      subtitle: "Láº­p káº¿ hoáº¡ch vâ  theo dâµi các dá»± án cá»§a báº¡n",
      createPlan: "Táº¡o Káº¿ Hoáº¡ch",
      planName: "Tâªn Káº¿ Hoáº¡ch",
      planDescription: "Mô Táº£ Káº¿ Hoáº¡ch",
      startDate: "Ngâ y Báº¯t Äáº§u",
      endDate: "Ngâ y Káº¿t Thúc",
      status: "Tráº¡ng Thái",
      notStarted: "ChÆ°a Báº¯t Äáº§u",
      inProgress: "Äang Tiáº¿n Hâ nh",
      completed: "Äâ£ Hoâ n Thâ nh",
      create: "Táº¡o Káº¿ Hoáº¡ch",
      noPlans: "ChÆ°a ciàkáº¿ hoáº¡ch nâ o",
      startPlanning: "Báº¯t Ä‘áº§u láº­p káº¿ hoáº¡ch cho các dá»± án cá»§a báº¡n",
      addMilestone: "Thâªm Cá»™t Má»‘c",
      milestoneName: "Tâªn Cá»™t Má»‘c",
      milestoneDate: "Ngâ y Cá»™t Má»‘c",
      delete: "Xióa",
    },
    projects: {
      title: "Dá»± ân",
      subtitle: "Quáº£n lâ½ vâ  theo dâµi các dá»± án phát triá»ƒn cá»§a báº¡n",
      newProject: "Dá»± ân Má»›i",
      projectName: "Tâªn Dá»± ân",
      projectDescription: "Mô Táº£ Dá»± ân",
      technologies: "Công Nghá»‡ (phân cách báº±ng dáº¥u pháº©y)",
      status: "Tráº¡ng Thái",
      active: "Hoáº¡t Äá»™ng",
      building: "Äang Xây Dá»±ng",
      inProgress: "Äang Tiáº¿n Hâ nh",
      create: "Táº¡o Dá»± ân",
      noProjects: "ChÆ°a ciàdá»± án nâ o",
      startCreating: "Báº¯t Ä‘áº§u táº¡o dá»± án Ä‘á»ƒ theo dâµi công viá»‡c cá»§a báº¡n",
      lastUpdated: "Cáº­p nháº­t láº§n cuá»‘i",
      edit: "Chá»‰nh Sá»­a",
      delete: "Xióa",
      cancel: "Há»§y",
      save: "LÆ°u Thay Äá»•i",
      editProject: "Chá»‰nh Sá»­a Dá»± ân",
      kanban: "Báº£ng Kanban",
      viewKanban: "Xem Kanban",
      collaborators: "Cá»™ng Tác Viâªn",
      addCollaborator: "Thâªm Cá»™ng Tác Viâªn",
      inviteByEmail: "Má»i qua email",
      invite: "Má»i",
      removeCollaborator: "Xióa",
      owner: "Chá»§ Sá»Ÿ Há»¯u",
      noCollaborators: "ChÆ°a ciàcá»™ng tác viâªn",
    },
    community: {
      title: "Cá»™ng Äá»“ng",
      subtitle: "Káº¿t ná»‘i vá»›i các nhâ  phát triá»ƒn, chia sáº» kiáº¿n thá»©c vâ  cá»™ng tác",
      newDiscussion: "Tháº£o Luáº­n Má»›i",
      discussionTitle: "Tiâªu Äá» Tháº£o Luáº­n",
      discussionContent: "Báº¡n Ä‘ang nghÄ© gâ¬?",
      category: "Danh Má»¥c",
      selectCategory: "Chá»n danh má»¥c",
      customCategory: "Tâªn Danh Má»¥c Tùy Chá»‰nh",
      post: "ÄÄƒng Tháº£o Luáº­n",
      noDiscussions: "ChÆ°a ciàtháº£o luáº­n nâ o",
      startDiscussion: "Hâ£y lâ  ngÆ°á»i Ä‘áº§u tiâªn báº¯t Ä‘áº§u tháº£o luáº­n",
      replies: "tráº£ lá»i",
      by: "bá»Ÿi",
      cancel: "Há»§y",
      general: "Chung",
      help: "Trá»£ Giúp",
      showcase: "TrÆ°ng Bâ y",
      feedback: "Pháº£n Há»“i",
      announcements: "Thông Báo",
    },
    kanban: {
      title: "Báº£ng Kanban",
      backToProjects: "Quay Láº¡i Dá»± ân",
      addCard: "Thâªm Tháº»",
      addColumn: "Thâªm Cá»™t",
      columnName: "Tâªn Cá»™t",
      cardTitle: "Tiâªu Äá» Tháº»",
      cardDescription: "Mô Táº£ Tháº»",
      assignee: "NgÆ°á»i ÄÆ°á»£c Giao",
      dueDate: "Ngâ y Äáº¿n Háº¡n",
      create: "Táº¡o",
      cancel: "Há»§y",
      deleteCard: "Xióa Tháº»",
      deleteColumn: "Xióa Cá»™t",
      editCard: "Chá»‰nh Sá»­a Tháº»",
      save: "LÆ°u Thay Äá»•i",
      noCards: "ChÆ°a ciàtháº» nâ o",
      dragCard: "Kéo tháº» giá»¯a các cá»™t",
    },
    diagrams: {
      title: "SÆ¡ Äá»“",
      createNew: "Táº¡o SÆ¡ Äá»“ Má»›i",
      noDiagrams: "ChÆ°a ciàsÆ¡ Ä‘á»“ nâ o",
      noDiagramsDesc: "Táº¡o sÆ¡ Ä‘á»“ Ä‘áº§u tiâªn Ä‘á»ƒ trá»±c quan hióa quy trâ¬nh cá»§a báº¡n",
      diagramName: "Tâªn SÆ¡ Äá»“",
      description: "Mô Táº£",
      create: "Táº¡o",
      edit: "Chá»‰nh Sá»­a",
      delete: "Xióa",
      confirmDelete: "Báº¡n ciàcháº¯c cháº¯n muá»‘n xióa sÆ¡ Ä‘á»“ nâ y?",
      cancel: "Há»§y",
      save: "LÆ°u",
      addNode: "Thâªm Nút",
      addConnection: "Thâªm Káº¿t Ná»‘i",
      nodeTypes: {
        start: "Báº¯t Äáº§u",
        process: "Quy Trâ¬nh",
        decision: "Quyáº¿t Äá»‹nh",
        end: "Káº¿t Thúc",
        data: "Dá»¯ Liá»‡u",
      },
      tools: {
        select: "Chá»n",
        move: "Di Chuyá»ƒn",
        delete: "Xióa",
        connect: "Káº¿t Ná»‘i",
      },
      exportImage: "Xuáº¥t Hâ¬nh áº¢nh",
      exportJSON: "Xuáº¥t JSON",
      clear: "Xióa Canvas",
      zoom: "Thu Phióng",
      editLabel: ""
    },
    files: defaultFilesTranslations,
    wiki: defaultWikiTranslations,
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en
}

export function getLanguageName(lang: Language): string {
  const names: Record<Language, string> = {
    en: "English",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
    ja: "日本語",
    pt: "Português",
    ru: "Русский",
    vi: "Tiếng Việt", // Added Vietnamese language name
  }
  return names[lang]
}

// Get user's language preference
export function getUserLanguage(): Language {
  if (typeof window === "undefined") return "en"
  const saved = localStorage.getItem("lab68_language")
  return (saved as Language) || "en"
}

// Set user's language preference
export function setUserLanguage(lang: Language): void {
  localStorage.setItem("lab68_language", lang)
}

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Translations>(getTranslations("en"))

  useEffect(() => {
    const lang = getUserLanguage()
    setLanguage(lang)
    setTranslations(getTranslations(lang))

    // Listen for language changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "lab68_language") {
        const newLang = (e.newValue as Language) || "en"
        setLanguage(newLang)
        setTranslations(getTranslations(newLang))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return {
    language,
    t: translations,
    setLanguage: (lang: Language) => {
      setUserLanguage(lang)
      setLanguage(lang)
      setTranslations(getTranslations(lang))
    },
  }
}








