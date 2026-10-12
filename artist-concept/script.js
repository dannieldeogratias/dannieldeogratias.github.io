const albums = {
  afterlight: {
    count: 'Album 01',
    title: 'Afterlight',
    description: 'A six-track visual release shaped by low voices, slow percussion and gold moving across black water.',
    form: 'Visual album and web experience',
    track: 'Gold on Water'
  },
  'black-current': {
    count: 'Album 02',
    title: 'Black Current',
    description: 'A darker project about submerged rhythm, deep reflections and the direction hidden beneath a calm surface.',
    form: 'Album identity and motion study',
    track: 'Low Tide Prayer'
  },
  'amber-static': {
    count: 'Album 03',
    title: 'Amber Static',
    description: 'Warm analogue noise becomes an archive of broken signals, glowing tape and fragments that return changed.',
    form: 'Cassette campaign and digital archive',
    track: 'Last Light'
  }
};

const albumCopy = document.querySelector('.album-copy');
const albumCount = document.querySelector('.album-count');
const albumTitle = document.getElementById('album-title');
const albumDescription = document.getElementById('album-description');
const albumForm = document.getElementById('album-form');
const albumTrack = document.getElementById('album-track');
const albumButtons = [...document.querySelectorAll('.album-disc')];
let albumSwapTimer;

albumButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const album = albums[button.dataset.album];
    albumButtons.forEach((disc) => {
      const active = disc === button;
      disc.classList.toggle('is-active', active);
      disc.setAttribute('aria-pressed', String(active));
    });

    albumCopy.classList.add('is-changing');
    window.clearTimeout(albumSwapTimer);
    albumSwapTimer = window.setTimeout(() => {
      albumCount.textContent = album.count;
      albumTitle.textContent = album.title;
      albumDescription.textContent = album.description;
      albumForm.textContent = album.form;
      albumTrack.textContent = album.track;
      albumCopy.classList.remove('is-changing');
    }, 120);
  });
});

document.querySelector('.gateway-disc')?.addEventListener('click', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('albums')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.addEventListener('visibilitychange', () => {
  const playState = document.hidden ? 'paused' : 'running';
  document.querySelector('.gateway-disc img')?.style.setProperty('animation-play-state', playState);
});
