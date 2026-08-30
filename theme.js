(() => {
  const root = document.documentElement;
  const dark = document.getElementById('dark');
  const light = document.getElementById('light');
  if (!dark || !light) return;
  const lightStyle = `html[data-theme="light"] body{background:#f5f7fb;color:#111827}html[data-theme="light"] .nav{background:#f5f7fbee;border-bottom-color:#00000018}html[data-theme="light"] .links{color:#596273}html[data-theme="light"] .theme{background:#e7ebf2;border-color:#00000018}html[data-theme="light"] .theme button{color:#596273}html[data-theme="light"] .theme button.active{background:#fff;color:#111827;box-shadow:0 1px 4px #0002}html[data-theme="light"] .eyebrow,html[data-theme="light"] .btn,html[data-theme="light"] .social a{background:#fff;border-color:#d9dee8;color:#202633}html[data-theme="light"] .primary{color:#fff;border-color:transparent}html[data-theme="light"] .status,html[data-theme="light"] .stats,html[data-theme="light"] .core,html[data-theme="light"] .node{background:#fff;color:#202633}html[data-theme="light"] .core{box-shadow:0 0 70px #6379ff22}html[data-theme="light"] .node small{color:#5364d6}html[data-theme="light"] .card,html[data-theme="light"] .skillbox,html[data-theme="light"] .step{background:#fff;border-color:#dfe3eb}html[data-theme="light"] .tag{border-color:#d5dae4;color:#4b5563}html[data-theme="light"] .progress-track,html[data-theme="light"] .line{background:#e2e6ed}html[data-theme="light"] .line i{background:#555d6b}html[data-theme="light"] .footer{border-color:#dfe3eb;color:#687386}`;
  const style=document.createElement('style'); style.id='salarx-theme-style'; style.textContent=lightStyle; document.head.appendChild(style);
  function setTheme(theme){root.setAttribute('data-theme',theme);dark.classList.toggle('active',theme==='dark');light.classList.toggle('active',theme==='light');try{localStorage.setItem('salarx-theme',theme)}catch(e){}}
  dark.addEventListener('click',()=>setTheme('dark')); light.addEventListener('click',()=>setTheme('light'));
  let saved=null;try{saved=localStorage.getItem('salarx-theme')}catch(e){} setTheme(saved==='light'?'light':'dark');
})();
