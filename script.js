// Typewriter Effect
const phrases = [
    'Ingeniero en Sistemas',
    'Desarrollador Full Stack',
    'Docente de Programación',
    'Especialista en Python',
    'Formador de Talentos'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const current = phrases[phraseIndex];
    const typewriterEl = document.getElementById('typewriter');
    
    if (isDeleting) {
        typewriterEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(typeWriter, speed);
}

// Projects Data
const projects = [
    {
        title: "Sistema de Carnetización",
        category: "web",
        tech: "PHP, MySQL, Bootstrap, JavaScript",
        description: "Sistema completo para la gestión de carnets institucionales con captura de fotos, códigos QR, impresión automatizada y control de acceso en tiempo real.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Cajero Automático",
        category: "python",
        tech: "Python, Tkinter, SQLite, PIL",
        description: "Simulador de cajero automático con interfaz gráfica completa. Incluye retiros, depósitos, consultas de saldo, transferencias y generación de reportes.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Sistema de Inventario Inteligente",
        category: "python",
        tech: "Python, Django, PostgreSQL, Pandas",
        description: "Plataforma web para gestión de inventarios con análisis predictivo, alertas automáticas de stock bajo y generación de reportes estadísticos avanzados.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Scraper de Datos Web",
        category: "python",
        tech: "Python, BeautifulSoup, Selenium, Pandas",
        description: "Herramienta automatizada para extracción de datos de sitios web. Incluye limpieza de datos, exportación a CSV/Excel y programación de tareas automáticas.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Dashboard Analytics",
        category: "javascript",
        tech: "React, D3.js, Node.js, MongoDB",
        description: "Dashboard interactivo para visualización de datos en tiempo real con gráficos dinámicos, filtros avanzados y exportación de reportes personalizados.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "API de Gestión Académica",
        category: "python",
        tech: "FastAPI, PostgreSQL, JWT, Docker",
        description: "API RESTful robusta para gestión académica con autenticación segura, gestión de estudiantes, cursos, calificaciones y generación de certificados.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Chat en Tiempo Real",
        category: "javascript",
        tech: "Node.js, Socket.io, Express, MongoDB",
        description: "Aplicación de mensajería instantánea con salas de chat, notificaciones push, compartir archivos y indicadores de escritura en tiempo real.",
        github: "https://github.com/maysalazar16"
    },
    {
        title: "Sistema de Ventas POS",
        category: "web",
        tech: "Vue.js, Laravel, MySQL, Redis",
        description: "Sistema punto de venta completo con gestión de productos, clientes, ventas, facturación electrónica e integración con impresoras térmicas.",
        github: "https://github.com/maysalazar16"
    }
];

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    container.innerHTML = '';

    projects.forEach((project, index) => {
        const categoryClass = project.category === 'python' ? 'category-python' : 
                             project.category === 'javascript' ? 'category-javascript' : 'category-web';
        
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <div class="project-header">
                <div class="project-category ${categoryClass}">${project.category.toUpperCase()}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-tech">${project.tech}</p>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    renderProjects();
    initSmoothScroll();
});