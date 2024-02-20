const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarCloseButton = document.getElementById('sidebarCloseButton');

let show = false;

sidebarToggle.addEventListener('click', () => {
  sidebar.style.transform = show ? 'translate(-100%)' : 'translate(0)';
  show = !show;
});

sidebarCloseButton.addEventListener('click', () => {
  sidebar.style.transform = 'translate(-100%)';
  show = false;
});
