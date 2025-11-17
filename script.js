// Script para cambiar entre modo claro y oscuro
// Crear el botón de cambio de tema
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
document.body.appendChild(themeToggle);

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
}

// Cambiar tema al hacer clic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = `<span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>`;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
