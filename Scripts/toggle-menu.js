// //? pop-up hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const popupMenu = document.querySelector('.popup-menu');
  
    menuToggle.addEventListener('click', function() {
      popupMenu.style.display = (popupMenu.style.display === 'block') ? 'none' : 'block';
    });
  
    popupMenu.addEventListener('mouseout', function(event) {
      const otherElement = event.relatedTarget;
      if (!popupMenu.contains(otherElement)) {
        popupMenu.style.display = 'none';
      }
    });
  });