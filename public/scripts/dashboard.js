document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    const mainContent = document.querySelector('.dashboard-main');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('sidebar-active');
        });
    }
    
    // Puedes añadir más funcionalidades aquí
    console.log('Dashboard JS cargado');
});