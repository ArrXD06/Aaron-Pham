// Nav background after scrolling
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 60);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

// Six film cards: preview on hover/focus, full player in a modal on click
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');

document.querySelectorAll('.thumb').forEach(btn => {
  const v = btn.querySelector('video');
  const start = () => v.play().catch(() => {});
  const stop = () => { v.pause(); v.currentTime = 0; };
  btn.addEventListener('mouseenter', start);
  btn.addEventListener('mouseleave', stop);
  btn.addEventListener('focus', start);
  btn.addEventListener('blur', stop);
  btn.addEventListener('click', () => {
    stop();
    modalVideo.src = btn.dataset.video;
    modalTitle.textContent = btn.dataset.title;
    modal.showModal();
    modalVideo.play().catch(() => {});
  });
});

const closeModal = () => modal.close();
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modal.addEventListener('close', () => {
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
});