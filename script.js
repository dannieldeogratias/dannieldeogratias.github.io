const root=document.documentElement;
const button=document.querySelector('.theme-toggle');
const saved=localStorage.getItem('portfolio-theme');
if(saved==='light'||saved==='dark')root.dataset.theme=saved;
button.addEventListener('click',()=>{const systemDark=matchMedia('(prefers-color-scheme: dark)').matches;const currentDark=root.dataset.theme?root.dataset.theme==='dark':systemDark;const next=currentDark?'light':'dark';root.dataset.theme=next;localStorage.setItem('portfolio-theme',next)});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const items=document.querySelectorAll('.reveal');
if(reduce||!('IntersectionObserver'in window)){items.forEach(item=>item.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.14});items.forEach(item=>observer.observe(item))}
document.getElementById('year').textContent=new Date().getFullYear();
