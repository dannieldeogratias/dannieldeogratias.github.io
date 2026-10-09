document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && window.gsap && window.ScrollTrigger && window.Lenis) {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.from('.line b', { yPercent: 115, duration: 1.15, stagger: 0.12, ease: 'power4.out' });
  gsap.from('.hero-meta, .hero-intro, .scroll-cue', {
    opacity: 0, y: 20, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.35
  });
  gsap.from('.hero-window', {
    clipPath: 'inset(100% 0 0 0)', duration: 1.2, ease: 'power4.inOut', delay: 0.25
  });
  gsap.to('.ticker div', {
    xPercent: -40, ease: 'none',
    scrollTrigger: { trigger: '.ticker', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });

  document.querySelectorAll('.project').forEach((project) => {
    const image = project.querySelector('.project-stage img');
    gsap.fromTo(image, { scale: 1.12 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true }
    });
    gsap.from(project.querySelectorAll('.project-copy > *'), {
      opacity: 0, y: 50, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: project.querySelector('.project-copy'), start: 'top 75%', once: true }
    });
  });

  gsap.to('.progress', {
    width: '100%', ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.2 }
  });
  gsap.from('.practice-title h2', {
    xPercent: -15, opacity: 0, ease: 'power3.out',
    scrollTrigger: { trigger: '.practice', start: 'top 70%' }
  });
} else {
  document.documentElement.classList.add('reduced-motion');
}
