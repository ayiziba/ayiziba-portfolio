document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.documentElement.classList.remove('menu-open'));
});

const visualArchive = document.createElement('section');
visualArchive.className = 'poster-archive';
visualArchive.innerHTML = `
  <div class="poster-archive-head"><span>VISUAL DESIGN / 海报与策展视觉</span><p>点击海报查看大图</p></div>
  <div class="poster-grid">
    <button class="poster" type="button" data-poster="assets/posters/focus-view.png" data-title="聚焦 · 视界"><img src="assets/posters/focus-view.png" alt="《聚焦视界》新闻摄影课程作品展海报"><span>展览主视觉<br><b>聚焦 · 视界</b></span></button>
    <button class="poster" type="button" data-poster="assets/posters/starlight-train-preface.png" data-title="星辰号 序"><img src="assets/posters/starlight-train-preface.png" alt="《星辰号》摄影结课展序言海报"><span>摄影结课展<br><b>星辰号 · 序</b></span></button>
    <button class="poster" type="button" data-poster="assets/posters/starlight-train-finale.png" data-title="星辰号 终"><img src="assets/posters/starlight-train-finale.png" alt="《星辰号》摄影结课展终章海报"><span>摄影结课展<br><b>星辰号 · 终</b></span></button>
  </div>`;
document.querySelector('.work .section-body').append(visualArchive);

const lightbox = document.createElement('dialog');
lightbox.className = 'lightbox';
lightbox.setAttribute('aria-label', '海报预览');
lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="关闭预览">×</button><img src="" alt=""><p></p>';
document.body.append(lightbox);
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('p');
document.querySelectorAll('[data-poster]').forEach((poster) => {
  poster.addEventListener('click', () => {
    lightboxImage.src = poster.dataset.poster;
    lightboxImage.alt = poster.querySelector('img').alt;
    lightboxTitle.textContent = poster.dataset.title;
    lightbox.showModal();
  });
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.closest('.lightbox-close')) lightbox.close();
});
