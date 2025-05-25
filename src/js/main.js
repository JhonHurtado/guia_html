// Configuración de módulos
const modules = [
    {
        id: 1,
        title: "Introducción a HTML",
        description: "Aprende qué es HTML, su historia y crea tu primera página web.",
        status: "completed",
        icon: "bi-play-circle",
        path: "src/modules/module-1-introduccion/",
        topics: ["¿Qué es HTML?", "Historia del HTML", "Estructura básica", "Tu primera página"]
    },
    {
        id: 2,
        title: "Estructura y Elementos Básicos",
        description: "Domina la estructura de documentos HTML y los elementos fundamentales.",
        status: "progress",
        icon: "bi-building",
        path: "src/modules/module-2-estructura/",
        topics: ["DOCTYPE y HTML5", "Head y metadatos", "Body y contenido", "Elementos block e inline"]
    },
    {
        id: 3,
        title: "Elementos Semánticos",
        description: "Aprende a usar elementos semánticos para crear código más significativo.",
        status: "planned",
        icon: "bi-diagram-3",
        path: "src/modules/module-3-semanticos/",
        topics: ["Header, Nav, Main", "Section y Article", "Aside y Footer", "Importancia semántica"]
    },
    {
        id: 4,
        title: "Listas y Navegación",
        description: "Crea listas ordenadas, desordenadas y menús de navegación efectivos.",
        status: "planned",
        icon: "bi-list-ul",
        path: "src/modules/module-4-listas/",
        topics: ["Listas ordenadas", "Listas desordenadas", "Listas de definición", "Menús de navegación"]
    },
    {
        id: 5,
        title: "Tablas",
        description: "Aprende a crear y estructurar tablas de datos de forma accesible.",
        status: "planned",
        icon: "bi-table",
        path: "src/modules/module-5-tablas/",
        topics: ["Estructura de tablas", "Cabeceras y celdas", "Colspan y rowspan", "Tablas accesibles"]
    },
    {
        id: 6,
        title: "Formularios",
        description: "Domina la creación de formularios interactivos y accesibles.",
        status: "planned",
        icon: "bi-file-earmark-text",
        path: "src/modules/module-6-formularios/",
        topics: ["Input types", "Validación HTML5", "Labels y accessibility", "Envío de formularios"]
    },
    {
        id: 7,
        title: "Media y Multimedia",
        description: "Incorpora imágenes, audio, video y otros elementos multimedia.",
        status: "planned",
        icon: "bi-camera-video",
        path: "src/modules/module-7-multimedia/",
        topics: ["Imágenes responsivas", "Audio y video", "Figuras y captions", "Optimización multimedia"]
    },
    {
        id: 8,
        title: "Accesibilidad Web",
        description: "Crea páginas web accesibles para todos los usuarios.",
        status: "planned",
        icon: "bi-universal-access",
        path: "src/modules/module-8-accesibilidad/",
        topics: ["ARIA attributes", "Navegación por teclado", "Screen readers", "Contraste y legibilidad"]
    },
    {
        id: 9,
        title: "SEO y Metadatos",
        description: "Optimiza tu HTML para motores de búsqueda y redes sociales.",
        status: "planned",
        icon: "bi-search",
        path: "src/modules/module-9-seo/",
        topics: ["Meta tags", "Open Graph", "Schema markup", "Sitemap y robots.txt"]
    },
    {
        id: 10,
        title: "Buenas Prácticas",
        description: "Aprende las mejores prácticas para escribir HTML profesional.",
        status: "planned",
        icon: "bi-star",
        path: "src/modules/module-10-buenas-practicas/",
        topics: ["Código limpio", "Performance", "Validación W3C", "Herramientas de desarrollo"]
    }
];

// Función para obtener clase de estado
function getStatusClass(status) {
    switch (status) {
        case 'completed':
            return 'status-completed';
        case 'progress':
            return 'status-progress';
        case 'planned':
            return 'status-planned';
        default:
            return 'status-planned';
    }
}

// Función para obtener texto de estado
function getStatusText(status) {
    switch (status) {
        case 'completed':
            return 'Completado';
        case 'progress':
            return 'En Progreso';
        case 'planned':
            return 'Planificado';
        default:
            return 'Planificado';
    }
}

// Función para crear card de módulo
function createModuleCard(module) {
    const isDisabled = module.status === 'planned';
    const cardClass = isDisabled ? 'module-card card h-100 opacity-75' : 'module-card card h-100';
    const linkClass = isDisabled ? 'text-decoration-none disabled' : 'text-decoration-none';
    const href = isDisabled ? '#' : module.path;
    const onclick = isDisabled ? 'event.preventDefault(); showComingSoon();' : '';

    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <a href="${href}" class="${linkClass}" onclick="${onclick}">
                <div class="${cardClass}">
                    <div class="card-body d-flex flex-column">
                        <div class="text-center mb-3">
                            <div class="module-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center">
                                <i class="${module.icon} fs-4"></i>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title mb-0">Módulo ${module.id}</h5>
                            <span class="module-status ${getStatusClass(module.status)}">
                                ${getStatusText(module.status)}
                            </span>
                        </div>
                        <h6 class="card-subtitle mb-3 text-primary">${module.title}</h6>
                        <p class="card-text text-muted mb-3">${module.description}</p>
                        <div class="mt-auto">
                            <h6 class="small fw-bold mb-2">Temas a cubrir:</h6>
                            <ul class="list-unstyled small text-muted">
                                ${module.topics.map(topic => `<li>• ${topic}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Función para mostrar mensaje de "próximamente"
function showComingSoon() {
    alert('🚧 Este módulo estará disponible próximamente. ¡Mantente atento a las actualizaciones!');
}

// Función para renderizar módulos
function renderModules() {
    const container = document.getElementById('modules-container');
    if (!container) return;

    container.innerHTML = modules.map(module => createModuleCard(module)).join('');
}

// Función para animaciones de scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Función para smooth scroll en navegación
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para mostrar progreso de carga
function updateProgress() {
    const completedModules = modules.filter(m => m.status === 'completed').length;
    const totalModules = modules.length;
    const progressPercentage = (completedModules / totalModules) * 100;
    
    // Crear barra de progreso si no existe
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="small fw-bold">Progreso del Curso</span>
                <span class="small text-muted">${completedModules}/${totalModules} módulos</span>
            </div>
            <div class="progress-custom">
                <div class="progress-bar-custom" style="width: ${progressPercentage}%"></div>
            </div>
        `;
    }
}

// Función para manejar tema oscuro/claro
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Obtener tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Función para inicializar tooltips de Bootstrap
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Función principal de inicialización
function init() {
    // Verificar que DOM esté cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    try {
        renderModules();
        handleScrollAnimations();
        initSmoothScroll();
        updateProgress();
        initThemeToggle();
        initTooltips();
        
        console.log('✅ Guía HTML inicializada correctamente');
    } catch (error) {
        console.error('❌ Error al inicializar la aplicación:', error);
    }
}

// Auto-inicialización
init();

// Exportar funciones para uso global
window.GuiaHTML = {
    modules,
    renderModules,
    showComingSoon,
    init
};
