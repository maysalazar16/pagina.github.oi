// Companies / organizations worked with
// NOTE: edit this list directly to add/remove organizations for the carousel.
const companies = [
    { name: 'S&T Soluciones Tecnológicas', role: 'Software Developer', logo: 'images/logos/st-soluciones.png', initials: 'S&T' },
    { name: 'SENA', role: 'Instructor de Programación', logo: 'images/logos/sena.png', initials: 'SENA' },
    { name: 'Fundación FEDI', role: 'Desarrollador Full Stack — FEDI RISE', logo: 'images/logos/fundacion-fedi.png', initials: 'FEDI' },
    { name: 'Unisantamaría', role: 'Docente de Ingeniería de Sistemas y Programación de Software', logo: 'images/logos/unisantamaria.png', initials: 'USM' },
    { name: 'Solutec S.A.S.', role: 'Técnico de Soporte', logo: 'images/logos/solutec.png', initials: 'ST' },
    { name: 'OM Data (Mi Oficina.co S.A.S.)', role: 'Ingeniero de Soporte', logo: 'images/logos/omdata.png', initials: 'OM' }
];

function renderCompanies() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    // duplicate the list so the CSS animation can loop seamlessly
    const doubled = [...companies, ...companies];
    track.innerHTML = doubled.map(c => `
        <div class="company-card">
            <div class="company-logo">
                <img src="${c.logo}" alt="${c.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="company-logo-fallback">${c.initials}</span>
            </div>
            <span class="company-name">${c.name}</span>
            <span class="company-role">${c.role}</span>
        </div>
    `).join('');
}

// Featured case-study projects (private/institutional work, no public repo)
const featuredProjects = [
    {
        title: 'FEDI RISE / FEDI CLÍNICA',
        category: 'web',
        tech: 'Django, PostgreSQL, React, Vite, JWT, Docker, AWS S3',
        description: 'Plataforma clínica multidisciplinaria para gestión de terapias (Fonoaudiología, Fisioterapia, Terapia Ocupacional, Psicología, Terapia Acuática). Desarrollador único del stack completo: backend Django/PostgreSQL desplegado en Railway, frontend React/Vite en Vercel, generación de reportes e integración con IA.',
        status: 'Proyecto privado · Cliente',
        links: []
    },
    {
        title: 'Sistema de Carnetización SENA',
        category: 'python',
        tech: 'Flask, SQLite, Pillow, Jinja2',
        description: 'Sistema institucional para gestión de carnets de aprendices: flujo de captura de foto en 4 pasos, carga masiva de aprendices desde Excel y generación automatizada de carnets.',
        status: 'Proyecto institucional',
        links: []
    },
    {
        title: 'Scraper de Microsoft Forms',
        category: 'python',
        tech: 'Python, Playwright',
        description: 'Herramienta de automatización que extrae respuestas de Microsoft Forms y genera salidas estructuradas en JSON y PDF.',
        status: 'Proyecto propio',
        links: []
    }
];

// Real public repositories on GitHub (github.com/maysalazar16)
const publicProjects = [
    {
        title: 'Página Soluciones Tecnológicas',
        category: 'python',
        tech: 'Python',
        description: 'Proyecto de página web para Soluciones Tecnológicas.',
        repo: 'soluciones_tecnologicas'
    },
    {
        title: 'Página de Ventas',
        category: 'web',
        tech: 'HTML, CSS',
        description: 'Landing page de ventas construida con HTML y CSS puro.',
        repo: 'pagina-de-ventas'
    },
    {
        title: 'Juegos en Python',
        category: 'python',
        tech: 'Python',
        description: 'Colección de juegos desarrollados en Python.',
        repo: 'juegos-PYTHON'
    },
    {
        title: 'Descargador de Música',
        category: 'python',
        tech: 'Python',
        description: 'Utilidad en Python para descarga de música.',
        repo: 'descargar-m-sica-PYTHON-'
    }
];

function categoryLabel(category) {
    return category === 'python' ? 'category-python' :
           category === 'javascript' ? 'category-javascript' :
           category === 'go' ? 'category-go' :
           category === 'typescript' ? 'category-typescript' : 'category-web';
}

function renderFeatured() {
    const container = document.getElementById('featuredGrid');
    if (!container) return;
    container.innerHTML = '';

    featuredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';

        card.innerHTML = `
            <div class="project-header">
                <div class="project-badges">
                    <div class="project-category ${categoryLabel(project.category)}">${project.category.toUpperCase()}</div>
                    <div class="project-status">${project.status}</div>
                </div>
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

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    container.innerHTML = '';

    publicProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';

        card.innerHTML = `
            <div class="project-header">
                <div class="project-badges">
                    <div class="project-category ${categoryLabel(project.category)}">${project.category.toUpperCase()}</div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-tech">${project.tech}</p>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="https://github.com/maysalazar16/${project.repo}" target="_blank">Ver código →</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Mobile nav toggle
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
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

function setFooterYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// WhatsApp floating button: cycles short dev-flavored phrases in a speech
// bubble to invite visitors to click and start a chat.
// NOTE: edit this list directly to change the phrases shown.
const waPhrases = [
    '¿Buscas un desarrollador full stack? 👨‍💻',
    '¡Hablemos de tu próximo proyecto! 🚀',
    'Python · TypeScript · Go — ¿construimos algo?',
    'Disponible para nuevos retos ✅',
    'Escríbeme, respondo rápido 💬',
    '¿Necesitas una plataforma a la medida? 🛠️'
];

function initWhatsappTeaser() {
    const bubble = document.getElementById('waBubble');
    const button = document.getElementById('waButton');
    if (!bubble || !button) return;

    let index = 0;
    let hideTimeout = null;

    function cycle() {
        bubble.textContent = waPhrases[index % waPhrases.length];
        index++;

        bubble.classList.add('show');
        button.classList.add('wa-nudge');
        setTimeout(() => button.classList.remove('wa-nudge'), 650);

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => bubble.classList.remove('show'), 4800);
    }

    // first appearance shortly after the page loads, then repeat on a slower interval
    setTimeout(cycle, 2500);
    setInterval(cycle, 12000);

    // showing a phrase early if the visitor hovers the button
    button.addEventListener('mouseenter', () => {
        if (!bubble.classList.contains('show')) cycle();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderCompanies();
    renderFeatured();
    renderProjects();
    initMobileNav();
    initSmoothScroll();
    setFooterYear();
    initWhatsappTeaser();
});
