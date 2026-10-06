document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }

  // Copy IP functional buttons
  const copyButtons = document.querySelectorAll('.copy-ip-btn');
  const toast = document.getElementById('toast');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const ip = btn.getAttribute('data-ip') || 'play.maharlikasmp.com';
      navigator.clipboard.writeText(ip).then(() => {
        showToast();
      }).catch((err) => {
        console.error('Failed to copy server IP: ', err);
      });
    });
  });

  function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});
